PRESENTACION INDIVIDUAL

Hola a todos mi nombre es Enrique Ceballos, estudiante de la carrera de Desarrollador Web Full Stack de la plataforma
CoderHouse cursando el Lenguaje React.js del cual esta basado completamente este proyecto.

EMPRENDIMIENTO

MAMITUS es un emprendimiento de Crochet donde todos los productos son realizados a mano de manera artesanal y
comercializados mediante ferias barriales. La idea de crear esta pagina es poder darle otro medio de visualizacion
a nuevos clientes y una facilidad de compra para las personas que no tienen la posibilidad de llegar a esos puntos de venta.

USO DE LA PAGINA A NIVEL USUARIO

La pagina esta conformada por varias secciones donde la principal se encuentra el listado de productos donde podran ver a detalle la cantidad y el precio de los mismos.

- Posee un boton que permite ver las caracteristicas particulares de cada producto y en la misma pagina podes realizar la compra de una o varias unidades.

- Te permite seguir comprando otro tipo de productos ya que todo el Carrito se guarda hasta la actualizacion de la pagina o hasta que el cliente decida Eliminarlos del carrito de compra.

- En la pagina de compra muestra el o los objetos seleccionados con el precio individual y el total para abonar, permitiendo al usario eliminar todos los productos del carrito o solo los que desee de manera individual modificando el total a pagar.

- Uno vez que el cliente decida realizar la compra, solo debera apretar el boton de Finalizar Compra que esta ubicado dentro burbuja en de la pagina permitiendo al usuario nunca perder el total a pagar y dejando visibilidad de los productos a adquirir.

CREACION DE LA PAGINA A NIVEL PROGRAMACION

1- ItemListContainer: Este archivo es quien contiene todos los datos que formaran la pagina principal y donde tiene todos los productos que son traidos por la Firebase y llamados desde la Coleccion "Item" para generar todas las tarjetas de productos con sus respectivos datos(id, nombre, precio, etc).

2- ItemDetailContainer: En el siguiente archivo se llama de vuelta al Firebase solo que esta vez realiza el llamado una sola vez trayendo al producto seleccioado por ID que cumpla con los requisitos establecidos por la funcion().

3- Item/ItemDetail: Los siguientes archivos contienen la informacion traida por la Firebase de manera individual donde muestra en la pagina [Nombre, Precio, Detalle, Imagen y Stock] del producto.

4- CartContext: atravez de este archivo se genera una conexion con todos los archivos de la aplicacion para poder conectar dos elementos de diferentes ramas y que funcione en armonia como lo es (ItemCount/CartWidget con el NavBar).

5 - Item
