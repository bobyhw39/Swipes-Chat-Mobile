import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class CardMessage extends Component {
    render() {
        return (
            <View style={this.props.styles}>

            <View style={styles.container}>
            </View>
            <View style={styles.after}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}> {this.props.sender} </Text>
                <Text style={{ fontSize: 15 }}>{this.props.message}</Text>
                <Text style={{ fontSize: 15}}>{this.props.hour}</Text>
            </View>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    container:{
        // margin: 10,
        // position: 'top',
        // padding: 5,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 90,
        borderTopEndRadius: 10,
        // borderRadius
        width: wp('30%'),
        height: 30,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


    },
    after: {
        marginLeft: 10,
        position: 'absolute',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopEndRadius: 10,
        width: wp('70%'),
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }

})

export default CardMessage;
