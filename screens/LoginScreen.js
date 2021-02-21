import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Translates from '../config/Translates';
import { Foundation } from '@expo/vector-icons';
import Button from '../components/customs/Button';
import Input from '../components/customs/Input';

const translates = new Translates();

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.loginTitle}>
                        <Foundation name="lock" color="black" size={24} />
                        &nbsp;&nbsp;
                        {translates.getText('login')}
                    </Text>
                    <Text style={styles.loginTxt}>{translates.getText('login_text')}</Text>

                    <View style={styles.delimiter}></View>

                    <Input placeholder={translates.getText('email')} email={true}></Input>
                    <Input placeholder={translates.getText('password')} password={true}></Input>

                    <TouchableOpacity onPress={() => this.props.navigation.replace('Main')}>
                        <Button text={translates.getText('signin')}></Button>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    loginTitle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
    loginTxt: {
        alignSelf: "center",
        marginTop: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#101014',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        elevation: 5,
        borderColor: "#f1f1f1",
        borderWidth: 2,
        borderRadius: 10,
    },
    delimiter: {
        width: 50,
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15,
        height: 2,
        backgroundColor: "#f1f1f1"
    }
});
