import React from 'react';
import {View, Text, Button,StyleSheet, ImageBackground} from 'react-native';
import ActivityScreen from '../stacks/activityls';

export default function ActivitiesScreen({navigation}){


    return(
        <View style={styles.container}>
            <ActivityScreen/>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 300,
        width: 200,
        borderRadius: 5,
    }
})