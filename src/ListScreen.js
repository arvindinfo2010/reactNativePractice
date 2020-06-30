import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const nNum=1;
    const friends = [
        { name: 'Rahul',Age:'15' },
        { name: 'Mukesh' ,Age:'16'},
        { name: 'Ramesh' ,Age:'17'},
        { name: 'Suresh' ,Age:'18'},
        { name: 'Rahul' ,Age:'19'},
        { name: 'Mukesh' ,Age:'29'},
        { name: 'Ramesh' ,Age:'21'},
        { name: 'Rahul' ,Age:'22'},
        { name: 'Mukesh' ,Age:'23'},
        { name: 'Ramesh' ,Age:'24'},
        { name: 'Suresh' ,Age:'25'},
        { name: 'Rahul' ,Age:'26'},
        { name: 'Mukesh' ,Age:'27'},
        { name: 'Ramesh' ,Age:'28'}
    ];

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            //showsVerticalScrollIndicator={false}
            keyExtractor={friends => friends.Age}
            data={friends}
            renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} Age-{item.Age}</Text>
            }
            } />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20,
        marginHorizontal:20
    }

});

export default ListScreen;