import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../assets/images/pereira castor.png")} style={styles.image} />
        <Text style={styles.text}>Pereira Castor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 2,
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 2,
    overflow: "hidden",
  },
});
