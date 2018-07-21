({
    onBoatSelected : function(component, event, helper) {
        console.log('Application event handled from BoatDetails onBoatSelected component.');
        var boat = event.getParam("boat");
        console.log('Boat Id'+boat.Id);
        component.set("v.id", boat.Id);  
        component.find("service").reloadRecord();
        
        
        //component.set("v.boat", boat);
        var appEvent = $A.get("e.c:PlotMapMarker");
        // Optional: set some data for the event (also known as event shape)
        // A parameter’s name must match the name attribute
        // of one of the event’s <aura:attribute> tags
        //appEvent.setParams({ "myParam" : myValue });
        appEvent.setParams({  "lat":boat.Geolocation__Latitude__s, "long":boat.Geolocation__Longitude__s, "sObjectId":boat.Id, "label":"Plot the boat on the map." });
        
        appEvent.fire();
        
    },
    onRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            // record is loaded (render other component which needs record data value)
            console.log("Record is loaded successfully.");
        } else if(eventParams.changeType === "CHANGED") {
            // record is changed
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
        var boatReviewsCmp=component.find("boatReviewsid");
        if(typeof BoatReviews != 'undefined'){
            boatReviewsCmp.refresh();
        }
        
        
    },
    onBoatReviewAdded: function(component, event, helper) {
        console.log('Boat Review Added...');
        component.set("v.selectedtabId", "boatreviewtab");
        var boatReviewsCmp=component.find("boatReviewsid");
        boatReviewsCmp.refresh();
        
        
        
    }
})