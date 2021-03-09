import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 21px;
  padding: 0 20px 20px 20px;
  flex: 1;
`
const Row = styled.div`
  display: flex;
  line-height: 24px;
  margin-bottom: 10px;
`
const Label = styled.div`
  color: #555;
  font-size: 16px;
  width: 86px;
  font-weight: 600;
`
const Content = styled.div`
  font-size: 16px;
  color: #333;
`
const Record = styled.div`
  font-size: 14px;
  color: #888;
`

const Active = ({ target, activity, record }) => (
  <Container>
    <Row>
      <Label>教学目标</Label>
      <Content>{target}</Content>
    </Row>
    <Row>
      <Label>相关活动</Label>
      <Content>
        {activity}
        <Record>{record}</Record>
      </Content>
    </Row>
  </Container>
)

export default Active;