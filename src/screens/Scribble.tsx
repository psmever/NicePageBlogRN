import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Button
                title={'Scribble'}
                onPress={() => {
                    navigation.navigate('ScribbleDetail', { name: 'Jane' });
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
