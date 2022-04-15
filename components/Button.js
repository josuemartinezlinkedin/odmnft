import {TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
        style={{ 
            widht:40, 
            height:40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
            }}
        onPress={handlePress}
    >
        <Image
        source={imgUrl}
        resizeMode='contain'
        style={{width:33, height:18}}
        />
    </TouchableOpacity>
  )
}

const RectButton = ({handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: 100,
                height:45,
                marginBottom: 10,
                ...props
            }}
            onPress={handlePress}
        >
          <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.white,
              textAlign:'center',
              marginTop: 15
          }}>
              Place a bid
          </Text>
        </TouchableOpacity>
    )   
}

export { CircleButton, RectButton }