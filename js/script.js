/* SCRIPT FORM*/

var btn = document.querySelector('#btn1')

/* function checkform() {
    var f = document.forms["form"].elements;
    console.log(f)
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].tagName == "INPUT") {
            if (f[i].value.length == 0) {
                cansubmit = false
            }
        }
    }

    document.getElementById('btn1').disabled = !cansubmit;
} */

if (btn != null) {
    btn.addEventListener('click', e => {
        swal({
                title: "Usted presiono el boton enviar",
                text: "!Verifique que todos los campos esten completos!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("! Formulario enviado !", {
                        icon: "success",
                    });
                }
            });
    })
}

/* checkform() */


/*PHARMACY*/


fetch(`https://apipetshop.herokuapp.com/api/articulos`)
    .then(response => response.json())
    .then(dataJSON => {
        data = dataJSON.response
        selectData(data)
        console.log(data)
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
        toys: []
    }
})