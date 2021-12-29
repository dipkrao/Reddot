import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomDiscoverTopTabBar from "./CustomDiscoverTopTabBar";
import Icons from "../../constants/icons";
import All from "../../screens/bottomTabBar/homePageTabBar/All";
import Actions from "../../screens/bottomTabBar/homePageTabBar/Actions";
import RomCom from "../../screens/bottomTabBar/homePageTabBar/RomCom";
import ThreeD from "../../screens/bottomTabBar/homePageTabBar/ThreeD";
import { COLORS } from "../../constants";

const Tab = createMaterialTopTabNavigator();

function HomeTopTab({ index, descriptors, navigation, position }) {
  const isFocused = index === index;

    return (
      <Tab.Navigator
        tabBar={props => <CustomDiscoverTopTabBar {...props} />}
        initialRouteName={Icons.reddot}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: 'white',
          },
          activeTintColor: '#EC5F5F',
          inactiveTintColor: '#6F7FAF',
          tabBarStyle: { backgroundColor: COLORS.background },
  
        }}>
        <Tab.Screen name="All" component={All} options={{ tabBarLabel: 'All' }} />
        <Tab.Screen name="RomCom" component={RomCom} options={{ tabBarLabel: 'RomCom' }} />
        <Tab.Screen name="Actions" component={Actions} options={{ tabBarLabel: 'Actions' }} />
        <Tab.Screen name="ThreeD" component={ThreeD} options={{ tabBarLabel: '3D Animination' }} />
      </Tab.Navigator>
    );
  }
  export default HomeTopTab;