import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('0');
  const [n2, setN2] = useState('0');
  const [resultado, setResultado] = useState('0');

  const calcular = () => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const result = num1 + num2;
    setResultado(result.toString());
  };

  return (
    <View style={styles.container}>
      <h1 style={styles.titulo}>Calcular Valores</h1>
      <TextInput
        keyboardType="numeric"
        value={n1}
        onChangeText={(text) => setN1(text)}
        style={styles.input}
      />
      <TextInput
        keyboardType="numeric"
        value={n2}
        onChangeText={(text) => setN2(text)}
        style={styles.input}
      />
      <Button title="Calcular" onPress={calcular} />
      <label style={styles.resultText}>Resultado: {resultado}</label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});
