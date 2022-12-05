import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.buttonIncrease}>
                    <Text>Incrementar en 1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 45,
        top: -15
    },
    buttonIncrease: {
        backgroundColor: "red",
        borderRadius: 100
    }
});