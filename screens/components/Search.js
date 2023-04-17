import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { 
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
   } from "react-native-heroicons/outline"

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput 
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
        />
      </View>
      <AdjustmentsVerticalIcon color="00CCBB" />
    </View>
  )
}

export default Search;


      /* <AdjustmentsHorizontalIcon color="00CCBB" /> */
