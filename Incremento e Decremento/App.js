import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      exibirContador: 0,
    };
  }
    
    entrar1=()=>{
      this.setState({
        exibirContador: this.state.exibirContador + 1
      });
    }
    entrar2=() => {
      this.setState({
        exibirContador: this.state.exibirContador - 1
      });
    }
  
    formataContador(){
      const { exibirContador } = this.state;
      if(exibirContador <= 0){
        <Text style={this.texto} className="badge badge-primary m-2">
          Proibido valor negativo
        </Text>
      }else{
        return exibirContador === 0 ? "Zero" : exibirContador;
      }
      
    };
    
  render(){
    return(
      <View style={styles.container}>
       <Text style={this.texto} className="badge badge-primary m-2">
          {this.formataContador()}
        </Text>
 
      <Button title="+" onPress={this.entrar1} />
      <Button title="-" onPress={this.entrar2} />
      
      </View>
    );
  }
}
 
export default App;