  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    const signatureInput = document.getElementById('signatureInput');
    const fontSelector = document.getElementById('fontSelector');
    const colorPicker = document.getElementById('colorPicker');
    const saveSignatureButton = document.getElementById('saveSignatureButton');
      const clearSignatureButton = document.getElementById('clearSignatureButton');
    
    canvas.width = window.innerWidth * 0.8;
    canvas.height = 150; 
  
    // Default text settings
    ctx.fillStyle = "#000";
    ctx.font = `48px ${fontSelector.value}`;
    ctx.textAlign = 'center'; 
  
    
    signatureInput.addEventListener('input', () => {
      console.log('Input changed:', signatureInput.value);
      updateCanvas();
  });
  
  fontSelector.addEventListener('change', () => {
      console.log('Font changed:', fontSelector.value);
      updateCanvas();
  });
  
  colorPicker.addEventListener('change', () => {
      console.log('Color changed:', colorPicker.value);
      updateCanvas();
  });
    saveSignatureButton.addEventListener('click', saveSignature);
      clearSignatureButton.addEventListener('click', clearSignature);
  
    function updateCanvas() {
      
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      
      const signature = signatureInput.value;
      const selectedFont = fontSelector.value;
      const selectedColor = colorPicker.value;
  
      
      ctx.font = `48px '${selectedFont}'`;
      ctx.fillStyle = selectedColor;
  
      
      ctx.fillText(signature, canvas.width / 2, 100); 
    }
  
    function saveSignature() {
      
      updateCanvas();
  
      
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
  
  
  
  
  
  