# Propuesta: página de inicio — Dojo Doryokukan
## Qué
Una página de inicio del **Dojo Doryokukan**, club de karate **SKIF Colombia** dirigido por el sensei **Ernesto Márquez**. Es la página principal del sitio. Presenta el dojo, las categorías de clase, los valores, el cronograma, los equipos, la galería, inscripciones y contacto.

El nombre **Doryokukan** (lugar del esfuerzo) es la identidad: un dojo de práctica seria, no una ficha genérica de gimnasio.

## Por qué
Familias y practicantes necesitan un lugar propio, claro y rápido para saber qué se entrena, con quién, para qué edades y cómo inscribirse. La página debe:
- Comunicar en la primera pantalla el nombre del dojo, el estilo (Karate SKIF Colombia) y que hay **inscripciones abiertas**.
- Presentar al sensei con foto real y las categorías **Niños**, **Jóvenes** y **Adultos**.
- Mostrar valores, cronograma, equipos, galería, inscripciones y ubicación.
- Funcionar en celular, tablet y escritorio.
- Conectar directamente por WhatsApp y redes sociales.

## Quién
- Padres que buscan karate para niños.
- Jóvenes y adultos que quieren entrenar SKIF, competencia o defensa personal.
- Visitantes que llegan por recomendación o redes y necesitan datos de inscripción inmediatos.

## Identidad
| Campo               | Valor                                                                 |
| ------------------- | --------------------------------------------------------------------- |
| Nombre              | Dojo Doryokukan                                                       |
| Sensei              | Ernesto Márquez                                                       |
| Estilo              | Karate SKIF Colombia — afiliado a SKIF Internacional y WKF             |
| Público             | Niños (5–7), Jóvenes (8–17), Adultos (18+)                             |
| Valores             | Disciplina · Respeto · Esfuerzo · Honor                               |
| Formación adicional | Defensa personal, kihon, kata, kumite, preparación competitiva SKIF   |
| Ubicación           | Coliseo de Megacolegio — Villa del Rosario, Norte de Santander, Colombia |
| Teléfono / WhatsApp | +57 305 240 3346 → https://wa.me/573052403346                          |
| Correo              | dojodoryokukan@gmail.com                                              |
| Estado              | ✅ Inscripciones abiertas — prueba dos clases sin compromiso          |
| Eslogan             | El camino del esfuerzo                                                |
| Horarios            | Lunes, miércoles, viernes — grupos según categoría                   |
| Redes               | Instagram · Facebook · YouTube                                        |

> Todos los datos confirmados y publicados; sin información inventada.

## Alcance
### Incluye
- Una sola página principal con anclas de navegación.
- Menú: Inicio, Nosotros, Clases, Cronograma, Galería, Atletas, Inscripciones.
- Logo con imagen real en lugar de emblema tipográfico.
- Hero: nombre, eslogan, SKIF Colombia, aviso de inscripciones y botón **Inscríbete**.
- Sección Nosotros: foto del Sensei Ernesto Márquez + enlaces a SKIF Internacional y WKF.
- Sección Clases: tres tarjetas con foto real — Niños, Jóvenes, Adultos.
- Sección Valores: cuatro valores oficiales.
- Sección Cronograma: horarios confirmados por categoría.
- Sección Galería: widget embebido de Instagram + enlace al perfil.
- Sección Atletas: equipos infantil, juvenil y adulto con fotos reales.
- Sección Inscripciones: requisitos, edades, horarios, botón directo a WhatsApp.
- Pie de página: dirección, teléfono cliqueable, menú, **redes sociales con íconos oficiales**, derechos reservados.
- Botón flotante de WhatsApp: siempre visible, abre conversación directa.
- Desarrollado en **Angular 22** → compilación a HTML/CSS optimizado.

### No incluye
- Páginas internas, blog o panel de administración.
- Formularios con envío de datos al servidor.
- Pasarelas de pago.
- Contenido o imágenes con derechos de autor no autorizados.

## Criterios de éxito
1. En la primera pantalla se lee el nombre del dojo, SKIF Colombia, el eslogan y que hay inscripciones abiertas.
2. Cada enlace del menú lleva a su sección correspondiente.
3. Las tres categorías, los cuatro valores y los tres equipos son visibles y comprensibles.
4. La página funciona correctamente en móvil (~360px), tablet y escritorio.
5. Contraste suficiente en todos los fondos: negro, rojo, blanco.
6. Teléfono y WhatsApp abren la acción correspondiente al hacer clic.
7. Redes sociales y enlaces institucionales abren en pestaña nueva con atributos de seguridad.
8. Todo se despliega automáticamente tras cada actualización en rama principal.

## Restricciones
- Contenido en español.
- Paleta oficial: negro, rojo `#D32F2F`, blanco, dorado `#C9A227`.
- Visual moderno con bordes que evoquen artes marciales.
- Desarrollado con Angular 22; sin dependencias externas obligatorias en tiempo de ejecución.
- Imágenes almacenadas en `public/images/`.

## Despliegue Automático
- Cada actualización en rama principal → GitHub Actions compila con `ng build` → sube a bucket AWS S3 + CloudFront.
- No requiere intervención manual.
- Credenciales AWS almacenadas como secretos en el repositorio.
- Se excluye la carpeta `docs/` del despliegue.