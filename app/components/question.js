import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const Question = ({ title, question, onSelectAnswer, questionNumber, hasPhoto }) => (
  <View style={{ justifyContent: 'space-between' }}>
    <View style={{ flexDirection: 'row' }}>
    <View style={{ backgroundColor: 'blue', width: 150, height: 150}}>
      <Text>1</Text>
    </View>
    <Text style={{ fontSize: 18, marginBottom: 20, flex: 1, flexWrap: 'wrap', paddingHorizontal: 10 }}>{title}</Text>
    </View>
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
