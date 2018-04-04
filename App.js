import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from "./reducers";
// import thunk from "redux-thunk";
import { Constants } from "expo";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import { setLocalNotification } from "./utils/local_notifications";

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: "Decks",
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
    }
  },
  NewDecks: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "New Deck",
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
    },
  },
},{
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? "#000" : "#fff",
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? "#fff" : "#000",
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    }
  },
  swipeEnabled: true,
});


const DeckNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
  },
  AddCard: {
    screen: AddCard,
  },
  Quiz: {
    screen: Quiz,
  },
})

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {

    return (
      <View style={{flex: 1}} >
        <CustomStatusBar backgroundColor={"#000"} />
        <DeckNavigator />
      </View>
    );
  }
};
