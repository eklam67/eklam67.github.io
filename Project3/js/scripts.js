    function initMap() {
        // Map options
        const mapOptions = {
            center: { lat: 33.7490, lng: -84.3880 }, // Example: Atlanta
            zoom: 10,
            mapTypeId: "roadmap",
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: true
        };

        // Create the map
        const map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // ====================================
        // FEATURE 1: Custom Marker
        // ====================================
        const mainMarker = new google.maps.Marker({
            position: { lat: 33.7490, lng: -84.3880 },
            map: map,
            title: "Main Location",
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
        });

        // ====================================
        // FEATURE 2: Info Window
        // ====================================
        const infoWindow = new google.maps.InfoWindow({
            content: "<h3>Welcome!</h3><p>This is the main marker location.</p>"
        });

        mainMarker.addListener("click", () => {
            infoWindow.open(map, mainMarker);
        });

        // ====================================
        // FEATURE 3: Second Marker
        // ====================================
        const secondMarker = new google.maps.Marker({
            position: { lat: 33.753746, lng: -84.386330 }, // Example: another spot in Atlanta
            map: map,
            title: "Second Location"
        });

        // Optional: click event for second marker
        secondMarker.addListener("click", () => {
            alert("This is the second marker!");
        });
    }

    // ===============================
    // QUESTIONS BUTTON EVENT LISTENER
    // ===============================
    document.addEventListener("DOMContentLoaded", () => {
        const questionBtn = document.getElementById("questionButton");

        if (questionBtn) {
            questionBtn.addEventListener("click", () => {
                alert("If you have questions, contact me at:\neklam@cps.edu");
            });
        }
    });    
    window.initMap = initMap;