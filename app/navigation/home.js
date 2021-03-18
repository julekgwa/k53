import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors } from '../styles/colors';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
            style={styles.image}
            source={{ uri: 'https://juniusl.com/logo.jpg' }}
          />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Test</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>How to</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  image: {
    width: 400,
    height: 400
  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: Colors.vividBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 50,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.white,
    width: 300,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.vividBlue,
    fontSize: 18,
    textAlign: 'center'
  }
});
