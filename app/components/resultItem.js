import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../styles/colors'
import { Text } from '../core/text';

export const ResultItem = ({ category, total, passed, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.category}>
        <Text style={styles.textSize}>{category}</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.textSize}>{total}</Text>
      </View>
      <View style={styles.passed}>
        <AntDesign
          name={`${passed ? 'check' : 'close'}`}
          size={24}
          style={[styles.textSize, passed ? styles.pass : styles.fail]}
          color='black'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: Colors.black,
    borderTopWidth: 1,
    borderTopColor: Colors.black,
    borderRightWidth: 1,
    borderRightColor: Colors.black,
  },
  category: {
    flex: 2,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  total: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.black,
  },
  passed: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.black,
  },
  textSize: {
    fontSize: 18
  },
  fail: {
    color: Colors.red
  },
  pass: {
    color: Colors.green
  }
});
