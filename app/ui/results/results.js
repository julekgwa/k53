import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../../components/button';
import { ResultItem } from '../../components/resultItem';
import {
  CONTROLS_PASSMARK,
  ROAD_SIGNS_PASSMARK,
  RULES_OF_THE_ROAD_PASSMARK,
  NUMBER_OF_CONTROLS_QUESTIONS,
  NUMBER_OF_ROAD_SIGNS_QUESTIONS,
  NUMBER_OF_RULES_OF_THE_ROAD_QUESTIONS,
} from '../../constants/constants';
import { Scene } from '../../core/scene';
import { Colors } from '../../styles/colors';

export const Results = ({ route, navigation }) => {
  const { results, type } = route.params;
  const rules = results.filter((question) => question.category === 'rules');
  const signs = results.filter((question) => question.category === 'signs');
  const controls = results.filter(
    (question) => question.category === 'controls'
  );
  const correctRulesAnswers = rules.filter(
    (question) => question.correct === question.answer
  );
  const correctSignsAnswers = signs.filter(
    (question) => question.correct === question.answer
  );
  const correctControlsAnswers = controls.filter(
    (question) => question.correct === question.answer
  );
  const marks = [
    {
      category: 'Rules of the road',
      total: `${correctRulesAnswers.length}/${NUMBER_OF_RULES_OF_THE_ROAD_QUESTIONS}`,
      passed: correctRulesAnswers >= RULES_OF_THE_ROAD_PASSMARK,
      type: 'all/rules',
    },
    {
      category: 'Road signs, signals and marking',
      total: `${correctSignsAnswers.length}/${NUMBER_OF_ROAD_SIGNS_QUESTIONS}`,
      passed: correctSignsAnswers >= ROAD_SIGNS_PASSMARK,
      type: 'all/signs',
    },
    {
      category: 'Controls of the vehicle',
      total: `${correctControlsAnswers.length}/${NUMBER_OF_CONTROLS_QUESTIONS}`,
      passed: correctControlsAnswers.length / NUMBER_OF_CONTROLS_QUESTIONS,
      type: 'all/controls',
    },
  ];

  const displayResults = marks.filter((mark) => mark.type.includes(type));

  return (
    <Scene style={styles.container}>
      {displayResults.map((item, i) => (
        <ResultItem
          key={i}
          category={item.category}
          passed={item.passed}
          total={item.total}
          style={i === displayResults.length - 1 ? styles.lastRow : {}}
        />
      ))}

      <Button
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        title='Home'
      />
    </Scene>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  lastRow: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  button: {
    backgroundColor: Colors.veryDarkBlue,
    marginTop: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
  },
});
