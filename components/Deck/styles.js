import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    },
    informationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        marginLeft: 3,
        marginRight: 3,
    },
    numberOfCards: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3,
        textAlign: "center",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "stretch",
        margin: 5,
    }
})
