import React from 'react';
import { Text, StyleSheet ,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'Rahul'},
        { name: 'Mukesh'},
        { name: 'Ramesh'},
        { name: 'Suresh' }
    ];

    return (
        <FlatList
            keyExtractor={friends=>friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }
            } />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;