import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const Images = () => (
   <Image source = {require('C:/Users/HP/projects/carp/assets/image1.png')}  style={styles.image}/>
)

const styles= StyleSheet.create({
   image:{
      width: 300,
      height: 200,
      borderRadius: 20,
      marginTop: 10,
      flexDirection: 'column'      
  }
  
})
export default Images