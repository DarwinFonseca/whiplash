
startView();

// El watch id referencia al actual 'watchAcceleration'
var watchID = null;

  document.getElementById("btnIniciar").addEventListener("click", function(){
	  document.getElementById("showx").innerHTML="";
	  document.getElementById("showy").innerHTML="";
	  document.getElementById("showz").innerHTML="";
	  startView();
  });
	document.getElementById("btnDetener").addEventListener("click", function(){
	  stopView();
	});
//document.getElementById("btnLimpiar").addEventListener("click", function(){

//});

   function startView(){
     // Importante el manejador de eventos para que cargue las librerías
     document.addEventListener("deviceready", onDeviceReady, false);

   }

   // Las APIs del dispositivo listas
   //
   function onDeviceReady() {
       startWatch();
   }

   // Empezar a ver la aceleracion
   //
   function startWatch() {
     alert ("Capturando Datos");//Cada alert debe estar dentro de una funcion para que se eje
     imprimir("Capturando...");//Muestra el estado en el DIV con id="estado"
       // Actualizar la aceleracion cada 0,1s
       var options = { frequency: 100 };
       watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
   }

   // Detener la aceleracion
   //
   function stopView(){
     alert ("Captura Detenida");//Cada alert debe estar dentro de una funcion para que se eje
     imprimir("Ultimos Valores");
       navigator.accelerometer.clearWatch(watchID);
       watchID = null;
   }

   // onSuccess: Captura la aceleracion actual
   //
   function onSuccess(acceleration) {
     if (Math.abs(acceleration.x)>70 && Math.abs(acceleration.y)>40 && Math.abs(acceleration.z)>15) {
       document.getElementById("showx").innerHTML += "<b style='color:#FF0000';>"+ acceleration.x +"</b><br>";
       document.getElementById("showy").innerHTML += "<b style='color:#FF0000';>"+ acceleration.y +"</b><br>";
       document.getElementById("showz").innerHTML += "<b style='color:#FF0000';>"+ acceleration.z +"</b><br>";
			 playMP3();
     }else{
        document.getElementById("showx").innerHTML += acceleration.x + "<br>";
       document.getElementById("showy").innerHTML += acceleration.y + "<br>";
       document.getElementById("showz").innerHTML += acceleration.z + "<br>";
     }
       //document.getElementById("x").innerHTML=acceleration.x;
       //document.getElementById("y").innerHTML=acceleration.y;
       //document.getElementById("z").innerHTML=acceleration.z;
       //usoArray(acceleration.x);
   }

   // onError: Al fallar el captor
   //
   function onError() {
       alert("ERROR!");
   }

   function usoArray(parametro) {

    //declaramos una variable y le asignamos el valor que se recoge de parametro
    var valor_recivido = parametro;

    //Declaramos un array y le agregamos los valos que estamos ingresando
    var array = [valor_recivido] ;

    //Recorremos el array para ir mostrando lo que se va ingresando

    for ( i = 0; i < array.length; i++) {
         var resultado = array[i];
         imprimir(resultado);
    }

  }

    function imprimir(valor){

        document.getElementById("estado").innerHTML = valor;
    }
