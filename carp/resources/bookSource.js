import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {View,Text, Image,StyleSheet,TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native'


export default function Books({item}){

    const firstUrl= 'https://carp-kenya.herokuapp.com';
    var secondUrl= String(item.imageFile) ;   
    var urls= String (firstUrl+secondUrl);
    const navigation = useNavigation();

    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <Image style={styles.image}  source={{uri: urls}}/>
                <View style={styles.view2}>
                    <Text style={styles.title}> {item.Title}</Text>
                    <Text style={styles.description}> {item.description}</Text>
                </View>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity>
                    <Icon name='download' size={20} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Book',item);}}>
                    <Text style={styles.text}>Read</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container1:{
        flex: 1,
        margin:4,
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width:1,height:1},
        shadowOpacity: 2,
        shadowRadius:2,
        width:50,
        height: 180
    },
    container: {
        flex: 1,
        margin:2,
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width:1,height:1},
        shadowOpacity: 2,
        shadowRadius:2,
        width:60,
        flexDirection:'row',
    },
    view2:{
        flexDirection:'column',
        width: 100
    },
    view3:{
        flexDirection:'row',
        marginLeft:10
    },
    image:{
        marginLeft: 7,
        marginRight:2,
        height:80,
        marginTop:5,
        borderRadius:10,
        width: 50
    },
    title:{
        marginRight:15,
        marginVertical:5,
        marginBottom: 1,
        fontWeight: 'bold',
    },
    description:{
        marginVertical:5,
        marginTop:1,
        marginRight:15,
        flexDirection: 'row'
    },
    category:{
        marginHorizontal: 15,
        marginVertical:10
    },
    icon:{
        marginLeft: 30,
        marginBottom:10,
        flexDirection:'row',
        color:'blue',
        marginRight:10
    },
    text:{
        marginLeft: 40,
        paddingLeft:10,
        marginBottom:10,
        flexDirection:'row',
        color: 'blue',
        fontWeight:'bold',
    },
})