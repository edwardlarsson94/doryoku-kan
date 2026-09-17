# Diseño — Dojo Doryokukan

---

## 🎨 Paleta
| Token               | Uso                                     | Hex       |
| ------------------- | --------------------------------------- | --------- |
| `--negro`           | Fondo base, pie, texto sobre blanco     | `#111111` |
| `--negro-profundo`  | Hero y header                           | `#0A0A0A` |
| `--rojo`            | Secciones de acento, CTA, detalles      | `#D32F2F` |
| `--rojo-oscuro`     | Hover de botones, bordes                | `#9A1B1B` |
| `--blanco`          | Secciones claras, texto sobre oscuro    | `#FFFFFF` |
| `--hueso`           | Texto secundario sobre oscuro           | `#E8E4DC` |
| `--oro`             | Acento (líneas, logo, foco, bordes)     | `#C9A227` |
| `--oro-claro`       | Hover de acento, resaltado              | `#E0C35A` |
| `--espacio`         | Espaciado estándar entre bloques        | `1.25rem` |
| `--ancho`           | Ancho máximo del contenido              | `70rem`   |
| `--header`          | Altura del encabezado fijo              | `4.25rem` |
| `--fuente`          | Tipografía principal                    | `"Segoe UI", system-ui, sans-serif` |

> Contraste: texto blanco sobre `#111111` y `#D32F2F`; texto `#111111` sobre `#FFFFFF`. El oro no se usa como único medio para distinguir enlaces.

---

## ✨ Cambios recientes al diseño
- **Logo con imagen real**: en lugar de emblema tipográfico, se usa archivo de imagen circular. Clases: `.logo__imagen` (encabezado) y `.logo__imagen--grande` (sección principal).
- **Teléfonos cliqueables**: enlaces con formato `tel:+57...` que abren llamada automáticamente. Estilo: `.enlace-telefono` — se mantiene color hueso con borde inferior rojo, pasa a dorado al pasar el cursor.
- **Horarios resaltados**: hora en negrita y rojo con `.horario__hora`.
- **Galería con widget de Instagram**: integración con iframe oficial en lugar de imágenes estáticas. Se mantiene enlace directo al perfil.
- **Imágenes ilustrativas por sección**: cada tarjeta de Clases y Atletas incluye foto real. Rutas:
  - `images/sensei.png` — sección Nosotros
  - `images/clase-ninos.png` — tarjeta Niños
  - `images/clase-jovenes.png` — tarjeta Jóvenes
  - `images/clase-adultos.png` — tarjeta Adultos
  - `images/equipo-infantil.png` — Equipo infantil
  - `images/equipo-juvenil.png` — Equipo juvenil
  - `images/equipo-adulto.png` — Equipo adulto
- **Sección Inscripciones independiente**: separada de Contacto, con requisitos, edades, horarios y llamada a la acción directa por WhatsApp.
- **Botón flotante de WhatsApp**: siempre visible en esquina inferior derecha, color verde oficial, ícono SVG, abre chat directo.
- **Navegación actualizada**: menú vincula a `#inscripciones` en lugar de `#contacto`.
- **Reestructuración en componentes Angular**: el marcado único se divide en módulos independientes escalables.

---

## 📐 Ritmo visual
- Fondo general oscuro.
- Secciones a pantalla completa que **alternan** negro / blanco / rojo (no tres bloques del mismo color seguidos).
- Ancho de contenido: `min(70rem, 100% - 2rem)`.
- Bordes de artes marciales: filete dorado fino, esquinas en L, línea tipo cinturón bajo títulos de sección.
- Logo: **imagen circular** en lugar de emblema tipográfico.
- Tarjetas con imagen: foto arriba, texto abajo, borde dorado, elevación suave al pasar el cursor.
- Botones: esquinas redondeadas `8px`, transición suave `0.3s ease`, elevación y sombra en `:hover`.

---
## 🔤 Tipografía
- Sistema: `Segoe UI`, `system-ui`, `sans-serif`.
- Cuerpo ≥ `1rem`, interlineado ~1.6.
- Títulos de sección en mayúsculas con espaciado amplio.
- Un solo `h1` en la página (nombre del dojo).

---
## 🧱 Arquitectura de componentes (Angular 22)
```
src/app/
├── app.component.ts / .html / .css       → Contenedor principal, variables globales, estilos compartidos
└── components/
    ├── header-nav/          → Enlace de salto + Logo + Menú escritorio/móvil
    ├── hero-section/        → #inicio — Portada, título, eslogan, botón principal
    ├── about-section/       → #nosotros — Sensei, significado, afiliaciones
    ├── classes-section/     → #clases — Tarjetas Niños / Jóvenes / Adultos
    ├── values-section/       → #valores — Cuatro valores oficiales
    ├── schedule-section/     → #cronograma — Horarios por categoría
    ├── gallery-section/      → #galeria — Widget de Instagram + enlace
    ├── team-section/         → #atletas — Equipos infantil / juvenil / adulto
    ├── enrollment-section/   → #inscripciones — Requisitos + CTA WhatsApp
    ├── site-footer/          → Pie: dirección, teléfono, redes, enlaces, copyright
```

### Principios de división
- Cada componente gestiona **una sola sección** con su propio `id` de ancla
- `app.component.html` queda limpio: solo etiquetas `<app-nombre-seccion />`
- `app.component.css` mantiene: `:root`, reseteos, `.envoltorio`, `.rejilla`, `.tarjeta`, `.boton` — estilos compartidos
- Cada `components/*/*.css` contiene exclusivamente los estilos de su sección
- Las anclas `#inicio`, `#nosotros`, etc. **se mantienen igual** → la navegación no se rompe
- Rutas de imágenes `images/` sin cambios → resueltas desde `public/`

