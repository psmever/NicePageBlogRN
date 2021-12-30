import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PostStackNavigator from './PostStackNavigator';

const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
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
                        case 'PostTab':
                            iconName = 'view-dashboard-outline';
                            break;
                        case 'Search':
                            iconName = 'magnify';
                            break;
                        case 'Community':
                            iconName = 'forum-outline';
                            break;
                        case 'Profile':
                            iconName = 'account-circle-outline';
                            break;
                        default:
                            iconName = 'star-outline';
                    }
                    return (
                        <MaterialCommunityIcons
                            size={size}
                            name={iconName}
                            color={color}
                        />
                    );
                },
                headerShown: false,
            })}>
            <Tab.Screen name="PostTab" component={PostStackNavigator} />
            {/*<Tab.Screen name="Community" component={CommunityStackNavigator} />*/}
            {/*<Tab.Screen name="News" component={NewsStackNavigator} />*/}
            {/*<Tab.Screen name="Profile" component={ProfileStackNavigator} />*/}
        </Tab.Navigator>
    );
}
