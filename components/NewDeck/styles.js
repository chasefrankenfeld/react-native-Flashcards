import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
    },
    card: {
        borderRadius: 20,
    },
    FormValidationMessageStyle: {
        paddingBottom: Platform.OS === 'ios' ? 5 : 12,
    }

})
