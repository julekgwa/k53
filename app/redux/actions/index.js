import { ON_NEXT_QUESTION, START_TIMER, ON_PREVIOUS_QUESTION, UPDATE_TIMER, ON_SELECT_ANSWER, ON_SUBMIT, REQUEST_METHOD, GET_QUESTIONS, SET_LOADER, ERROR } from '../constants'
import { fetchItem } from './utils';

const GET_QUESTIONS_URL = 'https://www.juniusl.com/v1/questions';

export const onSelectAnswer = (payload) => {
  return {
    type: ON_SELECT_ANSWER,
    payload
  }
}

export const onSubmit = () => {
  return {
    type: ON_SUBMIT
  }
}

export const onPreviousQuestion = () => {
  return {
    type: ON_PREVIOUS_QUESTION
  }
}

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER,
  }
}

export const onNextQuestion = () => {
  return {
    type: ON_NEXT_QUESTION
  }
}

export const startTimer = () => {
  return {
    type: START_TIMER,
  }
}

export function getQuestions() {

  return dispatch => {

    const requestOptions = {
      url: GET_QUESTIONS_URL,
      method: REQUEST_METHOD.get,
    };

    const action = {
      type: GET_QUESTIONS,
      loaderType: SET_LOADER,
      error: ERROR,
    };

    return fetchItem(dispatch, requestOptions, true, action);

  };

}

