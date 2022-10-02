import { CHANGE_AMOUNT, CHANGE_SCORE, ADD_NEW_WORD } from './actionsTypes';

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload
});

export const handleAddNewWordChange = (payload) => ({
  type: ADD_NEW_WORD,
  payload
});
