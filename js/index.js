/*---- Clases y variables ----*/ 
class Menu{
    constructor(){
        this.hamburguesas = [];
        this.pizzas = [];
        this.birras = [];
    }

    cargarHamburguesas(obj){
        this.hamburguesas.push(obj);
    }
    cargarPizzas(obj){
        this.pizzas.push(obj);
    }
    cargarBirra(obj){
        this.birras.push(obj);
    }
}

class Pedido{
    constructor(){
        this.orden = [];
        this.costoTotal = 0;
    }
    
    cargarPedido(obj,cantidad){
        for (let index = 1; index <= cantidad; index++){
            this.orden.push(obj);  
        }
        this.orden = this.orden.map((el) => {return{nombre: el.nombre, precio: el.precio}}); 
    }

    calcularCostoTotal(){
        this.costoTotal = this.orden.reduce( (acu,el) => acu + el.precio, 0 );
    }

    mostrarPedido(){
        let mostrar = [];

        mostrar.push(`---- Su pedido ------------`);
        this.orden.forEach((item) => mostrar.push(` ${item.nombre}: $${item.precio}`));
        
        this.calcularCostoTotal();
        mostrar.push(`---- Precio total ------------> $${this.costoTotal}`);
        
        console.log(mostrar.join(`\n`));
    }
}

class Hamburguesa{
    constructor(nombre, ingred1, ingred2, ingred3, aderezo, precio){
        this.nombre = nombre;
        this.ingred1 = ingred1;
        this.ingred2 = ingred2;
        this.ingred3 = ingred3;
        this.aderezo = aderezo;
        this.precio = precio;
    }
}

class Pizza{
    constructor(nombre, ingred1, ingred2, ingred3, precio){
        this.nombre = nombre;
        this.ingred1 = ingred1;
        this.ingred2 = ingred2;
        this.ingred3 = ingred3;
        this.precio = precio;
    }
}

class Birra{
    constructor(nombre, gradAlco, precio){
        this.nombre = nombre;
        this.gradAlco = gradAlco;
        this.precio = precio;
    }
}

/*---- Instancias ----*/

const miMenu = new Menu();

miMenu.cargarHamburguesas(new Hamburguesa("Parisina", "Hongos", "Queso Azul", "Cebolla caramelizada", "Barbacoa", 800 ));
miMenu.cargarHamburguesas(new Hamburguesa("Mexicanita", "Palta", "Tomates confitados", "Pimientos asados", "Barbacoa", 850 ));
miMenu.cargarHamburguesas(new Hamburguesa("Argenta", "Rucula", "Tomates", "Huevo", "Alioli", 900 ));

miMenu.cargarPizzas(new Pizza("Especial", "Jamon", "Pimiento", "Aceitunas", 950 ));
miMenu.cargarPizzas(new Pizza("Agridulce", "Jamon crudo", "Cebollas caramelizadas", "Queso azul", 1000 ));
miMenu.cargarPizzas(new Pizza("De la casa", "Ternera", "Huevo", "Pimiento", 1100 ));

miMenu.cargarBirra(new Birra("Honey","5%", 200));
miMenu.cargarBirra(new Birra("Trigeña","6%", 250));
miMenu.cargarBirra(new Birra("Scottish","7%", 300));

const miPedido = new Pedido();

/* Funciones    */

function mostrarMenu(){
    
    let mostrarMenu = [];

    mostrarMenu.push(`----Hamburguesas------------`);
    miMenu.hamburguesas.forEach((item) => mostrarMenu.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}, ${item.aderezo}.`));

    mostrarMenu.push(`----Pizzas------------------`);
    miMenu.pizzas.forEach((item) => mostrarMenu.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}.`));
    
    mostrarMenu.push(`----Birras------------------`);
    miMenu.birras.forEach((item) =>  mostrarMenu.push(`$${item.precio} ${item.nombre}: Grad. Alcoh: ${item.gradAlco}`));

    console.log(mostrarMenu.join(`\n`));

}

// mostrarMenu();

miPedido.cargarPedido(miMenu.birras[0],2);
miPedido.cargarPedido(miMenu.pizzas[1],1);
miPedido.cargarPedido(miMenu.hamburguesas[2],2);

miPedido.mostrarPedido();
// miPedido.calcularCostoTotal();
// console.log(miPedido.costoTotal);



