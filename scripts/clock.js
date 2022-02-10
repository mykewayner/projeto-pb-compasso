export default function clock(){
    
    const date = new Date();
    const minutes= date.getMinutes();
    const hours = date.getHours();
    const weekDay = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const documentTime = document.querySelector("#home-clock h1")
    const documentDay = document.querySelector("#home-clock p")

const dayOfWeek = new Array(   
    "Domingo", 
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "sábado"
) 

const monthOfYear = new Array(  
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
)

let t = setTimeout(function(){ clock() }, 1000);

documentTime.innerText = `${hours<=9 ? "0" : ""}${hours}:${minutes<=9 ? "0" : ""}${minutes}`
documentDay.innerText = `${dayOfWeek[weekDay]}, ${day<=9 ? "0" : ""}${day} de ${monthOfYear[month]} de ${year}`

}