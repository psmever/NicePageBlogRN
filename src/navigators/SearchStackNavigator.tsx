import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '@screens/Search';

const Stack = createStackNavigator();

export default function SearchStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PostList"
                component={SearchScreen}
                options={() => ({
                    headerTitle: '검색',
                    cardStyle: { backgroundColor: 'white' },
                })}
            />
        </Stack.Navigator>
    );
}
