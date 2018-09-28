function verHora() {
    
    const hoy = new Date();
    const diaActual = hoy.getDay();
    const dias = ["Domingo","Lunes","Martes","Miercoles ","Jueves","Viernes","Sabado"];
    console.log(`Hoy es : ${dias[diaActual]}.`);
    let hora = hoy.getHours();
    const minutos = hoy.getMinutes();
    const segundos = hoy.getSeconds();
    let amPm = (hora >= 12)? "PM":"AM";
    hora = (amPm=="PM")? hora-12: hora;
	
    console.log(`Hora actual: ${hora}:${minutos}:${segundos} ${amPm}`);
	alert('modificado por victor garcia');


}
