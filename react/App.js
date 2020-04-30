/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import NavigationApp from "./navigator/NavigationApp";
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import reducer from './redux/reducers/';
import thunk from "redux-thunk";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import ChatScreen from "./screens/Chat/ChatScreen";
import NewChat from "./screens/NewChat/NewChat";
import ChatScreenNew from "./screens/NewChat/ChatScreenNew";
import RegistrationScreen from "./screens/Registration/RegistrationScreen";

const store = createStore(reducer,applyMiddleware(thunk));

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          {/*<NavigationApp />*/}
          <Stack.Navigator headerMode="none">
              <Stack.Screen name="NavigationApp" component={NavigationApp} />
              {/*<Stack.Screen name="OPEN_DRAWER" component={NavigationApp} />*/}
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
              <Stack.Screen name="NewChatScreen" component={NewChat} />
              <Stack.Screen name="ChatScreenNew" component={ChatScreenNew} />
              <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};


export default App;
