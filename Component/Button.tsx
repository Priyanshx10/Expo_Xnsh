import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View className="bg-white  "> 
      <Pressable onPress={() => alert('Welcome to Debugging')}>
        <Text> Software Developer </Text>
      </Pressable>
    </View>
  )
}

export default Button