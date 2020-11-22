/* En esta ejercitación te pediremos que desarrolles una pequeña aplicación modularizada que,
dado un archivo .json de productos (lo encontrarán abajo, en los comentarios), al ejecutarla por línea de comandos pueda recibir las
siguientes instrucciones:
- listar todos los productos
- agregar un nuevo producto
- filtrar los productos según su precio(ej.: Todos los productos que tengan un precio entre 20 y 100)
- modificar el precio de un producto específico
+Extras+
- eliminar un producto
- buscar un producto */

let fs = require("fs");
const { leerJSON } = require("../../../../../../Downloads/productos");
let archivo = "./productos.json";
let produJSON = fs.readFileSync(archivo, "utf-8");
let productos = JSON.parse(produJSON);

module.exports = produApp = {
    leerJSON: function(){
        return productos;
    },

    escribirJSON: function(nombre = "pendiente",precio = "pendiente"){
       

    },

    guardarJSON: function(info){
        let produViejos = JSON.stringify(info);
        fs.writeFileSync(archivo, produViejos, "utf-8");
    },
}