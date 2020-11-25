import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../lib/theme'
import SpendingScreen from '../screens/Spending'
import SettingsScreen from '../screens/Settings'
import LoginScreen from '../screens/Login'

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Spending') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'ios-information-circle'
                                            : 'ios-information-circle-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Settings') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-list-box' : 'ios-list'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: theme.colors.primary.main,
                    inactiveTintColor: 'gray',
                    // @ts-ignore
                    style: {
                        borderTopWidth: '0',
                        backgroundColor: theme.colors.tertiary.backgroundColor
                    }
                }}
            >
                <Tab.Screen name="Spending" component={SpendingScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar
