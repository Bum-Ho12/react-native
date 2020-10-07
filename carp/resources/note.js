import React from 'react';
import {View,Text,StyleSheet, Linking} from 'react-native';


export default function Notes({item}){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text onPress={() => Linking.openURL(item.Link)} style={styles.clink}>{item.Link}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        margin:7,
        backgroundColor:'lightgrey',
        borderRadius: 15,
        borderColor:'black',
        shadowColor: 'black',
        shadowOffset: {width:5,height:5},
        shadowOpacity: 5,
        shadowRadius:2
    },
    title:{
        marginHorizontal: 15,
        marginVertical:2,
        color: 'black',
        fontWeight:'bold',
        fontStyle: 'italic',
    },
    description:{
        marginHorizontal: 15,
        marginVertical:2,
        color: 'black',
        fontStyle: 'italic',
        marginBottom:10,
    },
    clink:{
        marginHorizontal: 15,
        marginVertical:2,
        color: 'blue'
    },
})