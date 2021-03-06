import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native'
// import TabBar from './components/TabBar'
// import AuthScreen from './screens/AuthScreen'
// import LoginScreen from './screens/Authentication/LoginScreen'
// import SignupScreen from './screens/Authentication/SignUpScreen'
import TransactionScreen from './screens/TransactionScreen'

const SafeView = styled.View`
    padding-top: ${(p: any) => p.paddingTop};
    height: 100%;
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
`

const App = () => {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView>
            <SafeView paddingTop={insets.top}>
                <StatusBar style="auto" />
                <TransactionScreen />
            </SafeView>
        </KeyboardAvoidingView>
    )
};

export default App