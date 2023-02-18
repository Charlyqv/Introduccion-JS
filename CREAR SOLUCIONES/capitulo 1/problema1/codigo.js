

let free= false;

const validarCliente = (time)=>{
	let edad = prompt( " Cual es tu edad?");
	if (edad > 18){
		if (time >= 2 && time <7 && free == false){
			alert( "!!puedes pasar gratis porque eres la primer persona despues de las 2 am!!");
			free = true;
		} else{
			alert(`son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
		}

	} else {
		alert ("no vas a pasar");
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
