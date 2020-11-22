/* function agregarHttp(url) {
    return "http://"+url;
}
let array1 = [];
function procesar(arr,funcion){
   for(let i = 0; i <arr.lenght; i++){
       array1.push(funcion(arr[i]));
       
   }
   return array1;
}

let array= ["www.google.com","www.yahoo.com"];
 */

function agregarHttp(url) {
    return "http://"+url;
}

let url = [];
function procesar(arr, funcion){
    for(let i = 0; i <= arr.length - 1; i++){
     url[i]= funcion(arr[i]);
    }
   return url;
}

let array= ["www.google.com","www.yahoo.com"];

//console.log(procesar(array,agregarHttp));
console.log(procesar(array, agregarHttp));