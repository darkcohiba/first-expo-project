import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react'

const Homepage = () => {
    return (
        <View className="items-center bg-red-800 border-black border-4 rounded-md h-3/4">
            <View className="bg-black rounded-md m-2">
                <Text className="text-red-400 text-center w-3/4  m-4">This updated on my phone!</Text>
            </View>
            <Text className="text-center text-purple-800 bg-green-400 w-1/2">WOW</Text>
            <StatusBar style="auto" />
        </View>
    );
}
    
    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     backgroundColor: 'pink',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderWidth: 20,
    //     borderColor: "black",
    //     borderRadius: 50,
    //   },
    //   text: {
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderWidth: 20,
    //     borderRadius: 10,
    //     overflow: "hidden",
    //     opacity: 10,
    //   }
    // });

export default Homepage;
    