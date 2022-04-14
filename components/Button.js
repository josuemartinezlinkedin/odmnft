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

const RectButton = () => {
    return (
        <View>
            <Text>RectButton</Text>
        </View>
    )
}

export { CircleButton, RectButton }