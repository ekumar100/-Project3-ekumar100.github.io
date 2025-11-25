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
        zoom: 10,                   // Feature 1: Custom zoom level
        center: centerLoc,
        mapTypeId: "hybrid",        // Feature 2: Custom map type
        streetViewControl: false    // Feature 3: Remove street view control
    });
    const marker = new google.maps.Marker({
        position: centerLoc,
        map: map,
        title: "Chicago"
    });
}
