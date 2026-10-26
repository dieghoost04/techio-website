import type { ProcessStage } from "@/types/content";

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Diagnóstico",
    summary: "Conocemos tu negocio, cómo trabajas hoy y qué necesitas resolver.",
    detail:
      "Conversamos sobre tu negocio, tus clientes y la forma en que compartes tu información actualmente. El objetivo es entender el problema antes de proponer una solución.",
    clientRole: "Cuéntanos cómo funciona tu negocio y qué te gustaría mejorar.",
  },
  {
    number: "02",
    title: "Propuesta",
    summary: "Te presentamos el alcance, lo que incluye, lo que no incluye y la cotización.",
    detail:
      "Con base en el diagnóstico preparamos una propuesta con el alcance del proyecto, lo que incluye y lo que no, el costo y las condiciones de pago y de mantenimiento.",
    clientRole: "Revisa la propuesta, resuelve tus dudas y apruébala cuando estés listo.",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    summary: "Diseñamos y construimos tu solución con tu información y tu identidad.",
    detail:
      "Diseñamos la solución con tu contenido y tu identidad visual, y la desarrollamos para que funcione bien en celulares, tabletas y computadoras.",
    clientRole: "Comparte el contenido acordado: textos, fotografías, logotipo y datos de contacto.",
  },
  {
    number: "04",
    title: "Revisión",
    summary: "Revisas el resultado y realizamos los ajustes acordados.",
    detail:
      "Antes de publicar, revisas la solución completa. Realizamos los ajustes que estén dentro del alcance acordado en la propuesta.",
    clientRole: "Revisa con calma y envíanos tus comentarios en un solo lugar.",
  },
  {
    number: "05",
    title: "Publicación",
    summary: "Publicamos tu solución y comienza el mantenimiento acordado.",
    detail:
      "Publicamos tu solución en línea. A partir de ese momento comienza el mantenimiento, bajo las condiciones definidas en tu propuesta.",
    clientRole: "Comparte tu nuevo sitio con tus clientes.",
  },
];
