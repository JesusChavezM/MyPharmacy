// Obtener el botón de agregar al carrito
var addToCartButton = document.getElementById("add-to-cart");

// Obtener la cantidad de productos
var quantityInput = document.getElementById("quantity");

// Obtener el elemento de la lista de compras
var cartList = document.getElementById("cart-list");

// Crear una variable para el total
var total = 0;

// Agregar un evento de clic al botón de agregar al carrito
addToCartButton.addEventListener("click", function() {
  // Obtener la cantidad de productos
  var quantity = parseInt(quantityInput.value);

  // Calcular el precio total
  var price = 10; // Precio unitario
  var totalPrice = price * quantity;

  // Crear un nuevo elemento de la lista de compras
  var cartItem = document.createElement("li");
  cartItem.innerText = quantity + " productos por $" + totalPrice.toFixed(2);

  // Agregar el elemento a la lista de compras
  cartList.appendChild(cartItem);

  // Actualizar el total
  total += totalPrice;
  document.getElementById("total").innerText = "$" + total.toFixed(2);

  // Restablecer la cantidad de productos a 1
  quantityInput.value = 1;
});
const products = [
    { 
      name: "Producto 1",
      price: 10.99,
      image: "https://example.com/product1.jpg"
    },
    {
      name: "Producto 2",
      price: 19.99,
      image: "https://example.com/product2.jpg"
    },
    // Añade tantos productos como desees
  ];

  

const productContainer = document.getElementById("product-container");

for (let i = 0; i < products.length; i++) {
  // Crea un elemento div para la tarjeta del producto
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  // Crea un elemento img para la imagen del producto
  const productImage = document.createElement("img");
  productImage.src = products[i].image;
  productImage.alt = products[i].name;
  productCard.appendChild(productImage);

  // Crea un elemento h3 para el nombre del producto
  const productName = document.createElement("h3");
  productName.innerText = products[i].name;
  productCard.appendChild(productName);

  // Crea un elemento p para el precio del producto
  const productPrice = document.createElement("p");
  productPrice.innerText = `$${products[i].price}`;
  productCard.appendChild(productPrice);

  // Añade la tarjeta del producto al contenedor de productos
  productContainer.appendChild(productCard);
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