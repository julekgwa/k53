import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const Question = ({ title, question, onSelectAnswer, questionNumber, hasPhoto }) => (
  <View style={styles.container}>
    <View style={styles.questionContainer}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: 'https://juniusl.com/single_carriage.png' }}
        />
      </View>
      <Text style={styles.questionTitle}>{title}</Text>
    </View>
    {question.possibleAnswers.map((drink, answerIndex) => (
      <View key={answerIndex} style={styles.answersContainer}>
        <RadioButton
          value={drink.price}
          status={drink.isChecked}
          onPress={() => onSelectAnswer(questionNumber, answerIndex)}
        />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>{drink.label}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 18, 
    marginBottom: 20, 
    flex: 1, 
    flexWrap: 'wrap', 
    paddingHorizontal: 10
  },
  container: {
    justifyContent: 'space-between'
  },
  questionContainer: {
    flexDirection: 'row'
  },
  answersContainer: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    height: 55,
    elevation: 1,
    borderRadius: 4,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
  }
});
