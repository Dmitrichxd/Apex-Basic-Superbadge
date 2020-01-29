({
    jsLoaded: function (component) {
        component.set("v.jsLoaded", true);
        component.set("v.customMarker", {
            iconUrl: 'resource/PushPin.png',
            iconSize: [48, 48],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
          /*  shadowUrl: '',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]*/
        });
    },

    onPlotMapMarker: function (component, event) {
        var longitude = event.getParam("long");
        var latitude = event.getParam("lat");
        component.set("v.location", {
                latitude: latitude,
                longitude: longitude                        
            });
    },
})