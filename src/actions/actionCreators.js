import { ON_INPUT_CHANGE } from './actions';

export const setInputValue = (inputValue) => ({
    type: ON_INPUT_CHANGE,
    payload: inputValue
  }
);