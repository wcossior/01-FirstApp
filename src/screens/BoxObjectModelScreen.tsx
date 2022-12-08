import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxObjectModel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#488f89",
    },
    title: {
        borderWidth: 10,
        fontSize: 25,
        margin: 20,
        padding: 25,
    },
});
