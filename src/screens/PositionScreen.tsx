import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}></View>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#28c4d9",
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: "#5856d6",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        right: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: "#f0a23b",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        bottom: 0,
        right:0
    },
    cajaVerde: {
        backgroundColor: "green",
        borderWidth: 10,
        borderColor: "white",
        // position: "absolute",
        // bottom: 0,
        // right:0,
        // left:0,
        // top:0,
        //En lugar de hacer todo lo comentado, para que la caja 
        //ocupe todo el alto y ancho disponible del padre
        //Se puede hacer asi
        ...StyleSheet.absoluteFillObject
    }
});