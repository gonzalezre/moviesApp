import { View, Text, Image, Dimensions, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }
const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (

        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri: uri }}
                        style={{
                            flex: 1,
                        }}
                    />
                </View>

            </View>

            <View style={{
                marginHorizontal: 20,
                marginTop: 20
            }}>
                <Text style={{ fontSize: 16, opacity: 0.8 }}>{movie.original_title}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{movie.title}</Text>

            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color={'grey'} style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }


            {/* Close */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color='white'
                    name='arrow-back-outline'
                    size={60}

                />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
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
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        //overflow: 'hidden'

    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 30,
        left: 5
    }
});