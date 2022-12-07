import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <FloatingActionButton
                title='+1'
                onPress={() => setContador(contador + 1)}
            />
            <FloatingActionButton
                title='-1'
                position='bl'
                onPress={() => setContador(contador - 1)}
            />
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
});