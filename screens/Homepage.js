import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';
import {client} from '../sanity';
import 'react-native-url-polyfill/auto';




const Homepage = () => {
    const navigation = useNavigation()
    const [featured, setFeatured] = useState([])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
            // headerTitle: 'Sam',
        })
    },[])

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
        getFeatured().then(data=> setFeatured(data))
        // client.fetch(`
        // *[_type == 'featured']{
        //     ...,
        //     restaurants[]->{
        //       ...,
        //       dishes[]->
        //     }
        //   }
        // `).then(data => console.log(data))
    },[])
    const featuredRows = featured?.map(feature => (
        <FeaturedRow
            key={feature._id}
            id={feature._id}
            title={feature.name}
            description={feature.short_description}
        />
    ))
    
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
                {featuredRows}

                {/* <FeaturedRow
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
                /> */}
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


export default Homepage;
    