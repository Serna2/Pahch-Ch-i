/**
 * Pahch Ch'i - Pineapple Product Website
 * JavaScript Functions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollAnimation();
    initProcessTimeline();
    initProcessModal();
});

// Navbar functionality
function initNavbar() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section, header');

    // Toggle mobile menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Animación de click
            this.classList.add('nav-pulse');
            setTimeout(() => {
                this.classList.remove('nav-pulse');
            }, 300);
        });
    });

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Actualizar sección activa
        updateActiveSection();
    });
    
    // Función para actualizar la sección activa
    function updateActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.parentElement.classList.add('active');
            }
        });
    }
    
    // Inicializar sección activa al cargar la página
    updateActiveSection();
}

// Scroll animation for elements
function initScrollAnimation() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.classList.remove('fadeIn'); // Ensure initial state
        observer.observe(section);
    });
}

// Gallery functionality removed as it's no longer used
// The gallery section has been replaced with process steps information

// Initialize counters and animations for process timeline
function initProcessTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay
                    setTimeout(() => {
                        entry.target.classList.add('fadeIn');
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        timelineItems.forEach(item => {
            item.classList.remove('fadeIn');
            observer.observe(item);
        });
    }
}

// Process Modal Functionality
function initProcessModal() {
    const processSteps = document.querySelectorAll('.process-step');
    const modalOverlay = document.getElementById('process-modal-overlay');
    const modalClose = document.getElementById('process-modal-close');
    const modalStepNumber = document.getElementById('modal-step-number');
    const modalStepTitle = document.getElementById('modal-step-title');
    const modalContent = document.getElementById('modal-content');
    
    // Process details content
    const processDetails = {
        1: {
            title: "Selección de Ingredientes",
            content: `
                <p>Se seleccionan ingredientes funcionales y accesibles:</p>
                <ul>
                    <li>450 g de avena</li>
                    <li>50 g de piña deshidratada</li>
                    <li>0.25 g de vitamina B12 (equivalente a 5 gotas)</li>
                    <li>0.25 g de ácido ascórbico (vitamina C)</li>
                </ul>
                <p>Todos los ingredientes son cuidadosamente seleccionados siguiendo estrictos estándares de calidad para garantizar el mejor producto final.</p>
            `
        },
        2: {
            title: "Deshidratación y Molienda de la Piña",
            content: `
                <p>Si la piña no está previamente deshidratada, se utiliza un proceso de calor controlado a baja temperatura para conservar enzimas como la bromelina.</p>
                <p>Luego, se muele hasta obtener una textura homogénea, compatible con la harina de avena.</p>
                <p>Este proceso es crucial para mantener las propiedades nutricionales y funcionales de la piña, especialmente la bromelina, que tiene importantes beneficios digestivos y antiinflamatorios.</p>
            `
        },
        3: {
            title: "Mezcla y Homogeneización",
            content: `
                <p>Todos los ingredientes (secos y líquidos) se mezclan en proporciones específicas para asegurar una distribución uniforme de los nutrimentos.</p>
                <p>Este paso es fundamental para garantizar que cada porción del producto contenga la misma cantidad de vitaminas y nutrientes, asegurando así su eficacia y consistencia.</p>
                <p>Utilizamos un proceso de homogeneización especializado que mantiene la integridad de las vitaminas mientras asegura una mezcla perfecta.</p>
            `
        },
        4: {
            title: "Envasado del Producto Final",
            content: `
                <p>La mezcla se almacena en envases herméticos y opacos, con cierre tipo zip, que:</p>
                <ul>
                    <li>Protegen de la humedad y la luz</li>
                    <li>Prolongan la vida útil del producto hasta 6 meses</li>
                </ul>
                <p>El envase ha sido cuidadosamente seleccionado para mantener la frescura y propiedades del producto, protegiéndolo de factores externos que podrían degradar sus nutrientes y cualidades organolépticas.</p>
            `
        },
        5: {
            title: "Evaluación Nutricional",
            content: `
                <p>Se elabora una tabla nutrimental estimada con base en:</p>
                <ul>
                    <li>Sistema Mexicano de Alimentos Equivalentes (SMAE)</li>
                    <li>USDA (Departamento de Agricultura de EE.UU.)</li>
                </ul>
                <p>Se comparan los aportes con los requerimientos diarios de vitaminas B12 y C.</p>
                <p>Este proceso asegura que nuestras declaraciones nutricionales sean precisas y cumplan con los estándares reglamentarios, brindando a los consumidores información confiable sobre el valor nutricional del producto.</p>
            `
        },
        6: {
            title: "Análisis Sensorial",
            content: `
                <p>Se realizaron pruebas de aceptación con consumidores potenciales.</p>
                <p>El producto obtuvo una excelente aceptación por su sabor, aroma y textura.</p>
                <p>Estas evaluaciones son fundamentales para asegurar que además de ser nutricionalmente valioso, Pahch Ch'i sea un producto agradable al paladar y fácil de incorporar en la dieta diaria.</p>
                <p>Las pruebas incluyen evaluación de características como:</p>
                <ul>
                    <li>Sabor y aroma</li>
                    <li>Textura y consistencia</li>
                    <li>Facilidad de uso en diferentes preparaciones</li>
                </ul>
            `
        }
    };

    // Open modal when clicking on a process step
    processSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            const stepNumber = index + 1;
            const details = processDetails[stepNumber];
            
            // Update modal content
            modalStepNumber.textContent = stepNumber < 10 ? `0${stepNumber}` : stepNumber;
            modalStepTitle.textContent = details.title;
            modalContent.innerHTML = details.content;
            
            // Show modal with animation
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', () => {
        closeProcessModal();
    });
    
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeProcessModal();
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeProcessModal();
        }
    });
      // Function to close the modal
    function closeProcessModal() {
        modalOverlay.classList.add('closing');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Remove closing class and active class after animation completes
        setTimeout(() => {
            modalOverlay.classList.remove('active');
            modalOverlay.classList.remove('closing');
            
            // Clear content after all animations finish
            setTimeout(() => {
                if (!modalOverlay.classList.contains('active')) {
                    modalContent.innerHTML = '';
                }
            }, 100);
        }, 300);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});
