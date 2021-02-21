import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Translates from '../config/Translates';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Activity from '../components/Activity';

const translates = new Translates();

class StatsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>

                        <View style={styles.headerBox}>
                            <Text style={styles.welcomeTxt}>Štatistiky</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="bell" size={28} color="black" />
                            </TouchableOpacity>
                        </View>

                        
                        
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

export default StatsScreen;

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
