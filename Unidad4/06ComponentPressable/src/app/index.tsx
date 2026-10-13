import { StyleSheet, View } from "react-native";

import { TextPressable } from "../components/TextPressable";

export default function Index() {
  return (
    <View style={styles.container}>
      <TextPressable text="Primero" />
      <TextPressable text="Segundo" />
      <TextPressable text="Tercero" />
      <TextPressable text="Cuarto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
