//Punto 1
/*
function colorcal()
{
var cantidad= parseInt(prompt("Ingrese el numero total de autos"));
//contadores internos
Amarillo=0;
Rosa=0;
Roja=0;
Verde=0;
Azul=0;

for (i=1;i<=cantidad;i++) 
{
  nplaca=prompt("Ingrese el numero de la placa");
  //Dividimos el numero, tomamos el ultimo dato y lo guardamos en una variable para comparar despus
  Nfinal= nplaca.split("")[nplaca.length-1];
  

if(Nfinal == "1" || Nfinal == "2") 
 {
   Amarillo=Amarillo+1;
 }else if(Nfinal == "3" || Nfinal == "4")
  {
    Rosa=Rosa+1;
  }else if(Nfinal == '5' || Nfinal == '6')
   {   
     Roja=Roja+1;
   }else if(Nfinal == '7' || Nfinal == '8')
    {
     Verde=Verde+1;
    }else if (Nfinal == '9' || Nfinal == '0')
     {
       Azul=Azul+1;
     }else{
      console.log("Ingrese solo numeros para la placa");
     }
  }
  //Mostramos los resultados
  console.log("El total de carros con calcomanias amarillas son:"+Amarillo+" Rosa:"+Rosa+" Rojos:"+Roja+" Verde:"+Verde+" Azules:"+Azul);

}
colorcal();
*/
/*
function zoo()
{
  //pedimos el nombre del animal
  NombreAnimal=prompt('Ingrese el nombre del animal "Jirafa, Elefante, Mono"');
  //creamos los contadores y porcentajes para guardar los datos
  contadoredad1=0; contadoredad2=0; contadoredad3=0;
  porcentajedad1=0; porcentajedad2=0; porcentajedad3=0;
 
  if("Jirafa" == NombreAnimal)
 {
  //Creamos el for a base del enunciado
  for (i=1;i<=15;i++)
  {
    //Se pide la edad del animal
    Edad= parseInt(prompt('Ingrese el la edad del animal'));
     //Los clasificamos por la edad y contamos cuantas veces se clasifica en cada parte
    if(Edad == 0 || Edad == 1)
    {
      contadoredad1=contadoredad1+1;
    }else if(Edad > 1 && Edad <= 3){
      contadoredad2=contadoredad2+1;
    }else if(Edad > 3){
      contadoredad3=contadoredad3+1;
    }else{
      console.log("Ingrese solo numeros");
    }
  }
   //tomamos los datos finales de cada contador y se saca su porcentaje para mostrarlo
   porcentajedad1=((contadoredad1*100)/15);
   porcentajedad2=((contadoredad2*100)/15);
   porcentajedad3=((contadoredad3*100)/15);
   Porcentajetotal=porcentajedad1+porcentajedad2+porcentajedad3;
   console.log("El porcentaje de edad de Jirafas de 0 a 1 año es:"+porcentajedad1+" De 1 a 3:"+porcentajedad2+" mayor a 3:"+porcentajedad3);
   console.log("Porcentaje total:"+Porcentajetotal);

 }else if("Elefante" == NombreAnimal)
  {
   for (i=1;i<=20;i++)
   {
    Edad= parseInt(prompt('Ingrese el la edad del animal'));

    if(Edad == 0 || Edad == 1)
    {
      contadoredad1=contadoredad1+1;
    }else if(Edad > 1 && Edad <= 3){
      contadoredad2=contadoredad2+1;
    }else if(Edad > 3 || Edad <= 0){
      contadoredad3=contadoredad3+1;
    }else{
      console.log("Ingrese solo numeros");
    }
   }
   porcentajedad1=((contadoredad1*100)/20);
   porcentajedad2=((contadoredad2*100)/20);
   porcentajedad3=((contadoredad3*100)/20);
   Porcentajetotal=porcentajedad1+porcentajedad2+porcentajedad3;
   console.log("El porcentaje de edad de Elefantes de 0 a 1 año es:"+porcentajedad1+" De 1 a 3:"+porcentajedad2+" mayor a 3:"+porcentajedad3);
   console.log("Porcentaje total:"+Porcentajetotal);

  }else if("Mono" == NombreAnimal)
   { 
    for (i=1;i<=40;i++)
    {
      Edad= parseInt(prompt('Ingrese el la edad del animal'));

      if(Edad == 0 || Edad == 1)
      {
       contadoredad1=contadoredad1+1;
      }else if(Edad > 1 && Edad <= 3){
       contadoredad2=contadoredad2+1;
      }else if(Edad > 3 ){
      contadoredad3=contadoredad3+1;
      }else{
        console.log("Ingrese solo numeros");
      }
    }
    porcentajedad1=((contadoredad1*100)/40);
    porcentajedad2=((contadoredad2*100)/40);
    porcentajedad3=((contadoredad3*100)/40);
    Porcentajetotal=porcentajedad1+porcentajedad2+porcentajedad3;
    console.log("El porcentaje de edad de Monos de 0 a 1 año es:"+porcentajedad1+" De 1 a 3:"+porcentajedad2+" mayor a 3:"+porcentajedad3);
    console.log("Porcentaje total:"+Porcentajetotal);

   }else{
     console.log("Ingrese correctamente el nombre del animal ha realizar la muestra");
    }
}
zoo();*/

