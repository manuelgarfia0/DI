import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HEADER</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.leftRail} />

        <View style={styles.content}>
          <Text style={styles.contentText}>CONTENT</Text>
        </View>

        <View style={styles.rightRail} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>FOOTER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#00e5e5",
    height: 12,
    justifyContent: "center",
  },
  headerText: {
    color: "#003f91",
    fontSize: 9,
    lineHeight: 11,
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  leftRail: {
    backgroundColor: "#1010ed",
    width: "12%",
  },
  content: {
    alignItems: "center",
    backgroundColor: "#929292",
    flex: 1,
    justifyContent: "center",
  },
  contentText: {
    color: "#3f29c8",
    fontSize: 10,
  },
  rightRail: {
    backgroundColor: "#008b08",
    width: "12%",
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#ff9fb4",
    height: 14,
    justifyContent: "center",
  },
  footerText: {
    color: "#733ca7",
    fontSize: 9,
    lineHeight: 12,
  },
});
