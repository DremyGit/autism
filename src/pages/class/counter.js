import React from 'react';
import styled from 'styled-components';

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
const ButtonValue = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const Counter = ({ active, correct, mistake, onCorrect, onMistake }) => {
  const finished = correct + mistake >= 10 && correct && mistake;
  if (!active) {
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
  return (
    <ButtonContainer>
      <CorrectButton onClick={onCorrect}>
        <ButtonTitle>正确</ButtonTitle>
        <ButtonValue>{correct}</ButtonValue>
      </CorrectButton>
      <MistakeButton onClick={onMistake}>
        <ButtonTitle>错误</ButtonTitle>
        <ButtonValue>{mistake}</ButtonValue>
      </MistakeButton>
    </ButtonContainer>
  )
}

export default Counter;
