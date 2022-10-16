//Declaracions

function CalculoEdad(anioNaciomiento) {
    ///todas las instrucciones que hacen la actividad
    //Bloque de codigo

    const ANIO_ACTUAL=2022;
    var calculo=0;
    calculo=ANIO_ACTUAL-anioNaciomiento;

    //salidas o valores de retorno
    return calculo;
}

function MostrarCalculos() {
      
    console.log("mi edad actual es: "+CalculoEdad(1986));

    //alert("mi edad actual es: "+CalculoEdad(1900));
        
}

function MostrarCalculosWeb() {
    var anio = document.getElementById('anioNacimiento').value;
    var rta = CalculoEdad(anio);        
    document.getElementById('Respuesta').innerHTML= "Su edad el dia de HOY es: "+rta;      
}

//LLamados - Ejecucion - Invocacion 
MostrarCalculos();



