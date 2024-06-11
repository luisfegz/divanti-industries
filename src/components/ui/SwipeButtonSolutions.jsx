import React from 'react';

function SwipeButtonSolutions() {
    const scrollToSection = () => {
        const section = document.getElementById('SWIPE-SOLUTIONS');
        if (section) {
            // Calcula la posición de la sección
            const sectionTop = section.offsetTop;
            // Ajusta la posición para dejar un margen superior
            const margin = 64; // Puedes ajustar este valor según tus preferencias
            const adjustedTop = sectionTop - margin;

            // Realiza el desplazamiento suave
            window.scrollTo({
                top: adjustedTop,
                behavior: 'smooth' // Esto crea una animación suave
            });
        }
    };

    return (
        <button 
            className='
                bg-yellow-400 
                hover:bg-yellow-600 
                text-white 
                text-primary-foreground
                hover:bg-primary/90 
                py-1
                px-2.5 
                rounded 
                flex 
                items-center 
                w-full 
                font-semibold
                ml-4
            ' 
            onClick={scrollToSection}
        >
            Soluciones
        </button>
    );
}

export default SwipeButtonSolutions;

