import React from 'react'
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
    }}>
        <Text style={{
            fontSize: 55,
            textAlign: "center",
        }}>
            Hola Walder
        </Text>
    </View>
  )
}
