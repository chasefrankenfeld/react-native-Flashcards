import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
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


export default class Quiz extends Component {

  state = {
    deck: null,
    showingQuestion: true,
    questionsAndAnswers: [],
    correctAnswers: 0,
    wrongAnswers: 0,
  }

  componentDidMount() {
    getDeck(this.props.navigation.state.params.deckKey).then((deck) => {
      const questionsAndAnswers = deck.questions
      this.setState(() => ({
        deck: deck,
        questionsAndAnswers: questionsAndAnswers
      }))
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz Time!"
    }
  }

  viewAnswer = () => {
    console.log("hello")
  }

  handleCorrectAnswer = () => {
    alert("Nice work 💪 That is the correct answer!")
  }

  handleIncorrectAnswer = () => {
    alert("Derp! Better luck next time...")
  }

  render() {

    const { deck, showingQuestion, questionsAndAnswers } = this.state

    return (
        <View style={{ flex: 1 }}>
          { (deck !== null ) && (questionsAndAnswers.length > 0) &&
            <View style={styles.container} >
              <Text style={{ textAlign: "center" }}>{questionsAndAnswers[0].question}</Text>
              {/* <Card
                containerStyle={ styles.card }
                title={"Question " + "x" + " of " + questionsAndAnswers.length}
              >
                  <Text style={styles.heading} >{questionsAndAnswers[0].question}</Text>
                <TouchableOpacity
                  onPress={this.viewAnswer}
                >
                  <Text style={styles.questionAnswer} >View answer</Text>
                </TouchableOpacity>
              </Card>
              <View style={styles.buttonContainer} >
                  <Button
                      title="Correct"
                      backgroundColor="#000"
                      containerViewStyle={ styles.button }
                      icon={{name: 'ios-thumbs-up', type: 'ionicon', buttonStyle: styles.button }}
                      onPress={ this.handleCorrectAnswer }
                  />
                  <Button
                      title="Incorrect"
                      backgroundColor="#000"
                      containerViewStyle={ styles.button }
                      icon={{name: 'ios-thumbs-down', type: 'ionicon', buttonStyle: styles.button }}
                      onPress={ this.handleIncorrectAnswer }
                  />
              </View> */}
            </View>
          }
        </View>
    );
  }
};
