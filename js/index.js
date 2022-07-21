import { Menu, Pedido, Hamburguesa, Birra, title} from './metaData.js'

/*---- Instancias ----*/

const miMenu = new Menu();

const miPedido = new Pedido();

miMenu.cargarItem(new Hamburguesa('h1',"Alemana", "Cebolla rebozada", "Bacon", "Queso cheddar", "Barbacoa", 800 ));
miMenu.cargarItem(new Hamburguesa('h2',"Mexicana", "Guacamole", "Chili", "Queso cheddar", "Salsa ahumada", 850 ));
miMenu.cargarItem(new Hamburguesa('h3',"Francesa", "Lechuga", "Cebolla caramelizada", "Queso de cabra", "Salsa de miel", 900 ));
miMenu.cargarItem(new Hamburguesa('h4',"Americana", "Bacon", "Queso cheddar", "Huevo", "Salsa ahumada", 950 ));

miMenu.cargarItem(new Birra('b1',"Honey","5%", 200));
miMenu.cargarItem(new Birra('b2',"Trigo","6%", 250));
miMenu.cargarItem(new Birra('b3',"Scottish","7%", 300));
miMenu.cargarItem(new Birra('b4',"Red Ale","8%", 350));

miMenu.renderMenu(miPedido);
