function logIn(user, pass){
    switch(true){
        case user == "admin" && pass == 1234:
            return "Bienvenido a nuestro sitio!";
            break;
        case user == "admin" && pass !== 1234:
            return "contraseña incorrecta";
            break;
        case user !== "admin" && pass == 1234:
            return "Usuario incorrecto";
            break;
        case user !== "admin" && pass !== 1234:
            return "Usuario y contraseña incorrectos";
            break;
        default:
            return "Debe ingresar los datos requeridos";
            break; 
    }
}