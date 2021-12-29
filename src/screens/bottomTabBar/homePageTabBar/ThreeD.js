/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ThreeD() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ paddingTop:20 }}>
               <Text>
                  3D
               </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
