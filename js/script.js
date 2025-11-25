document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("questionBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("If you have questions, contact me at:\nyouremail@example.com");
        });
    }
});
function initMap() {
    const centerLoc = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,                   //Custom zoom level
        center: centerLoc,
        mapTypeId: "hybrid",        // Custom map type
        streetViewControl: false    //Remove street view control
    });
    const marker = new google.maps.Marker({
        position: centerLoc,
        map: map,
        title: "Chicago"
    });
// Second marker with info window
const secondMarkerLoc = { lat: 41.8916, lng: -87.6079 };
const secondMarker = new google.maps.Marker({
    position: secondMarkerLoc,
    map: map,
    title: "Second Marker"
});

const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Second Location</h3><p>This is another point of interest!</p>"
});

secondMarker.addListener("click", () => {
    infoWindow.open(map, secondMarker);
});
}



