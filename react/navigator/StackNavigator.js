import React from 'react';
import NavigationApp from "./NavigationApp";
import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import NewChat from "../screens/NewChat/NewChat";
import ChatScreenNew from "../screens/NewChat/ChatScreenNew";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AddFriends from "../screens/AddFriends/AddFriends";
import ChatGroup from "../screens/ChatGroup/ChatGroup";
import ChatGroupNew from "../screens/NewChat/ChatGroupNew";
import ListEvent from "../screens/Events/ListEvent";
import EventScreen from "../screens/Events/EventScreen";
import EventView from "../screens/Events/EventView";

const Stack = createStackNavigator();
class StackNavigator extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Stack.Navigator headerMode="none">
                {/*<Stack.Screen name="NavigationApp" component={NavigationApp} />*/}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="NewChatScreen" component={NewChat} />
                <Stack.Screen name="ChatScreenNew" component={ChatScreenNew} />
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="AddFriendsScreen" component={AddFriends} />
                <Stack.Screen name="ChatGroupScreen" component={ChatGroup} />
                <Stack.Screen name="ChatGroupNew" component={ChatGroupNew} />
                <Stack.Screen name="Events" component={ListEvent} />
                <Stack.Screen name="New Event" component={EventScreen} />
                <Stack.Screen name="Event View" component={EventView} />
            </Stack.Navigator>
        );
    }
}
export default StackNavigator
