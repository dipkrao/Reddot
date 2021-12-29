/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, FlatList, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllItem from '../../../components/flatlistitem/AllItem';
import Images from '../../../constants/images'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { animatedStyles, scrollInterpolator } from '../../../utils/animations';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    {
        id: '1',
        title: 'First Item',

    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',

    },
    {
        id: '4',
        title: 'Fourth Item',
    },

];

export default function All() {
    const renderItem = ({ item }) => (
        <AllItem />
    );

    const [activeSlide, setActiveSlide] = useState(0);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('MovieCardDetail')}>
                <Carousel
                    active
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal={true}
                    sliderWidth={450}
                    itemWidth={300}
                    inactiveSlideShift={1}
                    useScrollView={true}
                    inactiveSlideScale={0.9}
                    inactiveSlideOpacity={0.5}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                <View style={styles.paginationContainer}>
                    <Pagination
                        dotsLength={DATA.length}
                        activeDotIndex={activeSlide}
                        dotStyle={styles.dotStyle}
                        inactiveDotStyle={styles.inactiveDotStyle}
                        containerStyle={{ width: 50, height: 20 }}
                    />
                </View>
            </TouchableOpacity>
            {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                horizontal
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20 }}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: -60,
        backgroundColor: 'white',
    },
    imagestyle: {
        height: 320,
        width: '80%',
        borderRadius: 60,
        resizeMode: 'contain'
    },
    imagebackgroundstyle: {
        height: 320,
        borderRadius: 60,
    },
    paginationContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 60,
    },
    dotStyle: {
        width: 18,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#EC5F5F',
    },
    inactiveDotStyle: {
        width: 25,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#EEEEEE',
    },
})