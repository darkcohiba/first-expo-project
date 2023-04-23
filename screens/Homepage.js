import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';
import {client} from '../sanity';


const Homepage = () => {
    const navigation = useNavigation()
    const [featured, setFeatured] = useState([])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
            // headerTitle: 'Sam',
        })
    },[])
    const hello = {
        "sam": "Sam",
        "name": "Sam",
        "average": 0
    }
    async function getFeatured() {
        const featured = await client.fetch(`
        *[_type == 'featured']{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }
        `)
        return featured
    }

    useEffect(()=>{
        console.log(getFeatured())
        
        console.log(hello)
    },[])

    
    return (
        <SafeAreaView className="bg-white pt-5">
            <Header />
            <Search />
            <ScrollView
                className="bg-pink-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Categories />
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid placements from our partners"
                />
                <FeaturedRow
                    id="2" 
                    title="Tasty Discounts"
                    description="Evryone's been enjoying these juicy discounts!"
                />
                <FeaturedRow
                    id="3"
                    title="Offers near you"
                    description="Why not support your local restaurant!"
                />
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
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


    // <View className="items-center bg-red-800 border-black border-4 rounded-md h-3/4">
    //         <View className="bg-black rounded-md m-2">
    //             <Text className="text-red-400 text-center w-3/4  m-4">Weeee!</Text>
    //         </View>
    //         <Text className="text-center text-purple-800 bg-green-400 w-1/2">WOW</Text>
    //         </View>


export default Homepage;
    