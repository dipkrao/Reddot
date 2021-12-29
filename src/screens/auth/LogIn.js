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
} from 'react-native';
import Images from '../../constants/images'
import Icons from '../../constants/icons'
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default function Login() {
    const navigation = useNavigation();

    auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });

    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          setloggedIn(true);
          const credential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
          await auth().signInWithCredential(credential);
        } catch (error) {

        }}

    return (
        <View style={styles.container}>
            <View>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={Icons.reddoticon} style={styles.logoImage} />
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    {/* Email Text Input */}
                    <View style={styles.SectionStyle}>
                        <Image source={Icons.emailicon} style={styles.inputiconStyle}></Image>
                        <TextInput width={'100%'}
                            name="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            placeholderTextColor="#9D9FA0"
                            maxLength={10} />
                    </View>

                    {/* Password Text input */}
                    <View style={styles.SectionStyle}>
                        <Image source={Icons.passwordicon} style={styles.inputiconStyle}></Image>
                        <TextInput width={'100%'}
                            name="phone"
                            keyboardType="visible-password"
                            placeholder="Password"
                            placeholderTextColor="#9D9FA0"
                            maxLength={10} />
                    </View>

                </View>

                <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 10, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={styles.buttoncontainerstyle}>
                            <Text style={styles.buttonstyle}>
                                Log In
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.forgottextstyle}>Forgot Password?</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, paddingTop: 10, justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#C7C9D9', width: 150, height: 1 }}>
                    </View>

                    <Text style={{ fontSize: 16, paddingHorizontal: 10, marginTop: -10 }}>or</Text>

                    <View style={{ backgroundColor: '#C7C9D9', width: 150, height: 1 }}>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 0, paddingHorizontal: 20 }}>
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
                    <TouchableOpacity onPress={() => _signIn()}>
                        <View style={styles.googlebuttoncontainerstyle}>
                            <Image source={Icons.google} style={styles.googleiconStyle}></Image>
                            <Text style={styles.googlebuttonstyle}>
                                Log in with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.noaccountstyle}>
                    Don’t have an account?&nbsp;
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signupstyle}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
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
    forgottextstyle: {
        fontSize: 16,
        color: '#0082CD',
        fontWeight: '500',
        alignSelf: 'center',
        paddingVertical: 24
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
    noaccountstyle: {
        fontSize: 16,
        alignSelf: 'center'
    },
    signupstyle: {
        fontSize: 16,
        color: '#60B0E0',
        alignSelf: 'center',
        fontWeight: '700',
    }
});