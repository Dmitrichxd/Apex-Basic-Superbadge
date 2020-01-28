({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    } ,
    
    onPlotMapMarker: function(component,event) {
        var longitude = event.getParam("long");
        var latitude = event.getParam("lat");
        component.set("v.location",[
            {
                Latitude: latitude,
                Longitude: longitude
            } 
        ]);
        console.log(latitude);
        console.log(longitude);
    } ,
})