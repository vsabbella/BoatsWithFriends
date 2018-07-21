({
	onInit: function(component,event) {
        console.log('Helper onInit..');
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                console.log('Call back ..');
                var rec = component.get("v.boatReview");
                var boatId = component.get("v.boat").Id;
                  rec.Boat__c = boatId;
                  component.set('v.boatReview',rec);  
                
                //rec.Boat__c = boatId;
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                else{
                  console.log('No Error. Re initialize attributes..');  
                  var boatId = component.get("v.boat").Id;
                  rec.Boat__c = boatId;
                  component.set('v.boatReview',rec);  
                }
                console.log("Record template initialized: " + rec.sobjectType);
            })
        );
	}
})