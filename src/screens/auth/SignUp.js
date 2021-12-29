import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
    StatusBar,
    Linking,
    Alert 
} from 'react-native';
import Images from '../../constants/images'
import Icons from '../../constants/icons'
import auth from "@react-native-firebase/auth"


export default function SignUp() {
    const navigation = useNavigation();


    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // SIGNUP CODE
    const createUser = (email, password) => {
        try {
            auth().createUserWithEmailAndPassword(email, password).then((response) => {
                console.log('response')
                console.log(response)
                console.log('response')
                     navigation.navigate('BottomTabBarNavigator')
                 })
        } catch (error) {
            Alert.alert(error);
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={Icons.reddoticon} style={styles.logoImage} />
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        {/* FUll Name */}
                        <View style={styles.SectionStyle}>
                            <Image source={Icons.emailicon} style={styles.inputiconStyle}></Image>
                            <TextInput width={'100%'}
                                name="fullName"
                                keyboardType="default"
                                placeholder="Full Name"
                                placeholderTextColor="#9D9FA0"
                                onChangeText={(text) => setFullName(text)}
                                value={fullName} />
                        </View>

                        {/* Email Text Input */}
                        <View style={styles.SectionStyle}>
                            <Image source={Icons.emailicon} style={styles.inputiconStyle}></Image>
                            <TextInput width={'100%'}
                                name="email"
                                keyboardType="email-address"
                                placeholder="Email"
                                placeholderTextColor="#9D9FA0"
                                onChangeText={(text) => setEmail(text)}
                                value={email} />
                        </View>

                        {/* Password Text input */}
                        <View style={styles.SectionStyle}>
                            <Image source={Icons.passwordicon} style={styles.inputiconStyle}></Image>
                            <TextInput width={'100%'}
                                name="Password"
                                keyboardType="visible-password"
                                placeholder="Password"
                                placeholderTextColor="#9D9FA0"
                                maxLength={20}
                                onChangeText={(text) => setPassword(text)}
                                value={password} />
                        </View>

                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 10, paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => createUser(email, password)}>
                            <View style={styles.buttoncontainerstyle}>
                                <Text style={styles.buttonstyle}>
                                    Sign Up
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 30, paddingTop: 35, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#C7C9D9', width: 150, height: 1 }}>
                        </View>

                        <Text style={{ fontSize: 16, paddingHorizontal: 10, marginTop: -10 }}>or</Text>

                        <View style={{ backgroundColor: '#C7C9D9', width: 150, height: 1 }}>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={styles.fbbuttoncontainerstyle}>
                                <Image source={Icons.facebook} style={styles.fbiconStyle}></Image>
                                <Text style={styles.fbbuttonstyle}>
                                    Log in with Facebook
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 20, paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => onGoogleButtonClicked()}>
                            <View style={styles.googlebuttoncontainerstyle}>
                                <Image source={Icons.google} style={styles.googleiconStyle}></Image>
                                <Text style={styles.googlebuttonstyle}>
                                    Log in with Google
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingVertical: 40 }}>
                        <Text style={styles.policystyle}>
                            By signing up you accept the&nbsp;
                            <Text style={{ color: '#0082CD' }}>
                                Terms of Service
                            </Text>
                        </Text>
                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity >
                                <Text style={{ color: '#A2A2A2', fontSize: 16 }}>
                                    and&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://reddotapps.com.sg/')}>
                                <Text style={{ color: '#0082CD', fontSize: 16 }}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.noaccountstyle}>
                        Already have an account?&nbsp;
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabBarNavigator')}>
                        <Text style={styles.signupstyle}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingTop: 20
    },
    logoImage: {
        width: 100,
        height: 120,
        resizeMode: 'contain',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F6F7FA',
        height: 50,
        borderRadius: 6,
        margin: 10
    },
    buttoncontainerstyle: {
        backgroundColor: '#EC5F5F',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 330,
    },
    buttonstyle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    fbbuttoncontainerstyle: {
        backgroundColor: '#0082CD',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 330,
    },
    fbbuttonstyle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: 10
    },
    fbiconStyle: {
        height: 20,
        width: 19,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    googlebuttoncontainerstyle: {
        backgroundColor: '#EEEEEE',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 330,
    },
    googlebuttonstyle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#303030',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: 10
    },
    googleiconStyle: {
        height: 20,
        width: 19,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    policystyle: {
        fontSize: 16,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    noaccountstyle: {
        fontSize: 16,
        alignSelf: 'center'
    },
    signupstyle: {
        fontSize: 16,
        color: '#60B0E0',
        fontWeight: '700',
        alignSelf: 'center'
    }
});