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
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AddFriends from "../screens/AddFriends/AddFriends";
import ChatGroup from "../screens/ChatGroup/ChatGroup";
import ChatGroupNew from "../screens/NewChat/ChatGroupNew";
import ListEvent from "../screens/Events/ListEvent";
import EventScreen from "../screens/Events/EventScreen";
import EventView from "../screens/Events/EventView";
import FriendsScreen from "../screens/Friends/FriendsScreen";
import NewGroupScreen from "../screens/NewGroup/NewGroupScreen";

const Drawer = createDrawerNavigator();

class NavigationApp extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/> }>
                        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
                        {/*<Drawer.Screen name="LoginScreen" component={LoginScreen} />*/}
                        {/*/!*<Drawer.Screen name="HomeScreen" component={HomeScreen} />*!/*/}
                        {/*<Drawer.Screen name="ChatScreen" component={ChatScreen} />*/}
                        {/*<Drawer.Screen name="NewChatScreen" component={NewChat} />*/}
                        {/*<Drawer.Screen name="ChatScreenNew" component={ChatScreenNew} />*/}
                        {/*<Drawer.Screen name="RegistrationScreen" component={RegistrationScreen} />*/}
                        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                        {/*<Drawer.Screen name="AddFriendsScreen" component={AddFriends} />*/}
                        {/*<Drawer.Screen name="ChatGroupScreen" component={ChatGroup} />*/}
                        {/*<Drawer.Screen name="ChatGroupNew" component={ChatGroupNew} />*/}
                        {/*<Drawer.Screen name="Events" component={ListEvent} />*/}
                        {/*<Drawer.Screen name="New Event" component={EventScreen} />*/}
                        {/*<Drawer.Screen name="Event View" component={EventView} />*/}
                        {/*/!*<Drawer.Screen name="FriendsScreen" component={FriendsScreen} />*!/*/}
                        {/*<Drawer.Screen name="NewGroupScreen" component={NewGroupScreen} />*/}
                </Drawer.Navigator>
        );
    }
}
export default NavigationApp
