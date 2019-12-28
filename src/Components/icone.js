import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style = {styles.icone}>
          <Text style = {styles.txtJogador}> {this.props.jogador} </Text>
          <Image style = {{width: 100,height: 100}} source = {require('../../Img/pedra.png')} />
        </View>
      );
    } 
    else if(this.props.escolha == 'papel'){

       return(
        <View style = {styles.icone}>
          <Text style = {styles.txtJogador}> {this.props.jogador} </Text>
          <Image style = {{width: 100,height: 100}} source = {require('../../Img/papel.png')} />
        </View>
      );
    } 
    else if(this.props.escolha == 'tesoura'){

       return(
        <View style = {styles.icone}>
          <Text style = {styles.txtJogador}> {this.props.jogador} </Text>
          <Image style = {{width: 100,height: 100}} source = {require('../../Img/tesoura.png')} />
        </View>
      );
    } else return null;
    
  }
}

const styles = StyleSheet.create({
    icone: {
      alignItems: 'center',
      marginBottom: 20,
    },
    txtJogador: {
      fontSize: 20,
    }
  });
export default Icone;