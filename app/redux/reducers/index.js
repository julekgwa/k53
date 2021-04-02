import {
  ON_SELECT_ANSWER,
  ON_SUBMIT,
  UPDATE_TIMER,
  ON_NEXT_QUESTION,
  ON_PREVIOUS_QUESTION,
} from 'app/redux/constants';
import { ERROR, GET_QUESTIONS, SET_LOADER, START_TIMER } from '../constants';
import { formatSecondsToHour } from '../utils/utils';

const initState = {
  timer: '',
  timeLeft: '',
  hasStarted: false,
  questions: [],
  showScore: false,
  totalScore: 0,
  currentQuestionIndex: 0,
  isLoading: true,
  isError: false,
  message: ''
};

export function rootReducer(state = initState, action) {
  switch (action.type) {
    case ON_SELECT_ANSWER:
      const tempQuestions = [...state.questions];
      const questionNumber = action.payload.questionNumber;
      const answerIndex = action.payload.answerIndex;
      const next = state.currentQuestionIndex + 1;

      tempQuestions[questionNumber].answer = answerIndex;

      return {
        ...state,
        questions: tempQuestions,
        showScore: false,
        currentQuestionIndex:
          next >= tempQuestions.length ? tempQuestions.length - 1 : next,
      };
    case ON_SUBMIT:
      const correct = state.questions.filter(
        (question) => question.correct === question.answer
      );
      return {
        ...state,
        showScore: true,
        totalScore: correct.length,
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timeLeft: formatSecondsToHour(state.timer),
      };
    case ON_PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex > 0 ? state.currentQuestionIndex - 1 : 0,
      };
    case ON_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex < state.questions.length - 1
            ? state.currentQuestionIndex + 1
            : state.currentQuestionIndex,
      };
    case START_TIMER:
      const s = new Date();

      s.setHours(s.getHours() + 1);
      s.setSeconds(0);
      return {
        ...state,
        timer: s,
        timeLeft: formatSecondsToHour(s),
        hasStarted: true,
      };
    case GET_QUESTIONS:
    return {
      ...state,
      questions: action.payload
    }

    case ERROR:
    return {
      ...state,
      isError: action.payload.error,
      message: action.payload.message,
    };

    case SET_LOADER:
    return {
      ...state,
      isLoading: action.payload,
    };
    default:
      return state;
  }
}
