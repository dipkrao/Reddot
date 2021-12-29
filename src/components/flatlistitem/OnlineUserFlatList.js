/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Icons from '../../constants/icons';
import Images from '../../constants/images';

const OnlineUserFlatList = (props) => {
    const category = props.category;
    const index = props.index;
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}>
                    <View style={styles.activityContainer}>
                        <View style={styles.activityBookedLeftContainer}>
                            <Image source={Images.avatar} style={{ height: 54,width:54, resizeMode: 'contain' }} />
                            <Badge value={<Image source={Icons.livecircle} style={{ height: 20, width: 20, resizeMode: 'contain' }} />} badgeStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }} containerStyle={{ position: 'absolute', top: 38, right: -7 }} />
                            {/* <Text>
                                hlo
                            </Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activityContainer: {
        paddingRight: 15
    },
    activityBookedLeftContainer: {
        width: 62,
        height: 62,
        backgroundColor: 'transparent',
        borderRadius: 24,
        borderColor: '#EC5F5F',
        borderWidth: 3.5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
});

export default OnlineUserFlatList;
