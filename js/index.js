import { Menu, Pedido, Hamburguesa, Birra, title } from './metaData.js'

document.addEventListener('DOMContentLoaded', e => {
    traerItems();
    recomendacionesChef();
    
    // Inicializamos el pedido. 
    JSON.parse(localStorage.getItem('items')) ? miPedido.renderPedido() : null; 
})

const arraySaludos = ["¡Las mejores hamburguesas","de Mr. Burgui",'para compartir con amigos!'];
const hamburguesas = ["Alemana","Mexicana","Francesa","Americana"];

console.log(...arraySaludos);

function recomendacionesChef(){
    const [,, a,b] = hamburguesas;
    console.log(a,b);
}

const miMenu = new Menu();
const miPedido = new Pedido();

const traerItems = async () => {
    const resp = await fetch(`../json/data.json`)
    const data = await resp.json()
   
    data.forEach((producto) => {
        miMenu.cargarItem(producto);
    })

    miMenu.renderMenu(miPedido);
}

const btVerMiPedido = document.getElementById('verMiPedido');
btVerMiPedido.addEventListener('click', () => {
    miPedido.renderPedido();
})

const btBorrarMiPedido = document.getElementById('borrarMiPedido');
btBorrarMiPedido.addEventListener('click', () => {
    miPedido.borrarPedido();
    Swal.fire({
        title: 'Ups!',
        text: `Se eliminó tu pedido`,
        icon: 'error',
        confirmButtonText: 'Ok'
    })
})

const btEnviarMiPedido = document.getElementById('enviarMiPedido');
btEnviarMiPedido.addEventListener('click', () => {

    if(JSON.parse(localStorage.getItem('items'))){
        miPedido.borrarPedido();
        Toastify({
            text: "¡Tu pedido llegó a la cocina!",
            style: {background: '#48C78E',},
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            offset: {
                x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            }
        }).showToast();
    }else {
        Toastify({
            text: "Tu pedido está vacío",
            style: {background: "#F14668",},
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            offset: {
                x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            }
          }).showToast();
    }
})

