import React, { Component } from "react";
import { StyleSheet, Text, View,} from "react-native";
import { SliderBox } from 'react-native-image-slider-box'


export default class Data extends Component {
   constructor() {
      super();
      this.state = {
      images: [
          require('../assets/carp1.jpg'),
          require('../assets/carp.png'),
          require('../assets/image1.png'),
      ]
      };
  }
  render() {
   return (
       <View style={styles.container}>
           <SliderBox
               images= {this.state.images } 
               sliderBoxHeight={250}
               autoplay={true}
               circleLoop={true}
               onCurrentImagePressed={index =>
                   console.warn(`image ${index} pressed`)
               }
           />
       </View>
   );
}
}
const styles = StyleSheet.create({
container: {
 flex: 1,
 paddingBottom: 20,
 paddingTop:1,
}
});