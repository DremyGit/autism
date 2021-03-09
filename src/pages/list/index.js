import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Page from '../../components/page';
import Tabbar from '../../components/tabbar';
import light from '../../themes/light';
import { formatDate } from '../../utils/date';
import Header from './header';
import Group from './group';
import Task from './task';
import Active from './active';

function getRecords(date) {
  try {
    return JSON.parse(localStorage.getItem(`records_${date}`));
  } catch (e) {
    return null
  }
}

const List = ({ taskModel }) => {
  const [activeDate, setActiveDate] = useState(() => formatDate())
  const [records, setRecords] = useState(() => getRecords(activeDate))
  useEffect(() => {
    setRecords(getRecords(activeDate))
  }, [activeDate])

  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTop = 0
    }
  }, [activeDate])

  return (
    <ThemeProvider theme={light}>
      <Page ref={pageRef}>
        <Header
          activeDate={activeDate}
          onDateChange={setActiveDate}
        />
        {taskModel.map(({ groupName, taskList }) => (
          <Group key={groupName} title={groupName}>
            {taskList.map((task) => (
              <Task
                {...task}
                key={task.id}
                showRate={!!records}
                records={records?.[task.id]}
              />
            ))}
          </Group>
        ))}
        <Group title="活动教学" hoz>
          <Active target="请求帮忙/拒绝" activity="1. 时钟拼接" record={records ? '记录：反应较慢，无法独立完成' : ''} />
          <Active target="呼名反应" activity="1. 他人姓名" record={records ? '记录：对熟悉的人有反应' : ''} />
        </Group>
        <Tabbar />
      </Page>
    </ThemeProvider>
  )
}

export default List;