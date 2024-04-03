import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(c => c + 1);
  }

  const increment10 = () => {
    setCounter(c => c + 10);
  }


  return (

    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.kaTu}>Kitas tekstas 2</Text>
      </View>
      <View style={styles.container2}>
      <View style={styles.container21}>
        <Text>Labas, ką tu?</Text>
      </View>
      <View style={styles.container22}>
        <Text onPress={increment} onLongPress={increment10} style={styles.kaTu2} >+{counter}</Text>
      </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  kaTu: {
    fontSize: 40,
    color: 'crimson',
  },

  kaTu2: {
    fontSize: 40,
    color: 'skyblue',
  },

  container: {
    flex: 1,
    flexDirection: 'row',

  },

  container1: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container21: {
    flex: 1,
    backgroundColor: '#fff333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  container22: {
    flex: 1,
    backgroundColor: '#fff999',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});