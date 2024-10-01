// Muestra un mensaje cuando se hace clic en "Aprender más"
document.getElementById('learn-more').addEventListener('click', function() {
    alert('Mi visión para la escuela es hacer de este un espacio inclusivo, donde todos los estudiantes tengan oportunidades de crecer académicamente, socialmente y personalmente.');
});

// Desplegar/ocultar contenido adicional
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling; // Encuentra el contenido asociado
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.textContent = 'Ocultar información'; // Cambia el texto del botón
        } else {
            content.style.display = 'none';
            this.textContent = 'Mostrar información'; // Cambia el texto del botón
        }
    });
});

// Cambiar el color de fondo de las secciones al hacer clic
document.querySelectorAll('.left, .right').forEach(section => {
    section.addEventListener('click', function() {
        this.style.backgroundColor = this.style.backgroundColor === 'lightyellow' ? '#f0f0f0' : 'lightyellow';
    });
});
