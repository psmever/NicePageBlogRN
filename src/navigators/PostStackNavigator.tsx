import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from '@screens/PostScreen';
import PostDetail from '@screens/PostScreen/Detail';

const Stack = createStackNavigator();

export default function PostStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PostList"
                component={PostScreen}
                options={() => ({
                    headerTitle: '글목록',
                    cardStyle: {backgroundColor: 'white'},
                })}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetail}
                options={() => ({
                    headerTitle: '글 상세',
                    cardStyle: {backgroundColor: 'white'},
                })}
            />
        </Stack.Navigator>
    );
}
