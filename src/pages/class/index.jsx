import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Page from '../../components/page';
import Tabbar from '../../components/tabbar';
import Toolbar from './toolbar';
import TaskGroup from './taskgroup';
import { showResult } from './result';
import dark from '../../themes/dark';
import { formatDate } from '../../utils/date';

const TaskGroupList = styled.div`
  padding-left: 32px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case 'correct':
      if (state.present[payload.id]?.length >= 10) {
        return state;
      }
      return {
        past: state.past.concat(state.present),
        present: {
          ...state.present,
          [payload.id]: state.present[payload.id]?.concat(true) ?? [true],
        },
        feature: []
      };
      case 'mistake':
        if (state.present[payload.id]?.length >= 10) {
          return state;
        }
        return {
          past: state.past.concat(state.present),
          present: {
            ...state.present,
            [payload.id]: state.present[payload.id]?.concat(false) ?? [false],
          },
          feature: []
        };
      case 'undo':
        return {
          past: state.past.slice(0, -1),
          present: state.past[state.past.length - 1],
          feature: [state.present, ...state.feature]
        }
      case 'redo':
        return {
          past: state.past.concat(state.present),
          present: state.feature[0],
          feature: state.feature.slice(1)
        }

    default:
      return state;
  }
}

function initRecordState(getRecord) {
  let present = {}
  try {
    present = JSON.parse(getRecord() || '{}')
  } catch (err) {}
  return {
    past: [],
    present,
    feature: []
  }
}

function callNative(handlerName, data) {
  return new Promise((resolve, reject) => {
    if (window.WebViewJavascriptBridge) {
      window.WebViewJavascriptBridge.callHandler(handlerName, data, resolve)
    } else {
      reject(new Error('JavascriptBridge not found'))
    }
  })
}

function Class({ taskModel }) {
  const [activeId, setActiveId] = useState(null);
  const activeIdRef = useRef(null);

  const [date] = useState(() => formatDate())
  const [records, dispatch] = useReducer(reducer, () => localStorage.getItem(`records_${date}`), initRecordState)
  useEffect(() => {
    if (activeIdRef.current) {
      localStorage.setItem(`records_${date}`, JSON.stringify(records.present))
    }
  }, [date, records.present])

  function handlePress(data, callback) {
    const activeId = activeIdRef.current;
    callback({ success: true })
    if (!activeId) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (error) {
      console.error(error)
      data = {}
    }
    if (typeof data.correct === 'boolean') {
      if (data.correct) {
        handleCorrect(activeId, true)
      } else {
        handleMistake(activeId, true)
      }
    }
  }
  useEffect(() => {
    if (window.WebViewJavascriptBridge) {
      window.WebViewJavascriptBridge.registerHandler('press', handlePress);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const groupListRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      console.log(e);
    }
    const groupList = groupListRef.current;
    groupList.addEventListener('click', handleClick, true);
    return () => {
      groupList.removeEventListener('click', handleClick, true);
    }
  }, [])

  function handleActive(id) {
    if (!activeIdRef.current) {
      callNative('turnOn')
        .catch(() => {});
    }
    activeIdRef.current = id;
    setActiveId(id)
  }
  // function handleInactive() {
  //   if (activeIdRef.current) {
  //     callNative('turnOff')
  //       .catch(() => {});
  //   }
  //   activeIdRef.current = null;
  //   setActiveId(null)
  // }

  function handleCorrect(id, isExternal) {
    if (isExternal) {
      showResult(true)
    }
    dispatch({ type: 'correct', payload: { id } })
  }
  function handleMistake(id, isExternal) {
    if (isExternal) {
      showResult(false);
    }
    dispatch({ type: 'mistake', payload: { id } })
  }
  function handleUndo(id) {
    dispatch({ type: 'undo' })
  }
  function handleRedo(id) {
    dispatch({ type: 'redo' })
  }
  return (
    <ThemeProvider theme={dark}>
      <Page>
        <Toolbar
          onUndo={handleUndo} canUndo={records.past.length > 0}
          onRedo={handleRedo} canRedo={records.feature.length > 0}
        />
        <TaskGroupList ref={groupListRef}>
          {taskModel.map(({ groupName, taskList }, index) => (
            <TaskGroup
              groupName={groupName}
              taskList={taskList}
              records={records}
              onCorrect={handleCorrect}
              onMistake={handleMistake}
              onActive={handleActive}
              activeId={activeId}
              key={index}
            />
          ))}
        </TaskGroupList>
        <Tabbar />
      </Page>
    </ThemeProvider>
  );
}

export default Class;
