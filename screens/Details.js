import React from 'react'
import {View, Image, FlatList, SafeAreaView, Text} from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants'
import { CircleButton, RectButton, FocusedStatusBar, DetailsBid, DetailsDescr, DetailsHeader } from '../components'

const Details = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor='transparent'
      translucent={true}
      />
      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical: SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1
      }}>
        <RectButton minwidth={220} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>
      <FlatList
      data={data.bids}
      renderItem={({item}) => <DetailsBid bid={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3 }}
      ListHeaderComponent={()=> (
        <React.Fragment>
          <DetailsHeader data={data} navigation={navigation} CircleButton={CircleButton}/>
        </React.Fragment>
        
      )}
      />
    </SafeAreaView>
  )
}

export default Details