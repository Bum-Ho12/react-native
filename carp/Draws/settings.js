import React from 'react';
import {View, Text, Button} from 'react-native';
import StatusB from '../components/statusBar';


export default function SettingsScreen({navigation}){
    const SetNav =()=>{ navigation.navigate('Home');}
    return(
        <View>
            <StatusB/>
            <Text>My profile!</Text>
            <Button onPress={SetNav} title="Home"/>
        </View>
    );
}