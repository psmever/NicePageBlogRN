import React from 'react';
import { View, StyleSheet, Button, StatusBar } from 'react-native';

export default ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
            <Button
                title={'Posts'}
                onPress={() => {
                    navigation.navigate('PostDetail', { name: 'Jane' });
                }}
            />
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
