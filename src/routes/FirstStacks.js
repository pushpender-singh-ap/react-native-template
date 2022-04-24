import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function FirstStacks() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen
                name="Splash"
                component={Splash}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: false
                }}
            />

        </Stack.Navigator>
    );
}