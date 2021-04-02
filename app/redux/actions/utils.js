import { fetchAPI } from '../../fetch/fetch';

const dispatcher = (dispatch, type, payload) => dispatch({
  type,
  payload,
});

function groupBy(list, keyGetter) {

  const map = new Map();

  if (!list || !Array.isArray(list) || typeof keyGetter !== 'function') {

    return map;
  }

  for (let i = 0; i < list.length; i++) {

    const key = keyGetter(list[i]);

    if (!map.has(key)) {

      map.set(key, [ list[i] ]);

      continue;
    }

    map.get(key).push(list[i]);

  }

  return map;
}

const formatQuestions = (rawQuestions) => {
  const groupedQuestions = Array.from(groupBy(rawQuestions, item => item.questionId).values());
  const questions = [];

  for (let index = 0; index < groupedQuestions.length; index++) {
    const questionList = groupedQuestions[index];
    const possibleAnswers = [];
    const question = questionList[0];

    for (let j = 0; j < questionList.length; j++) {
      const answer = questionList[j].answer;
      possibleAnswers.push(answer);
    }

    question.possibleAnswers = possibleAnswers;
    question.answer = -1;
    questions.push(question);
  }

  return questions;
}

export const fetchItem = (dispatch, requestOptions, isLoading, action) => {

  dispatcher(dispatch, action.loaderType, isLoading);

  return fetchAPI(requestOptions)
    .then(res => {

      dispatcher(dispatch, action.loaderType, !isLoading);

      dispatcher(dispatch, action.type, formatQuestions(res.result));

    })
    .catch(error => {

      dispatch(setError(action.error, {
        error: true,
        message: error.message,
      }));
      dispatcher(dispatch, action.loaderType, !isLoading);

    });

};