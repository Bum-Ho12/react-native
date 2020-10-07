import React, { useState, useEffect} from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import RegistrationScreen from '../stacks/Registration'
import {useNavigation} from '@react-navigation/native'


export default function Cat(){
    const [category, setCategory]=useState([
        {name:'Inspirational', key:'1'},
        {name:'Educative', key:'2'},
        {name:'Comedy', key:'3'},
        {name:'Horror', key:'4'},
        {name:'Action', key:'5'},
        {name:'Adventure', key:'6'},
    ]);
    
    return (
        <View>
            <View style={styles.container}>
                {
                    category.map(item=>(
                        <TouchableOpacity style={styles.category} key={item.key}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        margin:7,
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width:1,height:1},
        shadowOpacity: 2,
        shadowRadius:2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-end',
        direction:'ltr',
    },
    text:{
        textAlign: 'center',
        fontSize: 16,
        alignSelf:"center",
        marginHorizontal:5
    },
    category:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        direction:'ltr',
        color: 'orange',
        backgroundColor:'orange',
        borderColor:'black',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width:1,height:1},
        shadowOpacity: 2,
        shadowRadius:2,
        marginVertical:10,
        marginHorizontal: 3,
        height: 30,
        width: 100,     
    }
})