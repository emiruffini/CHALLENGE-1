/* SCRIPT FORM*/

var btn = document.querySelector('#btn1') //Boton enviar formulario

//Con esta funcion comprobamos que los campos del formulario este completo.
function checkform() {
    var f = document.forms["form"].elements
    console.log(f)
    var cansubmit = true

    for (var i = 0; i < f.length; i++) {
        if (f[i].tagName == "INPUT") {
            if (f[i].value.length == 0) {
                cansubmit = false
            }
        }
    }

    const varx = cansubmit ? true : false

    return varx
}

//Alerta al hacer click en el boton enviar del form
if (btn != null) {
    btn.addEventListener('click', e => {
        const tipo = checkform() ? 'success' : 'warning'
        const mensaje = checkform() ? 'Gracias por contactarnos, ! En breve nos comunicaremos !' : 'Porfavor, ¡ Complete todos los campos !'
        const cancel = checkform() ? false : true
        Swal.fire({
            title: mensaje,
            icon: tipo,
            heightAuto: false,
            allowOutsideClick: false,
            reverseButtons: true,
            padding: '3em',
            showCancelButton: cancel,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Volver a contacto',
            confirmButtonText: '<a href="index.html">Ir al Inicio</a>'

        })

    })
}



/*PHARMACY*/

// Pedido a la api para obtener los articulos
fetch(`https://apipetshop.herokuapp.com/api/articulos`)
    .then(response => response.json())
    .then(dataJSON => {
        data = dataJSON.response
        selectData(data)

        selectProduct(data)
    })

//Función para determinar el tipo del producto y mostrarlo en su correspondiente pagina
function selectData(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].tipo === "Medicamento" ? app.pharmacy.push(array[i]) : app.toys.push(array[i])
    }
}


//Uso de vue para renderizado
var app = new Vue({
    el: "#app",
    data: {
        pharmacy: [],
        toys: [],
        product: []
    }
})


//Con esta función podemos renderizar el producto seleccionado para comprar en una pagina aparte
function selectProduct(data) {
    const product = getParameterByName('prod')
    if (product != null) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]._id == product) {
                app.product.splice(0, 1, data[i])
            }
        }
    }

}

buyBtn()

//Esta funcion nos brinda una alerta al pulsar comprar en algun producto
function buyBtn() {
    var buy = document.querySelector('#btn2') //Boton comprar
    if (buy != null) {
        buy.addEventListener('click', e => {
            Swal.fire({
                title: '¿Usted quiere comprar este producto?',
                text: "Una vez confirmado, el mismo será reservado",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, ¡Lo Quiero!',
                cancelButtonText: 'No lo quiero :(',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        '¡ Comprado !',
                        'El producto ha sido reservado para retirar en nuestra tienda',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire(
                        'Compra cancelada',
                        'Lo esperamos la próxima vez :)',
                        'error'
                    )
                }
            })

        })
    }


}

// Esta funcion nos brida el id del producto a mostrar pasado por la URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}