import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import correctPng from '../../images/correct.png';
import correctSound from '../../sounds/correct.mp3';
import mistakePng from '../../images/mistake.png';
import mistakeSound from '../../sounds/mistake.mp3';

const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(20, 38, 60, 0.84);
`
const Apng = styled.img`
  width: 900px;
  max-width: 100%;
`

const Result = ({ isCorrect, onEnded }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, [])
  const sound = isCorrect ? correctSound : mistakeSound;
  const png = isCorrect ? correctPng : mistakePng;
  return (
    <Mask>
      <audio src={sound} ref={audioRef} onEnded={onEnded} />
      <Apng src={png} />
    </Mask>
  )
}

export function showResult(isCorrect) {
  const node = document.createElement('div');
  document.body.appendChild(node)
  function remove() {
    document.body.removeChild(node)
  }
  ReactDOM.render(<Result isCorrect={isCorrect} onEnded={remove} />, node)
}
