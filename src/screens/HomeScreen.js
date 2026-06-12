import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Visual from '../src/components/Visual';

export default function HomeScreen() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);

    const fetchAdvice = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            setAdvice(data.slip);
        } catch (error) {
            console.error("Erro ao buscar conselho:", error);
        }   finally {
            setLoading(false);
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONSELHOS ALEATORIOS</Text>
      <Visual advice={advice} />
        <TouchableOpacity style={styles.button} onPress={fetchAdvice}>
          <Text style={styles.buttonText}>Buscar Conselho</Text>
        </TouchableOpacity>
    </View>
  );
}