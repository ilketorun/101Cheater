import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation, route }) => {
    const navigateWithAlarmHandler = () => {
        alert("ALARM ALARM JANE'S PROFILE IS COMING")
        navigation.navigate('Profile', { name: 'Jane' })
    }
    const navigateWithoutAlarmHandler = () => {
        navigation.navigate('Profile', { name: 'Jane' })
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={navigateWithAlarmHandler} title="Go to Jane's profile with ALARM" color="#841584" />
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={navigateWithoutAlarmHandler} title="Go to Jane's profile without ALARM" color="#841584" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Home;