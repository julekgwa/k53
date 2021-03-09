import React from 'react';
import { Button, SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { onNextQuestion, onPreviousQuestion, onSelectAnswer, onSubmit } from '../redux/actions';
import { Question } from '../components/question';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    showScore: state.showScore,
    totalScore: state.totalScore,
    currentQuestionIndex: state.currentQuestionIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: (questionNumber, answerIndex) =>
      dispatch(onSelectAnswer({ answerIndex, questionNumber })),
    submitScore: () => dispatch(onSubmit()),
    onPreviousQuestion: () => dispatch(onPreviousQuestion()),
    onNextQuestion: () => dispatch(onNextQuestion())
  };
};

const MainApp = ({
  questions,
  currentQuestionIndex,
  selectAnswer,
  showScore,
  submitScore,
  totalScore,
  onPreviousQuestion,
  onNextQuestion
}) => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Question
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex}
          title={questions[currentQuestionIndex].title}
          onSelectAnswer={selectAnswer}
        />
      </View>
      {showScore && <Text>You got {totalScore} correct answer/s</Text>}
      <View style={{  flexDirection: 'row'}}>
        <Button title='Back' onPress={onPreviousQuestion} />
        <Button title='Next' onPress={onNextQuestion} />
        <Button title='Submit' onPress={submitScore} />
      </View>
    </SafeAreaView>
  );
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainApp);
