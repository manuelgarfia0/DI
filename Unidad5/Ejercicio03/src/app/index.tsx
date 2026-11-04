import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { PersonaCard } from "@/presentation/components/PersonaCard";
import { usePersonaViewModel } from "@/presentation/viewmodels/usePersonaViewModel";

export default function Index() {
  const { personaDelDia } = usePersonaViewModel();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Agenda semanal</Text>
        <Text style={styles.subtitle}>
          Una persona diferente cada dia de la semana
        </Text>
        <PersonaCard persona={personaDelDia} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9EEF5",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 72,
  },
  title: {
    alignSelf: "stretch",
    color: "#152238",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
  subtitle: {
    alignSelf: "stretch",
    marginTop: 8,
    marginBottom: 40,
    color: "#5D6B80",
    fontSize: 16,
    lineHeight: 23,
  },
});
