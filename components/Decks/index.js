import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";
import { getDecks } from "../../utils/api";

export default class Decks extends Component {

  state = {
    decks: null,
    deckKeys: null,
  }

  componentDidMount() {
    getDecks().then((decks) => {
      const keys = Object.keys(decks)
      this.setState(() => ({
        decks: decks,
        deckKeys: keys
      }))
    })
  }

  handleDeckSelection = (key) => {
    this.props.navigation.navigate("Deck", {
      key: key
    })
  }

  render() {
    const { decks, deckKeys } = this.state

    return (
        <View style={styles.container} >
          { (deckKeys !== null) && (decks !== null)
              && <ScrollView>
                { deckKeys.map((key) =>
                  <View key={key}>
                    <Card
                      containerStyle={ styles.card }
                      title={decks[key].title}
                    >
                      <TouchableOpacity
                        onPress={() => this.handleDeckSelection(key)}
                      >
                        <Text style={styles.numberOfCards} >{decks[key].questions.length} Cards</Text>
                      </TouchableOpacity>
                    </Card>
                  </View>
                )}
              </ScrollView>
          }
        </View>
    );
  }
};
