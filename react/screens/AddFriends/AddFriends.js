import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import NavBar from '../../components/NavBar/NavBar';
import Axios from 'axios';
import { Input } from 'react-native-elements';
import { Avatar, } from 'react-native-paper';

export default class AddFriends extends React.Component  {
    state = {
        friend: '',
        user: '',
    }
    handleAddFriend = event => {
        if (this.state.friend == true) {
            alert("Already add Friend")
            return;
        }
        if (this.state.friend == '') {
            alert("pleace input your friend")
            return;
        }
        const addFriend = {
            friend: this.state.friend,
            user: this.state.user,
        }
        Axios.post(`http://10.10.12.28:3939/user/addFriend`, addFriend)
            .then(res => {
                if (res.data == "200") {
                    alert("Add friend berhasil")
                }
            }).catch(err => console.log("Couldn't post data. Error: " + err))
    }

    render() {
        return (
            <View style={Styles.container}>

                <NavBar
                    name="Search for Friends"
                    icon="arrow-back"
                    onLeftElementPress={() => { this.props.navigation.goBack() }}
                 />

                <View style={Styles.content}>
                    <Input placeholder="Search by ID"
                           onChangeText={(e) => this.setState({ friend: e })} />
                </View>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {

    },
    add: {

    },
});
