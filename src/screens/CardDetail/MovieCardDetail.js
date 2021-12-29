import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StatusBar,
} from 'react-native';
import Icons from '../../constants/icons';
import Images from '../../constants/images';

const DATA = [
    {
        id: '1',
        title: 'Romantic',
    },

];

export default function MovieCardDetail() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
            <View style={{ backgroundColor: '#0082CD', padding: 2, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: 'white', fontSize: 12, padding:3 }}>
                    Romantic
                </Text>
            </View>
            <View style={{ backgroundColor: '#8D5EF2', padding: 2, borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 12, padding:3 }}>
                    RomCom
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', zIndex: 1000, padding: 16 }}>
                    <View style={styles.imagecontainerstyle}>
                        <Image source={Icons.backarrow} style={styles.backIconSize} />
                    </View>
                </TouchableOpacity>
                <Image source={Images.videobox} style={styles.imagestyle}>
                </Image>

                <View>
                    <Text style={styles.titlestyle}>
                        This is a movie name
                    </Text>
                </View>

                <View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingHorizontal:10 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ paddingRight: 10 }}>
                            <Image source={Images.userpicture} style={styles.profilepicturestyle} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'flex-start' }}>
                            <Text style={styles.usernamestyle}>
                                Laurel Seilha
                            </Text>
                            <View style={{ flexDirection: 'row', marginLeft: -4 }}>
                                <Text style={styles.pointtext}>
                                    Director
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                        <Image source={Icons.stopwatch} style={styles.pointsiconstyle} />
                        <Text style={styles.timestyle}>
                            3 Hr 20 mins
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.bodystyle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s
                    </Text>
                </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttoncontainerstyle}>
                        <Text style={styles.buttonstyle}>
                            Share
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    imagecontainerstyle: {
        backgroundColor: '#F6F7FA',
        padding: 10,
        borderRadius: 5
    },
    backIconSize: {
        width: 21,
        height: 24,
        resizeMode: 'contain',
    },
    imagestyle: {
        width: '100%',
        height: 250
    },
    titlestyle: {
        fontSize: 20,
        fontWeight: '800',
        padding: 20,
        color: '#303030'
    },
    profilepicturestyle: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    usernamestyle: {
        fontSize: 16,
        fontWeight: '800'
    },
    pointtext: {
        fontSize: 14,
        color: '#9D9FA0',
        fontWeight: '800',
        paddingLeft: 3
    },
    pointsiconstyle: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
    },
    timestyle: {
        fontSize: 14,
        paddingLeft: 10
    },
    bodystyle: {
        fontSize: 15,
        color: '#8C8C8C',
        lineHeight: 22,
        flexWrap: 'wrap',
        textAlign: 'justify'
    },
    buttoncontainerstyle: {
        backgroundColor: '#EC5F5F',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 330,
    },
    buttonstyle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
});