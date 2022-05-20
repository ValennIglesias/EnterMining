var particles = Particles.init({
	selector: '.background',
  color: '#f4d44b',
  connectParticles:true
});


// -------------------------------------


let productos = document.getElementById("otrosProductos")

let boton = document.getElementById("VerMas")


boton.addEventListener("click", mostrar)

function mostrar(){
  productos.classList.toggle("mostrar")

  if (productos.classList.contains("mostrar"))  {
    boton.innerHTML=("VER MENOS")
    
  } else {
    boton.innerHTML=("VER MAS")
  }
}