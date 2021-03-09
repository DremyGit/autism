import React from 'react';
import styled from 'styled-components';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';

const Container = styled.div`
  position: fixed;
  top: 38px;
  right: 38px;
  width: 120px;
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
`
const Icon = styled.img`
  width: 32px;
  height: 32px;
  opacity: ${({ disabled }) => disabled ? 0.11 : 0.46};
`
const Placeholder = styled.div`
  height: 30px;
`

const Toolbar = ({ onUndo, canUndo, onRedo, canRedo }) => (
  <>
    <Placeholder />
    <Container>
      <Icon src={icon1} />
      <Icon src={icon2} disabled={!canUndo} onClick={canUndo ? onUndo : undefined} />
      <Icon src={icon3} disabled={!canRedo} onClick={canRedo ? onRedo : undefined} />
    </Container>
  </>
)

export default Toolbar;