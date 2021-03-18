import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';

export const Answer = ({
  title,
  onSelectAnswer,
  answerIndex,
  questionNumber,
  index = 0,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, answerIndex === index ? styles.selected : null ]}
      onPress={() => onSelectAnswer(questionNumber, index)}
    >
      <Text style={[styles.answer, answerIndex === index ? styles.selectedText: null ]}>{`${(index + 1 + 9)
        .toString(36)
        .toUpperCase()}. ${title}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.vividBlue,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: Colors.white,
    marginBottom: 10,
    justifyContent: 'center',
  },
  answer: {
    color: Colors.white,
    fontSize: 18,
  },
  selected: {
    backgroundColor: Colors.white,
    borderLeftWidth: 3,
    borderLeftColor: Colors.red,
  },
  selectedText: {
    color: Colors.vividBlue,
  },
});
