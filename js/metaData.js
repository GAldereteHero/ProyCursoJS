const title = (word) => word[0].toUpperCase() + word.substring(1).toLowerCase();

class Hamburguesa {
  constructor(id, nombre, ingred1, ingred2, ingred3, aderezo, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.ingred1 = ingred1;
    this.ingred2 = ingred2;
    this.ingred3 = ingred3;
    this.aderezo = aderezo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class Birra {
  constructor(id, nombre, gradAlco, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.gradAlco = gradAlco;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class Pedido {
  constructor() {
    this.orden = [];
    this.costoTotal = 0;
  }

  // cargarPedido(obj, cantidad) {
  //   for (let index = 1; index <= cantidad; index++) {
  //     this.orden.push(obj);
  //   }

  // }

  calcularCostoTotal() {
    let itemsSessionStorage = JSON.parse(sessionStorage.getItem('items'));
    this.costoTotal = itemsSessionStorage.reduce((acu, el) => acu + el.precio, 0);
  }

  renderPedido() {

    let contMiPedido = document.getElementById('contPedido');
    contMiPedido.innerHTML = '';
    let contPrecioTotal = document.getElementById('precioTotal');
    let itemsSessionStorage = JSON.parse(sessionStorage.getItem('items'));
    let count = 1;
    
    itemsSessionStorage.forEach((el) => {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
            <th>${count}</th>
            <td>${el.nombre}</td>
            <td>$ ${el.precio}</td>
            <td>${el.cantidad}</td>
            <td>$ ${el.precio * el.cantidad} </td>
          `;
      contMiPedido.appendChild(newRow);
      count += 1;
    })

    this.calcularCostoTotal();
    contPrecioTotal.innerText = `$ ${this.costoTotal}`;

  }
}

class Menu {
  constructor() {
    this.arrayMenu = [];
  }

  cargarItem(obj) {
    this.arrayMenu.push(obj);
  }

  renderMenu = (miPedido) => {
    const contBurguers = document.getElementById('Burguers');
    const contBirras = document.getElementById('Birras');

    this.arrayMenu.forEach((elemento) => {
      if (elemento.id[0] === 'h') {
        const div = document.createElement('div');
        div.className = 'column';
        div.innerHTML +=
          ` <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="./img/${elemento.id}.png" alt="Hamburguesa">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">${elemento.nombre}</p>
                    </div>
                    <div class="media-right">
                      <p class="title is-4">$ ${elemento.precio}</p>
                    </div>
                  </div>
                  <div class="content">
                    <p class="">${elemento.ingred1}, ${elemento.ingred2}, ${elemento.ingred3}, ${elemento.aderezo}.</p>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="card-footer-item">
                    <div class="button is-warning" id="${elemento.id}burguer">Añadir</div>
                  </div> 
                </div>
            </div>`;

        contBurguers.appendChild(div);

        const boton = document.getElementById(`${elemento.id}burguer`);

        boton.addEventListener('click', () => {

          let listaItemsPedido;
          let itemsSessionStorage = JSON.parse(sessionStorage.getItem('items'));

          if (itemsSessionStorage) {
            listaItemsPedido = itemsSessionStorage;
          } else {
            listaItemsPedido = [];
          }

          listaItemsPedido.push(elemento);

          sessionStorage.setItem("items", JSON.stringify(listaItemsPedido));
          
          swal(`Se agregó tu burguer ${elemento.nombre}`,"","success");
          miPedido.renderPedido();
        })

      } else if (elemento.id[0] === 'b') {
        const div = document.createElement('div');
        div.className = 'column';
        div.innerHTML += `
        <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="./img/${elemento.id}.png" alt="Cerveza">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${elemento.nombre}</p>
                  <p class="">Grad. Alcoh.: ${elemento.gradAlco}</p>
                </div>
                <div class="media-content">
                  <p class="title is-4">$ ${elemento.precio}</p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <div class="button is-warning" id="${elemento.id}birra">Añadir</div>
              </div> 
            </div>
          </div>`;
        contBirras.appendChild(div);

        const boton = document.getElementById(`${elemento.id}birra`);

        boton.addEventListener('click', () => {
          
          let listaItemsPedido;
          let itemsSessionStorage = JSON.parse(sessionStorage.getItem('items'));

          if (itemsSessionStorage) {
            listaItemsPedido = itemsSessionStorage;
          } else {
            listaItemsPedido = [];
          }

          listaItemsPedido.push(elemento);

          sessionStorage.setItem("items", JSON.stringify(listaItemsPedido));

          swal(`Se agregó tu birra ${elemento.nombre}`,"","success");
          miPedido.renderPedido();
        })
      }
    })
  }
}

export { Hamburguesa, Birra, title, Pedido, Menu}