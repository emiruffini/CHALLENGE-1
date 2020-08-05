/* SCRIPT FORM*/

var btn = document.querySelector('#btn1')

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


fetch(`https://apipetshop.herokuapp.com/api/articulos`)
    .then(response => response.json())
    .then(dataJSON => {
        data = dataJSON.response
        selectData(data)

        selectProduct(data)
    })


function selectData(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].tipo === "Medicamento" ? app.pharmacy.push(array[i]) : app.toys.push(array[i])
    }
}



var app = new Vue({
    el: "#app",
    data: {
        pharmacy: [],
        toys: [],
        product: []
    }
})



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


function buyBtn() {
    var buy = document.querySelector('#btn2')
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}