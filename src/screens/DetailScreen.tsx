import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }
const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (

        <ScrollView>
            <View style={{
                width: '100%',
                height: screenHeight * 0.7,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 8,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                overflow: 'hidden'

            }}>
                <Image
                    source={{ uri: uri }}
                    style={{
                        flex: 1,
                    }}
                />
            </View>

            <View style={{
                marginHorizontal: 20,
                marginTop: 20
            }}>
                <Text style={{ fontSize: 16, opacity: 0.8 }}>{movie.original_title}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{movie.title}</Text>

            </View>
        </ScrollView>
    )
}