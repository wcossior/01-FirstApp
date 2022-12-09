import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
    return (
        // <HolaMundoScreen/>
        // <CounterScreen/>
        <SafeAreaView style={{ flex: 1 }}>
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionsScreen /> */}
            <PositionScreen />
        </SafeAreaView>
    )
}
