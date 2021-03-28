import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../styles/colors'

export const Scene = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }
})
