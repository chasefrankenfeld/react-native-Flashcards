import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
} from "react-native";
import { styles } from "./styles";
import {
  Card,
  FormInput,
  FormLabel,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { MaterialIcons } from "@expo/vector-icons";
import { getDeck } from "../../utils/api";

export default class Deck extends Component {

  state = {
    deck: false,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Deck"
    }
  }

  componentDidMount() {
    getDeck(this.props.navigation.state.params.deckKey).then((deck) => {
      this.setState(() => ({
        deck: deck
      }))
    })
  }

  componentDidUpdate(prevProps, prevState) {
    getDeck(this.props.navigation.state.params.deckKey).then((deck) => {
      if (deck !== this.state.deck) {
        this.setState(() => ({
          deck: deck
        }))
      }
    })
  }

  handleAddCard = () => {
    this.props.navigation.navigate("AddCard", {
      deckKey: this.props.navigation.state.params.deckKey
    })
  }

  handleStartQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deckKey: this.props.navigation.state.params.deckKey
    })
  }

  render() {

    const { deck } = this.state

    return (
      <View  style={{ flex: 1 }}>
        {(deck && (deck.questions.length !== 0) )
        ? <View style={styles.container}>
          <View style={styles.informationContainer}>
              <Text style={styles.heading} >{deck.title}</Text>
              <Text style={styles.numberOfCards} >{deck.questions.length} cards</Text>
          </View>
          <View style={styles.buttonContainer} >
              <Button
                  title="Add Card"
                  backgroundColor="#000"
                  containerViewStyle={ styles.button }
                  icon={{name: 'plus', type: 'octicon', buttonStyle: styles.button }}
                  onPress={ this.handleAddCard }
              />
              <Button
                  title="Start Quiz"
                  backgroundColor="#000"
                  containerViewStyle={ styles.button }
                  icon={{name: 'play', type: 'foundation', buttonStyle: styles.button }}
                  onPress={ this.handleStartQuiz }
              />
          </View>
        </View>
        : <View style={styles.container}>
        <View style={styles.informationContainer}>
            <Text style={styles.heading} >"{deck.title}" has no cards!</Text>
            <Text style={styles.numberOfCards} >Please click "Add Card" to add cards to your deck</Text>
        </View>
        <View style={styles.buttonContainer} >
            <Button
                title="Add Card"
                backgroundColor="#000"
                containerViewStyle={ styles.button }
                icon={{name: 'plus', type: 'octicon', buttonStyle: styles.button }}
                onPress={ this.handleAddCard }
            />
        </View>
      </View>
        }
      </View>
    );
  }
};
