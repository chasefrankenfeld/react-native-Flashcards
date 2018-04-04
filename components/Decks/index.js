import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";
import { getDecks } from "../../utils/api";

export default class Decks extends Component {

  state = {
    decks: null,
    deckKeys: null,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Deck List'
    }
  }

  componentDidMount() {
    getDecks().then((decks) => {
      if (decks !== null) {
        const keys = Object.keys(decks)
        this.setState(() => ({
          decks: decks,
          deckKeys: keys
        }))
      }
    })
  }

  componentWillReceiveProps() {
    getDecks().then((decks) => {
      if (decks !== null) {
        const keys = Object.keys(decks)
        this.setState(() => ({
          decks: decks,
          deckKeys: keys
        }))
      }
    })
  }

  componentWillUpdate(prevProps, prevState) {
    getDecks().then((decks) => {
      if (decks !== null) {
        const keys = Object.keys(decks)
        this.setState(() => ({
          decks: decks,
          deckKeys: keys
        }))
      }
    })
  }

  handleDeckSelection = (id) => {
    this.props.navigation.navigate("Deck", {
      deckKey: id
    })
  }

  render() {
    const { decks, deckKeys, opacity } = this.state

    return (
        <View style={styles.container} ref="myRef">
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

          { (decks === null) &&
            <View key="noDecks">
              <Card
                containerStyle={ styles.card }
                title="You have no decks"
              >
                  <Text style={styles.numberOfCards} >Click "New Deck" start your deck</Text>
              </Card>
            </View>
          }
        </View>
    );
  }
};
