import React from 'react';

const TestInput = (props) => (
  <form>
    <input
      type="text"
      placeholder="input"
      value={props.inputValue}
      onChange={props.onInputValueChange}
    />
  </form>
);

export default TestInput;