import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
   setInterval(() => setSegundos(segundos => segundos + 1), 1000);
    
  }, []);

  function atualizaContador() {
    setContador(contador + 1);
  }

  function atualizarNome(texto) {
    setNome(texto);
  }

  function apagarNome() {
    setNome("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textocontador}>Você clicou {contador} vezes</Text>
        <TouchableOpacity onPress={atualizaContador} style={styles.botao_click}>
          <Text style={styles.textobotao}>CLICAR</Text>
        </TouchableOpacity>

        <Text style={styles.textonome}>{nome}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto) => atualizarNome(texto)}
          value={nome} placeholder='Digite seu nome'
        />
       <View style={styles.botoes}>
        <TouchableOpacity onPress={apagarNome} style={styles.botao}>
          <Text style={styles.textobotao}>ENVIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={apagarNome} style={styles.botao}>
          <Text style={styles.textobotao}>APAGAR</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.textotempo}>Já se passaram {segundos} segundos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '40%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textocontador: {
    fontSize: 25,
    marginBottom: 15,
  },

  botoes: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botao: {
    backgroundColor: '#836FFF',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
  },

  botao_click: {
    width: '100%',
    backgroundColor: '#836FFF',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  textobotao: {
    color: '#fff',
    fontSize: 16,
  },
  textonome: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#E6E6FA',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textotempo: {
    fontSize: 20,
    marginTop: 10,
  },

  placeholder: {
    color: 'white',
  }
});
