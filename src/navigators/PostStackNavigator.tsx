import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostScreen from '@screens/Post';
import PostDetail from '@screens/PostDetail';
import Header from '@screens/Header';

const Stack = createStackNavigator();

export default function PostStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="PostList"
                    component={PostScreen}
                    options={() => ({
                        headerTitle: () => <Header />,
                        cardStyle: { backgroundColor: 'white' },
                    })}
                />
                <Stack.Screen
                    name="PostDetail"
                    component={PostDetail}
                    options={() => ({
                        headerTitle: () => <Header />,
                        cardStyle: { backgroundColor: 'white' },
                    })}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}
