/*---- Clases y variables ----*/ 
class Menu{
    constructor(){
        this.hamburguesas = [];
        this.pizzas = [];
        this.birras = [];
        this.arrayMenu = []; 
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
    mostrarMenu(){
    
        let mostrar = [];
    
        mostrar.push(`----Hamburguesas------------`);
        this.hamburguesas.forEach((item) => mostrar.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}, ${item.aderezo}.`));
    
        mostrar.push(`----Pizzas------------------`);
        this.pizzas.forEach((item) => mostrar.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}.`));
        
        mostrar.push(`----Birras------------------`);
        this.birras.forEach((item) =>  mostrar.push(`$${item.precio} ${item.nombre}: Grad. Alcoh: ${item.gradAlco}`));
    
        console.log(mostrar.join(`\n`));
    
    }
    cargarArrayMenu(){
        // Este metodo permite cargar en un array todos los elementos del menu
        this.hamburguesas.forEach( (el) => this.arrayMenu.push(el));
        this.pizzas.forEach( (el) => this.arrayMenu.push(el));
        this.birras.forEach( (el) => this.arrayMenu.push(el));
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

function IsValidItem(item,cantidad){

    if(miMenu.arrayMenu.some( (el) => el.nombre === item) && (cantidad <= 10 && cantidad >= 1)){
        item = miMenu.arrayMenu.find( (el) => el.nombre === item);
        miPedido.cargarPedido(item,cantidad);
        return false;
    }
    else{
        alert('¡Ingrese un item o cantidad validos!')
        return true;
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
miMenu.cargarBirra(new Birra("Trigo","6%", 250));
miMenu.cargarBirra(new Birra("Scottish","7%", 300));

const miPedido = new Pedido();

const title = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase();

miMenu.cargarArrayMenu();

miMenu.mostrarMenu();

let it = 'y';
let item = '';

alert('¡Bienvenido a Mr.Burgui!');

while( it === 'y'){

    do{
        item = title(prompt("¿Que desea pedir? [Seleccione una opción del menú]"));
        cantidad = parseInt(prompt("¿Cuántas unidades desea encargar?"));

    }while(IsValidItem(item,cantidad))

    it = prompt("¿Desea agregar otro item?  [ y / n ]").toLowerCase();
}

miPedido.mostrarPedido();