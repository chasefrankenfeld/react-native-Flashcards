import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";
import { getDecks } from "../../utils/api";
import { all } from "any-promise";

const DeckCard = ({ name }) => (
  <View key={name}>
    <Card
      containerStyle={ styles.card }
      title={name}
    >
        <Text style={styles.numberOfCards} >3 Cards</Text>
    </Card>
  </View>
)

export default class Decks extends Component {

  state = {
    decks: null,
  }

  componentDidMount() {
    getDecks().then((result) => {
      console.log(result)
      const myKeys = Object.keys(result);
      console.log(myKeys)
      this.setState({
        decks: result
      })
    })
  }

  renderDeck = ({ deck }) => (
    <DeckCard name={deck} {...deck} />
  )

  render() {
    const { decks } = this.state

    return (
        <View style={styles.container} >
          { decks && <FlatList
              data={Object.keys(decks)}
              renderItem={this.renderDeck}
              keyExtractor={(deck) => deck}
            />
          }
        </View>
    );
  }
};
