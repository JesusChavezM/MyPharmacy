function darktheme(){
    document.documentElement.classList.toggle('darkmode')
}

function validarInicioSesion() {
    //Obtener los valores de los campos de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
  
    //Validar que ambos campos no estén vacíos
    if (usuario === "" || contrasena === "") {
      alert("Por favor ingrese su nombre de usuario y contraseña");
      return false;
    }
  
    //Verificar si los datos ingresados coinciden con los datos de inicio de sesión almacenados
    if (usuario === "nombredeusuario" && contrasena === "contrasena") {
      alert("Inicio de sesión exitoso");
      window.location.href = "paginadeinicio.html"; //redirigir a la página de inicio
      return true;
    } else {
      alert("Usuario o contraseña incorrectos. Por favor intente de nuevo");
      return false;
    }
  }


// Obtener el contenedor de productos
const contenedorProductos = document.getElementById("contenedor-productos");

// Obtener los datos del archivo JSON utilizando Ajax
const xhr = new XMLHttpRequest();
xhr.open("GET", "productos.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    // Crear una tarjeta de producto para cada objeto en la matriz de productos
    for (let i = 0; i < data.productos.length; i++) {
      const producto = data.productos[i];
      // Crear la estructura HTML de la tarjeta de producto
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.classList.add("tarjeta-producto");
      tarjetaProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>$ ${producto.precio}</span><br>
        <button>Agregar al carrito</button>
      `;
      // Agregar la tarjeta de producto al contenedor
      contenedorProductos.appendChild(tarjetaProducto);
    }
  }
};
xhr.send();