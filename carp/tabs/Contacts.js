import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ContactsScreen(){
    return(
        <View >
            <Text style={styles.container}>Contacts Us!</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})