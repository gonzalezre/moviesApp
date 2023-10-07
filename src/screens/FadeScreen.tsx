import { View, Text, Animated, Button } from 'react-native'
import React, { useRef } from 'react'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginBottom: 10,
                opacity: opacity
            }}>

            </Animated.View>

            <Button
                title='FadeIn'
                onPress={() => fadeIn()}
            />
            <Button
                title='FadeOut'
                onPress={() => fadeOut()}
            />
        </View>
    )
}