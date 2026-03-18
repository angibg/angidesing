// MENSAJE AL HACER CLICK
function mensaje() {
  alert("Bienvenido a Angi Desing 🚀");
}

// CAMBIAR TEXTO DINÁMICAMENTE
function cambiarTexto() {
  const titulo = document.getElementById("titulo");
  if (titulo) {
    titulo.innerText = "Bienvenido a Angi Desing";
  }
}

// IR A LA SECCIÓN DE SERVICIOS
function irServicios() {
  const seccion = document.getElementById("servicios");
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}

// EFECTO AL CARGAR LA PÁGINA
window.onload = function() {
  console.log("Página cargada correctamente");

  // Animar cards al cargar
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200); // animación escalonada
  });
}