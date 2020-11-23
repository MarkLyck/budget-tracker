import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// import { Icon, TabBar } from '@ant-design/react-native';

import { ThemeProvider } from '@emotion/react'
// import SpendingView from './screens/Spending'
import styled from '@emotion/native'
import theme from './lib/theme'
import TabBar from './components/TabBar'

// const StyledSafeAreaView = styled(SafeAreaView)`
//     // background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
//     height: 100%;
// `

const SafeView = styled.View`
    padding-top: ${(p: any) => p.paddingTop};
    height: 100%;
    background-color: ${(p: any) => p.theme.colors.primary.backgroundColor};
`

const StyledTabBar = styled(TabBar)`
  border-color: red;
  padding-top: 10px;
  > div {
    border-top-width: 0px;
  }
`

const App = () => {
    // const [selectedTab, setSelectedTab] = useState('spendingTab')
    const insets = useSafeAreaInsets();

    return (
        <SafeView paddingTop={insets.top}>
            <StatusBar style="auto" />
            <TabBar />
            {/* <StyledTabBar
                unselectedTintColor={theme.colors.tertiary.backgroundColor}
                tintColor={theme.colors.primary.main}
                barTintColor={theme.colors.tertiary.backgroundColor}
            >
                <TabBar.Item
                    title="Spending"
                    icon={null}
                    selected={selectedTab === 'spendingTab'}
                    onPress={() => setSelectedTab('spendingTab')}
                >
                    <SpendingView />
                </TabBar.Item>
                {/* <TabBar.Item
                    title="test"
                    icon={<Icon name="home" />}
                    selected={selectedTab === 'test'}
                    onPress={() => setSelectedTab('test')}
                >
                    <View><Text>test</Text></View>
                </TabBar.Item> */}
            {/* </StyledTabBar> */}
        </SafeView>
    )
};

const Providers = () => (
    <ThemeProvider theme={theme}>
        <SafeAreaProvider>
            <App />
        </SafeAreaProvider>
    </ThemeProvider>
)

export default Providers