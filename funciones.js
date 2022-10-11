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
PromedioEdades();