import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

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
    )
}