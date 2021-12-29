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
import Images from '../../constants/images'
import { COLORS, FONTS, SIZES } from '../../constants/Theme';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={{ alignSelf: 'center' }}>
                <Image source={Images.logo} style={styles.logoImage} />
            </View>
            <View>
                <Text style={styles.label}>Welcome to Red Dot Apps</Text>
                <Text style={styles.subLabel}>This is an assignment</Text>
            </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 50, paddingHorizontal: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttoncontainerstyle}>
                        <Text style={styles.buttonstyle}>
                            Get Started
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
        justifyContent: 'center',
    },
    textstyle: {
        fontSize: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    logoImage: {
        width: 200,
        height: 220,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 20,
        fontWeight:'900',
    },
    subLabel: {
        fontSize: 16,
        alignSelf: 'center',
        paddingVertical: 20,
    },
    buttoncontainerstyle: {
        backgroundColor: '#EC5F5F',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 320,
    },
    buttonstyle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
});