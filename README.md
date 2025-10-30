Trabajo Práctico curso Coderhouse React comisión 88075 - Facundo Suarez Chagra

*Consigna:* 

*Entrega final: Web App de e-commerce*

Desarrolla el Front End de una Single Page Application de e-commerce, utilizando React como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI). Implementa los diferentes patrones y conceptos específicos de React, como el Virtual DOM y los hooks. Para la interacción entre las mismas, incorpora manejo de eventos, navegación entre componentes, y administración de datos globales (por ejemplo: el estado del carrito de compras). Como herramienta de estilado podrás utilizar de forma opcional CSS, SASS, o librerías de estilos (Bootstrap) o de componentes (Material UI). Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data".Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.

*Objetivos*

- Desarrollar el front-end de una webapp de tipo e-commerce con React.

- Incorporar Firestore como base de datos.

*Requisitos: Listado y Detalle de productos*

- Generación dinámica del listado de productos y acceso a la vista en detalle de cada uno (ItemListContainer y ItemDetailContainer)

- Separación en componentes contenedores y de presentación para separar responsabilidad de tareas en los mismos. (ItemListContainer, ItemList)

- Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)

- Ocultar el componente ItemCount en ItemDetail luego de agregar un producto al carrito.

*Requisitos: Navegación*

- Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.

- Navegación respetando el modelo Single Page App (sin que se generen recargas de la página del navegador)

*Requisitos: Criterios de compras*

- Almacenamiento del estado de carrito de compras mediante Context.

- Mostrar el contenido del carrito dentro del componente Cart (productos, cantidades, subtotales, totales, etc.)

- Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context

*Requisitos: Firebase*

- Implementación de Firestore como base de datos.

- Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app.

- Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma.

*Requisitos: Experiencia de usuario*

- Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc.

- Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore

*Requisitos: Buenas prácticas y convenciones*

- Respetar las convenciones y consignas del curso para los nombres de variables funciones, componentes. eventos, y arquitectura de carpetas/archivos.

- Crear un documento en formato markdown documentando brevemente el proyecto

*Recomendaciones*

- Asegúrate de que tu repositorio no presenta errores y es público. Te aconsejamos clonarlo y realizar una instalación de cero para testear tu app y detectar posibles errores.

- Otra forma de detectar fallas es realizar un deploy de tu proyecto en servicios gratuitos (ej: Vercel, Netlify).

- Si utilizaste variables de entorno para ocultar tus credenciales de Firebase, envíalas a tu profesor cuando realices la entrega.

- No es necesario que envíes el enlace a tu panel de Firestore: el mismo es visible solo para el usuario administrador (es decir, accediendo con tu cuenta de google)

*Formato*
- Link al repositorio de GitHub con el nombre “ProyectoFinal+Apellido”, por ejemplo “ProyectoFinal+Fernandez”

