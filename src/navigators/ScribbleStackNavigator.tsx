import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScribbleScreen from '@screens/Scribble';
import ScribbleDetailScreen from '@screens/ScribbleDetail';

const Stack = createStackNavigator();

export default function ScribbleStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Scribble"
                component={ScribbleScreen}
                options={() => ({
                    headerTitle: '끄적끄적',
                    cardStyle: { backgroundColor: 'white' },
                })}
            />
            <Stack.Screen
                name="ScribbleDetail"
                component={ScribbleDetailScreen}
                options={() => ({
                    headerTitle: '끄적끄적상세',
                    cardStyle: { backgroundColor: 'white' },
                })}
            />
        </Stack.Navigator>
    );
}
