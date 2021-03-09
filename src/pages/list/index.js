import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Page from '../../components/page';
import Tabbar from '../../components/tabbar';
import light from '../../themes/light';
import { formatDate } from '../../utils/date';
import Header from './header';
import Group from './group';
import Task from './task';

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
    console.log(pageRef.current);
  }, [activeDate])
  console.log({ records })
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
        <Group title="沟通能力">
          
        </Group>
        <Tabbar />
      </Page>
    </ThemeProvider>
  )
}

export default List;