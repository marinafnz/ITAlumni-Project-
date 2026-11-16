# ITAlumni

Plataforma web diseñada para conectar y potenciar la comunidad global de exalumnos de IT Academy. El proyecto traslada de forma fiel el sistema de diseño planteado en Figma hacia una interfaz web funcional, intuitiva y accesible.

**Demo en GitHub Pages:** (https://marinafnz.github.io/ITAlumni/)

---

## Características y vistas principales

- **Welcome y Autenticación (`index.html`, `login.html`):** Pantalla de bienvenida con presentación de la plataforma y flujo de acceso o registro para usuarios e invitados.
- **Inicio (`home.html`):** Panel principal con acceso rápido a las secciones clave de la comunidad y buscador integrado.
- **Red de contactos (`xarxa.html`):** Espacio dedicado al networking y conexión entre profesionales del sector.
- **Portal de empleo (`job.html`):** Listado de ofertas laborales filtrables y adaptadas a los perfiles técnicos del alumnado.

---

## Tecnologías y arquitectura aplicada

- **HTML5** Estructuración limpia del documento mediante etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`) para mejorar la accesibilidad y el mantenimiento del DOM.
- **CSS3 (Metodología Mobile-First):**
  - Maquetación basada en especificaciones de diseño en Figma.
  - Uso de Flexbox y grid para la distribución espacial y control de flujo de componentes.
  - Implementación de Media Queries (`@media`) y control de límites de ancho (`min-width`) para garantizar la estabilidad visual en resoluciones de escritorio[cite: 3].
- **JavaScript / TypeScript (`filter.js`, `filter.ts`):** Lógica interactiva orientada al filtrado dinámico de contenidos[cite: 3].
- **Control de versiones y despliegue:** Gestión de código con Git (flujo de trabajo mediante ramas feature) y despliegue continuo en GitHub Pages[cite: 3].

---

## Estructura de los archivos del proyecto

```text

├── Src/
│   ├── CSS/
│   │   └── index.css       # Hoja de estilos principal (Mobile-First y Desktop)
│   ├── IMG/                # Recursos gráficos, iconos e imágenes
│   ├── filter.ts           # Lógica de filtrado en TypeScript
│   ├── filter.js           # Código compilado en JavaScript
│   ├── index.html          # Página de bienvenida
│   ├── login.html          # Acceso y registro
│   ├── home.html           # Vista principal (mobile)
│   ├── xarxa.html          # Sección de Networking
│   └── job.html            # Portal de empleo
├── package.json            # Configuración de dependencias del proyecto
└── README.md               # Documentación del proyecto

```