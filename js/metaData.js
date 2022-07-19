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
    IsValidItem(menu, item, cantidad){

        if(menu.arrayMenu.some( (el) => el.nombre === item) && (cantidad <= 10 && cantidad >= 1)){
            item = menu.arrayMenu.find( (el) => el.nombre === item);
            this.cargarPedido(item,cantidad);
            return false;
        }
        else{
            alert('¡Ingrese un item o cantidad validos!')
            return true;
        }
    }
}   

class Hamburguesa{
    constructor(id, nombre, ingred1, ingred2, ingred3, aderezo, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingred1 = ingred1;
        this.ingred2 = ingred2;
        this.ingred3 = ingred3;
        this.aderezo = aderezo;
        this.precio = precio;
    }
}

class Birra{
    constructor(id, nombre, gradAlco, precio){
        this.id = id;
        this.nombre = nombre;
        this.gradAlco = gradAlco;
        this.precio = precio;
    }
}

const title = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase();

export { Menu, Pedido, Hamburguesa, Birra, title}