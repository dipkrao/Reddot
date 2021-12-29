import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ImageBackgroundBase } from 'react-native';
import Images from '../../constants/images';
import Icons from '../../constants/icons';

const AllItem = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.paddingContainer}>
                <ImageBackground source={Images.basebackground} style={styles.imagestyle} >
                    <View style={{ justifyContent: 'space-between' }}>
                        <View style={styles.yearcontainerstyle}>
                            <Text style={styles.yearstyle}>
                                2021
                            </Text>
                        </View>
                        <View style={{ paddingTop:140 }}>
                            <Text style={styles.titlestyle}>
                                This is a movie name
                            </Text>

                            <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                                <Image source={Icons.stopwatch} style={styles.pointsiconstyle} />
                                <Text style={styles.timestyle}>
                                    3 Hr 20 mins
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                <View style={{ backgroundColor: '#0082CD', padding: 2, borderRadius: 5, marginRight: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 12, padding: 3 }}>
                                        Romantic
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: '#8D5EF2', padding: 2, borderRadius: 5 }}>
                                    <Text style={{ color: 'white', fontSize: 12, padding: 3 }}>
                                        RomCom
                                    </Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
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

                        </View>
                    </View>
                </ImageBackground>
        </View>
    );
}

export default AllItem;

const styles = StyleSheet.create({
    paddingContainer: {
        paddingBottom: 20,
    },
    imagestyle: {
        height: 350,
        width: 280,
        paddingHorizontal: 20,
    },
    yearcontainerstyle: {
        backgroundColor: '#FCCC75',
        padding: 2,
        borderRadius: 20,
        marginRight: 10,
        width: 40,
        marginTop: 20
    },
    yearstyle: {
        color: 'white',
        fontSize: 12,
        padding: 3,
        alignSelf: 'center',
    },
    titlestyle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF'
    },
    pointsiconstyle: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
    },
    timestyle: {
        fontSize: 14,
        color: 'white',
        paddingLeft: 10
    },
    profilepicturestyle: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    usernamestyle: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '800'
    },
    pointtext: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '800',
        paddingLeft: 3
    },
})