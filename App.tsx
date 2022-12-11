import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
    return (
        // <HolaMundoScreen/>
        // <CounterScreen/>
        <SafeAreaView style={{ flex: 1 }}>
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionsScreen /> */}
            {/* <PositionScreen /> */}
            {/* <FlexScreen /> */}
            <TareaScreen />
        </SafeAreaView>
    )
}
