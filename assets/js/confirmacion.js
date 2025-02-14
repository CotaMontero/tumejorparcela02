

document.addEventListener('DOMContentLoaded', () => { // Espera a que el DOM esté completamente cargado
    const form = document.querySelector('.contacto-form');
  
    if (form) { // Verifica si el formulario existe en la página actual
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita la recarga de la página
  
        // Aquí podrías agregar validación adicional del formulario (ejemplo)
        if (form.nombre.value.trim() === '') {
          alert('Por favor, ingresa tu nombre.');
          return; // Detiene el envío del formulario
        }
  
        Swal.fire("¡Mensaje enviado!");
        form.reset(); // Limpia el formulario después del envío (opcional)
      });
    }
  });