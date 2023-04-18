import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { 
    ArrowRightIcon
} from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description}) => {
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
            {/* Restuarant Cards */}
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
        </ScrollView>
    </View>
  )
}

export default FeaturedRow


