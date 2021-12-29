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
    ImageBackground,
} from 'react-native';
import Images from '../../constants/images';
import Icons from '../../constants/icons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import UserData from '../../assets/data/UserListData';
import OnlineUserFlatList from '../../components/flatlistitem/OnlineUserFlatList';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import HomeTopTab from '../../navigation/toptabs/HomeTopTab';

export default function Home() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 900);
    });

    if (loading) {
        return (
            <SkeletonPlaceholder style={{flex:1}}>
                <View style={styles.upperSkeleton} >

                </View>
                <View style={styles.upperSkeleton} >

                </View>
            </SkeletonPlaceholder>

        );
    }

    else {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ paddingRight: 10 }}>
                                <Image source={Images.userpicture} style={styles.profilepicturestyle} />
                                <Badge value={<Image source={Icons.greendot} style={{ height: 10, width: 10, resizeMode: 'contain' }} />} badgeStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }} containerStyle={{ position: 'absolute', top: 25, right: 7 }} />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={styles.usernamestyle}>
                                    Hallo, Samuel!
                                </Text>
                                <View style={{ flexDirection: 'row', marginLeft: -4 }}>
                                    <Image source={Icons.pointsicon} style={styles.pointsiconstyle} />
                                    <Text style={styles.pointtext}>
                                        +1600 Points
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 20 }}>
                            <Image source={Icons.bellicon} style={styles.pointsiconstyle} />
                            <Badge value={<Image source={Icons.reddot} style={styles.badgestyle} />} badgeStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }} containerStyle={{ position: 'absolute', top: -8, right: 15 }} />
                        </View>
                    </View>

                    <View style={styles.availableActivitiesItems}>
                        <FlatList
                            data={UserData}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({ item, index }) => <OnlineUserFlatList category={item} index={index} />}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#303030' }}>
                            Upcoming&nbsp;
                        </Text>
                        <Text style={{ fontSize: 18, color: '#303030' }}>
                            movies this week
                        </Text>
                    </View>

                    <View style={styles.header}>
                        <HomeTopTab />
                    </View>
                </ScrollView>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profilepicturestyle: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    usernamestyle: {
        fontSize: 18,
        fontWeight: '800'
    },
    pointtext: {
        fontSize: 14,
        color: '#FCD034',
        fontWeight: '800',
        paddingLeft: 3
    },
    pointsiconstyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    badgestyle: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },
    availableActivitiesItems: {
        paddingVertical: 20,
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    upperSkeleton: {
        height: 50,
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#AFA9AB',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        width: "100%",
        height: 500,
        paddingVertical: 20,
    },
});