document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    const signatureInput = document.getElementById('signatureInput');
    const saveSignatureButton = document.getElementById('saveSignatureButton');
    const clearSignatureButton = document.getElementById('clearSignatureButton');
  
    // Set canvas size
    canvas.width = window.innerWidth * 0.8;
    canvas.height = 150; // Set a fixed height for the signature
  
    // Default text settings
    ctx.font = "48px cursive";
    ctx.fillStyle = "#000";
  
    saveSignatureButton.addEventListener('click', saveSignature);
    clearSignatureButton.addEventListener('click', clearSignature);
  
    function saveSignature() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Get the typed signature and draw it on the canvas
      const signature = signatureInput.value;
      ctx.fillText(signature, 20, 100); // Adjust the coordinates as needed
  
      // Create a link element and trigger a download
      const link = document.createElement('a');
      link.download = 'signature.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
    function clearSignature(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('signatureInput').value = "";
    }
  });
  