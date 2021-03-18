import React from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import {
  onNextQuestion,
  onPreviousQuestion,
  onSelectAnswer,
  onSubmit,
} from '../redux/actions';
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

const K53Questions = ({
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
  const answerIndex = questions[currentQuestionIndex].answer;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Progress.Bar
          style={styles.progressBar}
          borderWidth={0}
          progress={(currentQuestionIndex + 1) / questions.length}
          width={null}
          borderRadius={0}
        />
      </View>
      <View style={styles.questionTitleContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://juniusl.com/single_carriage.png' }}
          />
        </View>
        <Text style={styles.questionTitle}>{currentQuestion.title}</Text>
      </View>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            answerIndex={answerIndex}
            questionNumber={currentQuestionIndex}
            onSelectAnswer={selectAnswer}
            title={answer.label}
            index={index}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export const Questions = connect(mapStateToProps, mapDispatchToProps)(K53Questions);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  questionTitle: {
    fontSize: 25,
    color: Colors.veryDarkGrayishBlue,
    marginTop: 10,
  },
  questionTitleContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  answersContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  progressBar: {
    borderBottomColor: Colors.lightGrayishBlue,
    borderBottomWidth: 1,
  },
  progressContainer: {
    paddingHorizontal: 30,
  },
});
