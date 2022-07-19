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
    mostrar = () => {
        const contBurguers = document.getElementById('Burguers');
        const contBirras = document.getElementById('Birras');
    
        this.hamburguesas.forEach( (elemento)=> {
            const div = document.createElement('div');
            div.innerHTML += `<div class="column is-half is-offset-one-fifth">
            <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="column">
                        <div class="column">
                          <p class="title is-4">${elemento.nombre} $${elemento.precio}</p>
                        </div>
                        <div class="column">
                          <p class="subtitle is-6">${elemento.ingred1}, ${elemento.ingred2}, ${elemento.ingred3}, ${elemento.aderezo}.</p>
                        </div>
                        <div class="columns is-mobile">
                          <div class="column is-6"></div>
                          <div class="column is-2"><div class="button is-warning">-</div></div>
                          <div class="column is-2"><input class="input is-rounded is-small " type="text" placeholder="0"></div>
                          <div class="column is-2"><div class="button is-warning">+</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>`;
            contBurguers.appendChild(div);
        })

        this.birras.forEach( (elemento)=> {
            const div = document.createElement('div');
            div.innerHTML += `<div class="column is-half is-offset-one-fifth">
            <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="column">
                        <div class="column">
                          <p class="title is-4">${elemento.nombre} $${elemento.precio}</p>
                        </div>
                        <div class="column">
                          <p class="subtitle is-6"> Graduación Alcoh.: ${elemento.gradAlco}.</p>
                        </div>
                        <div class="columns is-mobile">
                          <div class="column is-6"></div>
                          <div class="column is-2"><div class="button is-warning">-</div></div>
                          <div class="column is-2"><input class="input is-rounded is-small " type="text" placeholder="0"></div>
                          <div class="column is-2"><div class="button is-warning">+</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>`;
            contBirras.appendChild(div);
        })
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