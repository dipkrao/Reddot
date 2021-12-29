/* eslint-disable prettier/prettier */
import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import * as Keychain from 'react-native-keychain';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export default function ApplicationNavigator() {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'SIGN_UP':
          console.log('SIGN_UP');
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const [authToken, setNewAuthToken] = useState();

  // const client = new ApolloClient({
  //   uri: applicationProperties.baseUrl + '/graphql',
  //   cache: new InMemoryCache(),
  //   headers: {
  //     Authorization: authToken,
  //   },
  // });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await Keychain.getGenericPassword();
        setNewAuthToken(userToken.password);
      } catch (e) {
        // Restoring token failed
      }
      userToken === false
        ? dispatch({ type: 'RESTORE_TOKEN', token: null })
        : dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, [authToken]);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        await Keychain.setGenericPassword('email', data);
        setNewAuthToken(data);
        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOut: async () => {
        await Keychain.resetGenericPassword();
        setNewAuthToken('null');
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async data => {
        await Keychain.setGenericPassword('email', data);
        setNewAuthToken(data);
        dispatch({ type: 'SIGN_UP', token: data });
      },
      facebookSignUp: async data => {
        await Keychain.setGenericPassword('email', data);
        setNewAuthToken(data);
        dispatch({ type: 'SIGN_UP', token: data });
      },
      googleSignUp: async data => {
        await Keychain.setGenericPassword('email', data);
        setNewAuthToken(data);
        dispatch({ type: 'SIGN_UP', token: data });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          keyboardHidesTabBar: true,
        }}>
        {state.userToken == null ? (
          <>
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="StackNavigator" component={StackNavigator}/>
          </>
        )}
      </Stack.Navigator>
  </AuthContext.Provider>
  );
}