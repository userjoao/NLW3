//create map
const map = L.map('mapid').setView([-21.3102621,-46.7109814], 18);


//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,69],
    iconAnchor:[29,68],

});

let marker;

//create and add marker
map.on('click',(event)=>{
    const lat= event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

    //remove icon
    marker &&  map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng],{ icon })
    .addTo(map);
})


//adicionar o campo de fotos
function addPhotoField(){
    const container=document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);
    const input = newFieldContainer.children[0];
    if(input.value == ""){
        return;
    };
    input.value="";
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length < 2){
        //limpar o valor
        span.parentNode.children[0].value=""
        return;
    }

    //deletar o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){

    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active');
    });
    //colocar a class .active
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value ;


}