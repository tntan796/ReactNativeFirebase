import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
class LoginComponent extends Component {
    loginAuthen() {
        auth().createUserWithEmailAndPassword('tantn1@sunshinegroup.vn', 'Spring@2019').then(() => {
            alert('thanh cong');
        }).catch(err => {
            alert('That bai');
            console.log(err);
        });
    }
    render() {
        return (
            <View>
                <Text>Login Component</Text>
                <Button onPress = {() => this.loginAuthen()}  title='Login auth'></Button>
            </View>
        )
    }
}

export default LoginComponent;