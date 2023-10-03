import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {

    const { moviesNowPlaying, isLoading } = useMovies();

    if (isLoading) {
        return (
            <View style={{
                flex: 1, justifyContent: 'center', alignContent: 'center'
            }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }


    return (
        <View>
            <Text>{moviesNowPlaying[2]?.title}</Text>
        </View>
    )
}