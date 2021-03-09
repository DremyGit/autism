import React, { useMemo } from 'react';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';

const Container = styled.div`
  box-sizing: border-box;
  height: 136px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  justify-content: space-around;
`
const Title = styled.div`
  font-size: 20px;
  color: #000;
`
const Scroller = styled.div`
  width: 100%;
  overflow-x: scroll;
`
const ScrollerContent = styled.div`
  display: flex;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  flex-shrink: 0;
  align-items: center;
`
const ItemText = styled.div`
  color: #333;
  font-size: 16px;
  ${Item}.active & {
    font-weight: 600;
  }
`
const ActiveBar = styled.div`
  margin-top: 6px;
  width: 22px;
  height: 4px;
  border-radius: 2px;
  background-color: #A7E744;
  visibility: hidden;
  ${Item}.active & {
    visibility: visible;
  }
`
const Placeholder = styled.div`
  height: 136px;
`

const Header = ({ activeDate, onDateChange }) => {
  const dateList = useMemo(() => Array.from(Array(30)).map((_, index) => formatDate(new Date(new Date() - index * 864e5), '/')), [])
  return (
    <>
      <Container>
        <Title>任务列表</Title>
        <Scroller>
          <ScrollerContent>
            {dateList.map((date, index) => (
              <Item
                key={date}
                className={activeDate === date ? 'active' : ''}
                onClick={() => onDateChange(date)}
              >
                <ItemText>{index === 0 ? '今天' : date}</ItemText>
                <ActiveBar />
              </Item>
            ))}
          </ScrollerContent>
        </Scroller>
      </Container>
      <Placeholder />
    </> 
  )
}

export default Header;