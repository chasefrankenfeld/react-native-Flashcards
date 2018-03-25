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


export default class Deck extends Component {

  handleAddCard = () => {
    alert("You will add a card")
  }

  handleStartQuiz = () => {
    alert("You are starting the quiz")
  }

  render() {

    return (
        <View
          style={styles.container}
        >
            <View style={styles.informationContainer}>
                <Text style={styles.heading} >Placeholder for card names</Text>
                <Text style={styles.numberOfCards} >{9} cards</Text>
            </View>
            <View style={styles.buttonContainer} >
                <Button
                    title="Add Card"
                    backgroundColor="#000"
                    containerViewStyle={ styles.button }
                    icon={{name: 'title', type: 'MaterialIcons', buttonStyle: styles.button }}
                    onPress={ this.handleAddCard }
                />
                <Button
                    title="Start Quiz"
                    backgroundColor="#000"
                    containerViewStyle={ styles.button }
                    icon={{name: 'title', type: 'MaterialIcons', buttonStyle: styles.button }}
                    onPress={ this.handleStartQuiz }
                />
            </View>
        </View>
    );
  }
};
