const apikey = 'pk.eyJ1IjoiYW5kaWlsb2phIiwiYSI6ImNsN3BkdzMwNDIycWMzd216andoNGkxbTkifQ.SuRUWGtkgT4ymOwV-LghGw';

let map = L.map('map').setView([-2.920700, -79.021150], 14);

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
    map.flyTo(coords, 16);
}

// ADDING MARKER
let marker_cuenca = L.marker([-2.920700, -79.021150]).addTo(map);
let marker_valle = L.marker([-2.938729, -78.965074]).addTo(map);
let marker_tarqui = L.marker([-3.011998, -79.039572]).addTo(map);
let marker_sinincay = L.marker([-2.851688, -79.014362]).addTo(map);
let marker_feria = L.marker([-2.899794, -79.027040]).addTo(map);
let marker_fernando = L.marker([-3.147568, -79.251701]).addTo(map);

// Add popup message
let info_matriz = `
        <h3 style="text-align:center">Oficina Matriz</h3>
        <div style="text-align:center">
            <img with="150" height="150" src="../static/files/oficina_matriz.png"></img>
            <h5>Autopista Cuenca-Azogues,<br>a 200m del Mall del Rio,<br>junto a la gasolinera vista linda.</h5>
        </div>
        `
let info_feria = `
        <h3 style="text-align:center">Oficina Feria Libre</h3>
        <div style="text-align:center">
            <h5>Av de las americas y <br>calle Ecuador<br>frente almacenes TIA.</h5>
        </div>
        `
let info_sinincay = `
        <h3 style="text-align:center">Oficina Sinincay</h3>
        <div style="text-align:center">
            <h5>Calle Sacerdote Gonzalo V&aacute;squez<br>y Honorato Bravo,<br>detr&aacute;s de la iglesia.</h5>
        </div>
        `
let info_valle = `
        <h3 style="text-align:center">Oficina El Valle</h3>
        <div style="text-align:center">
            <h5>Subida a las Pencas,<br>diagonal al centro de especialidades<br>m&eacute;dicas Medivalle.</h5>
        </div>
        `
let info_tarqui = `
        <h3 style="text-align:center">Oficina Tarqui</h3>
        <div style="text-align:center">
            <h5>V&iacute;a Cuenca-Giron,<br>a una cuadra de<br>la entrada a Tarqui.</h5>
        </div>
        `
let info_fernando = `
        <h3 style="text-align:center">Oficina San Fernando</h3>
        <div style="text-align:center">
            <h5>Calle Jos&eacute; Mari&aacute; Quito<br>y Sim&oacute;n Bol&iacute;var</h5>
        </div>
        `

marker_cuenca.bindPopup(info_matriz).openPopup();
marker_tarqui.bindPopup(info_tarqui);
marker_sinincay.bindPopup(info_sinincay);
marker_feria.bindPopup(info_feria);
marker_valle.bindPopup(info_valle);
marker_fernando.bindPopup(info_fernando);