import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, ScrollView, View, Text } from 'react-native'
import { Input } from '@rneui/themed'

export default function App() {
  const [historico, setHistorico] = useState('')
  const [armazenaHistorico, setArmazenaHistorico] = useState([])

  const capturaHistorico = (historicoDigitado) => {
    console.log(historicoDigitado)
    setHistorico(historicoDigitado)
  }

  const adicionarHistorico = () => {
    setArmazenaHistorico(armazenaHistorico => {
      const aux = [historico, ...armazenaHistorico]
      setHistorico('')
      return aux
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHistorico}>
        <Input
          style={styles.lembreteTextInput}
          placeholder='Digite uma frase que retornará em tela: Positivo, Negativo ou Neutro'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={capturaHistorico}
          value={historico}
        />

        <Button
          style={styles.enviarButton}
          title="Adicionar Histórico"
          onPress={adicionarHistorico}
        />
      </View>
      <ScrollView style={styles.exibeHistorico}>
        {
          armazenaHistorico.map((h, index) => (
            <View key={index} style={styles.textoHistorico}>
              <Text>{h}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    borderColor: '#CCC',
    width: '100%'
  },
  containerHistorico: {
    padding: 10,
    borderColor: '#CCC',
    width: '100%'
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    marginBottom: 4
  },
  enviarButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  exibeHistorico: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 40,
    borderColor: '#CCC',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'purple',
    marginBottom: 10,
  },
  textoHistorico: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
    borderColor: '#CCC',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'lightyellow',
    marginTop: 5,
  }
})
