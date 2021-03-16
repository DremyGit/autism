import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const BarContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`
const NumberLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const Number = styled.div`
  font-size: 12px;
  font-weight: bold;
`
const CorrectNumber = styled(Number)`
  color: #A9F339;
`
const MistakeNumber = styled(Number)`
  color: #FE5028;
`
const CounterBar = styled.div`
  width: 100%;
  height: 9px;
  border-radius: 4.5px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
`
const CorrectBar = styled.div`
  height: 9px;
  background: linear-gradient(to right, #C9F339, #A9F339);
  border-radius: ${({ finished }) => finished ? '4.5px 0 0 4.5px' : '4.5px'};
  width: ${({ correct = 0 }) => correct * 10 + '%'};
`
const MistakeBar = styled.div`
  height: 9px;
  background: linear-gradient(to right, #FD987D, #FE4A21);
  border-radius: ${({ finished }) => finished ? ' 0 4.5px 4.5px 0' : '4.5px'};
  width: ${({ mistake = 0 }) => mistake * 10 + '%'};
`
const BarCounter = ({ active, correct, mistake, onCorrect, onMistake }) => {
  const finished = correct + mistake >= 10 && correct && mistake;
  return (
    <BarContainer>
      <NumberLine>
        <CorrectNumber>{correct || null}</CorrectNumber>
        <MistakeNumber>{mistake || null}</MistakeNumber>
      </NumberLine>
      <CounterBar>
        <CorrectBar correct={correct} finished={finished} />
        <MistakeBar mistake={mistake} finished={finished} />
      </CounterBar>
    </BarContainer>
  )
}

const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`
const Button = styled.div`
  width: 105px;
  height: 86px;
  border-radius: 21px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`
const CorrectButton = styled(Button)`
  background-color: #A7E744;
`
const MistakeButton = styled(Button)`
  background-color: #F97B5A;
`
const ButtonTitle = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
`

const ButtonCounter = ({ correct, mistake, onCorrect, onMistake }) => {
  return (
    <ButtonContainer>
      <CorrectButton onClick={onCorrect}>
        <ButtonTitle>正确</ButtonTitle>
        <ScrollerCount value={correct} />
      </CorrectButton>
      <MistakeButton onClick={onMistake}>
        <ButtonTitle>错误</ButtonTitle>
        <ScrollerCount value={mistake} />
      </MistakeButton>
    </ButtonContainer>
  )
}

const CountContainer = styled.div`
  position: relative;
  height: 20px;
  width: 40px;
`

const CountValue = styled(animated.div)`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  width: 40px;
  text-align: center;
`

const ScrollerCount = ({ value }) => {
  const items =
    value % 3 === 0
      ? [value, value + 1, value - 1]
      : value % 3 === 1
        ? [value - 1, value, value + 1]
        : [value + 1, value - 1, value];
  const transitions = useTransition(value % 3, index => items[index], {
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-14px,0)' },
  })
  return (
    <CountContainer>
      {transitions.map(({ item: index, props, key }) => (
        <CountValue key={key} style={props}>{items[index]}</CountValue>
      ))}
    </CountContainer>
  )
}

const Counter = ({ active, ...props }) => {
  return active ? <ButtonCounter {...props} /> : <BarCounter {...props} />
}

export default Counter;
