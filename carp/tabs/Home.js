import React from 'react';
import {View, Text, Button,TouchableOpacity,StyleSheet,Image} from 'react-native';
import StatusB from '../components/statusBar';
import Carousel from '../components/Carousel';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen(){


    return(
        <View style={styles.container}>
           <ScrollView contentContainerStyle={styles.contentContainer}>
               <StatusB/>
           <Carousel style={styles.carousel}/>
           
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
           
           </ScrollView>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        
        
        flex: 1
    },
    carousel:{
        marginHorizontal:2,
    },
    
    text:{
        flex:1,
        padding:20,
        textAlign:"left",
        justifyContent:"center",
        paddingBottom:20,
    },
    contentContainer:{},
})