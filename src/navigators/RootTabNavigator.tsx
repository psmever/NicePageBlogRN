import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostStackNavigator from './PostStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import ScribbleStackNavigator from './ScribbleStackNavigator';

const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
    const Stack = createNativeStackNavigator();

    const bottomTabScreen = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({
                        // focused,
                        color,
                        size,
                    }: {
                        // focused: any;
                        color: any;
                        size: any;
                    }) => {
                        let iconName;
                        // focused: bool, 클릭했는지 여부

                        switch (route.name) {
                            case '포스트':
                                iconName = 'view-dashboard-outline';
                                break;
                            case '검색':
                                iconName = 'magnify';
                                break;
                            case '끄적끄적':
                                iconName = 'forum-outline';
                                break;
                            case 'Profile':
                                iconName = 'account-circle-outline';
                                break;
                            default:
                                iconName = 'star-outline';
                        }
                        return <MaterialCommunityIcons size={size} name={iconName} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="포스트" component={PostStackNavigator} />
                <Tab.Screen name="검색" component={SearchStackNavigator} />
                <Tab.Screen name="끄적끄적" component={ScribbleStackNavigator} />
            </Tab.Navigator>
        );
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Bottom" component={bottomTabScreen} />
        </Stack.Navigator>
    );
}
