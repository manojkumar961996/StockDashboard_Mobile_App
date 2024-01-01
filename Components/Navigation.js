// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './DashboardScreen';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { AuthProvider } from './AuthContext';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default Navigation;
