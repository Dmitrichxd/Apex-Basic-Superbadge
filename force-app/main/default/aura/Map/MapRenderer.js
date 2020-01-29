({
    rerender: function (component) {

        var nodes = this.superRerender();

        var location = component.get('v.location');
        var pinIcon = L.icon({
            iconUrl: '/resource/Icons/IconsLand/PNG/Centered/48x48/MapMarker_Ball_Right_Blue.png',
            iconSize: [48, 48], // size of the icon
            //iconAnchor: [0, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        if (!location) {

        } else {
            // If the Leaflet library is not yet loaded, we can't draw the map: return
            if (!window.L) {
                return nodes;
            }

            // Draw the map if it hasn't been drawn yet
            if (!component.map) {
                var mapElement = component.find("map").getElement();
                component.map = L.map(mapElement, { zoomControl: true }).setView([42.356045, -71.085650], 13);
                component.map.scrollWheelZoom.disable();
                window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles © Esri' }).addTo(component.map);
            }



            if (location && location.latitude && location.longitude) {
                var latLng = [location.latitude, location.longitude];
                if (component.marker) {
                    component.marker.setLatLng(latLng);
                } else {
                    component.marker = window.L.marker(latLng, { icon: pinIcon });
                    component.marker.addTo(component.map);
                }
                component.map.setView(latLng);
            }

            return nodes;
        }

    }
})