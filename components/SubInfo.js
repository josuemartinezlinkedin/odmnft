import { View, Text, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  )
}
const EthPrice = () => {
    return (
        <View>
            <Text>EthPrice</Text>
        </View>
    )
}
const ImageCmp = ({imgUrl, index}) => {
    return (
      <Image
      source={imgUrl} resizeMode='contain'
      style={{
          width:48, height:48, marginLeft:index === 0 ? 0 : -SIZES.font
      }} 
      />
    )
}
const People = () => {
    return (
        <View style={{
            flexDirection:'row'
        }}>
            {[assets.person02, assets.person03,assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index}/>                 
                )
            )
            }
        </View>
    )
}

const EndDate = () => {
    return (
        <View>
            <Text>EndDate</Text>
        </View>
    )
}
const SubInfo = () => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop:-SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <People />
            <Text>SubInfo</Text>
        </View>
    )
}

export { NFTTitle, EthPrice, ImageCmp, People, EndDate, SubInfo }   
