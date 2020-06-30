import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ComponentsScreen = () => {
    // const dynVal=<Text style={styles.introBody}> My Name is Arvind Kumar</Text>;
    const name = "Arvind Kumar";
    return (
        <View>
            <Text style={styles.textStyle}> Greeting started with react native</Text>
            {/* {dynVal} */}
            <Text style={styles.subHeaderStyle}> My Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 40
        },

        subHeaderStyle: {
            fontSize: 20
        }
    }
);

