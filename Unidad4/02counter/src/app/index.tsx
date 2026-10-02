import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Index = () => {
  
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

   const handlePress = () => {
    setCount(count + 1);
    tenClicks();
  };

  const decrement = () => {
    setCount(count - 1);
    tenClicks();
  };

  const tenClicks = () => {
    setClicks(clicks + 1);
    const newClick = clicks + 1;
    if(newClick == 10){
      alert("¡Has hecho 10 clics!");
      setClicks(0);
    }
  };
  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
      <View style={{ height: 20 }} />
      <Pressable onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="remove-circle" size={24} color="white" />
      </Pressable>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;