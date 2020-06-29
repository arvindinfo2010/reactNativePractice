import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default ComponentsScreen = () => {
    const dynVal=<Text style={styles.introBody}> My Name is Arvind Kumar</Text>;
    return (
        <View>
        <Text style={styles.textStyle}> Greeting started with react native</Text>
        {dynVal}
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 40
        },
        
        introBody: {
            fontSize: 20
        }
    }
);

