// Productos ----------------------------------------------------------------------------------------
const products = [
    {id:11, name: 'Mouse Logitech G Series Lightsync G203', price: '4099', imageSrc: 'imgs/Productos/Mouse/Lightsync G203.webp', cantidad: 0},
    {id:12, name: 'Mouse HyperX Pulsefire Core negro', price: '10430', imageSrc: 'imgs/Productos/Mouse/Pulsefire Core.webp', cantidad: 0},
    {id:13, name: 'Mouse Xinua M2 Inalambrico Recargable', price: '3090', imageSrc: 'imgs/Productos/Mouse/Xinua M2.webp', cantidad: 0},
    {id:14, name: 'Mouse Microsoft KTF-00056BC Bluetooth Blanco', price: '4699', offerPrice: '7.399', imageSrc: 'imgs/Productos/Mouse/Microsoft KTF.webp', cantidad: 0},

    {id:21, name: 'Teclado 60% Red Switch White Black', price: '39158', imageSrc: 'imgs/Productos/Teclado/White Black.webp', cantidad: 0},
    {id:22, name: 'Teclado Mecanico Dragonborn K630', price: '16399', imageSrc: 'imgs/Productos/Teclado/Dragonborn K630.webp', cantidad: 0},
    {id:23, name: 'Teclado Cherry Blossom Keycap - Cherry G80', price: '27.480', imageSrc: 'imgs/Productos/Teclado/Cherry Blossom.webp', cantidad: 0},
    {id:24, name: 'Teclado Redragon Shiva K512', price: '10320', offerPrice: '13.157', imageSrc: 'imgs/Productos/Teclado/Shiva K512.webp', cantidad: 0},

    {id:31, name: 'Cámara Web Logitech C270 HD 30FPS', price: '11939', imageSrc: 'imgs/Productos/Camara/Logitech720.webp', cantidad: 0},
    {id:31, name: 'Cámara Logitech - Full HD 1080p', price: '59843', imageSrc: 'imgs/Productos/Camara/LogitechStream.webp', cantidad: 0},
    {id:32, name: 'Cámara Razer Kiyo Pro Full HD 60FPS', price: '78500', imageSrc: 'imgs/Productos/Camara/Razer.webp', cantidad: 0},
    {id:33, name: 'Cámara Pcbox Call Pcb-Cw4K 4K', price: '32648', offerPrice: '40.690', imageSrc: 'imgs/Productos/Camara/PCBox.webp', cantidad: 0},

    {id:41, name: 'Altavoces Thonet & Vander Vertrag Bluetooth', price: '119600', imageSrc: 'imgs/Productos/Altavoz/T&V.webp', cantidad: 0},
    {id:42, name: 'Altavoces Logitech Z407 Subwoofer & Wireless Control', price: '63430', imageSrc: 'imgs/Productos/Altavoz/Logitech.webp', cantidad: 0},
    {id:43, name: 'Altavoces Dynamic Line DL-410 White - Altavoces 2.0', price: '23450', imageSrc: 'imgs/Productos/Altavoz/Woxter.webp', cantidad: 0},
    {id:44, name: 'Altavoces Creative Pebble V3 2.0 Bluetooth 5.0 Usb-C', price: '20750', offerPrice: '24.800', imageSrc: 'imgs/Productos/Altavoz/CreativePebble.webp', cantidad: 0},

    {id:51, name: 'Auriculares REDRAGON SCYLLA BLACK', price: '10279', imageSrc: 'imgs/Productos/Auris/Redragon.webp', cantidad: 0},
    {id:52, name: 'Auriculares inalámbricos Kingston HyperX Cloud Flight', price: '50360', imageSrc: 'imgs/Productos/Auris/HyperX.webp', cantidad: 0},
    {id:53, name: 'Auriculares BLUETOOTH JBL LIVE 660 BLACK', price: '34999', imageSrc: 'imgs/Productos/Auris/JBL.webp', cantidad: 0},
    {id:54, name: 'Auriculares Pc Vsg Singularity', price: '24,400', offerPrice: '27.900', imageSrc: 'imgs/Productos/Auris/Singularity.webp', cantidad: 0},

    {id:61, name: 'Microfono Blue Yeti Condensador Multipatrón Cardioide', price: '67119', imageSrc: 'imgs/Productos/Micro/Blue.webp', cantidad: 0},
    {id:62, name: 'Microfono HyperX Quadcast S Condensador RGB', price: '77627', imageSrc: 'imgs/Productos/Micro/Quadcast.webp', cantidad: 0},
    {id:63, name: 'Microfono Jbl Quantum Stream Condensador Multipatrón', price: '36999', imageSrc: 'imgs/Productos/Micro/JBL.webp', cantidad: 0},
    {id:64, name: 'Microfono HyperX SoloCast Condensador Cardioide', price: '28570', offerPrice: '48.000', imageSrc: 'imgs/Productos/Micro/Solocast.webp', cantidad: 0},

    {id:71, name: 'Mousepad Textura Fiber XXL 90x40cm', price: '4900', imageSrc: 'imgs/Productos/Mousepad/camuflado.webp', cantidad: 0},
    {id:72, name: 'Mousepad Cod.057 Abstracto XL 58x30cm', price: '3015', imageSrc: 'imgs/Productos/Mousepad/D-L.webp', cantidad: 0},
    {id:73, name: 'Mousepad Strata Liquid XL 80x30cm ', price: '4376', imageSrc: 'imgs/Productos/Mousepad/aqua.webp', cantidad: 0},
    {id:74, name: 'Mousepad Octopus XXL 90x40cm', price: '2149,00', offerPrice: '4.957', imageSrc: 'imgs/Productos/Mousepad/octopus.webp', cantidad: 0},

    {id:81, name: 'Pantalla LED 24" EVL Full HD 24 EVLB', price: '453990', imageSrc: 'imgs/Productos/Pantalla/evl.webp', cantidad: 0},
    {id:82, name: 'Pantalla LPS 29" LG Ultrawide Freesync', price: '73299', imageSrc: 'imgs/Productos/Pantalla/ultrawide.webp', cantidad: 0},
    {id:83, name: 'Pantalla LED Samsung 24" F24T35 EVLB', price: '69990', imageSrc: 'imgs/Productos/Pantalla/samsung.webp', cantidad: 0},
    {id:84, name: 'Pantalla Acer 21.5 Full Hd - Hdmi Vga 4ms Tn', price: '54729', offerPrice: '72.150', imageSrc: 'imgs/Productos/Pantalla/acer.webp', cantidad: 0}
];

//Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
        // Si el producto ya existe, solo incrementa la cantidad
        existingProduct.cantidad += 1;
    } else {
        // Si no existe, agrega el producto completo al carrito
        cart.push(product);
    }
    updateCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpia el carrito actual

    cart.forEach(item => {
        const itemHTML = `
            <div class="cart-item">
                <img src="${item.imageSrc}" alt="${item.name}">
                <p>${item.name}</p>
                <p>$${item.price}</p>
                <p>Cantidad: ${item.cantidad}</p>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveCartOnClose() {
    // Guarda el carrito de compras en el local storage antes de cerrar el navegador
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.addEventListener('beforeunload', saveCartOnClose);

// Agregar productos al carrito desde los botones
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = parseInt(button.dataset.productId, 10);
        const product = products.find(p => p.id === productId);
        addToCart(product);
        displayCart();
    });
});
