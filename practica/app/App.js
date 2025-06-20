import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function App() {
  const [activo, setActivo] = useState(false);

  const cambiarSwitch = () => {
    setActivo(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activar característica:</Text>
      <Switch
        onValueChange={cambiarSwitch}
        value={activo}
      />
      <Text style={styles.statusText}>
        Estado Actual: {activo ? 'Activado' : 'Desactivado'}
      </Text>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
});
