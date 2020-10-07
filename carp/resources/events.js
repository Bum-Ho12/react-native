import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Events({item}){

    const firstUrl= 'https://carp-kenya.herokuapp.com';
    var secondUrl= String(item.image) ;   
    var urls= String (firstUrl+secondUrl);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.event}</Text>
            <Image style={styles.image}  source={{uri: urls}}/>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>Date: {item.date}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        margin:10,
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width:5,height:5},
        shadowOpacity: 2,
        shadowRadius:2,
        width:340
    },
    image:{
        marginHorizontal: 15,
        marginVertical:10,
        height: 200,
        borderRadius: 5
    },
    title:{
        marginHorizontal: 15,
        marginVertical:10,
        fontWeight: 'bold'
    },
    description:{
        marginHorizontal: 15,
        marginVertical:10
    },
    date:{
        marginHorizontal: 15,
        marginVertical:10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color:'blue',
    },
})