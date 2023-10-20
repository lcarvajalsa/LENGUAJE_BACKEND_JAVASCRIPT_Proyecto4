function calcularTiempo(){
    let tiempo= new Date();

    let hora=tiempo.getHours();
    let minuto=tiempo.getMinutes();
    let segundo= tiempo.getSeconds();
    // Se crea variable para guardar am o pm 
    ap = (hora < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hora = (hora == 0) ? 12 : hora;
    hora = (hora > 12) ? hora - 12: hora;
    
    let pantallaReloj=hora+":"+minuto+":"+segundo+ ":"+ap;
    let relojdigital= document.querySelector(".reloj");
    relojdigital.innerHTML=pantallaReloj;
}
setInterval(calcularTiempo, 1000);
const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(() => {

    let tiempo = new Date();
    
    // los valores de 30 y deg corresponden a los grados de la circunferencia 
    let hr = tiempo.getHours() * 30; 
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${seg}deg)`;

})