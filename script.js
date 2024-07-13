document.addEventListener('DOMContentLoaded', () => {
    const drawSignatureButton = document.getElementById('drawSignatureButton');
    const typeSignatureButton = document.getElementById('typeSignatureButton');
  
    drawSignatureButton.addEventListener('click', () => {
      window.location.href = 'drawSignature.html'; // Update this with the actual path to your drawing page
    });
  
    typeSignatureButton.addEventListener('click', () => {
      window.location.href = 'typeSignature.html'; // Update this with the actual path to your typing page
    });
  });
  