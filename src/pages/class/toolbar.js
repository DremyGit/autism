import React from 'react';
import styled from 'styled-components';
import undo from '../../images/undo.png';
import redo from '../../images/redo.png';

const Container = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;
  width: 100px;
  display: flex;
  justify-content: space-between;
`
const Icon = styled.img`
  width: 31px;
  height: 24px;
  padding: 8px 4px;
  opacity: ${({ disabled }) => disabled ? 0.15 : 0.6};
`
const Placeholder = styled.div`
  height: 30px;
`

const Toolbar = ({ onUndo, canUndo, onRedo, canRedo }) => (
  <>
    <Placeholder />
    <Container>
      <Icon src={undo} disabled={!canUndo} onClick={canUndo ? onUndo : undefined} />
      <Icon src={redo} disabled={!canRedo} onClick={canRedo ? onRedo : undefined} />
    </Container>
  </>
)

export default Toolbar;