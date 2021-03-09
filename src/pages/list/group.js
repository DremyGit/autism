import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 12px 32px;
  padding: 18px 26px;
  border-radius: 21px;
  background-color: #fff;
  display: flex;
  align-items: flex-start;

  @media (max-width: 549px) {
    margin: 12px;
    padding: 18px;
    flex-direction: column;
  }

`
const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  color: #000;
  width: 90px;
  font-weight: normal;
  @media (max-width: 549px) {
    margin-bottom: 20px;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 549px) {
    width: 100%;
  }
`

const Group = ({ title, children }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Content>
      {children}
    </Content>
  </Container>
)

export default Group;
