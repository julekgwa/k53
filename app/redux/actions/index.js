import { ON_NEXT_QUESTION, START_TIMER, ON_PREVIOUS_QUESTION, UPDATE_TIMER, ON_SELECT_ANSWER, ON_SUBMIT } from '../constants'

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

