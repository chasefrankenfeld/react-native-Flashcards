import React, { Component } from "react";
import {
  KeyboardAvoidingView,
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


export default class Decks extends Component {

  state = {
    deckTitle: "",
    errorMessage: false,
  }

  handleSumbit = () => {
    alert("Hi")
  }

  render() {

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <Card style={styles.card} title="Try think of a creative name for your new deck" >
            <FormLabel>Deck Name</FormLabel>
            <FormInput
              shake={true}
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
