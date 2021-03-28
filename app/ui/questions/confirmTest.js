import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../components/button';
import { Scene } from '../../core/scene';
import { Colors } from '../../styles/colors';

export const ConfirmTest = ({ navigation }) => {
  return (
    <Scene style={styles.container}>
      <Button
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={() => navigation.navigate('Questions', { type: 'all' })}
        title='Learners Test'
      />
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
      </View>
      <Button
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={() => navigation.navigate('Questions', { type: 'rules' })}
        title='Rules of the road Test'
      />
      <Button
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={() => navigation.navigate('Questions', { type: 'signs' })}
        title='Road signs, signals and marking Test'
      />
      <Button
        style={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={() => navigation.navigate('Questions', { type: 'controls' })}
        title='Controls of the vehicle Test'
      />
    </Scene>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: Colors.grey,
    marginVertical: 20,
    width: '50%',
  },
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.darkBlue,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.white,
  },
  dividerContainer: {
    alignItems: 'center'
  },
});
