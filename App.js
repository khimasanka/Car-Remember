import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base'
import LoginPage from './screens/LoginPage'
import SignUpPage from './screens/SignUpPage'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={SignUpPage} options={{
          title: 'Register',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4F3BDF',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }} />


        <Stack.Screen name="Login" component={LoginPage} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F2F2F2'
          },
          headerTintColor: '#4F3BDF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
