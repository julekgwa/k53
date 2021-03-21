import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../styles/colors'

export const Button = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})
