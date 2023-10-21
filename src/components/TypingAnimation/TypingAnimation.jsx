import React from 'react';
import Typist from 'react-typist';
import './TypingAnimation.scss';

function TypingAnimation({ text, onTypingDone }) {
  return (
    <Typist onTypingDone={onTypingDone}>
      <span>{text}</span>
    </Typist>
  );
}

export default React.memo(TypingAnimation);
