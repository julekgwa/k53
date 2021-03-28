import React, { useEffect, useState } from 'react';
import {
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
  startTimer,
  updateTimer,
} from '../../redux/actions';
import { Colors } from '../../styles/colors';
import { Answer } from '../../components/answer';
import { formatSecondsToHour } from '../../redux/utils/utils';

import { Button } from '../../components/button';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    showScore: state.showScore,
    totalScore: state.totalScore,
    currentQuestionIndex: state.currentQuestionIndex,
    timer: state.timer,
    timeLeft: state.timeLeft,
    hasStarted: state.hasStarted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: (questionNumber, answerIndex) =>
      dispatch(onSelectAnswer({ answerIndex, questionNumber })),
    submitScore: () => dispatch(onSubmit()),
    onPreviousQuestion: () => dispatch(onPreviousQuestion()),
    onNextQuestion: () => dispatch(onNextQuestion()),
    updateTime: () => dispatch(updateTimer()),
    startTime: () => dispatch(startTimer()),
  };
};

const K53Questions = ({
  questions,
  currentQuestionIndex,
  selectAnswer,
  timer,
  startTime,
  hasStarted,
  onPreviousQuestion,
  onNextQuestion,
  navigation,
  route
}) => {
  const [timeLeft, setTimeLeft] = useState('00:00');
  const currentQuestion = questions[currentQuestionIndex];
  const answers = questions[currentQuestionIndex].possibleAnswers;
  const answerIndex = questions[currentQuestionIndex].answer;
  const { type } = route.params;

  useEffect(() => {
    const time = setInterval(() => {
      if (hasStarted) {
        setTimeLeft(formatSecondsToHour(timer));
      }
    }, 1000);
    return () => clearInterval(time);
  });

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
        <Text onPress={() => startTime()} style={styles.questionTitle}>
          {currentQuestion.title}
        </Text>
      </View>
      <View style={styles.answersContainer}>
        <Text style={styles.timer}>{timeLeft}</Text>
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
        <View style={styles.buttonContainer}>
          <Button onPress={onPreviousQuestion} style={[styles.buttons, styles.prevButton]} title='prev' />
          <Button onPress={() => navigation.navigate('Results', { results: questions, type })} style={styles.submitButton} title='Submit' />
          <Button onPress={onNextQuestion} style={[styles.buttons, styles.nextButton]} title='next' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(K53Questions);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexGrow: 2,
  },
  questionTitle: {
    fontSize: 25,
    color: Colors.veryDarkGrayishBlue,
    marginTop: 10,
  },
  questionTitleContainer: {
    flexGrow: 2,
    paddingHorizontal: 30,
  },
  answersContainer: {
    flexGrow: 1,
    backgroundColor: Colors.darkBlue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  timer: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  submitButton: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 90 / 2,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.darkBlue,
    zIndex: 1,
  },
  buttons: {
    backgroundColor: Colors.white,
    height: 50,
    width: 100,
  },
  prevButton: {
    marginRight: -10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  nextButton: {
    marginLeft: -10,
    zIndex: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});
