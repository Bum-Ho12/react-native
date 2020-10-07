import React, { Component } from 'react';
import { StatusBar } from 'react-native'

const StatusB = () => {
   return (
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00ffff" translucent = {true}/>
   )
}
export default StatusB