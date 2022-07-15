/*---- Clases y variables ----*/ 
class Menu{
    constructor(){
        this.hamburguesas = [];
        this.birras = [];
        this.arrayMenu = []; 
    }

    cargarHamburguesas(obj){
        this.hamburguesas.push(obj);
    }
    cargarBirra(obj){
        this.birras.push(obj);
    }
    mostrar(){

        for ( const item of this.hamburguesas){
            let container = document.createElement('div')
            container.innerHTML = `<h3> ${item.nombre} $${item.precio} </h3>
                                    <p> ${item.ingred1}, ${item.ingred2}, 
                                    ${item.ingred3}, ${item.aderezo} </p>`;
            document.body.append(container);
        }
        for ( const item of this.birras){
            let container = document.createElement('div')
            container.innerHTML = `<h3> ${item.nombre} $${item.precio} </h3>
                                    <p> ${item.gradAlco} </p>`;
            document.body.append(container);
        }
    }
    mostrarConsola(){

        let mostrar = [];
    
        mostrar.push(`----Hamburguesas------------`);
        this.hamburguesas.forEach((item) => mostrar.push(`$${item.precio} ${item.nombre}: ${item.ingred1}, ${item.ingred2}, ${item.ingred3}, ${item.aderezo}.`));
        
        mostrar.push(`----Birras------------------`);
        this.birras.forEach((item) =>  mostrar.push(`$${item.precio} ${item.nombre}: Grad. Alcoh: ${item.gradAlco}`));
    
        console.log(mostrar.join(`\n`));
    }

    cargarArrayMenu(){
        // Este metodo permite cargar en un array todos los elementos del menu
        this.hamburguesas.forEach( (el) => this.arrayMenu.push(el));
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

    mostrar(){

        let container = document.createElement('div')
        container.innerHTML = `<h3> ---- Su pedido ------------ </h3>`;
        document.body.append(container);

        for ( const item of this.orden){
            let container = document.createElement('div')
            container.innerHTML = `<h4>${item.nombre} $${item.precio} </h4>`;
            document.body.append(container);
        }

        this.calcularCostoTotal();

        let container1 = document.createElement('div')
            container1.innerHTML = `<h3>---- Precio total ------------> $${this.costoTotal}</h3>`;
            document.body.append(container1);
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

const title = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase();

/*---- Instancias ----*/

const miMenu = new Menu();
const miPedido = new Pedido();

miMenu.cargarHamburguesas(new Hamburguesa("Parisina", "Hongos", "Queso Azul", "Cebolla caramelizada", "Barbacoa", 800 ));
miMenu.cargarHamburguesas(new Hamburguesa("Mexicanita", "Palta", "Tomates confitados", "Pimientos asados", "Barbacoa", 850 ));
miMenu.cargarHamburguesas(new Hamburguesa("Argenta", "Rucula", "Tomates", "Huevo", "Alioli", 900 ));
miMenu.cargarHamburguesas(new Hamburguesa("Yanky", "Panceta", "Aros de cebolla", "Cheddar", "Alioli", 900 ));

miMenu.cargarBirra(new Birra("Honey","5%", 200));
miMenu.cargarBirra(new Birra("Trigo","6%", 250));
miMenu.cargarBirra(new Birra("Scottish","7%", 300));
miMenu.cargarBirra(new Birra("Lemon","8%", 350));

miMenu.cargarArrayMenu();

miMenu.mostrarConsola();
miMenu.mostrar();




let it = 'y';
let item = '';

// alert('¡Bienvenido a Mr.Burgui!');

while( it === 'y'){

    do{
        item = title(prompt("¿Que desea pedir? [Seleccione una opción del menú]"));
        cantidad = parseInt(prompt("¿Cuántas unidades desea encargar?"));

    }while(IsValidItem(item,cantidad))

    it = prompt("¿Desea agregar otro item?  [ y / n ]").toLowerCase();
}

miPedido.mostrar();