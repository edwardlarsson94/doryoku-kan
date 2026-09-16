# Dojo Doryokukan — Sitio Web
Proyecto oficial del **Dojo Doryokukan**, escuela de Karate **SKIF Colombia** dirigida por el Sensei Ernesto Márquez. Desarrollado con Angular 22.

---

## 📋 Descripción
Página principal del dojo: presenta al sensei, las categorías de entrenamiento, valores, cronograma, equipos de competencia, galería con integración de Instagram, inscripciones y contacto directo por WhatsApp y redes sociales.

> **Doryokukan** = lugar del esfuerzo. Un dojo de práctica seria, no una ficha genérica.

---

## 🛠️ Requisitos previos
- Node.js instalado (incluye npm)
- Angular CLI versión 22.1.8

### Instalar Angular CLI
```bash
npm install -g @angular/cli
```

---

## 🚀 Servidor de desarrollo
Ejecuta el servidor:
```bash
ng serve
```
Abre tu navegador en **http://localhost:4200/**. La aplicación se recarga automáticamente al modificar los archivos.

---

## 📁 Estructura del proyecto
```
doryoku-kan/
├── public/
│   └── images/              → Logo, fotos del sensei, clases y equipos
├── src/
│   └── app/
│       ├── app.component.html  → Estructura completa de la página
│       ├── app.component.css   → Estilos y paleta oficial
│       ├── app.component.ts    → Lógica del componente
│       └── app.spec.ts         → Pruebas unitarias
├── docs/
│   ├── proposal.md         → Propuesta, alcance y datos confirmados
│   ├── design.md           → Diseño, paleta, secciones y rutas
│   └── tasks.md            → Lista de tareas y avance del proyecto
├── .github/workflows/
│   └── deploy.yml          → Despliegue automático a AWS
└── README.md
```

---

## 🎨 Identidad visual y contacto
- **Paleta oficial:** Rojo `#D32F2F`, negro `#111111`, blanco `#FFFFFF`, dorado `#C9A227`
- **Tipografía:** "Segoe UI", system-ui, sans-serif — limpia y legible
- **Diseño responsivo:** se adapta a móvil (~360px), tablet y escritorio
- **Secciones:** Inicio → Nosotros → Clases → Valores → Cronograma → Galería → Atletas → Inscripciones
- **Integración de Instagram:** widget embebido en la sección Galería
- **Teléfonos cliqueables:** formato `tel:+57...` que abre llamada automática
- **Botón flotante de WhatsApp:** siempre visible, abre conversación directa

### 📱 Síguenos y contáctanos
| Red | Enlace |
|---|---|
| Instagram | https://www.instagram.com/dojodoryokukan/ |
| Facebook | https://www.facebook.com/dojodoryokukancolombia/ |
| YouTube | https://www.youtube.com/@dojodoryokukan3237 |
| WhatsApp | https://wa.me/573052403346 |

### 🏅 Afiliaciones oficiales
- **SKIF Internacional** — https://www.skifworld.com/
- **Federación Mundial de Karate (WKF)** — https://www.wkf.net/

### 📍 Datos del dojo
- **Ubicación:** Coliseo de Megacolegio — Villa del Rosario, Colombia
- **Horarios:** Lunes, miércoles y viernes — según categoría
- **Inscripciones:** Abiertas — prueba dos clases sin compromiso
- **Edades:** Niños (5–7), Jóvenes (8–17), Adultos (18+)

---

## 🔨 Compilación para producción
```bash
ng build --configuration=production
```
El resultado optimizado se guarda en la carpeta `dist/`.

---

## ☁️ Despliegue automático
- Cada cambio en la rama **main** → GitHub Actions compila con `ng build` → sube automáticamente al bucket AWS S3 + CloudFront
- No requiere intervención manual
- Credenciales AWS almacenadas como secretos en el repositorio
- Se excluye la carpeta `docs/` del sitio público
- Archivos publicados: `index.html`, estilos, scripts e imágenes

---

## ✅ Pruebas
```bash
ng test
```
- Verifica título, eslogan, enlaces de navegación, redes sociales y estabilidad del componente

---

## 📖 Documentación técnica
Consulta en la carpeta `docs/`:
- **proposal.md** — Qué es el proyecto, identidad, público y alcance
- **design.md** — Paleta de colores, estructura de secciones, rutas de imágenes y guía visual
- **tasks.md** — Lista de tareas completadas y pendientes según metodología SDD

---

## 📚 Referencias
- Documentación de Angular CLI: https://angular.dev/tools/cli