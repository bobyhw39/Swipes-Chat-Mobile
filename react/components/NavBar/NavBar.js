//NavBar is about Header App 

import React, { Component } from 'react'
import { Toolbar, COLOR } from 'react-native-material-ui'
import { StyleSheet, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500
    },
    toolbar: {
        container: {
            height: hp('100%')
        }
    }
};
{/**Ini Class Header untuk All Class Kecuali class Home */ }
export default class NavBar extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <ThemeProvider uiTheme={uiTheme}>
                    <View>
                        {/**Untuk Sidebar semua halaman */}
                        <StatusBar backgroundColor="rgb(25, 25, 77)" translucent />

                        {/**Header navigate semua halaman  */}
                        <Toolbar style={{ container: { backgroundColor: '#202040' } }}

                            leftElement={this.props.icon}
                            centerElement={this.props.name}
                            rightElement={this.props.right}

                            onLeftElementPress={this.props.onLeftElementPress}
                            onRightElementPress={this.props.onRightElementPress}
                        />

                    </View>
                </ThemeProvider>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0
    },
});