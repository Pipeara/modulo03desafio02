const checkPassword = () => {
    const digit1 = document.querySelector('#digito1').value;
    const digit2 = document.querySelector('#digito2').value;
    const digit3 = document.querySelector('#digito3').value;

    if (digit1 === '9' && digit2 === '1' && digit3 === '1') {
      document.getElementById('passMessage').innerHTML = "<strong>¡Contraseña 1 correcta!</strong> Acceso concedido.";
    } else if (digit1 === '7' && digit2 === '1' && digit3 === '4') {
      document.getElementById('passMessage').innerHTML = "<strong>¡Contraseña 2 correcta!</strong> Acceso concedido.";
    } else {
      document.getElementById('passMessage').innerHTML = "Contraseña incorrecta. Intenta nuevamente.";
    }

    // Limpiar los valores de los selectores
    document.querySelector('#digito1').value = "";
    document.querySelector('#digito2').value = "";
    document.querySelector('#digito3').value = "";
  };
  function borderMod() {
    let image = document.getElementById("image");
    let currentBorderStyle = window.getComputedStyle(image).getPropertyValue("border");
 
  }    function toggleBorder(element) {
    if (element.style.border === '') {
        element.style.border = '2px solid red';
    } else {
        element.style.border = '';
    }
}


function calcularTotal() {
  const cantidadA = parseInt(document.getElementById("stickerA").value) || 0;
  const cantidadB = parseInt(document.getElementById("stickerB").value) || 0;
  const cantidadC = parseInt(document.getElementById("stickerC").value) || 0;

  const total = cantidadA + cantidadB + cantidadC;
  const messageElement = document.querySelector('#message');

  if (Number.isNaN(cantidadA) || Number.isNaN(cantidadB) || Number.isNaN(cantidadC)) {
    messageElement.textContent = "Ingrese solo números en los campos de cantidad.";
  } else if (total <= 10) {
    messageElement.textContent = "Llevas " + total + " stickers.";
  } else {
    messageElement.textContent = "Llevas demasiados stickers.";
  }
}


  
