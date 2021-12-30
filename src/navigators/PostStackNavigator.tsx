// 로그인 하자 마자 가장 첫번째로 보이는 스크린. (즐겨찾기, 디테일 스크린이 스택으로 되어있음)
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from '../screens/PostScreen';
import PostDetail from '../screens/PostScreen/Detail';

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
