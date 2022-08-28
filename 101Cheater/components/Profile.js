import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Profile = ({ navigation, route }) => {
    const onPressHandler = () => {
        navigation.navigate('Home', { name: 'Jane' })
    }

    return (
        <View style={styles.container}>
            <Text>JANE'S PROFILE</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go back to Home" onPress={onPressHandler} />
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
});

export default Profile;