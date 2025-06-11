/**
 * Pahch Ch'i - QR Code Generator
 * This script handles the generation of QR codes for local access to the webpage
 */

// Function to generate QR code
function generateQRCode() {
    // Get the current absolute file path
    const currentPath = window.location.href;
    
    // Create QR code container if it doesn't exist
    let qrContainer = document.getElementById('qr-container');
    
    if (!qrContainer) {
        qrContainer = document.createElement('div');
        qrContainer.id = 'qr-container';
        qrContainer.className = 'qr-container';
        document.body.appendChild(qrContainer);
        
        // Create QR code element
        const qrElement = document.createElement('div');
        qrElement.id = 'qrcode';
        qrContainer.appendChild(qrElement);
        
        // Create title
        const title = document.createElement('h3');
        title.textContent = 'Escanea este código para acceder a la página';
        qrContainer.insertBefore(title, qrElement);
        
        // Create description
        const description = document.createElement('p');
        description.textContent = 'Usa la cámara de tu dispositivo móvil para escanear este QR y acceder a la página desde tu celular.';
        qrContainer.insertBefore(description, qrElement);
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        closeButton.className = 'qr-close-btn';
        closeButton.onclick = function() {
            qrContainer.classList.remove('active');
        };
        qrContainer.appendChild(closeButton);
    }
    
    // Clear any existing QR code
    document.getElementById('qrcode').innerHTML = '';
    
    // Generate new QR code
    new QRCode(document.getElementById('qrcode'), {
        text: currentPath,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Show QR container
    qrContainer.classList.add('active');
}

// Create QR button when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create QR button
    const qrButton = document.createElement('button');
    qrButton.id = 'qr-button';
    qrButton.className = 'qr-button';
    qrButton.innerHTML = '<i class="fas fa-qrcode"></i>';
    qrButton.title = 'Generar código QR';
    
    // Add click event to generate QR
    qrButton.addEventListener('click', generateQRCode);
    
    // Append button to body
    document.body.appendChild(qrButton);
});
