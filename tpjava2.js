/*1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”*/

/*
let cant = parseInt(prompt("Ingrese cantidad de repeticiones:"))

Bienvenidos(cant);


function Bienvenidos(a){

    let i=0

    for(i=0 ; i<a ; i++)
    console.log("Bienvenidos al curso full stack");
}
*/

/*2. Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.*/
/*
let num1 = parseFloat(prompt("Ingrese el primer numero"))
let num2 = parseFloat(prompt("Ingrese el segundo numero"))

let mayor = may(num1,num2);
document.write("El numeor mayor es ", mayor)

function may(a,b){

    if(a>b){
        return a;
    }

    else if(b>a){
        return b;
    }

    else alert("Ambos valores son iguales");
    
}
*/


/*3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.*/
/*
function prom(a,b,c){

    let promedio =(a+b+c) / 3;
    document.write("El promedio es ", promedio)
}
*/

/*4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)*/
/*
notas();

function notas(){

    let cont = 0;
    let notas = 0;

    do{
        var not = parseFloat(prompt("Ingrese la nota (-1 para finalizar):"));
    }while(not>10 || not<0);

    while(not != -1){

        cont++;
        notas+=not;

        do{
            not = parseint(prompt("Ingrese la nota (-1 para finalizar):"))
        }while(not>10 || not<0);
    }

    document.write("El promedio es de ", notas/cont)
}
*/

/*3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.*/
/*
let val1 = parseFloat(prompt("Ingrese el primer valor: "))
let val2 = parseFloat(prompt("Ingrese el segundo valor: "))
let val3 = parseFloat(prompt("Ingrese el tercer valor: "))

let prome = promed(val1,val2,val3);
document.write("El promedio es: ",prome)

function promed(a,b,c){

    return (a+b+c)/3;
}
*/


/*Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro*/
/*
let ent = parseInt(prompt("Ingrese un valor entero: "))

let siguien = siguiente(ent);
document.write(siguien);


function siguiente(a){
     let sig = a+1;

     return sig;
}
*/


/*5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro*/
/*
let val = parseFloat(prompt("Ingrese un valor:"))
 
let dob = doble(val)
document.write("El doble de ",val," es ", dob)


 function doble(a){

    var x2 = a*2;

    return x2;
 }
 */


 /*6. Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado.*/
/*
let val = parseFloat(prompt("Ingrese un valor:"))
 
let pot = cuadrado(val)
document.write("El cuadrado de ",val," es ", pot)


 function cuadrado(a){

    var pote = a**2;

    return pote;
 }*/


 /*7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado.*/

/*
let numero = parseFloat(prompt("Ingrese un valor:"))
 
ImprimirValores(numero);

function ImprimirValores(a){

    let valsig = siguiente(a);
    let dob = doble(a);
    let cuad = cuadrado(a);

    document.write("El valor siguiente de ", a,"es ",valsig,", el doble es ", dob," y su cuadrado es ", cuadrado);

}*/


/*8. Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al el doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble.*/
/*
let val1 = parseInt(prompt("Ingrese un valor:"))

ImprimirElDobleDelSiguiente(val1);


function ImprimirElDobleDelSiguiente(a){

    let sigdob = doble(a);
    sigdob = siguiente(sigdob);

    document.write("El valor siguiente al doble del valor dado es ",sigdob);
} 
*/


/*9. Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado*/

/*
function imprimirElDobleDelSiguienteAlCuadrado(a){

    let dobsigcuad = doble(a);
    dobsigcuad = siguiente(dobsigcuad);
    dobsigcuad = cuadrado(dobsigcuad);

    document.write("El cuadrado del valor siguiente del doble de ", a," es ", dobsigcuad)
}
*/


/*10.Una función que dado la longitud de un lado de un cuadrado devuelva
el perímetro*/
/*
let lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado(en cm):"))

let perim = perimetro(lado);
document.write("Elperimetro del cuadrado es de ", perim," cm.")


function perimetro(a){

    let perime = a*4;

    return perime;
}
*/


/*11. Una función que dado la longitud de un lado de un cuadrado devuelva
la superficie.*/

/*
let lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado(en cm):"));

let superfi = superficie(lado);
document.write("La superficie del cuadrado es de ", superfi," cm.")


function superficie(a){

    let superf = a*a;

    return superf;
}
*/


/*12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo).*/
/*
let radio = parseFloat(prompt("Ingrese la longitud del radio:"))

let circ = perimet(radio)
document.write("La circunferencia mide ", circ," cms.")


function perimet(a){
    return 2*3.14*a;
}
*/


