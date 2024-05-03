// 4 Formas de impresión
// alert("Hola mundo")
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ");
// Swal.fire("HOLA DESDE SWETTALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //Cons: se aplica a valores que no van a cambiar (DECIMAL)
const ul = 2.54; 
var name = "Karen Marcela"; //var: variables globales, se puede utilizar en todo el código (STRING)
let edad = 17; //valores que van a cambiar (ENTERO)
var ver = true; //BOOLEAN
let fal = false; //BOOLEAN

//OPERADORES BÁSICOS
var suma = 5+2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

//OPERADORES DE COMPARACIÓN
// = Asignación
// == Comparación ( valor)
// === Estrictamente comparado (valor y el tipo de dato )
// > >= < <= <>

console.log("Mi edad es: "+edad);

//EVENTO
function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        // imageHeight: 1500,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer:2000
      });
}
function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Cajas de texto vacías",
            text: "Algunas cajas de texto se encuentran vacías",
            icon: "error"
        });
          if(name.length == 0){
            document.getElementById("name").style.border = "2px solid red"
          }
          else{
            document.getElementById("name").style.border = "2px solid green"
          }
          if(last_name.length == 0){
            document.getElementById("last_name").style.border = "2px solid red"
          }
          else{
            document.getElementById("last_name").style.border = "2px solid green"
          }
         
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: "+name+" "+last_name;
    }
}

