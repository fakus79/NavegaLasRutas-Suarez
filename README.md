Trabajo Práctico curso Coderhouse React comisión 88075 - Facundo Suarez Chagra

*Consigna:* 

*Entrega 2: Navega las rutas*

Implementa una herramienta de routing, la cual permitirá navegar a través de las diferentes vistas para tu tienda: catálogo principal de productos, catálogo de productos filtrados por categorías, y vista en detalle de un producto. Crea la funcionalidad necesaria para que los usuarios puedan:

- Seleccionar desde el menú las distintas categorías disponibles.

- Visualizar el listado, filtrando según esa elección.

- Seleccionar un producto del listado y acceder a una vista en detalle del mismo, donde además contarán con una interfaz que posteriormente les permita agregar unidades al carrito.

*Objetivos*

- Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas.

- Desarrollar la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.

*Requisitos*

- Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app.

- División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.)

- Los componentes contenedores harán un llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto)

- Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo.

- Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente.

*Recomendaciones*

- No olvides utilizar los parámetros URL en el array de dependencias de tu useEffect para generar las actualizaciones necesarias al navegar.

- No crees diferentes rutas para cada categoría: puede parecer la solución más simple cuando tu aplicación sea pequeña, pero hará más difícil incorporar nuevas categorías y modificar la implementación en el futuro, ya que tendrás tu código duplicado en diversos componentes.

- Crear una ruta de tipo “404” (path=”*”) es una buena práctica y te ayudará a encontrar errores de navegación y enlaces mal formateados.

- Puedes incluir el componente contador ItemCount dentro del componente ItemDetail

*Formato*
- Link a último commit de git. Debe tener el nombre “NavegaLasRutas+Apellido”, por ejemplo “NavegaLasRutas+Fernandez” Opcional: Entrega un GIF mostrando la navegabilidad.
