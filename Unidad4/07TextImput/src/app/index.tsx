import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Escribe algo"
        accessibilityLabel="Texto de entrada"
      />
      <Text style={styles.output}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 8,
    padding: 12,
  },
  output: {
    minHeight: 24,
    fontSize: 18,
  },
});
