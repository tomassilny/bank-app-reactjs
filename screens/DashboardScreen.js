import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Translates from '../config/Translates';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BalanceBox from '../components/BalanceBox';
import RewardBox from '../components/RewardBox';
import QuickStatsBox from '../components/QuickStatsBox';
import QuickSavingsBox from '../components/QuickSavingsBox';
import Activity from '../components/Activity';

const translates = new Translates();

class DashboardScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>

                        <View style={styles.headerBox}>
                            <Text style={styles.welcomeTxt}>{translates.getText('niceday')} Tomáš!</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="bell" size={28} color="black" />
                            </TouchableOpacity>
                        </View>

                        <BalanceBox></BalanceBox>

                        <View style={styles.quickBox}>
                            <RewardBox></RewardBox>
                            <QuickStatsBox></QuickStatsBox>
                        </View>

                        <QuickSavingsBox></QuickSavingsBox>

                        <Activity></Activity>
                        
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    welcomeTxt: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#1a1a1a",
    },
    headerBox: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    quickBox: {
        flexDirection: "row",
        marginTop: 10,
    },
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#f0f0f0',
        marginRight: 20,
        marginLeft: 20,
    },
    box: {
        width: "90%",
        padding: 20,
        backgroundColor: "#fff",
        elevation: 5,
        borderColor: "#f1f1f1",
        borderWidth: 2,
        borderRadius: 10,
    },
});
