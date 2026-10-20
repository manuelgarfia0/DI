import { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Departamento } from "@/model/entities/Departamento";
import { Persona } from "@/model/entities/Persona";
import { DepartamentoPersonaVM } from "@/viewmodel/DepartamentoPersonaVM";

type DepartamentoPersonaViewProps = {
  viewModel: DepartamentoPersonaVM;
};

/**
 * Renderiza el selector de departamentos y el listado de personas.
 * @param viewModel ViewModel que contiene el estado de la pantalla.
 * @returns Vista del directorio organizado por departamentos.
 * @precondition El ViewModel debe estar inicializado y contener el catalogo de departamentos.
 * @postcondition Renderiza el estado actual y se suscribe a sus cambios.
 */
export default function DepartamentoPersonaView({ viewModel }: DepartamentoPersonaViewProps) {
  const [, setVersion] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => viewModel.subscribe(() => setVersion((version) => version + 1)), [viewModel]);

  /**
   * Selecciona un departamento y cierra el menu desplegable.
   * @param departamento Departamento elegido por el usuario.
  * @precondition El departamento debe pertenecer al catalogo mostrado.
  * @postcondition El ViewModel queda actualizado y el menu se cierra.
   */
  const seleccionarDepartamento = (departamento: Departamento) => {
    viewModel.seleccionarDepartamento(departamento);
    setMenuAbierto(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.eyebrow}>NEXO / ORGANIZACION</Text>
        <View style={styles.companyBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.companyBadgeText}>ACTIVA</Text>
        </View>
      </View>
      <Text style={styles.title}>Personas por departamento</Text>
      <Text style={styles.subtitle}>Directorio interno · talento y equipos en un solo lugar.</Text>

      <View style={styles.labelRow}>
        <Text style={styles.label}>DEPARTAMENTO</Text>
        <Text style={styles.departmentCount}>{viewModel.listaDepartamento.length} areas</Text>
      </View>
      {viewModel.listaDepartamento.length > 0 ? (
        <View style={styles.selectorContainer}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Seleccionar departamento"
            accessibilityState={{ expanded: menuAbierto }}
            onPress={() => setMenuAbierto((abierto) => !abierto)}
            style={({ pressed }) => [styles.selector, pressed && styles.pressed]}
          >
            <Text style={viewModel.depSeleccionado ? styles.selectorText : styles.placeholder}>
              {viewModel.depSeleccionado?.nombre ?? "Elige un departamento"}
            </Text>
            <Text style={styles.chevron}>{menuAbierto ? "⌃" : "⌄"}</Text>
          </Pressable>

          {menuAbierto && (
            <View style={styles.options}>
              <ScrollView nestedScrollEnabled showsVerticalScrollIndicator>
                {viewModel.listaDepartamento.map((departamento) => (
                  <Pressable
                    accessibilityRole="button"
                    key={departamento.id}
                    onPress={() => seleccionarDepartamento(departamento)}
                    style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
                  >
                    <View style={styles.optionCopy}>
                      <Text style={styles.optionIndex}>{String(departamento.id).padStart(2, "0")}</Text>
                      <Text style={styles.optionText}>{departamento.nombre}</Text>
                    </View>
                    {viewModel.depSeleccionado?.id === departamento.id && (
                      <Text style={styles.optionCheck}>✓</Text>
                    )}
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.emptySelector}>
          <Text style={styles.emptySelectorIcon}>!</Text>
          <View style={styles.emptySelectorCopy}>
            <Text style={styles.emptySelectorTitle}>No hay departamentos disponibles</Text>
            <Text style={styles.emptySelectorText}>El catalogo esta vacio en este momento.</Text>
          </View>
        </View>
      )}

      {viewModel.depSeleccionado ? (
        <>
          <View style={styles.summary}>
            <View style={styles.summaryAccent} />
            <View style={styles.summaryContent}>
              <Text style={styles.summaryOverline}>EQUIPO SELECCIONADO</Text>
              <Text style={styles.summaryTitle}>{viewModel.depSeleccionado.nombre}</Text>
              <Text style={styles.summaryCaption}>Directorio actualizado</Text>
            </View>
            <View style={styles.summaryMetric}>
              <Text style={styles.summaryNumber}>{viewModel.numeroPersonasPorDepartamento}</Text>
              <Text style={styles.summaryMetricLabel}>PERSONAS</Text>
            </View>
          </View>

          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Integrantes</Text>
            <Text style={styles.listHint}>Orden alfabetico</Text>
          </View>
          {viewModel.listaPersonasDepartamentos.length > 0 ? (
            <FlatList
              data={viewModel.listaPersonasDepartamentos}
              keyExtractor={(persona) => persona.id.toString()}
              renderItem={({ item }) => <PersonaItem persona={item} />}
              contentContainerStyle={styles.list}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Este departamento no tiene personas</Text>
              <Text style={styles.emptyText}>No hay integrantes registrados para mostrar.</Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Ningun departamento seleccionado</Text>
          <Text style={styles.emptyText}>Abre el selector para ver su lista de personas.</Text>
        </View>
      )}
    </View>
  );
}

type PersonaItemProps = {
  persona: Persona;
};

/**
 * Renderiza una persona como elemento visual del listado.
 * @param persona Persona que se mostrara.
 * @returns Tarjeta de la persona.
 * @precondition La persona debe contener nombre y apellido validos.
 * @postcondition Devuelve una tarjeta visual con los datos de la persona.
 */
function PersonaItem({ persona }: PersonaItemProps) {
  return (
    <View style={styles.persona}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{persona.nombre.charAt(0)}</Text>
      </View>
      <View style={styles.personaInfo}>
        <Text style={styles.personaName}>{persona.nombre}</Text>
        <Text style={styles.personaLastName}>{persona.apellido}</Text>
      </View>
      <Text style={styles.personaArrow}>›</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 58,
    backgroundColor: "#f3f0e9",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyebrow: {
    color: "#bd6246",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  companyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#d5ded3",
    borderRadius: 20,
    backgroundColor: "#e6eee3",
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 7,
    height: 7,
    marginRight: 6,
    borderRadius: 4,
    backgroundColor: "#5b9169",
  },
  companyBadgeText: {
    color: "#497256",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  title: {
    marginTop: 10,
    color: "#1c3029",
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 8,
    color: "#737a73",
    fontSize: 15,
    lineHeight: 22,
  },
  labelRow: {
    marginTop: 30,
    marginBottom: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#4d5b52",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  departmentCount: {
    color: "#9b7565",
    fontSize: 12,
    fontWeight: "700",
  },
  selectorContainer: {
    zIndex: 2,
  },
  selector: {
    minHeight: 62,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: "#d6d0c4",
    borderRadius: 14,
    backgroundColor: "#fffefa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#2c3d34",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  emptySelector: {
    minHeight: 72,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e2d8cc",
    borderRadius: 14,
    backgroundColor: "#fff8f1",
    flexDirection: "row",
    alignItems: "center",
  },
  emptySelectorIcon: {
    width: 28,
    height: 28,
    marginRight: 11,
    borderRadius: 14,
    backgroundColor: "#f1c09a",
    color: "#814a35",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 28,
    textAlign: "center",
  },
  emptySelectorCopy: {
    flex: 1,
  },
  emptySelectorTitle: {
    color: "#704936",
    fontSize: 15,
    fontWeight: "700",
  },
  emptySelectorText: {
    marginTop: 3,
    color: "#9a8172",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.8,
  },
  selectorText: {
    color: "#21372e",
    fontSize: 16,
    fontWeight: "700",
  },
  placeholder: {
    color: "#8d938d",
    fontSize: 16,
  },
  chevron: {
    color: "#bd6246",
    fontSize: 24,
    lineHeight: 20,
  },
  options: {
    maxHeight: 270,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#d6d0c4",
    borderRadius: 14,
    backgroundColor: "#fffefa",
    overflow: "hidden",
    shadowColor: "#2c3d34",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  option: {
    minHeight: 52,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeae1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionPressed: {
    backgroundColor: "#f5e9df",
  },
  optionCopy: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIndex: {
    width: 28,
    color: "#bd6246",
    fontSize: 11,
    fontWeight: "800",
  },
  optionText: {
    color: "#263a31",
    fontSize: 16,
    fontWeight: "600",
  },
  optionCheck: {
    color: "#5b9169",
    fontSize: 18,
    fontWeight: "800",
  },
  summary: {
    minHeight: 126,
    marginTop: 22,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#244239",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#193129",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 4,
  },
  summaryAccent: {
    width: 5,
    height: 76,
    marginRight: 14,
    borderRadius: 3,
    backgroundColor: "#e99b72",
  },
  summaryContent: {
    flex: 1,
  },
  summaryOverline: {
    color: "#a9c1ae",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  summaryNumber: {
    color: "#f1b184",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 37,
  },
  summaryTitle: {
    marginTop: 5,
    color: "#fffdf7",
    fontSize: 18,
    fontWeight: "800",
  },
  summaryCaption: {
    marginTop: 2,
    color: "#afc2b2",
    fontSize: 13,
  },
  summaryMetric: {
    minWidth: 58,
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: "#557064",
    alignItems: "center",
  },
  summaryMetricLabel: {
    marginTop: 3,
    color: "#b8c9ba",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  listHeader: {
    marginTop: 25,
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  listTitle: {
    color: "#263b31",
    fontSize: 20,
    fontWeight: "800",
  },
  listHint: {
    color: "#929890",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  list: {
    paddingTop: 12,
    paddingBottom: 32,
    gap: 11,
  },
  persona: {
    minHeight: 72,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ebe5da",
    borderRadius: 14,
    backgroundColor: "#fffefa",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#36453c",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    marginRight: 13,
    borderRadius: 13,
    backgroundColor: "#f1c09a",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#814a35",
    fontSize: 17,
    fontWeight: "800",
  },
  personaInfo: {
    flex: 1,
  },
  personaName: {
    color: "#26382f",
    fontSize: 16,
    fontWeight: "700",
  },
  personaLastName: {
    marginTop: 3,
    color: "#7b847c",
    fontSize: 14,
  },
  personaArrow: {
    marginLeft: 8,
    color: "#bd6246",
    fontSize: 25,
    fontWeight: "300",
  },
  emptyState: {
    marginTop: 56,
    padding: 24,
    borderWidth: 1,
    borderColor: "#e3ddd1",
    borderRadius: 16,
    backgroundColor: "#fffefa",
    alignItems: "center",
  },
  emptyTitle: {
    color: "#30453a",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  emptyText: {
    maxWidth: 260,
    marginTop: 8,
    color: "#858c84",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
});
