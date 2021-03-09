import React from 'react';
import { connect, Provider } from 'react-redux';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './app/navigation';
import { store } from './app/redux/store';
import { Colors } from './app/styles/colors';

const mapStateToProps = (state) => {
  return {
    title: state.currentQuestionIndex,
    questions: state.questions
  };
};

const QuestionsHeader = ({ title, questions }) => <Text style={{ color: Colors.veryDarkGrayishBlue, fontSize: 20}}>{title + 1}<Text style={{ color: Colors.lightGrayishBlue, fontSize: 16 }}>/{questions.length}</Text></Text>;

const HeaderTitle = connect(mapStateToProps)(QuestionsHeader);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            options={{
              title: <HeaderTitle />,
              headerStyle: {
                backgroundColor: Colors.white,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
            component={Main}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
