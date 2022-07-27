import { Menu, Pedido, Hamburguesa, Birra, title } from './metaData.js'

const arraySaludos = ['¡Las mejores hamburguesas de Mr. Burgui!', '¡Bienvenido a Mr.Burgui!', '¡Comparti con amigos una Burgui!'];
/*---- Instancias ----*/

const miMenu = new Menu();
const miPedido = new Pedido();
const ItemsPedido = [];
sessionStorage.setItem("items", JSON.stringify(ItemsPedido));

miMenu.cargarItem(new Hamburguesa('h1', "Alemana", "Cebolla rebozada", "Bacon", "Queso cheddar", "Barbacoa", 800, 1));
miMenu.cargarItem(new Hamburguesa('h2', "Mexicana", "Guacamole", "Chili", "Queso cheddar", "Salsa ahumada", 850, 1));
miMenu.cargarItem(new Hamburguesa('h3', "Francesa", "Lechuga", "Cebolla caramelizada", "Queso de cabra", "Salsa de miel", 900, 1));
miMenu.cargarItem(new Hamburguesa('h4', "Americana", "Bacon", "Queso cheddar", "Huevo", "Salsa ahumada", 950, 1));

miMenu.cargarItem(new Birra('b1', "Honey", "5%", 200, 1));
miMenu.cargarItem(new Birra('b2', "Weisse", "6%", 250, 1));
miMenu.cargarItem(new Birra('b3', "Scottish", "7%", 300, 1));
miMenu.cargarItem(new Birra('b4', "Red Ale", "8%", 350, 1));

miMenu.renderMenu(miPedido);

const btVerMiPedido = document.getElementById('verMiPedido');

btVerMiPedido.addEventListener('click', () => {
    miPedido.renderPedido();
})

const btBorrarMiPedido = document.getElementById('borrarMiPedido');

btBorrarMiPedido.addEventListener('click', () => {
    miPedido.borrarPedido();
})