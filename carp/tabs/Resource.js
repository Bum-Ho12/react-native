import React from 'react';
import {View, Text,StyleSheet,ScrollView} from 'react-native';
import Cat from '../resources/resourceSc';
import RegistrationScreen from '../stacks/Registration';




export default function ResourceScreen(){

    return(
        <View style={styles.container}>
          <ScrollView>
              <Cat/>
              <RegistrationScreen/>
          </ScrollView>
        </View>
    );


}

const styles= StyleSheet.create({
    container: {  
        flex: 1
    },
    
    text:{
        flex:1,
        marginTop:30,
        paddingTop:20,
        textAlign:"left",
        justifyContent:"center",
        paddingBottom:20,
    },
})