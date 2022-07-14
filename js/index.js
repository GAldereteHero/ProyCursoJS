
class Hamburguesa{
    constructor(nombre, ingrediente1, ingrediente2, ingrediente3, aderezo, precio){
        this.nombre = nombre;
        this.ingrediente1 = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingrediente3 = ingrediente3;
        this.aderezo = aderezo;
        this.precio = precio;
    }
}

class Pizza{
    constructor(nombre, ingrediente1, ingrediente2, ingrediente3, aderezo, precio){
        this.nombre = nombre;
        this.ingrediente1 = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingrediente3 = ingrediente3;
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

const Menu = [];

const ham1 = new Hamburguesa("Parisina", "Hongos", "Queso Azul", "Cebolla caramelizada", "Barbacoa", 800 );
const ham2 = new Hamburguesa("Mexicanita", "Palta", "Tomates confitados", "Pimientos asados", "Barbacoa", 850 );
const ham3 = new Hamburguesa("Argenta", "Rucula", "Tomates", "Huevo", "Alioli", 900 );

const piz1 = new Pizza("Especial", "Jamon", "Pimiento", "Aceitunas", "Barbacoa", 950 );
const piz2 = new Pizza("Agridulce", "Jamon crudo", "Rucula", "Queso Brie", "Barbacoa", 1000 );
const piz3 = new Pizza("De la casa", "Ternera", "Huevo", "Huevo", "Pimiento", 1100 );

const bir1 = new Birra("Honey","5%", 200);
const bir2 = new Birra("Trigeña","6%", 250);
const bir3 = new Birra("Scottish","7%", 300);


Menu.push(ham1);
Menu.push(ham2);
Menu.push(ham3);

Menu.push(piz1);
Menu.push(piz2);
Menu.push(piz3);

Menu.push(bir1);
Menu.push(bir2);
Menu.push(bir3);

/* Funciones    */

function mostrarMenu(){

    let miMenu = [];

    miMenu.push(`----Hamburguesas------------`);
    for ( const item of Menu){
        if(item instanceof Hamburguesa){
            miMenu.push(`$${item.precio} ${item.nombre}: ${item.ingrediente1}, ${item.ingrediente2}, ${item.ingrediente3}, ${item.aderezo}.`);
        }
    }

    miMenu.push(`----Pizzas------------------`);
    for ( const item of Menu){
        if(item instanceof Pizza){
            miMenu.push(`$${item.precio} ${item.nombre}: ${item.ingrediente1}, ${item.ingrediente2}, ${item.ingrediente3}, ${item.aderezo}.`);
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

mostrarMenu();

