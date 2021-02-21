import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Translates from '../config/Translates';
import { FontAwesome5 } from '@expo/vector-icons';

const translates = new Translates();

class QuickSavingsBox extends Component {
    render() {
        return (
            <View style={styles.savingsBox}>
                <Text style={styles.boxHeader}><FontAwesome5 name="piggy-bank" color="black" />&nbsp;{translates.getText('savings')}</Text>

                <View style={styles.savingsList}>
                    <View>
                        <View style={styles.savingTitleHeader}>
                            <Text style={styles.savingTitle}>Nové auto</Text>
                            <Text>1 562 / 3 000 €</Text>
                        </View>
                        <View style={{ width: "100%", height: 5, backgroundColor: "#f1f1f1", borderRadius: 15, marginTop: 5 }}>
                            <View style={{ width: "60%", height: 5, backgroundColor: "#0ae360", borderRadius: 15, marginTop: 0, }}></View>
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}

export default QuickSavingsBox;

const styles = StyleSheet.create({
    boxHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    savingsBox: {
        flex: 1,
        marginTop: 10,
        height: 100,
        backgroundColor: "#fff",
        elevation: 3,
        borderRadius: 15,
    },
    savingTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    savingsList: {
        margin: 10,
    },
    savingTitleHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
