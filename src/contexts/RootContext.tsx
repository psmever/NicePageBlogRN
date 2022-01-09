import React, { createContext, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const RootContext = createContext({ init: false });

export const RootProvider: React.FC = ({ children }) => {
    useEffect(() => {
        console.debug('RootProvider ::  App Start');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }, []);

    return <RootContext.Provider value={{ init: false }}>{children}</RootContext.Provider>;
};

export default RootProvider;
