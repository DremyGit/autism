import React from 'react';
import styled from 'styled-components';
import TaskItem from './taskitem';

const Container = styled.div`
  flex-direction: column;
  max-width: 100%;
`
const GroupTitle = styled.h2`
  font-weight: normal;
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 12px;
`
const TaskList = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
`

const TaskListContainer = styled.div`
  display: flex;
`

const TaskGroup = ({ groupName, taskList = [], records, onCorrect, onMistake, onActive, activeId }) => {
  return (
    <Container>
      <GroupTitle>{groupName}</GroupTitle>
      <TaskList>
        <TaskListContainer>
          {taskList.map((item) => (
            <TaskItem
              onCorrect={onCorrect}
              onMistake={onMistake}
              active={activeId === item.id}
              onActive={onActive}
              key={item.id}
              correct={records.present[item.id]?.filter(correct => correct)?.length ?? 0}
              mistake={records.present[item.id]?.filter(correct => !correct)?.length ?? 0}
              {...item}
            />
          ))}
        </TaskListContainer>
      </TaskList>
    </Container>
  )
}

export default TaskGroup;
