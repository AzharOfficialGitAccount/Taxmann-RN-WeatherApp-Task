import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import Error from './screens/Error';

// redux

import { Provider } from 'react-redux'
import store from './redux/store'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="error" component={Error} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
};
export default App;
