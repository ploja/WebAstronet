const apikey = 'pk.eyJ1IjoiYW5kaWlsb2phIiwiYSI6ImNsN3BkdzMwNDIycWMzd216andoNGkxbTkifQ.SuRUWGtkgT4ymOwV-LghGw';

let map = L.map('map').setView([-2.920700, -79.021150], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

/*
document.getElementById('locations').addEventListener('change', function(e) {
    let coords = e.target.value.split(",");
    console.log(coords);
    map.flyTo(coords, 15);
})*/

function Location(ubi) {
    let coords = ubi.split(",");
    map.flyTo(coords, 14);
}

// ADDING MARKER
let marker_cuenca = L.marker([-2.920700, -79.021150]).addTo(map);
let marker_valle = L.marker([-2.938729, -78.965074]).addTo(map);
let marker_tarqui = L.marker([-3.012697, -79.034653]).addTo(map);
let marker_cumbe = L.marker([-3.086986, -79.011429]).addTo(map);
let marker_giron = L.marker([-3.161213, -79.146500]).addTo(map);
let marker_fernando = L.marker([-3.147568, -79.251701]).addTo(map);

// Add popup message
let template = `
        <h3>Oficina Matriz</h3>
        <div style="text-align:center">
            <img with="150" height="150" src="../static/files/oficina_matriz.png"></img>
            <h5>Autopista Cuenca-Azogues,<br>a una cuadra del Mall del Rio,<br>junto a la gasolinera vista linda.</h5>
        </div>
        `
marker_cuenca.bindPopup(template).openPopup();
marker_tarqui.bindPopup("Tarqui");
marker_cumbe.bindPopup("Cumbe");
marker_giron.bindPopup("Girón");
marker_valle.bindPopup("El Valle");
marker_fernando.bindPopup("San Fernando");

//----------Agregar antenas desde antenas.js-----------------
const antenasDesign = {
    color: '#00c6ff',
    fillColor: '#00c6ff',
    opacity: 0.1,
    radius: 2000,
};

var coberturaAntenas = L.geoJson(antenas, {
    pointToLayer: function(feature, latlng) {
        return L.circle(latlng, antenasDesign);
    }
}).addTo(map);
coberturaAntenas.bindPopup("Cobertura por radioenlace");

//---------Agregar canales de fibra optica desde vias.js--------
var coberturaFibra = L.geoJson(vias, {
    color: "#005565"
}).addTo(map);

//-------leyenda---------------
const legend = L.control.Legend({
    title: "Cobertura",
    collapsed: false,
    symbolWidth: 24,
    opacity: 0.7,
    column: 1,
    legends: [

        {
            label: "_Radio enlace",
            type: "circle",
            radius: 10,
            color: "#00c6ff",
            fillColor: "#00c6ff",
            fillOpacity: 0.2,
            weight: 0.5,
            layers: [coberturaAntenas],
            inactive: false,
        }, {
            label: "_Fibra óptica",
            type: "polyline",
            color: "#005565",
            fillColor: "#005565",
            weight: 3,
            layers: coberturaFibra,
        },
    ]
}).addTo(map);