import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { PersonUIModel } from "@/presentation/models/PersonUIModel";
import { PersonListViewModel } from "@/presentation/viewmodels/PersonListViewModel";

export default function Index() {
  const [persons, setPersons] = useState<readonly PersonUIModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    container
      .get<PersonListViewModel>(TYPES.PersonListViewModel)
      .load()
      .then(setPersons)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>DIRECTORIO</Text>
        <Text style={styles.title}>Personas</Text>
        <Text style={styles.subtitle}>Equipo y departamento</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator color="#1F2937" style={styles.loader} />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={persons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.row, { borderLeftColor: item.departmentColor }]}>
              <View style={styles.personInfo}>
                <Text style={styles.name}>{item.fullName}</Text>
                <Text style={styles.department}>{item.departmentName}</Text>
              </View>
              <View style={[styles.colorDot, { backgroundColor: item.departmentColor }]} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7F2",
    paddingHorizontal: 20,
    paddingTop: 72,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: "#111827",
    fontSize: 38,
    fontWeight: "800",
    letterSpacing: 0,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 16,
    marginTop: 4,
  },
  list: {
    gap: 12,
    paddingBottom: 24,
  },
  row: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 78,
    paddingHorizontal: 18,
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  personInfo: {
    gap: 5,
  },
  name: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "700",
  },
  department: {
    color: "#6B7280",
    fontSize: 14,
  },
  colorDot: {
    borderRadius: 12,
    height: 16,
    width: 16,
  },
  loader: {
    marginTop: 32,
  },
});
