import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBackground } from '../components/GradientBackground';
import { GradientContext } from '../context/GradientContext';
import { getImageColors } from '../helpers/getColors';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext);



    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        await getImageColors(uri);
        const [primary = 'green', secondary = 'white'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying])


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
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* <MoviePoster movie={moviesNowPlaying[0]} /> */}

                    {/* main carousel */}
                    <View style={{ height: 440, }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWith}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)} //TRIGGERS WHEN CHANGING FROM CARD
                        />
                    </View>

                    {/* most popular */}
                    <HorizontalSlider title='Most popular 🔥' movies={popular} />

                    {/* top rated */}
                    <HorizontalSlider title='Top rated 🔝' movies={topRated} />

                    {/* upcoming */}
                    <HorizontalSlider title='Upcoming 🔜' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>


    )
}