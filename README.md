# Dojo Doryokukan — Sitio Web

Proyecto oficial del **Dojo Doryokukan**, escuela de Karate **SKIF Colombia** dirigida por el Sensei Ernesto Márquez. Desarrollado con Angular.

---

## Requisitos previos
- Node.js instalado (incluye npm)
- Angular CLI versión 22.1.8

### Instalar Angular CLI
npm install -g @angular/cli

---

## Servidor de desarrollo
Ejecuta el servidor de desarrollo:
ng serve

Abre tu navegador en http://localhost:4200/. La aplicación se recarga automáticamente al modificar los archivos.

---

## Estructura del proyecto
doryoku-kan/
├── public/
│   └── images/          → Logo y fotos de la galería
├── src/
│   └── app/
│       ├── app.component.html   → Marcado de la página
│       ├── app.component.css    → Estilos completos
│       └── app.component.ts     → Lógica del componente
├── docs/
│   ├── proposal.md       → Propuesta y alcance
│   ├── design.md         → Diseño, paleta y estilos
│   └── task.md           → Lista de tareas y avance
└── README.md

---

## Identidad visual y contacto
- Paleta oficial: Rojo #D32F2F, negro, blanco y dorado como acento
- Tipografía: "Segoe UI" + sistema, limpia y legible
- Diseño responsivo: se adapta a móvil, tablet y escritorio
- Teléfonos cliqueables: enlaces tel:+57... que abren llamada automáticamente

### Síguenos y contáctanos
- Instagram → https://www.instagram.com/dojodoryokukan/
- Facebook → https://www.facebook.com/dojodoryokukancolombia/
- YouTube → https://www.youtube.com/@dojodoryokukan3237
- WhatsApp → https://wa.me/573052403346

---

## Compilación para producción
ng build

El resultado optimizado se guarda en la carpeta dist/.

---

## Despliegue automático
- Cada cambio en la rama principal → GitHub Actions compila y sube automáticamente al bucket AWS S3
- No requiere intervención manual
- Se publican los archivos compilados: HTML, estilos, scripts e imágenes
- La carpeta docs/ no se publica en el sitio final

---

## Pruebas
ng test
ng e2e

---

## Documentación técnica
Consulta en la carpeta docs/:
- proposal.md — Qué es el proyecto, alcance y público objetivo
- design.md — Paleta de colores, estructura, rutas y guía visual
- task.md — Lista de tareas completadas y pendientes

---

## Más información
Para referencias detalladas de Angular CLI, visita la documentación oficial en: https://angular.dev/tools/cli