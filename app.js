//Localização GERAL
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
}

function successCallback(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;

    // Chamada para API de Geocodificação (Google Maps)
    let apiKey = "AIzaSyAVOatMQNAi9OCPXkjwPDi5Off6CStrorM"; // Insira sua chave da API do Google Maps
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                let address = data.results[0].address_components;
                let rua = "", numero = "", bairro = "", cidade = "", estado = "", cep = "";

                address.forEach(component => {
                    if (component.types.includes("route")) {
                        rua = component.long_name;
                    }
                    if (component.types.includes("street_number")) {
                        numero = component.long_name;
                    }
                    if (component.types.includes("sublocality") || component.types.includes("political")) {
                        bairro = component.long_name;
                    }
                    if (component.types.includes("administrative_area_level_2")) {
                        cidade = component.long_name;
                    }
                    if (component.types.includes("administrative_area_level_1")) {
                        estado = component.short_name;
                    }
                    if (component.types.includes("postal_code")) {
                        cep = component.long_name;
                    }
                });

                // Preenchendo os campos do formulário
                document.getElementById("local").value = `${cidade} - ${estado}`;
                document.getElementById("endereco").value = `${rua}, ${numero} - ${bairro}`;
                document.getElementById("latidude").value = latidude;
                document.getElementById("longitude").value = longitude;

            } else {
                alert("Endereço não encontrado.");
            }
        })
        .catch(error => console.log("Erro ao obter endereço: ", error));
}

function errorCallback(error) {
    alert("Erro ao obter localização: " + error.message);
}
