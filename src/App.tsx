import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@emotion/react'
import SpendingView from './screens/Spending'
import styled from '@emotion/native'
import theme from './lib/theme'

const StyledSafeAreaView = styled(SafeAreaView)`
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
    height: 100%;
`

const App = () => (
    <ThemeProvider theme={theme}>
        <StyledSafeAreaView>
            <SpendingView />
            <StatusBar style="auto" />
        </StyledSafeAreaView>
    </ThemeProvider>
);

export default App