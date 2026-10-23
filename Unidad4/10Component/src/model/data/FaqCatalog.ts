import { FaqItem } from "@/model/entities/FaqItem";

export const FAQ_CATALOG: FaqItem[] = [
  {
    id: "workspace",
    category: "Primeros pasos",
    question: "¿Cómo creo mi primer espacio de trabajo?",
    answer:
      "Pulsa el botón + del panel principal, escribe un nombre y elige una plantilla. El espacio estará listo para compartir en pocos segundos.",
  },
  {
    id: "members",
    category: "Colaboración",
    question: "¿Puedo invitar a más personas?",
    answer:
      "Sí. Abre la sección Equipo, selecciona Invitar y añade los correos de las personas que quieras sumar al proyecto.",
  },
  {
    id: "notifications",
    category: "Preferencias",
    question: "¿Dónde cambio las notificaciones?",
    answer:
      "En tu perfil encontrarás Preferencias. Desde ahí puedes elegir qué avisos recibir y en qué momentos quieres pausarlos.",
  },
  {
    id: "export",
    category: "Datos",
    question: "¿Cómo exporto un resumen?",
    answer:
      "En el menú del proyecto, selecciona Exportar resumen. Puedes descargarlo como un archivo de texto para compartirlo fácilmente.",
  },
];