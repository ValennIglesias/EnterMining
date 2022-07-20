var particles = Particles.init({
	selector: '.background',
  color: '#ffffff',
  connectParticles:true,
  maxParticles:85
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