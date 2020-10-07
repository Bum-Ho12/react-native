import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';


export default function AboutScreen()
{

    return(
        <View style={styles.container}> 
            <Text style={styles.text}>We are an organization of chapters on college campuses, 
                created for students by students. We create programs, events,
                 and activities promoting principles and raising leaders.
                 Student leaders engage others
                 in thoughtful and meaningful discussion as well
                 as deep and long-lasting relationships for peace and growth.
                We believe that the ideal is created within and practiced in daily habits.
                 We study and research these ideals and principles taught by great role models
                and teachers in every field throughout history. 
                After study, we practice. Change doesn’t happen overnight
                but rather incrementally through daily,
                consistent effort. That’s what we practice. CARP
                 offers a loving environment for students to encourage growth. </Text>
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        flex:1,
        paddingTop:20,
       marginLeft:20,
       marginRight:20,
        justifyContent:"center",
    },
})