import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from '../constants/icons';
import Home from '../screens/bottomTabBar/Home';
import Activity from '../screens/bottomTabBar/Activity';
import Profile from '../screens/bottomTabBar/Profile';
import Notifications from '../screens/bottomTabBar/Notifications';
import { Badge } from 'react-native-elements/dist/badge/Badge';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabBarNavigator(props, focused) {

    const [tabBarShowLine, setTabBarShowLine] = useState(false);
    return (
        <Tab.Navigator
            shifting={true}
            labeled={false}
            activeColor={'#EC5F5F'}
            lazy={false}
            barStyle={{ backgroundColor: '#FFFFFF', height:50, justifyContent:'center' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#9b2923' : '#888889';
                    const linetintColor = focused ? '#9b2923' : '#FFFFFF';
                    switch (route.name) {
                        case 'Home':
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderTopRightRadius: 45,
                                        borderBottomRightRadius: 45,
                                    }}>
                                    <Image
                                        source={Icons.homeicon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                     <Image
                                        source={Icons.activemark}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: linetintColor,
                                            width: 15,
                                            height: 15,
                                        }}
                                    />
                                </View>
                            );
                        case 'Cart':
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 45,
                                    }}>
                                    <Image
                                        source={Icons.activityicon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                      <Image
                                        source={Icons.activemark}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: linetintColor,
                                            width: 15,
                                            height: 15,
                                        }}
                                    />
                                </View>
                            );
                        case 'Notification':
                            return (
                                <TouchableOpacity onPress={() => setTabBarShowLine(!tabBarShowLine)}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Image
                                            source={Icons.notificationicon}
                                            resizeMode="contain"
                                            style={{
                                                tintColor: tintColor,
                                                width: 30,
                                                height: 30,
                                            }}
                                        />
                                            <Badge value={<Image source={Icons.circlenotification}  style={{ height: 18, width: 18, resizeMode: 'contain' }} />} badgeStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }} containerStyle={{ position: 'absolute', top: -14, right: -6 }} />
                                        <Image
                                        source={Icons.activemark}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: linetintColor,
                                            width: 15,
                                            height: 15,
                                        }}
                                    />
                                    </View>
                                </TouchableOpacity>

                            );
                        case 'Profile':
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 45,
                                    }}>
                                    <Image
                                        source={Icons.profileicon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                      <Image
                                        source={Icons.activemark}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: linetintColor,
                                            width: 15,
                                            height: 15,
                                        }}
                                    />
                                </View>
                            );

                    }
                },
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12 },
                tabBarInactiveBackgroundColor: 'red',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Activity} />
            <Tab.Screen name="Notification" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
