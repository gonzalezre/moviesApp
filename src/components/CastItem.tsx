import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/movieInterface'

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 8,
        marginHorizontal: 8,
    },
    actorInfo: {
        marginLeft: 8,
        padding: 8,
        paddingStart: 0,
    }
});