---
## 📄 Estructura de la página (por componente)
1. **header-nav** → Enlace "Saltar al contenido" + `<header>` fijo con logo + menú escritorio + menú móvil (`<details>/<summary>`)
2. **hero-section** → `#inicio` — Logo grande, nombre, eslogan, SKIF Colombia, aviso "Inscripciones abiertas", botón **Inscríbete**
3. **about-section** → `#nosotros` — Foto del Sensei, biografía, significado de Doryokukan, enlaces SKIF Internacional + WKF
4. **classes-section** → `#clases` — Tres tarjetas con foto: Niños, Jóvenes, Adultos
5. **values-section** → `#valores` — Cuatro valores: Disciplina, Respeto, Esfuerzo, Honor
6. **schedule-section** → `#cronograma` — Horarios con horas resaltadas
7. **gallery-section** → `#galeria` — Iframe de Instagram + enlace al perfil
8. **team-section** → `#atletas` — Tres tarjetas con foto: Equipo infantil, juvenil, adulto
9. **enrollment-section** → `#inscripciones` — Requisitos, edades, horarios, prueba sin compromiso + botón WhatsApp
10. **site-footer** → Marca, dirección, teléfono cliqueable, redes sociales con íconos SVG, enlaces del menú, copyright

> Desplazamiento suave activado y `scroll-margin-top` en secciones para compensar el encabezado fijo.

---
## 📋 Contenido (fuente de verdad)
| Campo            | Valor                                                |
| ---------------- | ---------------------------------------------------- |
| Dojo             | Dojo Doryokukan                                      |
| Sensei           | Ernesto Márquez                                      |
| Estilo           | Karate SKIF Colombia                                 |
| Eslogan          | El camino del esfuerzo                               |
| Valores          | Disciplina · Respeto · Esfuerzo · Honor              |
| Categorías       | Niños · Jóvenes · Adultos                            |
| Ciudad           | Villa del Rosario, Colombia                          |
| Teléfono         | +57 305 240 3346 (cliqueable `tel:+573052403346`)    |
| WhatsApp         | https://wa.me/573052403346                           |
| Ubicación        | Coliseo de Megacolegio                               |
| Inscripciones    | Abiertas — prueba dos clases sin compromiso          |
| Horarios         | Lunes/Miércoles/Viernes — Niños 5:30-7:00 p.m. · Martes/Jueves/Viernes — Jóvenes y Adultos 5:30-7:00 p.m. |

---
## ♿ Accesibilidad y rendimiento
- Orden de foco coincide con orden visual; indicador visible en color oro.
- Enlaces identificables: borde inferior o cambio de color; no solo `:hover`.
- Teléfonos como enlaces nativos `tel:` — funcionales desde cualquier dispositivo.
- Imágenes con `loading="lazy"` y atributos `alt` descriptivos.
- Angular compila a HTML/CSS optimizado → rendimiento igual o superior al original.
- Sin dependencias externas obligatorias.
- Cada componente es independiente: pruebas unitarias por sección.

---
## 🛠️ Construcción y publicación
- Comando: `ng build --configuration=production` → genera carpeta `dist/` lista
- Se publica automáticamente en **AWS S3 + CloudFront**
- Cada actualización en rama principal → GitHub Actions compila y sube solo los archivos nuevos
- Credenciales AWS almacenadas como secretos en GitHub (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)
- Bucket: `doryoku-kan` | Región: `us-east-1`
- Se excluye `docs/` del despliegue público

---
## 📱 Redes sociales y contacto directo
| Red        | Enlace / Dato |
| ----------- | ------------- |
| Instagram   | https://www.instagram.com/dojodoryokukan/ |
| Facebook    | https://www.facebook.com/dojodoryokukancolombia/ |
| YouTube     | https://www.youtube.com/@dojodoryokukan3237 |
| WhatsApp    | https://wa.me/573052403346 — abre chat directo |

- Todos los enlaces se abren en pestaña nueva (`target="_blank" rel="noopener noreferrer"`)
- Se ubican en el **pie de página** con íconos SVG oficiales con colores de marca
- Botón flotante de WhatsApp: esquina inferior derecha, siempre visible, círculo verde `#25D366`

---
## 🏅 Enlaces de afiliación institucional
| Institución          | Enlace oficial            | Propósito |
| -------------------- | -------------------------- | --------- |
| SKIF Internacional   | https://www.skifworld.com/ | Organización mundial Shotokan |
| WKF — Federación Mundial | https://www.wkf.net/     | Reconocimiento oficial del karate |

- Se ubican en la sección **Nosotros**, debajo de las tarjetas
- Se abren en pestaña nueva con atributos de seguridad

---
## 📄 Título y Meta Descripción
- Título de página: `Dojo Doryokukan — Karate SKIF Colombia | Villa del Rosario`
- Meta descripción: `Entrenamiento de karate Shotokan para niños, jóvenes y adultos. Dirigido por el Sensei Ernesto Márquez. Coliseo de Megacolegio, Villa del Rosario. Inscripciones abiertas.`
- Propósito: Aparece en resultados de búsqueda y al compartir en redes sociales

---
## 🚀 Crecimiento futuro
- Estructura lista para agregar **Nuestros Senseis** (segundo instructor) dentro de `about-section`
- Video de fondo en `hero-section` con desenfoque y capa de color de marca
- Imágenes ampliables con Lightbox en tarjetas de equipos y clases
- Cada función nueva (formulario, galería ampliada, panel) → componente propio
- Lógica compartida → servicios Angular
- Diseño visual y paleta intactos al escalar