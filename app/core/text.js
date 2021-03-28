import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

export const Text = ({ children, style, ...props}) => {
  return (
    <RNText {...props} style={[styles.text, style]}>{children}</RNText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  }
})
