import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    card: {
        flex: 1,
        alignItems: "stretch",
    },
    FormValidationMessageStyle: {
        paddingBottom: Platform.OS === 'ios' ? 6 : 12,
    }

})
