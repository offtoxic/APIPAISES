var datosPaises

var datosPaises;

function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            datosPaises = paises;
            mostrarDatosMonedas();


        });

}

function mostrarDatosMonedas() {

    for (const pais of datosPaises) {

        var currencies = pais.currencies;

        var keys = Object.keys(currencies);

        for (const key of keys) {

            console.log(currencies[key].name)
        }


    }
}