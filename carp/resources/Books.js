import React,{useState, useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function BookScreen(){
  
  const [navigation]= useNavigation();
  const read= navigation.getParam('item.File')

  return(
    <View style={styles.container}>
      <WebView>{read}</WebView>
    </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-end',
        direction:'ltr',
        width:180,
        backgroundColor:'grey',
        borderRadius: 20,
        margin:3
    },
})