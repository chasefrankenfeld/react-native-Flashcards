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


export default class AddCard extends Component {

  state = {
    question: "",
    questionErrorMessage: false,
    answer: "",
    answerErrorMessage: false,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add card'
    }
  }

  handleSumbit = () => {
    alert("You have added a new card to the Deck")
  }

  render() {

    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <Card
            // style={styles.card}
            containerStyle={ styles.card }
            title="Add a new question and answer to your deck"
          >
            <FormLabel>Question</FormLabel>
            <FormInput
              shake={true}
            />
            <FormValidationMessage
              containerStyle={styles.FormValidationMessageStyle}
            >
              A question is required!
            </FormValidationMessage>
            <FormLabel>Answer</FormLabel>
            <FormInput
              shake={true}
            />
            <FormValidationMessage
              containerStyle={styles.FormValidationMessageStyle}
            >
              An is required!
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
