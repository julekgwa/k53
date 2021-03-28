import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from '../core/text'
import { Colors } from '../styles/colors'

export const Button = ({ title, style, onPress, buttonTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
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
