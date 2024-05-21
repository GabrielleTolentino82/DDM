import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [contador,setContador] = useState(0);
  const [nome,setNome] = useState ("");
  const [segundos,setSegundos] = useState(0);
 
  useEffect(()=>{
    function addSegundos(){
      setInterval(()=>setSegundos(segundos=>segundos+1),1000)
    }

    addSegundos();
  },[])
  function atualizaContador(){

    setContador(contador+1)
  }

  function atualizarNome(texto){

    setNome(texto)
  }
  return (
    <View style={styles.container}>


      <Text style={{fontSize:25, marginEnd:10}}>Você clicou {contador} vezes</Text>
      <TouchableOpacity onPress = {atualizaContador} style={{width:'40%', backgroundColor:'pink', alignItems:'center', height:23, borderRadius: 5}}><Text>CLICAR</Text></TouchableOpacity>
      
      <Text style={{fontSize:20, marginTop:10}}>{nome}</Text>

      <TextInput style={{width:'50%', backgroundColor:'pink', height: 30, marginTop:10, borderRadius: 5}} 
      onChangeText ={ (texto)=> atualizarNome(texto) }></TextInput>

      <Text style={{fontSize:20, marginTop:10}}> Já se passaram {segundos} segundos</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
