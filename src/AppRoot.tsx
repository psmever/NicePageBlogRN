import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootTabNavigator from './navigators/RootTabNavigator';

import LoginScreen from './screens/LoginScreen';

function AppRoot() {
    const isLogin = true;

    return (
        <NavigationContainer>
            {isLogin ? <RootTabNavigator /> : <LoginScreen />}
        </NavigationContainer>
    );
}

export default AppRoot;
