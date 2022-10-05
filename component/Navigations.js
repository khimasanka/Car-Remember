import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from '../screens/SignUpPage';
import LoginPage from '../screens/LoginPage'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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

                <Stack.Screen name="Register" component={SignUpPage} options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: '#4F3BDF',
                    headerTitleStyle: {
                        fontWeight: '900',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}