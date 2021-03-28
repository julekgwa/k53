import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { Button } from '../../components/button';
import { Colors } from '../../styles/colors';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
        indicator={ProgressBar}
          style={styles.image}
          source={{ uri: 'https://juniusl.com/logo.png' }}
          resizeMode='contain'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Take test' onPress={() => navigation.navigate('ConfirmTest')} style={styles.button} />
        <Button title='Learn' style={styles.button} />
        <Button title='How to' style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  image: {
    width: 400,
    height: 400,
  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.darkBlue,
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
});
