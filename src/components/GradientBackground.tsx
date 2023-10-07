import { View, StyleSheet, Animated } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks/useFade'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, previousColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade();
    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors])



    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <LinearGradient
                //colors={['#084f6A', '#75CEDB', 'white']}
                colors={[previousColors.primary, previousColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    //colors={['#084f6A', '#75CEDB', 'white']}
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.5 }}
                />
            </Animated.View>
            {children}
        </View>
    )
}