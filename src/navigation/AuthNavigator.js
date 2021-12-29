import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import MovieCardDetail from '../screens/CardDetail/MovieCardDetail';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} >

            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
            <Stack.Screen name="MovieCardDetail" component={MovieCardDetail} />
        </Stack.Navigator>
    );
}