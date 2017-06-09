
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "Hola amiguito";
p2.textContent = "¿Qué pasó amiguito?";

var  imagen = document.createElement("img");
imagen.setAttribute("src", "img/unnamed.png");
    
var c =0;
    imagen.style.display = 'none';

function ocultar()  {
if(document.getElementById("akk").style.display === "block"){
 document.getElementById("akk").style.display = "none";
    document.getElementById("b").innerHTML = "Mostrar" ;
p2.removeChild(imagen);
 imagen.style.display = 'none';
}
else {
document.getElementById("akk").style.display = "block";
     document.getElementById("b").innerHTML = "Ocultar" ;

const parent = document.getElementById('akk');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1, firstChild);
    p2.appendChild(imagen);
parent.appendChild(p2);
    imagen.style.display = 'block';
   
    
}
};



function printDOM(node,prefix){

console.log (prefix +node.nodeName);
for(let i=0;i<node.childNodes.length; i++){
printDOM(node.childNodes[i], prefix + '')
}

}
printDOM(document,'');

//resaltar

function resaltarP(palabra) {
    var res=document.getElementsByTagName("a")[1].innerHTML;
 if(res === "Resaltar"){
     
     on(palabra);
 }
    else {
        off(palabra);
    }

    }

function on(palabra){
    if(typeof palabra === 'string'){
   
 const paras = document.getElementsByTagName('p');
 for(let p of paras) {

 var cadena = p.innerHTML
        var u = cadena.indexOf(palabra);
        if (u >= 0) {
            cadena = cadena.substring(0, u) + "<span class='resaltar'>" + cadena.substring(u, u + palabra.length) + "</span>" + cadena.substring(u + palabra.length);
            p.innerHTML = cadena
        }
     
 }
       
        
 }
     document.getElementsByTagName("a")[1].innerHTML = "Deshabilitar";
}


function off(palabra){
      if(typeof palabra === 'string'){
   
 const paras = document.getElementsByTagName('p');
 for(let p of paras) {

 var cadena = p.innerHTML
        var u = cadena.indexOf(palabra);
        if (u >= 0) {
            cadena = cadena.substring(0, u) + "<span class='deshabilitar'>" + cadena.substring(u, u + palabra.length) + "</span>" + cadena.substring(u + palabra.length);
            p.innerHTML = cadena
        }
     
 }
       
        
 }
    document.getElementsByTagName("a")[1].innerHTML = "Resaltar"; 
}
