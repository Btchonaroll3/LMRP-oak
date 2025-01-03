// Initialize the map with Leaflet
var map = L.map('map', {
    center: [0, 0],  // Adjust this to center the map (lat, lon)
    zoom: 3,  // Zoom level (adjust as needed)
    minZoom: 1,  // Minimum zoom level
    maxZoom: 5,  // Maximum zoom level
    crs: L.CRS.Simple  // Use a simple coordinate reference system for image maps
});

// Define the image overlay (your housing.jpg image)
var imageUrl = 'images/housing.jpg';  // Path to your image (make sure the path is correct)
var imageBounds = [[0, 0], [1000, 1000]];  // Adjust these bounds based on the image size (pixels)

// Add the image as an overlay
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Allow users to place markers on the map
var markersLayer = L.layerGroup().addTo(map);

map.on('click', function(e) {
    var latlng = e.latlng;
    // Place a marker when the map is clicked
    var marker = L.circleMarker(latlng, {
        radius: 10,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.8
    }).addTo(markersLayer);

    // Add a popup with coordinates
    marker.bindPopup("Marker placed at: " + latlng.lat.toFixed(2) + ", " + latlng.lng.toFixed(2)).openPopup();
});
