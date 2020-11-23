let fs = require("fs");


module.exports = moduloTareas = {
    archivo : "./tareas.json",
    //nombre del archivo a trabajar
    leerJSON : function(){
        let listaDeTareas = fs.readFileSync(this.archivo, "utf-8");
        //esto lee el JSON
        return JSON.parse(listaDeTareas);
        //esto lo parsea para poder trabajarlo
    }
}
