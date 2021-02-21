import React, { Component } from 'react';
import Translates from '../config/Translates';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import DashboardScreen from './DashboardScreen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ActivityScreen from './ActivityScreen';
import { Fontisto } from '@expo/vector-icons'; 
import TransactionScreen from './TransactionScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import StatsScreen from './StatsScreen';
import AccountScreen from './AccountScreen';

const translates = new Translates();

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
    render() {
        return (
            <Tab.Navigator
                activeColor="#000"
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 12,
                        margin: 0,
                        padding: 0,
                    }

                }}>
                <Tab.Screen
                    name="YourAccount"
                    component={DashboardScreen}
                    options={{
                        activeColor: "#000",
                        tabBarLabel: translates.getText('your_account'),
                        labelStyle: {
                            fontSize: 1,
                        },
                        tabBarIcon: ({ color }) => (
                            <Entypo name="wallet" color="black" size={24} />),
                    }}
                />
                <Tab.Screen
                    name="Activity"
                    component={ActivityScreen} 
                    options={{
                        tabBarLabel: translates.getText('activity'),
                        labelStyle: {
                            fontSize: 1,
                        },
                        tabBarIcon: ({ color }) => (
                            <Feather name="activity" color="black" size={24} />),
                    }}
                />
                <Tab.Screen
                    name="Transaction"
                    component={TransactionScreen}
                    options={{
                        tabBarLabel: translates.getText('transaction'),
                        labelStyle: {
                            fontSize: 1,
                        },
                        tabBarIcon: ({ color }) => (
                            <Fontisto name="arrow-swap" size={24} color="black" />),
                    }}
                />
                <Tab.Screen
                    name="Statistics"
                    component={StatsScreen} 
                    options={{
                        tabBarLabel: translates.getText('statistics'),
                        labelStyle: {
                            fontSize: 1,
                        },
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="finance" size={24} color="black" />),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen} 
                    options={{
                        tabBarLabel: translates.getText('account'),
                        labelStyle: {
                            fontSize: 1,
                        },
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" size={24} color="black" />),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default MainScreen;