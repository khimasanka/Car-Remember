import React from 'react'
import Navigations from './component/Navigations';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>
  )
}
