import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Temperatura = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de Temperatura</Text>
      {/* Aqui você pode adicionar qualquer conteúdo relacionado à temperatura */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Temperatura;
