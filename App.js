import React, {Component} from 'react';
import {Text, View} from 'react-native';
import database from '@react-native-firebase/database';

class App extends Component {

    componentDidMount(): void {
        this.readAllData();
    }

    async readAllData() {
        const ref = database().ref('/users');
        const snapshot = await ref.once('value');
        console.log('User data:', snapshot.val());
    }

    render() {
        return (
            <View>
                <Text>Hoc React native to connect firebase ahihi</Text>
            </View>
        );
    }
}

export default App;
