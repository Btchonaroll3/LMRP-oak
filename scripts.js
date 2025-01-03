// Initialize the map
var map = L.map('map', {
    center: [0, 0],  // Initial center position (adjust to your map's center)
    zoom: 3,  // Initial zoom level
    minZoom: 1,  // Minimum zoom level
    maxZoom: 5,  // Maximum zoom level
    crs: L.CRS.Simple  // Use a simple CRS for images (not lat/lng-based)
});

// Set the map image as the base layer
var imageUrl = 'images/housing.jpg';  // Make sure your image is in the 'images' folder
var imageBounds = [[0, 0], [1000, 1000]];  // Adjust the bounds based on the image dimensions

L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Allow users to place markers by clicking on the map
var markersLayer = L.layerGroup().addTo(map);

map.on('click', function(e) {
    var latlng = e.latlng;
    var marker = L.circleMarker(latlng, {
        radius: 10,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.8
    }).addTo(markersLayer);

    // Add a popup to each marker
    marker.bindPopup("Marker placed at: " + latlng.lat.toFixed(2) + ", " + latlng.lng.toFixed(2)).openPopup();
});
