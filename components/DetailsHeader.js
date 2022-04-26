import { View, Text, Image, } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { StatusBar} from 'react-native'
// import {StyleSheet } from 'react-native'

const DetailsHeader = ({data, navigation, CircleButton}) => {
    // const styles = StyleSheet.create({
    //     container: {
    //         paddingTop: 50,
    //     },
    //     stretch: {
    //         width: 10,
    //         height: 25,
    //         resizeMode: 'cover',
    //     },
    // });
    return (
            <View style={{ width: '100%', height: 300 }}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={{width:"100%", height:"100%"}}
                />
                <CircleButton
                left={15}
                imgUrl={assets.left}
                top={10}
                // handlePress={() => navigation.goBack()}
                />
            <CircleButton
                right={15}
                imgUrl={assets.heart}
                top={10}
                handlePress={() => navigation.goBack()}
            />

            </View>
        
    )
}

export default DetailsHeader