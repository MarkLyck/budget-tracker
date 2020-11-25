import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import GraphQLProvider from './GraphQLProvider'
import App from '../App'

const AppProvider = () => (
    <ThemeProvider theme={theme}>
        {/* <ApolloProvider client={client}> */}
        <GraphQLProvider>
            <SafeAreaProvider>
                <App />
            </SafeAreaProvider>
        </GraphQLProvider>
        {/* </ApolloProvider> */}
    </ThemeProvider>
)

export default AppProvider
