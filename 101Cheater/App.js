import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Profile from './components/Profile'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
             <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{ title: 'Profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}