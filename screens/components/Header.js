import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className="flex-row pb-3 mx-4 space-x-2 items-center">
        <Image 
        source={{ 
            uri: 'https://links.papareact.com/wru'
        }}
        className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
            <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
            <Text>Current Location</Text>
        </View>
    </View>
  )
}

export default Header