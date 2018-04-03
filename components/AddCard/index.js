import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  Keyboard,
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
import { adaddCardToDeck } from "../../utils/api";
import { NavigationActions } from "react-navigation";


export default class AddCard extends Component {

  state = {
    question: "",
    answer: "",
    deckKey: null,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add card'
    }
  }


  handleQuestion = (text) => {
    this.setState({
      question: text
    })
  }

  handleAnswer= (text) => {
    this.setState({
      answer: text
    })
  }

  handleSumbit = () => {
    const { question, answer } = this.state

    if ( question && answer ) {

      adaddCardToDeck(this.props.navigation.state.params.deckKey, question, answer )

      Keyboard.dismiss()

      this.setState({
        question: "",
        answer: ""
      })

      this.props.navigation.dispatch(NavigationActions.back({
        deckKey: this.props.navigation.state.params.deckKey
      }))
    }
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
              onChangeText={this.handleQuestion}
              value={this.state.question}
            />
            <FormValidationMessage
              containerStyle={styles.FormValidationMessageStyle}
            >
              A question is required!
            </FormValidationMessage>
            <FormLabel>Answer</FormLabel>
            <FormInput
              shake={true}
              onChangeText={this.handleAnswer}
              value={this.state.answer}
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
