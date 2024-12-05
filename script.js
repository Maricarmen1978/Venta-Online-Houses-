const imagenPrincipal = ('imagenes/bolsa-zapatillas-lavadora');
const desplegable = document.getElementById('myDropdown'); // Selecciona el desplegable por su ID

function toggleDropdown() {
  desplegable.classList.toggle('show'); // Agrega o quita la clase 'show' para mostrar/ocultar
}

imagenPrincipal.addEventListener('click', toggleDropdown);