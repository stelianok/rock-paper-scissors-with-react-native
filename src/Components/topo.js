import React, {Component} from 'react';
import {View,Image} from 'react-native';
class Topo extends Component {
  render(){
    return(
       <View>
          <Image source = {require('../../Img/jokenpo.png')} 
            style = {{width: 450,height: 245}} /> 
        </View>
    );
  }
}

export default Topo;