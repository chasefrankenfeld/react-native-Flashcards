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


export default class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz Time!"
    }
  }

  handleCorrectAnswer = () => {
    alert("Nice work 💪 That is the correct answer!")
  }

  handleIncorrectAnswer = () => {
    alert("Derp! Better luck next time...")
  }

  render() {

    return (
        <View
          style={styles.container}
        >
            <Card
              containerStyle={ styles.card }
              title="Question 1 of 1"
            >
                <Text style={styles.heading} >Placeholder question</Text>
                <Text style={styles.questionAnswer} >View answer</Text>
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
            </View>
        </View>
    );
  }
};
