/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {RootProvider} from '@contexts/RootContext';
import AppRoot from '@/AppRoot';

const App = () => {
    return (
        <RootProvider>
            <AppRoot />
        </RootProvider>
    );
};
export default App;
