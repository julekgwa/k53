import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Results = ({ route }) => {
  const { results } = route.params;
  return (
    <View>
      <Text>{results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
