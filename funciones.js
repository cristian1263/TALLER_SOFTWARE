//Punto 1

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
  
  console.log("El total de carros con calcomanias amarillas son:"+Amarillo+" Rosa:"+Rosa+" Rojos:"+Roja+" Verde:"+Verde+" Azules:"+Azul);

}
colorcal();



