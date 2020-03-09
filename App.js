/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import database from '@react-native-firebase/database';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
          users: null
        }
    }

    componentDidMount() {
        this.readAllDataSync();
    }

    async readAllData() {
        const ref = database().ref('/users');
        const snapshot = await ref.once('value');
        this.setState({users: Object.values(snapshot.val())});
        console.log(Object.values(snapshot.val()));
    }

    async readAllDataSync() {
        const ref = database().ref('/users');
        await ref.on('value', snapshot => {
            this.setState({users: Object.values(snapshot.val())});
            console.log(Object.values(snapshot.val()));
        });
    }
    // Khi dùng hàm này thì sẽ tự tạo Id
    async createDataWithPush() {
        const ref = database().ref('/users');
        const snapshot = await ref.push({
            name : 'dona'
        });
    }

    async remove() {
        const ref = database().ref('/users/07');
        ref.remove().then(res => {
            alert('Xoa thanh cong');
        }).catch(err => {
            alert('Xoa that bai');
        });
    }

    // Khi dùng hàm này thì sẽ cần phải truyền vào Id, nó sẽ tạo bản ghi theo Id nếu chưa có, nếu có rồi thì sẽ là update
    async createDataWithSet() {
        const ref = database().ref('/users/07');
        const snapshot = await ref.set({
            name : 'doan'
        });
    }

    render() {
        return (
            <View>
                <Text>Danh sach users</Text>
                {this.state.users && this.state.users.map((item, index) => <View>
                        <Text>{item.name}</Text>
                    </View>)}
                <Button onPress={() => this.createDataWithPush()} title='Them moi Push'></Button>
                <Button onPress={() => this.createDataWithSet()} title='Them moi Set'></Button>
                <Button onPress={() => this.remove()} title='Xoa'></Button>
            </View>
        );
    }
}

export default App;
