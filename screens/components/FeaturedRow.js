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
            <RestaurantCard />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow


