import { View, Pressable ,Text } from 'react-native'
import React from 'react'



const ChangeProfile = () => {
  return (
    <View>
      <Pressable onPress={() => alert('Hello Coder')}>
        <Text> Click Me </Text>
      </Pressable>
    </View>
  )
}

export default ChangeProfile