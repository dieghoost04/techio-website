import type { Solution } from "@/types/content";

/**
 * Solution families offered in v1. Each entry renders a full detail page
 * through `SolutionPageTemplate`. Scope items marked for confirmation in
 * CONTENT_REVIEW.md must be approved before launch.
 */
export const solutions: Solution[] = [
  {
    slug: "menu-qr-restaurantes",
    name: "Menú QR y web para restaurantes",
    shortName: "Restaurantes",
    accent: "lime",
    icon: "restaurant",
    audience: "Restaurantes, cafeterías, fondas y negocios de comida.",
    problem: "Tu menú vive en papel, en fotos o en PDF difíciles de leer y de actualizar.",
    summary:
      "Un sitio para tu restaurante con tu menú digital y un código QR para que tus clientes lo consulten desde su celular.",
    problemCard: {
      title: "Tu menú es difícil de consultar y de mantener al día",
      description:
        "Menús impresos que se desgastan, fotos borrosas en redes sociales o un PDF que nadie puede leer en el celular.",
      howWeHelp:
        "Creamos un menú digital claro, accesible con un código QR, junto con una web con la información de tu restaurante.",
    },
    hero: {
      title: "Tu menú y tu restaurante, a un escaneo de distancia.",
      lead: "Diseñamos una web para tu restaurante con un menú digital fácil de leer en el celular y un código QR para que tus clientes lo abran en la mesa, en el mostrador o desde casa.",
    },
    problemSection: {
      title: "Cuando el menú no ayuda a vender",
      paragraphs: [
        "Muchos restaurantes comparten su menú como fotos en redes sociales o archivos PDF. Funcionan, pero son difíciles de leer en un teléfono, no aparecen bien en buscadores y cada cambio de precio implica volver a diseñar e imprimir.",
        "Una web con menú digital reúne en un solo lugar lo que tus clientes buscan antes de visitarte: qué ofreces, dónde estás, a qué hora abres y cómo contactarte.",
      ],
      signals: [
        "Tus clientes te preguntan por mensaje qué platillos tienes o cuánto cuestan.",
        "Tu menú impreso está desactualizado o desgastado.",
        "Tu información está repartida entre varias redes sociales.",
      ],
    },
    included: [
      {
        title: "Web del restaurante",
        description: "Una página con la información esencial de tu negocio: quiénes son, horarios, ubicación y formas de contacto.",
      },
      {
        title: "Menú digital",
        description: "Tu menú organizado por categorías, con descripciones y precios si decides mostrarlos, pensado para leerse en el celular.",
      },
      {
        title: "Código QR",
        description: "Un código QR que dirige a tu menú, entregado en un archivo listo para que lo imprimas donde lo necesites.",
      },
      {
        title: "Diseño adaptable",
        description: "Se ve y funciona bien en celulares, tabletas y computadoras.",
      },
    ],
    notIncluded: [
      "Pedidos en línea o carrito de compras.",
      "Pagos en línea.",
      "Integración con plataformas de entrega a domicilio.",
      "Reservaciones o gestión de mesas.",
      "Impresión física de códigos QR o material impreso.",
    ],
    clientProvides: [
      "Tu menú actualizado: categorías, platillos, descripciones y precios.",
      "Fotografías de tus platillos y de tu local, si quieres mostrarlas.",
      "Tu logotipo y, si los tienes, tus colores de marca.",
      "Horarios, dirección y datos de contacto.",
      "Enlaces a tus redes sociales.",
    ],
    maintenance: {
      summary:
        "Después de publicar, tu sitio entra en mantenimiento bajo las condiciones acordadas en tu propuesta.",
      points: [
        "Qué tipo de cambios incluye el mantenimiento —por ejemplo, actualizaciones de platillos o precios— se define en tu propuesta.",
        "Funciones nuevas o servicios de terceros no forman parte del mantenimiento salvo que se acuerden.",
      ],
    },
    faqs: [
      {
        question: "¿Mis clientes necesitan descargar una aplicación?",
        answer:
          "No. El código QR abre tu menú directamente en el navegador del teléfono, como cualquier página web.",
      },
      {
        question: "¿Puedo recibir pedidos o pagos desde el menú?",
        answer:
          "Esta solución está pensada para mostrar tu menú e información. Los pedidos y pagos en línea no están incluidos.",
      },
      {
        question: "¿Qué pasa si cambio precios o platillos?",
        answer:
          "Cómo y con qué frecuencia se realizan las actualizaciones del menú se define en las condiciones de mantenimiento de tu propuesta.",
      },
    ],
    seo: {
      title: "Menú QR y web para restaurantes",
      description:
        "Web para tu restaurante con menú digital y código QR. Muestra tu menú, horarios y ubicación en un sitio claro y fácil de leer en el celular.",
    },
  },
  {
    slug: "web-para-negocios-de-servicios",
    name: "Landing pages y webs para negocios de servicios",
    shortName: "Negocios de servicios",
    accent: "lavender",
    icon: "services",
    audience: "Profesionistas, consultorios, despachos, talleres, estéticas y negocios que venden servicios.",
    problem: "Cuando alguien te busca en internet, no encuentra una presentación clara de lo que haces.",
    summary:
      "Una landing page o un sitio de varias secciones que presenta tu negocio, explica tus servicios y facilita que te contacten.",
    problemCard: {
      title: "Tus clientes no encuentran una presentación clara de tu negocio",
      description:
        "Tus servicios se explican de boca en boca o en publicaciones sueltas, y quien te busca no sabe bien qué ofreces ni cómo contactarte.",
      howWeHelp:
        "Construimos una web profesional que presenta tu negocio, describe tus servicios y lleva al visitante a contactarte.",
    },
    hero: {
      title: "Una presencia profesional para tu negocio de servicios.",
      lead: "Creamos una landing page o un sitio de varias secciones que explica con claridad qué haces, para quién lo haces y cómo pueden contactarte.",
    },
    problemSection: {
      title: "Cuando te recomiendan, pero no te encuentran",
      paragraphs: [
        "Muchos negocios de servicios crecen por recomendación. Pero antes de escribirte, la mayoría de las personas busca tu nombre en internet para saber si eres lo que necesitan.",
        "Un sitio claro responde esas preguntas por ti: qué servicios ofreces, cómo trabajas y cuál es el siguiente paso para contactarte.",
      ],
      signals: [
        "Explicas lo mismo una y otra vez por mensaje.",
        "Tu negocio solo existe en redes sociales.",
        "Tu sitio actual está desactualizado o no se ve bien en el celular.",
      ],
    },
    included: [
      {
        title: "Presentación del negocio",
        description: "Una sección que explica quién eres, a quién atiendes y qué te distingue, con tus propias palabras.",
      },
      {
        title: "Descripción de servicios",
        description: "Tus servicios organizados y explicados para que el visitante entienda rápidamente qué ofreces.",
      },
      {
        title: "Contacto y llamadas a la acción",
        description: "Información de contacto visible y botones que llevan al visitante a escribirte o llamarte.",
      },
      {
        title: "Diseño adaptable",
        description: "Una landing page o un sitio de varias secciones, según el alcance acordado, que funciona en cualquier dispositivo.",
      },
    ],
    notIncluded: [
      "Agenda o reservación de citas en línea.",
      "Integraciones con sistemas CRM.",
      "Mensajes automatizados.",
      "Analítica avanzada o tableros de métricas.",
      "Tienda en línea o pagos.",
    ],
    clientProvides: [
      "Una descripción de tu negocio y de los servicios que ofreces.",
      "Fotografías de tu trabajo, de tu equipo o de tu espacio, si las tienes.",
      "Tu logotipo y, si los tienes, tus colores de marca.",
      "Los datos de contacto que quieres mostrar.",
      "Tu decisión sobre el dominio (la dirección web) de tu sitio.",
    ],
    maintenance: {
      summary:
        "Después de publicar, tu sitio entra en mantenimiento bajo las condiciones acordadas en tu propuesta.",
      points: [
        "El alcance del mantenimiento y los tipos de cambio que incluye se definen en tu propuesta.",
        "Secciones nuevas, funciones adicionales o servicios de terceros se revisan por separado.",
      ],
    },
    faqs: [
      {
        question: "¿Qué diferencia hay entre una landing page y un sitio de varias secciones?",
        answer:
          "Una landing page reúne todo en una sola página enfocada en que te contacten. Un sitio de varias secciones separa la información en páginas. En el diagnóstico definimos cuál conviene a tu negocio.",
      },
      {
        question: "¿Mis clientes podrán agendar citas desde el sitio?",
        answer:
          "La agenda de citas en línea no forma parte de esta solución. El sitio facilita que te contacten por los canales que elijas.",
      },
      {
        question: "¿Necesito tener los textos listos?",
        answer:
          "Necesitamos la información de tu negocio y tus servicios. Si no tienes textos terminados, en el diagnóstico revisamos juntos qué hace falta.",
      },
    ],
    seo: {
      title: "Webs para negocios de servicios",
      description:
        "Landing pages y sitios web para negocios de servicios: presenta tu negocio, explica tus servicios y facilita que tus clientes te contacten.",
    },
  },
  {
    slug: "catalogos-de-productos",
    name: "Catálogos de productos",
    shortName: "Catálogos",
    accent: "teal",
    icon: "catalog",
    audience: "Tiendas, distribuidores, productores y negocios que venden productos físicos.",
    problem: "Tus productos se comparten en fotos sueltas y listas que cambian todo el tiempo.",
    summary:
      "Un catálogo digital con categorías, imágenes y descripciones para que tus clientes vean lo que vendes y te contacten.",
    problemCard: {
      title: "Tus productos están dispersos en fotos y mensajes",
      description:
        "Cada vez que alguien pregunta, envías fotos una por una o un PDF pesado que pronto queda desactualizado.",
      howWeHelp:
        "Organizamos tus productos en un catálogo digital por categorías, fácil de compartir con un solo enlace.",
    },
    hero: {
      title: "Tus productos, organizados en un catálogo que puedes compartir.",
      lead: "Creamos un catálogo digital con categorías, imágenes y descripciones de tus productos, para que tus clientes vean lo que ofreces y te contacten.",
    },
    problemSection: {
      title: "Cuando mostrar tus productos se vuelve trabajo extra",
      paragraphs: [
        "Enviar fotos por mensaje o actualizar un PDF cada temporada consume tiempo y genera confusión sobre qué productos siguen disponibles.",
        "Un catálogo digital centraliza tus productos en un enlace que puedes compartir en redes sociales, mensajes o un código QR.",
      ],
      signals: [
        "Envías las mismas fotos de producto muchas veces al día.",
        "Tu catálogo en PDF es pesado o está desactualizado.",
        "Tus clientes no saben qué categorías o modelos manejas.",
      ],
    },
    included: [
      {
        title: "Categorías de productos",
        description: "Tus productos agrupados en categorías para que sea fácil explorarlos.",
      },
      {
        title: "Fichas de producto",
        description: "Cada producto con imagen, nombre y descripción, y precio si decides mostrarlo.",
      },
      {
        title: "Contacto con tu negocio",
        description: "Información de contacto visible para que tus clientes pregunten por un producto.",
      },
      {
        title: "Diseño adaptable",
        description: "Un catálogo que se ve bien en celulares, tabletas y computadoras.",
      },
    ],
    notIncluded: [
      "Tienda en línea completa (ecommerce).",
      "Carrito de compras.",
      "Pagos en línea.",
      "Sincronización de inventario.",
      "Envíos o logística.",
    ],
    clientProvides: [
      "La lista de productos con nombre, descripción y categoría.",
      "Precios, si quieres mostrarlos.",
      "Fotografías de tus productos.",
      "Tu logotipo y, si los tienes, tus colores de marca.",
      "Los datos de contacto que quieres mostrar.",
    ],
    maintenance: {
      summary:
        "Después de publicar, tu catálogo entra en mantenimiento bajo las condiciones acordadas en tu propuesta.",
      points: [
        "Cómo se agregan o actualizan productos durante el mantenimiento se define en tu propuesta.",
        "Funciones de tienda en línea o servicios de terceros no forman parte del mantenimiento salvo que se acuerden.",
      ],
    },
    faqs: [
      {
        question: "¿Es lo mismo que una tienda en línea?",
        answer:
          "No. El catálogo muestra tus productos y facilita que te contacten. No incluye carrito de compras, pagos en línea ni control de inventario.",
      },
      {
        question: "¿Cuántos productos puedo incluir?",
        answer:
          "Depende del alcance del proyecto. La cantidad de productos y categorías se define en tu propuesta.",
      },
      {
        question: "¿Puedo compartir el catálogo por WhatsApp o redes sociales?",
        answer: "Sí. Tu catálogo tiene su propia dirección web, que puedes compartir como cualquier enlace.",
      },
    ],
    seo: {
      title: "Catálogos de productos digitales",
      description:
        "Catálogo digital de productos con categorías, imágenes y descripciones. Comparte lo que vendes con un solo enlace.",
    },
  },
];

export function getSolution(slug: string): Solution {
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) {
    throw new Error(`Unknown solution slug: ${slug}`);
  }
  return solution;
}

export function solutionHref(slug: string): string {
  return `/soluciones/${slug}`;
}

export function contactHrefFor(slug: string): string {
  return `/contacto?solucion=${slug}`;
}
