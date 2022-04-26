import {useState} from 'react'
import { View, Text } from 'react-native'
import { EthPrice, NFTTitle } from './SubInfo' 
import { COLORS, SIZES,  FONTS } from '../constants'

const DetailsDescr = ({data}) => {
  //a way to show read more if description is long
  const[readMore, setReadMore] = useState(false);
  const [moreText, setMoreText] = useState(data.description.slice(0,100));
  return (
    <>
      <View style={{
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <NFTTitle
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price}/>
      </View>
      <View style={{marginVertical: SIZES.extraLarge }}>
        <Text style={{
          fontSize:SIZES.font, 
          fontFamily: FONTS.semiBold, 
          color:COLORS.primary
        }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small, 
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large, 
            color: COLORS.secondary
          }}>
            {moreText}
            {!readMore && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary}}
              onPress={() => {
                if(!readMore) {
                  setMoreText(data.description);
                  setReadMore(true);
                } else {
                  setMoreText(data.description.slice(0,100))
                  setReadMore(false)
                }
              }}
              >
                {readMore ? 'Show Less': 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
    
  )
}

export default DetailsDescr