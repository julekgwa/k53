import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const Question = ({ title, question, onSelectAnswer, questionNumber }) => (
  <View style={{ justifyContent: 'space-between' }}>
    <Text style={{ fontSize: 18, marginBottom: 20 }}>{title}</Text>
    {question.possibleAnswers.map((drink, answerIndex) => (
      <View key={answerIndex} style={styles.drinkCard}>
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
  drinkCard: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    height: 55,
    elevation: 1,
    borderRadius: 4,
  },
});
