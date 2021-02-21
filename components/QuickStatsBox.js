import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Graph from "../components/Graph";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Translates from '../config/Translates';

const translates = new Translates();

const data = [
    { date: new Date(2018, 9, 1).getTime(), value: 1523 },
    { date: new Date(2018, 9, 16).getTime(), value: 1553 },
    { date: new Date(2018, 9, 17).getTime(), value: 2300 },
    { date: new Date(2018, 10, 1).getTime(), value: 2000 },
    { date: new Date(2018, 10, 2).getTime(), value: 900 },
    { date: new Date(2018, 10, 5).getTime(), value: 920 }
];

class QuickStatsBox extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.quickChartBox}>
                <Text style={styles.boxHeader}><MaterialCommunityIcons name="finance" color="black" />&nbsp;{translates.getText('your_balance_preview')}</Text>
                <View style={styles.graph}>
                    <Graph {...{ data }} />
                </View>
            </TouchableOpacity>
        );
    }
}

export default QuickStatsBox;

const styles = StyleSheet.create({
    boxHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    quickChartBox: {
        marginLeft: 10,
        flex: 1,
        height: 100,
        backgroundColor: "#fff",
        elevation: 3,
        borderRadius: 15,
    },
    graph: {
        marginLeft: 10
    }
});
