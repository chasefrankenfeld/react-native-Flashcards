import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    },
    card: {
        borderRadius: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
    },
    questionAnswer: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3,
        fontWeight: 'bold',
        color: '#ff0000'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "stretch",
        margin: 5,
    },
    quizResultContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 60
    },
    quizHeading: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 40,
    },
    correctQuizResults: {
        fontSize: 30,
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
        color: '#00FF00',
    },
    incorrectQuizResults: {
        fontSize: 30,
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
        color: '#ff0000',
    },
    quizResultPercentage: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 40,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: 40,
    },
    button: {
        alignItems: "stretch",
        margin: 5,
    }
})
