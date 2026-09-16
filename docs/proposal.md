# Propuesta: página de inicio — Dojo Doryokukan

## Qué

Una página de inicio estática del **Dojo Doryokukan**, club de karate **SKIF Colombia** dirigido por el sensei **Ernesto Márquez**. Es la única ruta del sitio en esta fase. Presenta el dojo, las categorías de clase, los valores, el cronograma, la ubicación y el contacto para inscribirse.

El nombre **Doryokukan** (館 del esfuerzo) es la identidad: un dojo de práctica seria, no una ficha genérica de gimnasio.

## Por qué

Familias y practicantes necesitan un lugar propio, claro y rápido para saber qué se entrena, con quién, para qué edades y cómo inscribirse. La página debe:

- Comunicar en la primera pantalla el nombre del dojo, el estilo (Karate SKIF Colombia) y que hay **inscripciones abiertas**.
- Presentar al sensei y las categorías **Niños**, **Jóvenes** y **Adultos**.
- Mostrar valores, ubicación, contacto, cronograma y atletas.
- Funcionar en celular, tablet y escritorio, sin depender de imágenes externas ni de un servidor de aplicación.

## Quién

- Padres que buscan karate para niños.
- Jóvenes y adultos que quieren entrenar SKIF, competencia o defensa personal.
- Visitantes que llegan por recomendación o redes y necesitan datos de inscripción.

## Identidad


| Campo               | Valor                                                                     |
| ------------------- | ------------------------------------------------------------------------- |
| Nombre              | Dojo Doryokukan                                                           |
| Sensei              | Ernesto Márquez                                                           |
| Estilo              | Karate SKIF Colombia                                                      |
| Público             | Niños, jóvenes y adultos                                                  |
| Valores             | Disciplina · Respeto · Esfuerzo · Honor                                   |
| Formación adicional | Defensa personal (parte del entrenamiento, no un valor separado del dojo) |
| Ubicación conocida  | Villa del Rosario, Colombia                                               |
| Estado              | Inscripciones abiertas                                                    |
| Eslogan             | El camino del esfuerzo                                                    |


Teléfono, dirección exacta de la sede, correo y horarios numéricos **no están confirmados** en esta fase: la página los reserva como datos a completar, sin inventar números.

## Alcance

### Incluye

- Una sola página (`/`) con anclas de navegación.
- Menú: Inicio, Nosotros, Clases, Cronograma, Galería, Contacto.
- Logo tipográfico (sin archivo de imagen).
- Hero: nombre, eslogan, aviso de inscripciones y botón **Inscríbete**.
- Presentación del sensei.
- Tarjetas Niños / Jóvenes / Adultos.
- Sección de valores (los cuatro oficiales).
- Cronograma (estructura por categoría; horarios concretos cuando existan).
- Galería sin fotos (marcos y etiquetas).
- Atletas (equipos por categoría, sin nombres de menores).
- Ubicación y contacto en el cuerpo y en el pie (dirección, teléfono, enlaces).

### No incluye

- Páginas internas, blog o CMS.
- Backend, formularios con envío real, pagos o autenticación.
- Imágenes, fuentes o scripts de terceros.
- Horarios o teléfonos inventados como si fueran oficiales.

## Criterios de éxito

1. En la primera pantalla se lee el nombre del dojo, SKIF Colombia, el eslogan y que hay inscripciones abiertas.
2. El menú lleva a Nosotros, Clases, Cronograma, Galería y Contacto.
3. Las tres categorías y los cuatro valores son visibles y comprensibles.
4. La página es usable a ~360px, en tablet y en escritorio.
5. Contraste suficiente en texto sobre fondo oscuro, rojo y blanco.
6. Solo se piden `index.html` y `css/estilos.css`.

## Restricciones

- Contenido en español.
- Paleta oficial: rojo intenso, negro, blanco y amarillo/dorado como acento.
- Visual moderno, enérgico y elegante, con bordes que evoquen artes marciales.
- HTML y CSS propios; JavaScript solo si el menú móvil no puede resolverse con HTML/CSS.
- Sin copiar assets con licencia dudosa.

## Despliegue Automático

- Cada vez que se actualice la rama principal en GitHub → se sube automáticamente al bucket S3 
- No se requiere intervención manual 
- Los archivos que se publican: index.html, css/, js/, imagenes/ 
- Se excluye la carpeta docs/ del despliegue

