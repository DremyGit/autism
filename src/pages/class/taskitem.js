import React, { memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Counter from './counter';

const Container = styled(animated.div)`
  height: 176px;
  border-radius: 27px;
  margin-right: 17px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  user-select: none;
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
  const props = useSpring({
    width: active ? 274 : 193,
    backgroundColor: active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.07)'
  })

  return (
    <Container className={active ? 'active' : undefined} onClick={(e) => { e.stopPropagation(); onActive(id) }} style={props}>
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