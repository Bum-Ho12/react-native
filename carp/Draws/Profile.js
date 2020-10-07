import React from 'react';
import {View, Text, Button} from 'react-native';
import StatusBarD from './status';


export default function ProfileScreen({navigation}){
    const ProfileNav =()=>{ navigation.navigate('Home');}
    return(
        <View>
            <StatusBarD/>
            <Text>My profile!</Text>
            <Button onPress={ProfileNav} title="Home"/>
        </View>
    );
}