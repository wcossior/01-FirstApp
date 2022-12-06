import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    position?: "br" | "bl";
    onPress: () => void;

}

export const FloatingActionButton = ({ title, onPress, position = "br" }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                style={[
                    styles.fabLocation,
                    (position === "br") ? styles.right : styles.left
                ]}
                onPress={onPress}
            >
                <View style={styles.floatingActionButton}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        );
    }
    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === "br") ? styles.right : styles.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#28425b", false, 30)}
                >
                    <View style={styles.floatingActionButton}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    return (Platform.OS === "ios") ? ios() : android();
}

const styles = StyleSheet.create({
    floatingActionButton: {
        backgroundColor: "#5856D6",
        borderRadius: 100,
        justifyContent: "center",
        width: 60,
        height: 60,
    },
    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
    },
    fabLocation: {
        position: "absolute",
        bottom: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
});