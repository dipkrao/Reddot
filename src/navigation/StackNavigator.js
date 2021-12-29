import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import Home from '../screens/bottomTabBar/Home';
import Welcome from '../screens/auth/Welcome';
import Activity from '../screens/bottomTabBar/Activity';
import Profile from '../screens/bottomTabBar/Profile';
import Notifications from '../screens/bottomTabBar/Notifications';
import Login from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';
import MovieCardDetail from '../screens/CardDetail/MovieCardDetail';
import ThreeD from '../screens/bottomTabBar/homePageTabBar/ThreeD';
import Actions from '../screens/bottomTabBar/homePageTabBar/Actions';
import RomCom from '../screens/bottomTabBar/homePageTabBar/RomCom';
import All from '../screens/bottomTabBar/homePageTabBar/All';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Activity} />
            <Stack.Screen name="Notification" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="MovieCardDetail" component={MovieCardDetail} />
            <Stack.Screen name="All" component={All} />
            <Stack.Screen name="RomCom" component={RomCom} />
            <Stack.Screen name="Actions" component={Actions} />
            <Stack.Screen name="3D" component={ThreeD} />
        </Stack.Navigator>
    );
}