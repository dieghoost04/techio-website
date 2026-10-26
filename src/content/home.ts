import type { FAQ } from "@/types/content";

export const homeFaqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Cada proyecto se cotiza según su alcance: el tipo de solución, la cantidad de secciones, productos o platillos y el contenido con el que ya cuentas. Después del diagnóstico te compartimos una propuesta con el costo y las condiciones.",
  },
  {
    question: "¿Hay una mensualidad?",
    answer:
      "Nuestro servicio contempla la implementación y el mantenimiento de tu solución. Si tu proyecto incluye un pago recurrente, su monto y lo que cubre se especifican en tu propuesta antes de comenzar.",
  },
  {
    question: "¿Qué necesito proporcionar?",
    answer:
      "La información de tu negocio: textos, fotografías, logotipo, datos de contacto y, según la solución, tu menú, tus servicios o tus productos. Si te falta algo, lo identificamos juntos durante el diagnóstico.",
  },
  {
    question: "¿Qué sucede después de publicar el sitio?",
    answer:
      "Tu solución queda en línea y comienza el mantenimiento bajo las condiciones acordadas en tu propuesta. Funciones nuevas o cambios fuera de ese alcance se revisan por separado.",
  },
  {
    question: "¿Qué pasa si cancelo el servicio?",
    answer:
      "Tu contenido, tu dominio y tus datos son tuyos. Las condiciones de cancelación del servicio se especifican en tu propuesta.",
  },
];

export const whyTechio = [
  {
    key: "service",
    title: "Implementación y mantenimiento",
    description:
      "No solo publicamos tu solución: la mantenemos funcionando bajo las condiciones de servicio que acordamos contigo.",
  },
  {
    key: "scope",
    title: "Alcance claro desde el inicio",
    description:
      "Antes de comenzar sabes qué incluye tu proyecto, qué no incluye, cuánto cuesta y en qué condiciones.",
  },
  {
    key: "ownership",
    title: "Lo tuyo es tuyo",
    description: "Tu contenido, tu dominio y tus datos te pertenecen.",
  },
] as const;