/*13.Una función que dado el radio de un círculo devuelva el área del
círculo.*/
/*
let radio = parseFloat(prompt("Ingrese la longitud del radio:"))

let ar = area(radio)
document.write("El area del circulo es de ", ar," cms.")


function area(a){

    return (a**2)*3.14;
}
*/


/*14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto).*/
/*
do{
var mes = parseInt(prompt("Ingrese su numero de mes:"))
}while(mes<0 || mes>12)

let dias = cantdias(mes);

document.write("La cantidad de dias del mes ingresado es de ", dias," dias")

function cantdias(a){

    switch(a){
        case 1: return 31;
        break;
        case 2: return 28;
        break;
        case 3: return 31;
        break;
        case 4: return 30;
        break;
        case 5: return 31;
        break;
        case 6: return 30;
        break;
        case 7: return 31;
        break;
        case 8: return 31;
        break;
        case 9: return 30;
        break;
        case 10: return 31;
        break;
        case 11: return 30;
        break;
        case 12: return 31;
        break;

    }
}
*/




/*15.Una función que reciba como parámetro un año y diga si ese año es
bisiesto.*/
/*
do{
var año = parseInt(prompt("Ingrese un año:"))
}while(0>año)

let bis = bisiesto(año);


function bisiesto(a){

    var resto = a % 4;

    if(resto==0){
        return "bisiesto";
    }

    else return "NO bisiesto"
}
*/


/*16.Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes.*/
/*
var año = parseint(prompt("Ingrese el año:"));
var mes = parseint(prompt("Ingrese el mes:"));
var dia = parseint(prompt("Ingrese el dia:"));

var dias_= diasmes(año,mes);


function diasmes(a,b){


    if(b == 2){
    var bis = bisiesto(a);
        if(bis == "bisiesto"){
            return 29;
        }

        else return 28;
    }

    else cantdias(b);

}

*/



/*17.Una función que reciba día, mes y año y devuelva el día anterior*/
/*
var añoo = parseInt(prompt("Ingrese el año:"));
var mess = parseInt(prompt("Ingrese el mes:"));
var diaa = parseInt(prompt("Ingrese el dia:"));

var diaant = diaanterior(añoo, mess, diaa);

document.write(diaant);


function diaanterior(a,b,c){

    var bis = bisiestoo(a);


    if(c==1 && b != 1 && bis != "bisiesto"){
        b = b-1;
        c = cantdiass(b);
    }

    else if(c == 1 && b == 1){
        a--;
        b=12
        c = 31
    }

    else if(bis == "bisiesto" && b == 3 && c == 1){
        c = 29;
    }

    else{
        c--;
    }

    var result = c + "/" + b + "/" + a + "/"

    return result;
}


function cantdiass(a){

    switch(a){
        case 1: return 31;
        break;
        case 2: return 28;
        break;
        case 3: return 31;
        break;
        case 4: return 30;
        break;
        case 5: return 31;
        break;
        case 6: return 30;
        break;
        case 7: return 31;
        break;
        case 8: return 31;
        break;
        case 9: return 30;
        break;
        case 10: return 31;
        break;
        case 11: return 30;
        break;
        case 12: return 31;
        break;

    }
}

function bisiestoo(a){

    var resto = a % 4;

    if(resto==0){
        return "bisiesto";
    }

    else return "NO bisiesto"
}

*/


/*18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.*/
/*
var añoo = parseInt(prompt("Ingrese el año:"));
var mess = parseInt(prompt("Ingrese el mes:"));
var diaa = parseInt(prompt("Ingrese el dia:"));

let day = cantdias(diaa);

document.write(day,"/", mess,"/", añoo)
function cantdias(a){

    switch(a){
        case 1: return 31;
        break;
        case 2: return 28;
        break;
        case 3: return 31;
        break;
        case 4: return 30;
        break;
        case 5: return 31;
        break;
        case 6: return 30;
        break;
        case 7: return 31;
        break;
        case 8: return 31;
        break;
        case 9: return 30;
        break;
        case 10: return 31;
        break;
        case 11: return 30;
        break;
        case 12: return 31;
        break;

    }
}
*/


/*19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola.*/
/*
var edades = [];

var edad = parseInt(prompt("Ingrese la edad(-1 para finalizar):"));

while(edad != -1){
    edades.push(edad);
    var edad = parseInt(prompt("Ingrese la edad(-1 para finalizar):"));
}

console.log(edades);
*/


