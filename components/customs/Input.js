import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class Input extends Component {
    render() {
        return (
            <View>
                {this.props.password &&
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder={this.props.placeholder}>
                    </TextInput>
                }
                {this.props.email &&
                    <TextInput
                        keyboardType="email-address"
                        style={styles.input}
                        placeholder={this.props.placeholder}>
                    </TextInput>
                }
                {(!this.props.email && !this.props.password) &&
                    <TextInput
                        style={styles.input}
                        placeholder={this.props.placeholder}>
                    </TextInput>
                }
            </View>
        );
    }
}

export default Input;

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        padding: 10,
        borderColor: "#f1f1f1",
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#f0f0f0"
    },
});
