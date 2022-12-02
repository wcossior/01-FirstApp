import React from 'react'
import { Text, View } from 'react-native'

export const App = () => {
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
                Hola mundo
            </Text>
        </View>
    )
}
