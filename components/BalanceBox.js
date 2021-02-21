import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import Translates from '../config/Translates';

const translates = new Translates();

class BalanceBox extends Component {
    render() {
        return (
            <LinearGradient style={styles.balanceBox} colors={['#0dd55d', '#0ae360']} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}>
                <Text style={styles.boxHeader}><Entypo name="wallet" color="black" />&nbsp;{translates.getText('your_balance')}</Text>
                <Text style={styles.balanceText}>1 564,32 €</Text>
                <Text style={styles.balanceTextBottom}>{translates.getText('we_give_you')} <Text style={{ fontWeight: "bold" }}>40,65 €</Text>&nbsp;🎉</Text>
            </LinearGradient>
        );
    }
}

export default BalanceBox;

const styles = StyleSheet.create({
    balanceBox: {
        width: "100%",
        backgroundColor: '#0ae360',
        height: 110,
        marginTop: 20,
        borderRadius: 15,
        elevation: 3
    },
    boxHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    balanceTextBottom: {
        marginLeft: 10,
        fontSize: 10,
        color: "#010101",
        marginTop: 15,
    },
    balanceText: {
        color: "#000", fontWeight: "bold", fontSize: 25, alignSelf: "center", marginTop: 5
    }
});
