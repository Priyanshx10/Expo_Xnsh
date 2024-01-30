import { Image, View ,Text } from 'react-native';
import React from 'react'

const ImagePlaceHolder = require('../assets/Priyansh.jpeg')

const Profile = () => {
  return (
    <View className=" flex flex-1 items-center justify-center rounded-xl ">
        <Image source={ImagePlaceHolder} style={{width:200, height:200, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}/>
      </View>
  )
}

export default Profile