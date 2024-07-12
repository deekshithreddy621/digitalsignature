document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingBoard');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const clearButton = document.getElementById('clearButton');
    const saveButton = document.getElementById('saveButton');
    // Set canvas size
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;
  
    // Default brush settings
    let drawing = false;
    let brushColor = colorPicker.value;
    let brushSize = 5;
  
    // Event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);
    colorPicker.addEventListener('change', changeColor);
    clearButton.addEventListener('click', clearCanvas);
    saveButton.addEventListener('click', saveCanvas);
    function startDrawing(e) {
      drawing = true;
      draw(e); // To draw a point when the user clicks
    }
  
    function stopDrawing() {
      drawing = false;
      ctx.beginPath(); // Reset the context path
    }
  
    function draw(e) {
      if (!drawing) return;
  
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.strokeStyle = brushColor;
  
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function changeColor(e) {
      brushColor = e.target.value;
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function saveCanvas() {
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
     }
  });
  