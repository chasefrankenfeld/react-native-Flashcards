import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { getDecks } from "../../utils/api";

export default class Decks extends Component {

  state = {
    decks = []
  }

  componentDidMount() {
    this.setState({
      decks: await getDecks()
    })
  }

  render() {

    return (
        <View style={styles.container} >
          <Text>Decks</Text>
          <View>{this.state.decks}</View>
        </View>
    );
  }
};
