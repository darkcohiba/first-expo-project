import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const Homepage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This updated on my phone!</Text>
            <Text style={styles.text}>WOW</Text>
            <StatusBar style="auto" />
        </View>
    );
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: "black",
        borderRadius: 50,
      },
      text: {
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 20,
        borderRadius: 10,
        overflow: "hidden",
        opacity: 10,
      }
    });

export default Homepage;
    