({
    onBoatClick : function(component, event, helper) {
        console.log('on boat click..');
        var BoatSelectEvt= component.getEvent('BoatSelect');
        var boatId = component.get('v.boat').Id;
        BoatSelectEvt.setParam("boatId", boatId);
        BoatSelectEvt.fire();
        
        //fire the boatSelected Application Event.
        var BoatSelectedAppEvt= $A.get("e.c:BoatSelected");
        var boat = component.get('v.boat');
        BoatSelectedAppEvt.setParams({"boat":boat});
        BoatSelectedAppEvt.fire();
        
        //fire the plotmapMarker Event
        var plotMapMarker = $A.get("e.c:PlotMapMarker");
        // Optional: set some data for the event (also known as event shape)
        // A parameter’s name must match the name attribute
        // of one of the event’s <aura:attribute> tags
        plotMapMarker.setParams({ "lat" : boat.Geolocation__Latitude__s ,"long":boat.Geolocation__Longitude__s, "sObjectId":boat.Id,"label": "map marker" });
        plotMapMarker.fire();
    }
})