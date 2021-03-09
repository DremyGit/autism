import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  line-height: 24px;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }

  @media(max-width: 799px) {
    align-items: flex-start;
    flex-direction: column;
  }
`
const Info = styled.div`
  display: flex;
  white-space: nowrap;
  max-width: 100%;
`
const ID = styled.div`
  text-align: right;
  width: 50px;
  font-size: 16px;
  color: #888;
  flex-shrink: 0;
`
const Rate = styled.div`
  text-align: right;
  width: 50px;
  font-size: 16px;
  color: ${({ rate }) => rate > 0.6 ? '#71C704' : '#FE7B18'};
  flex-shrink: 0;
`
const Title = styled.h3`
  margin: 0 0 0 16px;
  font-size: 16px;
  color: #333;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Mode = styled.div`
  font-size: 14px;
  color: #888;
`
const Records = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 548px);
  box-sizing: border-box;
  @media (max-width: 799px) {
    width: 100%;
    padding-left: 65px;
  }
`
const Record = styled.div`
  font-size: 20px;
  color: #333;
  width: 16px;
  text-align: center;
`

const Task = ({ id, taskName, taskMode, taskDesc, showRate, records = [] }) => {
  const rate = records.filter(r => r).length / (records.length || 1);
  return (
    <Container>
      <Info>
        {showRate ? (
          <Rate rate={rate}>{(rate * 100).toFixed(0)}%</Rate>
        ) : (
          <ID>{id}</ID>
        )}
        <Title>
          {taskName}
          {taskDesc ? `（${taskDesc.replace(/（|）/g, '')}）` : ''}
        </Title>
        <Mode>{taskMode}</Mode>
      </Info>
      <Records>
        {records.map((r, index) => (
          <Record key={index}>{r ? '+' : '-'}</Record>
        ))}
        {Array.from(Array(10 - records.length))
          .map((_, index) => (
            <Record key={`placeholder-${index}`} />
          ))
        }
      </Records>
    </Container>
  )
}

export default Task;