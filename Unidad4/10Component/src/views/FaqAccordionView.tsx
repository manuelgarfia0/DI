import { useState } from "react";
import {
  LayoutAnimation,
  Pressable,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FaqItem } from "@/model/entities/FaqItem";
import { FaqAccordionViewModel } from "@/viewmodel/FaqAccordionViewModel";

type FaqAccordionViewProps = {
  viewModel: FaqAccordionViewModel;
};

export default function FaqAccordionView({ viewModel }: FaqAccordionViewProps) {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(viewModel.expandedId);

  const toggleItem = (itemId: string) => {
    if (Platform.OS !== "web") {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setExpandedItemId(viewModel.toggle(itemId));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>CENTRO DE AYUDA / 04</Text>
          <Text style={styles.title}>Respuestas sin ruido.</Text>
          <Text style={styles.subtitle}>
            Despliega una pregunta y encuentra el siguiente paso para tu equipo.
          </Text>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Guía rápida · {viewModel.items.length} temas</Text>
        </View>

        <View style={styles.accordion}>
          {viewModel.items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedItemId === item.id}
              onToggle={toggleItem}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLabel}>¿No encuentras lo que buscas?</Text>
          <Text style={styles.footerText}>Escribe a soporte@orbita.local</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type AccordionItemProps = {
  item: FaqItem;
  index: number;
  isExpanded: boolean;
  onToggle: (itemId: string) => void;
};

function AccordionItem({ item, index, isExpanded, onToggle }: AccordionItemProps) {
  return (
    <View style={[styles.item, isExpanded && styles.itemExpanded]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isExpanded }}
        onPress={() => onToggle(item.id)}
        style={({ pressed }) => [styles.trigger, pressed && styles.triggerPressed]}
      >
        <View style={styles.indexBadge}>
          <Text style={styles.indexText}>{String(index + 1).padStart(2, "0")}</Text>
        </View>
        <View style={styles.questionCopy}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.question}>{item.question}</Text>
        </View>
        <Text style={styles.chevron}>{isExpanded ? "−" : "+"}</Text>
      </Pressable>

      {isExpanded && (
        <View style={styles.content}>
          <View style={styles.contentRule} />
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f1e8",
  },
  container: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 36,
  },
  header: {
    marginBottom: 26,
  },
  eyebrow: {
    color: "#b45f42",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  title: {
    marginTop: 12,
    color: "#20352f",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  subtitle: {
    maxWidth: 330,
    marginTop: 10,
    color: "#6c746d",
    fontSize: 15,
    lineHeight: 22,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: "#d1764d",
  },
  statusText: {
    color: "#7c8179",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  accordion: {
    gap: 10,
  },
  item: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ded8cb",
    borderRadius: 14,
    backgroundColor: "#fffdf8",
  },
  itemExpanded: {
    borderColor: "#c98562",
  },
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 84,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  triggerPressed: {
    backgroundColor: "#f1eadf",
  },
  indexBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    marginRight: 13,
    borderRadius: 19,
    backgroundColor: "#e8eee3",
  },
  indexText: {
    color: "#52705c",
    fontSize: 12,
    fontWeight: "800",
  },
  questionCopy: {
    flex: 1,
    paddingRight: 10,
  },
  category: {
    marginBottom: 4,
    color: "#b45f42",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  question: {
    color: "#263a33",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
  },
  chevron: {
    width: 26,
    color: "#b45f42",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "center",
  },
  content: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  contentRule: {
    width: 2,
    marginRight: 14,
    borderRadius: 1,
    backgroundColor: "#d1764d",
  },
  answer: {
    flex: 1,
    color: "#68716b",
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    marginTop: 28,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#ded8cb",
  },
  footerLabel: {
    color: "#737a73",
    fontSize: 12,
  },
  footerText: {
    marginTop: 5,
    color: "#b45f42",
    fontSize: 14,
    fontWeight: "800",
  },
});