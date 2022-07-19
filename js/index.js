import { Menu, Pedido, Hamburguesa, Birra, title} from './metaData.js'

/*---- Instancias ----*/

const miMenu = new Menu();

const miPedido = new Pedido();

miMenu.cargarHamburguesas(new Hamburguesa(1,"Parisina", "Hongos", "Queso Azul", "Cebolla caramelizada", "Barbacoa", 800 ));
miMenu.cargarHamburguesas(new Hamburguesa(2,"Mexicanita", "Palta", "Tomates confitados", "Pimientos asados", "Barbacoa", 850 ));
miMenu.cargarHamburguesas(new Hamburguesa(3,"Argenta", "Rucula", "Tomates", "Huevo", "Alioli", 900 ));
miMenu.cargarHamburguesas(new Hamburguesa(4,"Yankie", "Panceta", "Aros de cebolla", "Cheddar", "Alioli", 950 ));

miMenu.cargarBirra(new Birra(5,"Honey","5%", 200));
miMenu.cargarBirra(new Birra(6,"Trigo","6%", 250));
miMenu.cargarBirra(new Birra(7,"Scottish","7%", 300));
miMenu.cargarBirra(new Birra(8,"Lemon","8%", 350));

miMenu.cargarArrayMenu();

miMenu.mostrar();
