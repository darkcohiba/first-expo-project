import { View, Text } from 'react-native'
import React from 'react'

const FeaturedRow = ({title, description}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default FeaturedRow