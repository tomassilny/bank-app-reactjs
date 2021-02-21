import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Translates from '../config/Translates';

const translates = new Translates();

class RewardBox extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.quickStatsBox}>
                <Text style={styles.boxHeader}><Entypo name="back-in-time" color="black" />&nbsp;{translates.getText('your_percent')}</Text>
                <Text style={styles.revenueText}>+1,40 €</Text>
                <Text style={styles.revenueInfo}>{translates.getText('monthly')}</Text>
            </TouchableOpacity>
        );
    }
}

export default RewardBox;

const styles = StyleSheet.create({
    boxHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    quickStatsBox: {
        width: "32%",
        height: 100,
        backgroundColor: "#fff",
        elevation: 3,
        borderRadius: 15,
    },
    revenueText: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "#0ae360",
        fontSize: 20,
        marginTop: 3
    },
    revenueInfo: {
        color: "#BDBDBD",
        marginTop: 12,
        fontSize: 12,
        alignSelf: "center"
    }
});