/*20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while".*/
/*
var edades = [];

var cant = parseInt(prompt("Ingrese cantidad de edades a ingresar:"))
let i = 0;

for(i=0 ; i<cant ; i++){

    edades.push(edad);

    if((edad % 2) == 0){
        document.write(edad,"-");
    }

    var edad = parseInt(prompt("Ingrese la edad:"));
}

console.log(edades);
*/


/*21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola*/
/*
ejemplo...let array = [43,65,2,3,8,43,3,1];

NumeroMenor(array);

function NumeroMenor(a){

    var menor = 0;
    var i = 0;

    for(i=0 ; i<8 ; i++){

        if(menor == 0){
            menor= a[i];
        }

        else if(a[i] < menor){
            menor=a[i];
        }
    }

    document.write("El numero menor del array es: ", menor);
}
*/


/*22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola.*/
/*
let array = [43,65,2,3,8,43,3,1];
var lenghtt = array.length; 

NumeroMayor(array,lenghtt);

function NumeroMayor(a,b){

    var mayor = 0;
    var i = 0;

    for(i=0 ; i<b ; i++){

        if(mayor == 0){
            mayor= a[i];
        }

        else if(a[i] > mayor){
            mayor=a[i];
        }
    }

    document.write("El numero mayor del array es: ", mayor);
}
*/

/*23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1; */


var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var posic = parseInt(prompt("Ingresar posicion:"))
posicion(array,posic);

function posicion(array, pos){

    document.write(array[pos-1])
}



/*24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
función imprimirá '6,23,33,100'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];*/
/*
var arrayy = [3,6,67,6,23,1,11,100,8,93,0,17,24,7,1,33,99,45,28,33,23,12,99,100];
let largo = arrayy.length;


valoresRepe(arrayy, largo);

function valoresRepe(a,b){


    var i=0;
    var j=0;

    for(i=0 ; i<b ; i++){
        for(j=0 ; j<b ; j++){
            if(a[i] == a[j] && i != j){
                document.write(a[i],"-");
            }
        }
        
    }
}
*/

/*25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
"Negro"*/
/*
var myColor = ["Red", "Green", "White", "Black"];
var largoo = myColor.length;

unirEnCadena(myColor, largoo)

function unirEnCadena(a,b){

    let i = 0;
    let string = ""

    for(i = 0 ; i < b ; i++){
        string = string + " " + a[i] +" ";
    }

    console.log(string);
}
*/


/*26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423.*/
/*
var Invert= parseInt(prompt("Ingrese numero a invertir:"))

var NumInvertido = invertir(Invert);
document.write(NumInvertido)

function invertir(a){
    
    var numeroInvertidoComoCadena = a.toString().split("").reverse().join("");
    parseFloat.numeroInvertidoComoCadena;
    console.log(typeof(numeroInvertidoComoCadena));

    return numeroInvertidoComoCadena;
}
*/


/*27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
ser 'abeemrstw'. La puntuación y los números no se pasan en la
cadena.*/
/*
do{
var cadena = prompt("Ingrese cadena de texto:")
}while(isNaN(cadena) == false)

invertirr(cadena);


function invertirr(cadena){

var str="";
var i = 0;
var j = cadena.length;

for(i=0 ; i<cadena.length ; i++){

    str= str + cadena[j-1];
    j--;
}
 
document.write(str);
}
*/

/*28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia".*/
/*
do{
    var stringg = prompt("Ingresar cadena de texto:")
    }while(isNaN(stringg) == false)

    mayusPrimeraLetra(stringg);

function mayusPrimeraLetra(stringg) {
    

    var palab = stringg.split(" ");
    var i=0;
    var arrayPalabras = [];

    for(i=0 ; i < palab.length ; i++){

        arrayPalabras[i] = palab[i].charAt(0).toUpperCase() + palab[i].slice(1);
        }

        document.write(arrayPalabras.join(" "))

}

    */



/*29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo".*/
/*
do{
    var mistring = prompt("Ingresar cadena de texto:")
    }while(isNaN(mistring) == false)

    masLarga(mistring);



    function masLarga(a){


        var palabrass = a.split(' ');  
        var maslarga = "";
        var cont = -1;
        var i = 0;

        for(i=0 ; i<palabrass.length ; i++){

            if(cont== -1){
                cont = i;
                maslarga = palabrass[0];
            }

            else if(palabrass[cont].length < palabrass[i].length){
                cont = i;
                maslarga = palabrass[i];
            }
        }

        document.write("La palabra mas larga es: ", maslarga," y contiene ", palabrass[cont].length," caracteres")

    }
    */