import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <Text>끄적 끄적 상세 스크린</Text>
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