//Punto 3
/*
function HorasTrabajadas(){
  //Pedimos el todal de obreros a verificar su sueldo
  cantidadobreros=parseInt(prompt("Ingrese el total de obreros"));
  //declaramos las variables
  pago=0; pagoextra=0; totalpago=0;  horasextras=0;
  //creamos el for a base de la cantidad de obreros
  for( i=1;i<=cantidadobreros;i++ )
  {
    //pedimos el total de horas trabajadas
    cantidadhoras=parseInt(prompt("Ingrese el total de horas trabajas del obrero "+i));
    //creamos las validaciones
    if (cantidadhoras > 0  &&   cantidadhoras <= 40 ) {
       pago=cantidadhoras*20;
       console.log("El total a pagarle al obrero"+i+" es de: "+pago+"$");
    }else if (cantidadhoras > 40){
      horasextras=cantidadhoras-40;
      pagoextra=horasextras*25;
      pago=(cantidadhoras-horasextras)*20;
      totalpago=pago+pagoextra;
      console.log("El total a pagarle al obrero"+i+" es de: "+totalpago+"$");
    }else{
      console.log("Ingrese solo numeros y mayores a cero");
    }
   
  }
}
HorasTrabajadas();*/

//punto 4
/*
function PromedioEdades(){
  numerohombres=parseInt(prompt("Ingrese el total de Hombres en el salon"));
  numeromujeres=parseInt(prompt("Ingrese el total de Mujeres en el salon"));
  promediohombres=0; acumhombres=0; promediomujeres=0; acummujeres=0; promediogrupo=0;
  for (i=1;i<=numerohombres;i++)
  {
    edadhombre=parseInt(prompt("Ingrese la edad del hombre "+i));
    acumhombres=acumhombres+edadhombre;
  }
  for (i=1;i<=numeromujeres;i++){
    edadmujeres=parseInt(prompt("Ingrese la edad del mujer "+i));
    acummujeres=acummujeres+edadmujeres;
  }
  Totalpromediohombres=(acumhombres/numerohombres);
  Totalpromediomujeres=(acummujeres/numeromujeres);
  acumgrupo=acumhombres+acummujeres;
  numerogrupo=numerohombres+numeromujeres
  promediogrupo=acumgrupo/numerogrupo;
  
  console.log("Total promedio hombres: "+Totalpromediohombres);
  console.log("Total promedio mujeres: "+Totalpromediomujeres);
  console.log("Promedio del Grupo: "+promediogrupo);
}
PromedioEdades();*/

//Punto5
/*
//funcion para analizar el numero menor de varios ingresados
function NumeroMenor(){
  //se pide la cantidad de numeros a analizar
  cantidadnumeros=parseInt(prompt("Ingrese la cantidad de numeros"));
  numero=0; numeroanterior=1000;
  //se hace un ciclo en base al tamaño de la cantidad de numeros
  for(i=1;i<=cantidadnumeros;i++){
    numero=parseInt(prompt("Ingrese el numero"));
    //si el numero es menor que el numero anterior entrar y toma la posicion del numero anterior y todo debe ser numero positivo
    if(numero < numeroanterior && numero >= 0){
      numeroanterior=numero;
    }
  }
console.log("El numero menor es:"+numeroanterior);
}
NumeroMenor();*/

//punto6
/*
function PesoObesidad(){
  //se declaran las variables acumulativas y se les da un valor inicial de cero para evitar errores
  datospeso=0; acum1=0; acum2=0; acum3=0; acum4=0; acum5=0;
  // se crea el for con 5 ya que son 5 personas ha analizar
  for (i=1;i<=5;i++){
    //se crea el for con 10 datos puesto que son 10 pesos que se tomaran
    for(j=1;j<=10;j++){
      //se crea una condicion para poder validad las variables acumulativas en cada iteracion del for externo
      if(i==1)
      {
       datospeso=parseInt(prompt("Ingrese el peso del usuario "+i+" en la bascula "+j));
       acum1=acum1+datospeso;
      }else if(i==2){
        datospeso=parseInt(prompt("Ingrese el peso del usuario "+i+" en la bascula "+j));
       acum2=acum2+datospeso;
      }else if(i==3){
        datospeso=parseInt(prompt("Ingrese el peso del usuario "+i+" en la bascula "+j));
        acum3=acum3+datospeso;
      }else if(i==4){
        datospeso=parseInt(prompt("Ingrese el peso del usuario "+i+" en la bascula "+j));
        acum4=acum4+datospeso;
      }else if(i==5){
       datospeso=parseInt(prompt("Ingrese el peso del usuario "+i+" en la bascula "+j));
       acum5=acum5+datospeso;
      }
    }
    
    
  }
  //Se utilizan las variables acumulativas para realizar el calculo del promedio para cada miembro
    promedio1=acum1/10;
    promedio2=acum2/10;
    promedio3=acum3/10;
    promedio4=acum4/10;
    promedio5=acum5/10;
    
    //la finalidad es de tomar el promedio pasado para cada miembro y despues compararlos con el nuevo resultado
    promediopasado1=parseInt(prompt("Ingrese el resultado del promedio pasado del primer miembro"));
    promediopasado2=parseInt(prompt("Ingrese el resultado del promedio pasado del segundo miembro"));
    promediopasado3=parseInt(prompt("Ingrese el resultado del promedio pasado del tercer miembro"));
    promediopasado4=parseInt(prompt("Ingrese el resultado del promedio pasado del cuarto miembro"));
    promediopasado5=parseInt(prompt("Ingrese el resultado del promedio pasado del quinto miembro"));
    

    if(promedio1 < promediopasado1){
      console.log("El primer miembro Bajo de peso");
    }else{
      console.log("El primer miembro Subio de peso");
    }

    if(promedio2 < promediopasado2){
      console.log("El segundo miembro Bajo de peso");
    }else{
      console.log("El segundo miembro Subio de peso");
    }

    if(promedio3 < promediopasado3){
      console.log("El tercer miembro Bajo de peso");
    }else{
      console.log("El tercer miembro Subio de peso");
    }

    if(promedio4 < promediopasado4){
      console.log("El cuarto miembro Bajo de peso");
    }else{
      console.log("El cuarto miembro Subio de peso");
    }

    if(promedio5 < promediopasado5){
      console.log("El quinto miembro Bajo de peso");
    }else{
      console.log("El quinto miembro Subio de peso");
    }
}
PesoObesidad();*/

//Punto 7
/*
function Mercado(){
  totaldegasto=0;
do{
  cantidad=parseInt(prompt("Ingrese la cantidad del articulo que tomo"));
  precio=parseInt(prompt("Ingrese el precio del articulo que tomo"));
  totalproducto=cantidad*precio;
  totaldegasto=totaldegasto+totalproducto; // se toma el total del producto y se le agrega a los gastos generales
 i=parseInt(prompt("indique con un 1 si NO quiere agregar otro producto y con un 0 para agregar otro producto"));
}while(i==0);
console.log("El total gastado en el mercado es de: "+totaldegasto+"$");
}
Mercado();*/

//punto8
/*
function Teatro(){
  preciopuestos=parseInt(prompt("Ingrese el precio de los asientos")); //se pide el precio de los asientos
  grupoedad1=0; grupoedad2=0; grupoedad3=0; grupoedad4=0; grupoedad5=0;
// se realiza la operacion de retirar el porcentaje de descuento y guardarlo para medir las perdidas
  grupoedad1=(preciopuestos*0.35);
  grupoedad2=(preciopuestos*0.25);
  grupoedad3=(preciopuestos*0.10);
  grupoedad4=(preciopuestos*0.25);
  grupoedad5=(preciopuestos*0.35);

  console.log("El dinero perdido para el teatro en las personas de edades de 5-14 años es de:"+grupoedad1);
  console.log("El dinero perdido para el teatro en las personas de edades de 15-19 años es de:"+grupoedad2);
  console.log("El dinero perdido para el teatro en las personas de edades de 20-45 años es de:"+grupoedad3);
  console.log("El dinero perdido para el teatro en las personas de edades de 46-65 años es de:"+grupoedad4);
  console.log("El dinero perdido para el teatro en las personas de edades de 66 en Adelante años es de:"+grupoedad5);
  console.log("Se Recuerda a los clientes que los niños menores de 5 años no son admitidos en el teatro");
}
Teatro();*/

//punto9
/*
function Kia(){
  acumuladorventas=0;comision=0;

 for(i=1; i<=100 ; i++)  
 {
  ventavendedor=parseInt(prompt("Ingrese el total vendido por el vendedor "+i+" en el año (Solo numeros)")); // se pide el total de ventas con el trabajador
  acumuladorventas=acumuladorventas+ventavendedor; // se acumulan todas las ventas para mostrar el total de ventas de la empresa
  // se valida el valor vendido anualmente por el trabajador y se saca su comision
  if(ventavendedor > 0 && ventavendedor <= 20000000){
    comision=ventavendedor*0.1;
    console.log("La comision del vendedor"+i+" es de: "+comision);
  }else if(ventavendedor > 20000000 && ventavendedor < 40000000 ){
    comision=ventavendedor*0.15;
    console.log("La comision del vendedor"+i+" es de: "+comision);
  }else if(ventavendedor >=  40000000 && ventavendedor < 80000000){
    comision=ventavendedor*0.2;
    console.log("La comision del vendedor"+i+" es de: "+comision);
  }else if(ventavendedor >= 80000000 && ventavendedor < 160000000){
    comision=ventavendedor*0.25;
    console.log("La comision del vendedor"+i+" es de: "+comision);
  }else if (ventavendedor >= 160000000){
    comision=ventavendedor*0.30;
    console.log("La comision del vendedor"+i+" es de: "+comision);
  }
 }
 console.log("El total vendido de la empresa es de: "+acumuladorventas);
}
Kia();*/

//punto10
/*
function Encuestas(){
 candidato1=parseInt(prompt("Ingrese el total de votos que obtuvo el candidato numero 1 (solo numeros)"));
 candidato2=parseInt(prompt("Ingrese el total de votos que obtuvo el candidato numero 2 (solo numeros)"));
 candidato3=parseInt(prompt("Ingrese el total de votos que obtuvo el candidato numero 3 (solo numeros)"));
 
 Totalvotos=candidato1+candidato2+candidato3;
    
 if(Totalvotos <= 50000 ){
 if((candidato1 > candidato2) &&  (candidato1 > candidato3))
 {
   console.log("El Ganador en la votaciones fue el candidato numero 1");
 } else if((candidato2 > candidato1) && (candidato2 > candidato3))
  {
  console.log("El Ganador en la votaciones fue el candidato numero 2");
  }else if((candidato3 > candidato1) && (candidato3 > candidato2)) 
   {
   console.log("El Ganador en la votaciones fue el candidato numero 3");
   } 

   if(candidato1 == candidato2)
     {
      if(candidato1 == candidato3){
      console.log("Hubo un empate entre los tres candidatos")
      }else
      {
      console.log("Hubo un empate entre el candidato 1 y el candidato 2");
      }
     } else if(candidato1 == candidato3) 
       {
       console.log("Hubo un empate entre el candidato 1 y el candidato 3");
       } else if(candidato2 == candidato3){
        console.log("Hubo un empate entre el candidato 2 y el candidato 3");
       }
      
       console.log("Total de votos es de: "+Totalvotos);
 
}else{
  console.log("El total de votos registrado supera el maximo");
}

}
 Encuestas(); */

 //punto11
 /*
 function esPrimo(numero) {
  //optimizacimos y es que podemos iterar desde el número 2 hasta la raíz cuadrada del número de tal manera que optimizaríamos la complejidad ciclomática del método.
  for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
      if(numero % i === 0) return false; //verifica si es divisible
  return numero > 1;
}  
function NumerosPrimos()
{
  intmenor=parseInt(prompt("Ingrese el numero menor del intervalo"));//pedimos el intervalo menor
  intmayor=parseInt(prompt("Ingrese el numero mayor del intervalo"));// pedimos el intervalo mayor
  sumatoria=0; producto=1; contador=0; promedio=0;
  if(intmenor != intmayor)// validamos que el menor sea diferente del amyor
  {
    if(0 <= intmenor < intmayor) // validamos que solo se puedan numeros mayores que cero
    { 
      for (let x=intmenor;x<=intmayor;x++) //se calida en el rango de los intervalos
      {
        if (esPrimo(x))
        {
         sumatoria=sumatoria+x;
         producto=producto*x;
         contador=contador+1;
        }
      }
     promedio=sumatoria/contador;
     console.log("La sumatoria de los numeros primos es de: "+sumatoria);
     console.log("La producto de los numeros primos es de: "+producto);
     console.log("El promedio de los numeros primoes es de: "+promedio);
    }
  }
}
NumerosPrimos(); */

//punto12
/*
function separacionNumeros()
  {
   cantidadnumeros=parseInt(prompt("Ingrese la cantidad de numeros que va a ingresar"));// se pide le total de numeros
   cantidadpar=0; cantidadimpar=0; suma=0; producto=1; promedio=0; 
   for ( i=1; i <= cantidadnumeros;i++) // se genera el ciclo a partir de la cantidad de numeros
   {
     numero=prompt("Ingrese el numero ha analizar"); // pedimos el numero a dividir
     separado=numero.split(""); // separamos el numero

     for( j=0 ;j < numero.length ; j++) // creamos un for a base del tamaño del numero separado
     {
       if(separado[j] % 2 == 0){
         cantidadpar=cantidadpar + 1; //se cuentan los pares
         }else{ 
          cantidadimpar=cantidadimpar + 1; // se cuentan los impares
         }
       suma = suma + parseInt(separado[j]); // sumamos todos los numeros dividos
       producto = producto * parseInt(separado[j]); // multiplicamos todos los numeros divididos
     }
     promedio=suma/numero.length; // sacamso el promedio entre la suma de los numeros divididos con el tamaño
      
     // mostramos los resultados
     console.log("La suma del numero "+i+" es de: "+suma);
     console.log("La multiplicacion del numero "+i+" es de: "+producto);
     console.log("El promedio del numero "+i+" es de: "+promedio);
     console.log("cantidad de numeros pares en el numero "+i+" es de: "+cantidadpar);
     console.log("cantidad de numeros impares en el numero "+i+" es de: "+cantidadimpar); 
     
   }
   
  }
  separacionNumeros();*/

  //punto 13
  /*
  function  fibonacci(){
    //se piden los ingresos de la serie de fibonacci
   tamaño=parseInt(prompt("Ingrese el limite al que quiere que calcule la serie de fibonacci"));
   dato0=parseInt(prompt("Ingrese el primer numero de la serie de fibonacci"));
   dato1=parseInt(prompt("Ingrese el segundo numero de la serie de fibonacci mayor que el primero"));
  //se agregan los dos primeros datos al vector de fibonacci
  var fibonacci = [];
  fibonacci[0] = dato0;
  fibonacci[1] = dato1;
  
  pares=0; impares=0; ceros=0;
// se realizan las validaciones para que el codigo funcione de manera correcta
  if(dato0 != dato1){
    if(dato0 >= 0 && dato1 >= 0){
    if(dato0 < dato1){ 
      //se corre el for en base al tamaño que se queire que tenga la serie
  for (var i = 2; i < tamaño; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];//se realizan las operaciones para los siguientes numero de la serie

  //se consiguen los numeros pare, impares y los ceros que hay dentro de la operacion
  if (fibonacci[i] == 0 ){
    ceros=ceros+1;
  }else if((fibonacci[i] % 2) == 1){
    impares=impares+1;
  }else if ((fibonacci[i] % 2) == 0 ){
     pares=pares+1;
  }
  }
  console.log("El total de numeros pares es de: "+pares);
  console.log("El total de numeros impares es de: "+impares);
  console.log("El total de numeros ceros es de: "+ceros);
  console.log(fibonacci);
  }else{
    console.log("El primer numero de la serie tiene que ser menor que el segundo");
  }
 }else{
  console.log("El dos numeros ingresados deben ser diferentes");
 }
}
}
fibonacci()*/

//punto14
/*
function MCD(){
  //Se piden los datos ha analizar
    primernumero=parseInt(prompt("Ingrese el primer numero (entero)"));
    segundonumero=parseInt(prompt("Ingrese el segundo numero (entero)"));

    primernumero= Math.abs(primernumero); //se calcula el valor absoluto del numero ingresado
    segundonumero= Math.abs(segundonumero); //se calcula el valor absoluto del numero ingresado
    let varibletemporal; // se crea una variable temporal para guardar datos momentaneamente

    if(primernumero >=  0 && segundonumero >= 0){
      //se realiza la operacion en base a un ciclo while para poder manejar mejor los datos de las funciones
      while(segundonumero){
      varibletemporal=segundonumero;
      segundonumero= primernumero % segundonumero;
      primernumero = varibletemporal;
    }
    console.log("El maximo como un divisor entre los dos numeros ingresados es de: "+primernumero);
  }else{
    console.log("Ingrese solo numeros positivos");
  }
}
MCD();*/

//punto15
function PoblacionAnual(){

poblacionA=25000000;
poblacionB=19900000;
año=1994;


do{
acumulativoA=0;
acumulativoB=0;
 if(poblacionA > poblacionB){
   acumulativoA = poblacionA * 0.2;
   poblacionA=poblacionA+acumulativoA;

   acumulativoB = poblacionB * 0.3;
   poblacionB=poblacionB+acumulativoB;
   año=año+1;
   i=0;
 }else{
    i=1;
 }
}while(i==0)
 console.log("Poblacion A: "+poblacionA);
 console.log("Poblacion B: "+poblacionB);
 console.log("Año en el que la poblacion B supera a la poblacion A: "+año);
}
PoblacionAnual();