import { useState } from "react";
import { Alert, FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { Persona } from "@/model/entities/Persona";
import { PersonasViewModel } from "@/viewmodel/PersonasViewModel";

export default function PersonasView() {
  const [viewModel] = useState(
    () =>
      new PersonasViewModel((mensaje) =>
        Platform.OS === "web"
          ? globalThis.alert(mensaje)
          : Alert.alert("Persona seleccionada", mensaje),
      ),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de personas</Text>
      <FlatList
        data={viewModel.personas}
        keyExtractor={(persona) => persona.id.toString()}
        renderItem={({ item }) => <PersonaItem persona={item} onPress={viewModel.seleccionarPersona.bind(viewModel)} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

type PersonaItemProps = {
  persona: Persona;
  onPress: (persona: Persona) => void;
};

function PersonaItem({ persona, onPress }: PersonaItemProps) {
  return (
    <Pressable style={styles.persona} onPress={() => onPress(persona)}>
      <Text style={styles.nombre}>{persona.nombre}</Text>
      <Text style={styles.apellidos}>{persona.apellidos}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f4f7fb",
  },
  title: {
    marginBottom: 16,
    color: "#172033",
    fontSize: 26,
    fontWeight: "700",
  },
  list: {
    gap: 12,
  },
  persona: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#172033",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
  },
  nombre: {
    color: "#172033",
    fontSize: 18,
    fontWeight: "600",
  },
  apellidos: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 16,
  },
});