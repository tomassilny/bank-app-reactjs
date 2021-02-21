import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Translates from '../config/Translates';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const translates = new Translates();

class Activity extends Component {
    render() {
        return (
            <View style={styles.transactionsBox}>
                <Text style={styles.boxHeader}><Feather name="activity" color="black" />&nbsp;{translates.getText('activities_and_transactions')}</Text>
                <View style={styles.transactionsList}>
                    <View>
                        <View style={styles.activity}>
                            <View style={styles.row}>
                                <View style={styles.deposit}><Entypo name="plus" size={20} color="white" /></View>
                                <View style={styles.transactionText}>
                                    <Text style={styles.bold}>Vklad</Text>
                                    <Text style={styles.dateText}>10. 9. 2020</Text>
                                </View>
                            </View>
                            <Text style={styles.bold}>+500,20 €</Text>
                        </View>
                        <View style={styles.delimiter}></View>
                        <View style={styles.activity}>
                            <View style={styles.row}>
                                <View style={styles.reward}><FontAwesome name="money" size={15} color="white" /></View>
                                <View style={styles.transactionText}>
                                    <Text style={styles.bold}>Tvoje 1% za Apríl</Text>
                                    <Text style={styles.dateText}>10. 9. 2020</Text>
                                </View>
                            </View>
                            <Text style={styles.bold}>+2,65 €</Text>
                        </View>
                        <View style={styles.delimiter}></View>
                        <View style={styles.activity}>
                            <View style={styles.row}>
                                <View style={styles.withdraw}><Entypo name="minus" size={20} color="white" /></View>
                                <View style={styles.transactionText}>
                                    <Text style={styles.bold}>Výber</Text>
                                    <Text style={styles.dateText}>10. 9. 2020</Text>
                                </View>
                            </View>
                            <Text style={styles.bold}>-105,24 €</Text>
                        </View>
                        <View style={styles.delimiter}></View>
                        <View style={styles.activity}>
                            <View style={styles.row}>
                                <View style={styles.deposit}><Entypo name="plus" size={20} color="white" /></View>
                                <View style={styles.transactionText}>
                                    <Text style={styles.bold}>Vklad</Text>
                                    <Text style={styles.dateText}>10. 9. 2020</Text>
                                </View>
                            </View>
                            <Text style={styles.bold}>+500 €</Text>
                        </View>
                        <View style={styles.delimiter}></View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Activity;

const styles = StyleSheet.create({
    boxHeader: {
        padding: 10,
        fontWeight: "bold",
    },
    bold: {
        fontWeight: "bold",
    },
    transactionText: {
        marginLeft: 10
    },
    dateText: {
        color: "#BDBDBD"
    },
    row: {
        alignItems: "center",
        flexDirection: 'row'
    },
    reward: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0ae360",
        borderRadius: 15
    },
    deposit: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3977e3",
        borderRadius: 50
    },
    withdraw: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F44336",
        borderRadius: 50
    },
    activity: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    transactionsList: {
        margin: 20,
    },
    delimiter: {
        height: 1,
        backgroundColor: "#f1f1f1",
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
    },
    transactionsBox: {
        width: "100%", height: 400, backgroundColor: "#fff", marginTop: 10, borderRadius: 15, marginBottom: 15,
    }
});
