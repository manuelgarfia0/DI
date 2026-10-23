import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { Tarea } from "@/model/entities/Tarea";
import { TareasVM } from "@/viewmodel/TareasVM";

type TareasViewProps = {
  viewModel: TareasVM;
};

export default function TareasView({ viewModel }: TareasViewProps) {
  const renderItem = ({ item }: { item: Tarea }) => (
    <TareaItem
      tarea={item}
      onPress={viewModel.seleccionarTarea.bind(viewModel)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de tareas</Text>
      <FlatList
        data={viewModel.listadoTareas}
        keyExtractor={(tarea) => tarea.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

type TareaItemProps = {
  tarea: Tarea;
  onPress: (tarea: Tarea) => Tarea;
};

function TareaItem({ tarea, onPress }: TareaItemProps) {
  return (
    <Pressable
      style={styles.tarea}
      onPress={() => {
        onPress(tarea);
      }}
    >
      <Text style={styles.titulo}>{tarea.titulo}</Text>
      <Text style={styles.estado}>
        {tarea.completado ? "Tarea completada" : "Tarea pendiente"}
      </Text>
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
  tarea: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#172033",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
  },
  titulo: {
    color: "#172033",
    fontSize: 18,
    fontWeight: "600",
  },
  estado: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 16,
  },
});