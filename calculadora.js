let calculadora = {
    sumar: function(num1,num2){
        return num1 + num2
    },
    
    restar: function(num1,num2){
        return num1 - num2;
    },

    multiplicar: function(num1,num2){
        return num1 * num2;
    },

    dividir: function(num1,num2){
        if(num2 == 0){
            return "Error, no se puede dividir por 0";
        } else {
            return num1/num2;
        }
    }
}

console.log(calculadora.dividir(0,3));
