import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { 
    ArrowRightIcon
} from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import { client } from '../../sanity'
import { urlFor } from '../../sanityImage'

const FeaturedRow = ({ id, title, description}) => {
    const [featuredRest, setFeaturedRest] = useState([])

    useEffect(()=>{
        client.fetch(`
        *[_type == 'featured' && _id == $id ]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type-> {
                name
              }
            },
          }[0]
        `,{id}
        ).then(data=> setFeaturedRest(data.restaurants))
        .catch(err=> console.error(err))
    },[])
    function returnUrl(image){
        let url = urlFor(image).url().toString()
        let replacement = ["31ql7cwb", "production"]
        let newUrl = url.replace("undefined", replacement[0])
        newUrl = newUrl.replace("undefined", replacement[1])
        console.log(newUrl)
        return newUrl
    }
    console.log(returnUrl(featuredRest[0]?.image))
    const featuredRestCards = featuredRest?.map((restaurant, idx)=> {
        // console.log(idx)
        return(<RestaurantCard 
            id={restaurant._id}
            imgUrl={returnUrl(restaurant.image)}
            // imgUrl="https://links.papareact.com/gn7"
            title={restaurant.name}
            rating={restaurant.rating}
            address={restaurant.address}
            genre={restaurant.genre}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
        />
    )})

  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg ">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            className="pt-4"
        >
            {featuredRestCards}
            {/* <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 1"
                rating={4.5}
                address="123 Main st"
                genre="Japanese"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 1"
                rating={4.5}
                address="123 Main st"
                genre="Japanese"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 1"
                rating={4.5}
                address="123 Main st"
                genre="Japanese"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            /> */}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow


