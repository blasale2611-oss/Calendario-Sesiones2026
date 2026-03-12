const meses=[
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const eventos={

2:[
{dia:12,centro:"gran"},
{dia:23,centro:"indo"},
{dia:24,centro:"santa"}
],

3:[
{dia:7,centro:"santa"},
{dia:25,centro:"gran"},
{dia:27,centro:"indo"}
],

4:[
{dia:31,centro:"gran"},
{dia:16,centro:"santa"},
{dia:25,centro:"indo"}
],

5:[
{dia:20,centro:"santa"},
{dia:18,centro:"gran"},
{dia:22,centro:"indo"}
],

6:[
{dia:10,centro:"santa"},
{dia:16,centro:"gran"},
{dia:20,centro:"indo"}
],

7:[
{dia:20,centro:"gran"},
{dia:24,centro:"indo"}
],

8:[
{dia:24,centro:"gran"},
{dia:28,centro:"indo"}
],

9:[
{dia:15,centro:"gran"},
{dia:25,centro:"indo"}
],

10:[
{dia:12,centro:"gran"},
{dia:23,centro:"indo"}
],

11:[
{dia:19,centro:"gran"},
{dia:21,centro:"indo"}
]

};

const contenedor=document.getElementById("calendarioAnual");

for(let mes=0; mes<12; mes++){

let card=document.createElement("div");
card.className="mes";

let titulo=document.createElement("h2");
titulo.innerText=meses[mes];

card.appendChild(titulo);

let diasSemana=document.createElement("div");
diasSemana.className="dias";

["L","M","X","J","V","S","D"].forEach(d=>{
let div=document.createElement("div");
div.innerText=d;
diasSemana.appendChild(div);
});

card.appendChild(diasSemana);

let fechas=document.createElement("div");
fechas.className="fechas";

const primerDia=new Date(2026,mes,1).getDay();
const offset=(primerDia===0?6:primerDia-1);

for(let i=0;i<offset;i++){

let vacio=document.createElement("div");
fechas.appendChild(vacio);

}

const diasMes=new Date(2026,mes+1,0).getDate();

for(let d=1; d<=diasMes; d++){

let div=document.createElement("div");
div.className="dia";
div.innerText=d;

if(eventos[mes]){

eventos[mes].forEach(ev=>{

if(ev.dia===d){
div.classList.add(ev.centro);
}

});

}

fechas.appendChild(div);

}

card.appendChild(fechas);

contenedor.appendChild(card);

}

function imprimirCalendario(){

window.print();

}