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
        swal(mensaje, {
            icon: tipo,
        });

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


            swal({
                    title: "¿ Desea comprar este producto ?",
                    text: "Una vez confirmada la compra, se le reservará el mismo",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("¡Muchas Gracias por comprar este producto!", {
                            icon: "success",
                        });
                    } else {
                        swal("¡El producto no ha sido reservado!", {
                            icon: "error",
                        });
                    }
                });

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