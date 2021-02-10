import { ON_PREVIOUS_QUESTION, ON_SELECT_ANSWER, ON_SUBMIT } from '../constants'

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

