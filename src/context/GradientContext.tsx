import { View, Text, Image } from 'react-native'
import React, { createContext, useState } from 'react'

interface ColorsImage {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ColorsImage;
    previousColors: ColorsImage;
    setMainColors: (colors: ColorsImage) => void;
    setPrevMainColors: (colors: ColorsImage) => void;
}

export const GradientContext = createContext({} as ContextProps); //todo: define type

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ColorsImage>({
        primary: 'red',
        secondary: 'blue'
    });

    const [previousColors, setPreviousColors] = useState<ColorsImage>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = (colors: ColorsImage) => {
        setColors(colors)
    }

    const setPrevMainColors = (colors: ColorsImage) => {
        setPreviousColors(colors)
    }

    return (
        <GradientContext.Provider value={{
            colors,
            previousColors,
            setMainColors,
            setPrevMainColors,
        }}>
            {children}
        </GradientContext.Provider>
    )
}