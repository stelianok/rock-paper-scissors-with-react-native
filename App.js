
import React, {Component} from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import Topo from './src/Components/topo';
import Icone from './src/Components/icone';
class App extends Component{

  
  constructor(props) {
    super(props)
  
    this.state = {
       
       escolhaUsuario: '',
       escolhaComputador: '',
       resultado: '',
    }
  }

 
  
  jokenpo(escolhaUs){

    let  numAleatorio = Math.floor(Math.random() * 3);
    let  escolhaPc = '';
    let  resultado = '';

    
    switch (numAleatorio) {
      case 0: escolhaPc = 'pedra';   break;
      case 1: escolhaPc = 'papel';   break;
      case 2: escolhaPc = 'tesoura'; break;

    }

    this.setState({escolhaUsuario: escolhaUs, escolhaComputador: escolhaPc});
    //Empate
    if(escolhaUs == escolhaPc){
      resultado =  'Empate!';
      
    }
    //Papel
    else if(escolhaUs == 'papel' && escolhaPc == 'pedra'){

      resultado =  'Usuário Venceu!';
      
    }
    else if(escolhaUs == 'papel' && escolhaPc == 'tesoura'){

      resultado =  'Computador Venceu!';
      
    }
    //Pedra
    else if(escolhaUs == 'pedra' && escolhaPc == 'tesoura'){

      resultado =  'Usuário Venceu!';
      
    }
    else if(escolhaUs == 'pedra' && escolhaPc == 'papel'){

      resultado =  'Computador Venceu!';
      
    }
    //Tesoura
    else if(escolhaUs == 'tesoura' && escolhaPc == 'papel'){

      resultado =  'Usuário Venceu!';
      
    }
    else if(escolhaUs == 'tesoura' && escolhaPc == 'pedra'){

      resultado =  'Computador Venceu!';
      
    }
    this.setState({resultado: resultado})
    
  }

  render(){
    return( 
      <View>

        <Topo> </Topo>
        
         
      
        <View style = {styles.palco}>
          <Text style = {styles.txtResultado}> {this.state.resultado} </Text>

          <Icone escolha = {this.state.escolhaComputador} jogador = 'Computador'> </Icone>

          <Icone escolha = {this.state.escolhaUsuario} jogador = 'Usuário'> </Icone>
          
          
        </View>
        <View style = {styles.centro}>
          <View style = {styles.btnEscolha}>
            <Button title = 'Pedra'   onPress = {() => {this.jokenpo('pedra')}}  />
          </View>
          <View style = {styles.btnEscolha}>
            <Button title = 'Papel'   onPress = {() => {this.jokenpo('papel')}} />
          </View>
          <View style = {styles.btnEscolha}>
            <Button title = 'Tesoura' onPress = {() => {this.jokenpo('tesoura')}} />
          </View>
          
        </View>
     </View>
    );
  }
}
 const styles = StyleSheet.create({
    btnEscolha: {
      width: 90,
      paddingVertical: 20,
      paddingHorizontal: 5,
    },
    centro: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    palco: {
      alignItems: 'center',
      marginTop: 10,

      height: 400,
    },
    txtResultado: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      height: 60,
    },
   
  });




export default App;
