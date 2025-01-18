# Validación de formularios de datos
Antes de enviar datos al servidor, es importante asegurarse de que se completen todos los controles de formulario requeridos, y en el formato correcto. Esto se denomina validación de formulario en el lado del cliente y ayuda a garantizar que los datos que se envían coinciden con los requisitos establecidos en los diversos controles de formulario.

# ¿Qué es la validación de formularios?
Ve a cualquier sitio web popular que incluya un formulario de registro y observa que proporciones comentarios cuando no introduzcas tus datos en el formato que se espera. Recibirás mensajes como:

* «Este campo es obligatorio» (No se puede dejar este campo en blanco).

* «Introduzca su número de teléfono en el formato xxx-xxxx» (Se requiere un formato de datos específicos para que se considere válido).

* «Introduzca una dirección de correo electrónico válida» (los datos que introduzca no están en el formato correcto).

* «Su contraseña debe tener entre 8 y 30 caracteres y contener una letra mayúscula, un símbolo y un número». (Se requiere un formato de datos muy específico para tus datos).

Esto se llama validación de formulario . Cuando introduce los datos, el navegador y/o el servidor web verifican que estén en el formato correcto y dentro de las restricciones establecidas por la aplicación. La validación realizada en el navegador se denomina validación en el lado del cliente , mientras que la validación realizada en el servidor se denomina validación en el lado del servidor . En este capítulo nos centraremos en la validación en el lado del cliente.

Si la información está en el formato correcto, la aplicación permite que los datos se envíen al servidor y (en general) que se guarden en una base de datos; si la información no está en el formato correcto, da al usuario un mensaje de error que explica lo que debe corregir y le permite volver a intentarlo.

Queremos que completar formularios web sea lo más fácil posible. Entonces, ¿por qué insistimos en validar nuestros formularios? Hay tres razones principales:

* Queremos obtener los datos correctos en el formato correcto. Nuestras aplicaciones no funcionarán correctamente si los datos de nuestros usuarios se almacenan en el formato incorrecto, son incorrectos o se omiten por completo.

* Queremos proteger los datos de nuestros usuarios . Obligar a nuestros usuarios a introducir contraseñas seguras para facilitar proteger la información de su cuenta.

* Queremos protegernos a nosotros mismos . Hay muchas formas en que los usuarios maliciosos puedan usar mal los formularios desprotegidos y dañar la aplicación (consulta Seguridad del sitio web ).

> # Advertencia:
>> No confies nunca en los datos que se pasan al servidor desde el cliente. Incluso si tu >> formulario se valida correctamente y evita la introducción de datos con formato 
>> incorrecto en el lado del cliente, un usuario malintencionado puede alterar la 
>> petición de red.