import { View, Text, Image } from 'react-native'
import { 
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon
 } from "react-native-heroicons/outline"
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
      <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="00CCBB" />
          </Text>
      </View>
      <UserIcon size={35} color="00CCBB" />


    </View>
  )
}

export default Header