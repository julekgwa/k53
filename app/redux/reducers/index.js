import {
  ON_SELECT_ANSWER,
  ON_SUBMIT,
  UPDATE_TIMER,
  ON_NEXT_QUESTION,
  ON_PREVIOUS_QUESTION,
} from 'app/redux/constants';
import { START_TIMER } from '../constants';
import { formatSecondsToHour } from '../utils/utils';

const initState = {
  timer: '',
  timeLeft: '',
  hasStarted: false,
  questions: [
    {
      title: 'The most important RULE OF THE ROAD in South Africa is?',
      possibleAnswers: [
        {
          label:
            'Always be courteous and considerate towards fellow road users.',
          isChecked: 'unchecked',
        },
        {
          label: 'Do not exceed the speed limit.',
          isChecked: 'unchecked',
        },
        {
          label: 'Keep to the left side of the road far as is safe.',
          isChecked: 'unchecked',
        },
      ],
      correct: 2,
      answer: -1,
      category: 'rules',
    },
    {
      title: 'A light/heavy vehicle should not carry a load that projects...',
      possibleAnswers: [
        {
          label: 'More than 10 metres to the front of the vehicle.',
          isChecked: 'unchecked',
        },
        {
          label: 'More than 1.8 metres to the back of the vehicle.',
          isChecked: 'unchecked',
        },
        {
          label: 'Less than 1.8 millimetres to the left.',
          isChecked: 'unchecked',
        },
      ],
      correct: 1,
      answer: -1,
      category: 'rules',
    },
    {
      title: 'A light/heavy vehicle should not carry a load that projects...',
      possibleAnswers: [
        {
          label: 'More than 10 metres to the front of the vehicle.',
          isChecked: 'unchecked',
        },
        {
          label: 'More than 1.8 metres to the back of the vehicle.',
          isChecked: 'unchecked',
        },
        {
          label: 'Less than 1.8 millimetres to the left.',
          isChecked: 'unchecked',
        },
      ],
      correct: 1,
      answer: -1,
      category: 'rules',
    },
  ],
  showScore: false,
  totalScore: 0,
  currentQuestionIndex: 0,
};

export function rootReducer(state = initState, action) {
  switch (action.type) {
    case ON_SELECT_ANSWER:
      const tempQuestions = [...state.questions];
      const questionNumber = action.payload.questionNumber;
      const answerIndex = action.payload.answerIndex;
      const next = state.currentQuestionIndex + 1;

      for (
        let i = 0;
        i < tempQuestions[questionNumber].possibleAnswers.length;
        i++
      ) {
        tempQuestions[questionNumber].possibleAnswers[i].isChecked =
          'unchecked';
      }
      tempQuestions[questionNumber].answer = answerIndex;
      tempQuestions[questionNumber].possibleAnswers[answerIndex].isChecked =
        'checked';
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
    default:
      return state;
  }
}
