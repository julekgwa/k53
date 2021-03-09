import React from 'react';
import { Button, SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  onNextQuestion,
  onPreviousQuestion,
  onSelectAnswer,
  onSubmit,
} from '../redux/actions';
import { Question } from '../components/question';
import { Colors } from '../styles/colors';
import { Answer } from '../components/answer';

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
    onNextQuestion: () => dispatch(onNextQuestion()),
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
  onNextQuestion,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const answers = questions[currentQuestionIndex].possibleAnswers;

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            color: Colors.veryDarkGrayishBlue,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          {currentQuestion.title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.blue,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
      {answers.map((answer, index) => <Answer key={index} title={answer.label} index={index} />) }
      </View>
    </SafeAreaView>
  );
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainApp);
