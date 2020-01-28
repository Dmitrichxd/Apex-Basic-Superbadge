({
    onBoatClick: function (component, event, helper) {
       var BoatSelected = $A.get("e.c:BoatSelected");        ;
        var boat = component.get("v.boat");
        BoatSelected.setParams({ "boat": boat });
        BoatSelected.fire();

        var BoatSelect = component.getEvent("BoatSelect");
        var boatId = component.get("v.boat.Id");
        BoatSelect.setParams({ "boatId": boatId });
        BoatSelect.fire();
        var PlotMapMarker = $A.get("e.c:PlotMapMarker");
        PlotMapMarker.setParams({ 
            "lat": boat.Geolocation__Latitude__s,
            "long": boat.Geolocation__Longitude__s,
            "sObjectId": boat.Id,
            "label":boat.Name
        });
        PlotMapMarker.fire();
    },

})