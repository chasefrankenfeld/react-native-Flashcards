import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  Platform,
  Keyboard
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
import { sumbitDeckTitle } from "../../utils/api";


export default class Decks extends Component {

  state = {
    deckTitle: "",
  }

  handleDeckTitle = (text) => {
    this.setState({
      deckTitle: text
    })
  }

  handleSumbit = () => {
    if ( this.state.deckTitle ) {

      const { deckTitle } = this.state

      sumbitDeckTitle({ deckTitle })

      Keyboard.dismiss()

      this.setState({
        deckTitle: ""
      })

      this.props.navigation.navigate("Decks")


    }
  }

  render() {

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <Card containerStyle={styles.card} title="Try think of a creative name for your new deck" >
            <FormLabel>Deck Name</FormLabel>
            <FormInput
              shake={true}
              onChangeText={this.handleDeckTitle}
              value={this.state.deckTitle}
            />
            <FormValidationMessage
              containerStyle={styles.FormValidationMessageStyle}
            >
              A deck "title" is required
            </FormValidationMessage>
            <Button
              title="Create your deck"
              backgroundColor="#000"
              icon={{name: 'title', type: 'MaterialIcons', buttonStyle: styles.button }}
              onPress={this.handleSumbit }
            />
          </Card>
        </KeyboardAvoidingView>
    );
  }
};
