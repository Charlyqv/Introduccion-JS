
class Celular {
	constructor (color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		}else{
			alert("el celular apagado")
		}

	}

	reiniciar(){
		if(this.encendido == true) {
			alert("reiniciando celular");
		}else{
			alert("el celular ya esta apagado");
			this.encendido = false;
		}
	}

	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`)
	}
	mobileInfo(){
		return `
		Color:<b>${this.color}</br></br>
		Peso:<b>${this.peso}</br></br>
		Tamaño:<b>${this.tamaño}</br></br>
		Resolucion de Video:<b>${this.resolucionDeCamara}</br></br>
		Memoria Ram:<b>${this.memoriaRam}</br></br>
		`;
	}
}

celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
celular3 = new Celular("blanco","140g","5.9'","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo(); 
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
	${celular1.mobileInfo()}<br>
	${celular2.mobileInfo()}<br>
	${celular3.mobileInfo()}<br>
	`);