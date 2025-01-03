$(document).ready(function() {
    // Function to add markers to the map
    function addMarker(x, y) {
        const marker = $('<div class="marker"></div>');
        marker.css({
            left: x + 'px',
            top: y + 'px'
        });

        // Add click event to show coordinates when marker is clicked
        marker.on('click', function() {
            alert('Marker clicked at position (' + x + ', ' + y + ')');
        });

        // Append the marker to the map container
        $('#markers').append(marker);
    }

    // Handle click on the image to place markers
    $('#map-image').on('click', function(e) {
        const offset = $(this).offset();  // Get the position of the map
        const x = e.pageX - offset.left;  // Calculate the x coordinate relative to the image
        const y = e.pageY - offset.top;   // Calculate the y coordinate relative to the image
        
        addMarker(x, y);  // Call the addMarker function to place the marker
    });
});
