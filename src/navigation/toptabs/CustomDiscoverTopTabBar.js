/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function CustomDiscoverTopTabBar({
    state,
    descriptors,
    navigation,
    position,
}) 
{
    return (
        <View style={{ paddingVertical: 5}}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, height: 50, flexDirection: 'row'}} style={{ flexDirection: 'row'}} horizontal showsHorizontalScrollIndicator={false}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel;
                    const isFocused = state.index === index;
                    console.log('index'+icons.i)

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                    });

                    return (
                        <View>
                            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'dark-content'} />
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ paddingHorizontal: 10 }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    colors={
                                        isFocused ? ['#EC5F5F' , '#EC5F5F'] : ['#F6F7FA', '#F6F7FA']
                                    }
                                    style={styles.linearGradient}>
                                    <Text
                                        style={{
                                            color: isFocused ? COLORS.white : COLORS.muddyText,
                                            fontSize: 14,
                                        }}>
                                        {label}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 5,
    },
});
