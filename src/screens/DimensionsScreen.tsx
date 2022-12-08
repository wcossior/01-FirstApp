import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get("window");

export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={styles.cajaMorada}>
                <View style={styles.cajaNaranja}>
                </View>
            </View>
            <Text> W: {width}  H: {height} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cajaMorada: {
        width: "100%",
        height: 300,
        backgroundColor: "#5856d6"
    },
    cajaNaranja: {
        width: "50%",
        height: "50%",
        backgroundColor: "#f0a23b"
    }
});