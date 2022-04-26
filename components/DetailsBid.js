import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants' 
import { EthPrice } from './SubInfo'


const DetailsBid = ({bid}) => {
  return (
    <View>
      <Image
      source={bid.image}
      resizeMode="contain"
      style={{width:48, height:48}}
      />
      <View style={{paddingLeft: 12}}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small, 
          color: COLORS.primary
        }}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small -2 ,
          color: COLORS.secondary,
          marginTop: 3,
          marginBottom:5
        }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid