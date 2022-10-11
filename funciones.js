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
Mercado();