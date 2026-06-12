import React from "react";
import { View, Text, stylesheet } from "react-native";

export default function Visual({ advice }) {
    if (!advice) return null;

    return (
        <View style={styles.card}>
            <Text style= {styles.idText}>Conselho #{advice.id}</Text>
            <Text style={styles.adviceText}>"{advice.advice}</Text>
        </View>
    );
}

const styles = stylesheet.create({
    card: {
        backgroundColor: "#fffff",
        borderRadius: 12,
        padding: 24,
        width: "90%",
        maxWidth: 400,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 20,
    },
    idText: {
        fontSize: 16,
        fontweight: "bold",
        marginBottom: 10,
    },
    adviceText: {
        fontSize: 14,
        lineHeight: 20,
    },
});