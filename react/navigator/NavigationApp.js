import React from 'react';
import Native from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import NewChat from "../screens/NewChat/NewChat";
import ChatScreenNew from "../screens/NewChat/ChatScreenNew";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";

const Drawer = createDrawerNavigator();

class NavigationApp extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (

                <Drawer.Navigator drawerContent={() => <DrawerContent/> }>
                    <Drawer.Screen name="OPEN_DRAWER" component={NavigationApp} />
                {/*<Drawer.Navigator >*/}
                        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
                        <Drawer.Screen name="NewChatScreen" component={NewChat} />
                        <Drawer.Screen name="ChatScreenNew" component={ChatScreenNew} />
                        <Drawer.Screen name="RegistrationScreen" component={RegistrationScreen} />
                </Drawer.Navigator>
        );
    }
}
export default NavigationApp
