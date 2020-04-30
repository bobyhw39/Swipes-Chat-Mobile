import React from "react";
import { TouchableOpacity, } from "react-native-gesture-handler";
import { StyleSheet, View, Text } from "react-native";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar } from "react-native-paper";

export default class CardChat extends React.Component  {

    render() {

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.clicked}>
                <View style={{ marginLeft: 20 }}>
                    <Avatar.Image source={{ uri: "https://i.pravatar.cc/100?img=4" }} size={65}
                    />
                </View>
                <View style={{ marginLeft: 25, }}>
                    {this.props.receiver!=null?(
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{this.props.receiver}</Text>
                    ) :
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{this.props.group.name}</Text>
                    }

                    <Text>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "white",
        marginBottom: "2%",
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
});
