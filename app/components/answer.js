import React from 'react';
import { View, Text } from 'react-native';

export const Answer = ({ title, index = 0 }) => {
  return (
    <View
      style={{
        backgroundColor: '#195bfa',
        padding: 10,
        borderLeftWidth: 3,
        borderLeftColor: 'white',
        marginBottom: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>{`${(index + 1 + 9)
        .toString(36)
        .toUpperCase()}. ${title}`}</Text>
    </View>
  );
};
