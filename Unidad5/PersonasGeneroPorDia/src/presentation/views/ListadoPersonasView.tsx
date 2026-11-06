import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListadoPersonasVM } from "@/presentation/viewmodels/ListadoPersonasVM";

interface ListadoPersonasViewProps {
  viewModel: ListadoPersonasVM;
}

/**
 * Vista del listado de personas filtrado por el dia del mes.
 *
 * Precondicion: recibe un viewmodel inicializado mediante inyeccion de dependencias.
 * Postcondicion: presenta el listado, el total y un estado vacio cuando no hay datos.
 */
export function ListadoPersonasView({ viewModel }: ListadoPersonasViewProps) {
  const personas = viewModel.listaPersonas;
  const generoDelDia = new Date().getDate() % 2 === 0 ? "hombres" : "mujeres";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>PERSONAS POR DIA</Text>
        <Text style={styles.title}>Listado de {generoDelDia}</Text>
        <Text style={styles.subtitle}>
          Hoy se muestran las personas seleccionadas por la regla del calendario.
        </Text>
        <View style={styles.counter}>
          <Text style={styles.counterValue}>{viewModel.totalPersonas}</Text>
          <Text style={styles.counterLabel}>personas encontradas</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={personas.length === 0 ? styles.emptyList : styles.list}
        data={personas}
        keyExtractor={(persona) => persona.dni}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No hay personas</Text>
            <Text style={styles.emptyText}>El repositorio no tiene datos para mostrar.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.personRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.personName}>{item.nombre}</Text>
              <Text style={styles.personDni}>{item.dni}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F1EA",
  },
  header: {
    backgroundColor: "#173F3A",
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 24,
  },
  eyebrow: {
    color: "#B8D7C8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  title: {
    color: "#FFF9F0",
    fontSize: 32,
    fontWeight: "800",
    marginTop: 10,
  },
  subtitle: {
    color: "#D6E4DC",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    maxWidth: 330,
  },
  counter: {
    alignItems: "baseline",
    flexDirection: "row",
    gap: 8,
    marginTop: 24,
  },
  counterValue: {
    color: "#F5C77A",
    fontSize: 28,
    fontWeight: "800",
  },
  counterLabel: {
    color: "#FFF9F0",
    fontSize: 14,
  },
  list: {
    padding: 20,
    paddingBottom: 32,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  personRow: {
    alignItems: "center",
    backgroundColor: "#FFF9F0",
    borderColor: "#E6DED2",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 10,
    padding: 14,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#D8E9DF",
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    marginRight: 14,
    width: 48,
  },
  avatarText: {
    color: "#173F3A",
    fontSize: 20,
    fontWeight: "800",
  },
  personName: {
    color: "#173F3A",
    fontSize: 16,
    fontWeight: "700",
  },
  personDni: {
    color: "#7A817D",
    fontSize: 13,
    marginTop: 3,
  },
  emptyState: {
    alignItems: "center",
  },
  emptyTitle: {
    color: "#173F3A",
    fontSize: 22,
    fontWeight: "800",
  },
  emptyText: {
    color: "#7A817D",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },
});
