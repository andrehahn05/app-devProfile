import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
