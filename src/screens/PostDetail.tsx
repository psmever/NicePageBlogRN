import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <Text>Post Detail 스크린</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
