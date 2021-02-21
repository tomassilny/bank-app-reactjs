import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Button extends Component {
    render() {
        return (
            <View style={styles.button}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 16
    },
    button: {
        marginTop: 5,
        backgroundColor: "#000",
        padding: 12,
        borderRadius: 10,
        elevation: 5
    },
});
