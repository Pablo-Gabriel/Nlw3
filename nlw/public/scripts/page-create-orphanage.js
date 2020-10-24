// create map
const map = L.map("mapid").setView([-27.2218739, -49.6435875], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  // add icon Layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos upload
function addPhotoField() {
  // pick up the photos container #images
  const container = document.querySelector("#images");

  // take the container to duplicate .new-images
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Clone the last one image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Check if the field is empty, if yes, do not add a new image container
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // clear the field before adding it to the image container
  input.value = "";

  // add the clone to the container of #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // clean the field
    span.parentNode.children[0].value = "";
    return;
  }

  //delete the field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove the class .active (from the buttons)
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });
  // put the class .active on that clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // update my hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {

  // validate that lat and lng are filled
  // const needsLatAndLng = true;
  // if (needsLatAndLng) {
  //   event.preventDefault()
  //   alert('Selecione um ponto no mapa')
  // }
  const validate = lat
  const validateI = lng
  if ((validate == " ") && validateI == " ") {
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
  
}
