import React from 'react'
import { View, StyleSheet, ScrollView, } from 'react-native'
import NavBar from '../../components/NavBar/NavBar';
import { Avatar, } from 'react-native-paper';
import { Icon, Text } from 'react-native-elements';
import Axios from 'axios';
import {connect} from 'react-redux';

class ProfileScreen extends React.Component {
    state = {
        persons: [],
    }
    render() {
        const { persons, value } = this.state;
        return (
            <View style={styles.container}>
                <NavBar
                    name="Profil"
                    icon="arrow-back"
                    onLeftElementPress={() => { this.props.navigation.goBack() }} />
                <View style={styles.user}>

                    <Avatar.Image source={{ uri: "https://i.pravatar.cc/100?img=4" }} size={180} />

                    <View style={styles.drawerSection}>
                        <Text style={{fontWeight:'bold'}}>Name</Text>
                        <Text icon={() => (<Icon name="persons" />)}>{this.props.fullName}</Text>
                        <Text style={{fontWeight:'bold'}}>Email</Text>
                        <Text icon={() => (<Icon name="error-outline" />)}>{this.props.email}</Text>
                        <Text style={{fontWeight:'bold'}}>Username</Text>
                        <Text icon={() => (<Icon name="phone" />)}>{this.props.username}</Text>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconCover: {
        flex: 1,
        marginTop: "86%",
        marginRight: "10%",
    },
    icon: {
        backgroundColor: "#363062",
        color: 'white',
        padding: 18,
        borderRadius: 100,
        alignSelf: "flex-end",
    },
    user: {
        alignSelf: "center",
        margin: 20,
    },
});
const mapStateToProps = (state) => {
    return {
        username: state.loginReducer.username,
        fullName: state.loginReducer.fullName,
        email:state.loginReducer.email,
    }
}
export default connect(mapStateToProps)(ProfileScreen)
