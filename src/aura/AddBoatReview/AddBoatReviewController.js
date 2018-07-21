({
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
    },
    doInit:function(component, event, helper) {
        console.log('on Init...');
        helper.onInit(component, event);
    },
    onSave: function(component, event, helper){
         console.log('on Save...');
         var boat = component.get("v.boat");
         var BoatReviewAddedEvent = component.getEvent("BoatReviewAdded");
         
         
         console.log('BoatReviewAddedEvent'+BoatReviewAddedEvent);
         
         component.find("service").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                        });
                        resultsToast.fire();
                    }
                    else{
                        alert("The record was saved.");
                        
                    }
                    BoatReviewAddedEvent.fire();

                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving Boat Review, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
               component.set("v.boat",boat);
               helper.onInit(component, event);
               
               //BoatReviewAddedEvent.fire();             
            });
    }
})