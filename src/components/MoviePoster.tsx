import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';



interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const moviepath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 5,
            }}
        >
            <View style={{
                flex: 1,
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 8,
            }}>
                <Image
                    style={{
                        flex: 1,
                        borderRadius: 16,

                    }}
                    source={{
                        uri: moviepath
                    }}
                />
            </View>

        </TouchableOpacity>
    )
};