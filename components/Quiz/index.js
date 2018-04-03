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
import { NavigationActions } from "react-navigation";

export default class Quiz extends Component {

  state = {
    deck: null,
    showingQuestion: true,
    questionsAndAnswers: [],
    correctAnswers: 0,
    incorrectAnswers: 0,
    questionsAsked: 1,
    questionsAndAnswerIndex: 0,
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
    this.state.showingQuestion
      ? this.setState({
        showingQuestion: false,
      })
      : this.setState({
        showingQuestion: true,
      })
  }

  handleCorrectAnswer = () => {
    const correctAnswers = this.state.correctAnswers + 1
    const questionsAsked = this.state.questionsAsked + 1
    const questionsAndAnswerIndex = this.state.questionsAndAnswerIndex + 1
    this.setState({
      correctAnswers: correctAnswers,
      questionsAsked: questionsAsked,
      questionsAndAnswerIndex: questionsAndAnswerIndex,
    })
  }

  handleIncorrectAnswer = () => {
    const incorrectAnswers = this.state.incorrectAnswers + 1
    const questionsAsked = this.state.questionsAsked + 1
    const questionsAndAnswerIndex = this.state.questionsAndAnswerIndex + 1
    this.setState({
      incorrectAnswers: incorrectAnswers,
      questionsAsked: questionsAsked,
      questionsAndAnswerIndex: questionsAndAnswerIndex,
    })
  }

  handleStartQuiz = () => {
    this.setState({
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionsAsked: 1,
      questionsAndAnswerIndex: 0,
    })
  }

  handleGoBackToDeck = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      deckKey: this.props.navigation.state.params.deckKey
    }))
  }

  render() {

    const {
      deck,
      showingQuestion,
      questionsAndAnswers,
      questionsAndAnswerIndex,
      questionsAsked,
      correctAnswers,
      incorrectAnswers,
    } = this.state

    return (
        <View style={{ flex: 1 }}>
          { (deck !== null ) && (questionsAsked <= (questionsAndAnswers.length)) &&
            <View style={styles.container} >
              {showingQuestion &&
                <Card
                  containerStyle={ styles.card }
                  title={"Question " + questionsAsked + " of " + questionsAndAnswers.length}
                >
                  <Text style={styles.heading} >{questionsAndAnswers[questionsAndAnswerIndex].question}</Text>
                  <TouchableOpacity
                    onPress={this.viewAnswer}
                  >
                    { showingQuestion && <Text style={styles.questionAnswer} >View answer</Text>}
                  </TouchableOpacity>
                </Card>
              }
              { !showingQuestion &&
                <Card
                  containerStyle={ styles.card }
                  title={"Answer " + questionsAsked + " of " + questionsAndAnswers.length}
                >
                  <Text style={styles.heading} >{questionsAndAnswers[questionsAndAnswerIndex].answer}</Text>
                  <TouchableOpacity
                    onPress={this.viewAnswer}
                  >
                    { !showingQuestion && <Text style={styles.questionAnswer} >View question</Text>}
                  </TouchableOpacity>
                </Card>
              }
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
              </View>
            </View>
          }
          { (deck !== null ) && (questionsAsked > (questionsAndAnswers.length)) &&
            <View style={{ flex: 1 }}>
              <View style={styles.quizResultContainer}>
                    <Text style={styles.quizHeading} >You have finished {deck.title}</Text>
                    <Text style={styles.quizResultPercentage} >{Math.floor((correctAnswers / questionsAndAnswers.length) * 100)} %</Text>
                    <Text style={styles.correctQuizResults} >{correctAnswers} correct</Text>
                    <Text style={styles.incorrectQuizResults} >{incorrectAnswers} incorrect</Text>
                </View>
                <View style={styles.buttonContainer} >
                  <Button
                    title="Start Quiz Again"
                    backgroundColor="#000"
                    containerViewStyle={ styles.button }
                    icon={{name: 'play', type: 'foundation', buttonStyle: styles.button }}
                    onPress={ this.handleStartQuiz }
                  />
                  <Button
                    title="Go back to the deck"
                    backgroundColor="#000"
                    containerViewStyle={ styles.button }
                    onPress={ this.handleGoBackToDeck }
                  />
              </View>
            </View>
          }
        </View>
    );
  }
};
