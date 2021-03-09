import React, { memo } from 'react';
import styled from 'styled-components';
import Counter from './counter';

const Container = styled.div`
  /* width: ${({ active }) => active ? '274px' : '193px'}; */
  width: 193px;
  height: 176px;
  border-radius: 27px;
  /* background-color: ${({ active }) => active ? '#fff' : 'rgba(255, 255, 255, 0.07)'}; */
  background-color: rgba(255, 255, 255, 0.07);
  margin-right: 17px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  user-select: none;

  &.active {
    width: 274px;
    background-color: #fff;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;

  ${Container}.active & {
    flex-direction: row;
    align-items:flex-end;
  }
`
const Title = styled.h3`
  font-size: 24px;
  color: #fff;
  margin-top: 0;
  margin-right: 4px;
  margin-bottom: 14px;
  white-space: nowrap;

  ${Container}.active & {
    color: #333;
    margin-bottom: 0;
    position: relative;
    top: 2px;
  }
`
const Desc = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${Container}.active & {
    color: rgba(0, 0, 0, .7);
    margin-left: 8px;
    margin-bottom: 0;
  }
`

const TaskItem = ({ id, active, taskName, taskMode, taskDesc, correct, mistake, onActive, onCorrect, onMistake }) => {
  return (
    <Container className={active ? 'active' : undefined} onClick={(e) => { e.stopPropagation(); onActive(id) }}>
      <Header>
        <Title>{taskName}</Title>
        <Desc>{taskMode || '-'}</Desc>
        <Desc>{taskDesc || '-'}</Desc>
      </Header>
      <Counter active={active} correct={correct} onCorrect={() => onCorrect(id)} mistake={mistake} onMistake={() => onMistake(id)} />
    </Container>
  )
}

export default memo(TaskItem);