import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from '../screens/SignUpPage';
import LoginPage from '../screens/LoginPage';
import CarList from '../screens/CarList'
import { createStackNavigator } from '@react-navigation/stack';
import CarsCRUD from '../screens/CarsCRUD';

const Stack = createStackNavigator();

export default function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
         
                <Stack.Screen name="Login" component={LoginPage} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="Register" component={SignUpPage} options={{
                    title: 'Register',
                    fontFamily: 'FredokaOne-Regular',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: '#4F3BDF',
                    headerTitleStyle: {
                        fontWeight: '900',
                        fontFamily: 'FredokaOne-Regular'
                    },
                }} />
                   <Stack.Screen name="Cars" component={CarsCRUD} /> 
                {/* <Stack.Screen name="List" component={CarList} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}