import { Menu, Pedido, Hamburguesa, Birra, title} from './metaData.js'

/*---- Instancias ----*/

const miMenu = new Menu();

const miPedido = new Pedido();

miMenu.cargarItem(new Hamburguesa('h1',"Parisina", "Hongos", "Queso Azul", "Cebolla caramelizada", "Barbacoa", 800 ));
miMenu.cargarItem(new Hamburguesa('h2',"Mexicanita", "Palta", "Tomates confitados", "Pimientos asados", "Barbacoa", 850 ));
miMenu.cargarItem(new Hamburguesa('h3',"Argenta", "Rucula", "Tomates", "Huevo", "Alioli", 900 ));
miMenu.cargarItem(new Hamburguesa('h4',"Yankie", "Panceta", "Aros de cebolla", "Cheddar", "Alioli", 950 ));

miMenu.cargarItem(new Birra('b1',"Honey","5%", 200));
miMenu.cargarItem(new Birra('b2',"Trigo","6%", 250));
miMenu.cargarItem(new Birra('b3',"Scottish","7%", 300));
miMenu.cargarItem(new Birra('b4',"Lemon","8%", 350));

// console.log(miMenu.cargarMenu());

// miMenu.arrayMenu.forEach( (el) => console.log(el.id[0]) );

miMenu.renderMenu();


