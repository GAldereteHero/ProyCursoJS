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
    constructor(nombre, ingred1, ingred2, ingred3, aderezo, precio){
        this.nombre = nombre;
        this.ingred1 = ingred1;
        this.ingred2 = ingred2;
        this.ingred3 = ingred3;
        this.aderezo = aderezo;
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

miMenu.cargarPizzas(new Pizza("Especial", "Jamon", "Pimiento", "Aceitunas", "Barbacoa", 950 ));
miMenu.cargarPizzas(new Pizza("Agridulce", "Jamon crudo", "Rucula", "Queso Brie", "Barbacoa", 1000 ));
miMenu.cargarPizzas(new Pizza("De la casa", "Ternera", "Huevo", "Huevo", "Pimiento", 1100 ));

miMenu.cargarBirra(new Birra("Honey","5%", 200));
miMenu.cargarBirra(new Birra("Trigeña","6%", 250));
miMenu.cargarBirra(new Birra("Scottish","7%", 300));

/* Funciones    */

function mostrarMenu(){

    let miMenu = [];

    miMenu.push(`----Hamburguesas------------`);
    for ( const item of Menu){
        if(item instanceof Hamburguesa){
            miMenu.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}, ${item.aderezo}.`);
        }
    }

    miMenu.push(`----Pizzas------------------`);
    for ( const item of Menu){
        if(item instanceof Pizza){
            miMenu.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}, ${item.aderezo}.`);
        }
    }

    miMenu.push(`----Birras------------------`);
    for ( const item of Menu){
        if(item instanceof Birra){
            miMenu.push(`$${item.precio} ${item.nombre}: Grad. Alcoh.${item.gradAlco}`);
        }
    }
    
    console.log(miMenu.join(`\n`));
}

console.log(miMenu.hamburguesas); 
console.log(miMenu.pizzas); 
console.log(miMenu.birras); 

