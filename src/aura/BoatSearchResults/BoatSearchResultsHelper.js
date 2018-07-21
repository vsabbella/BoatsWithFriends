({
	onSearch : function(component,boatType) {
        console.log('From onSearch:'+boatType);
        var callback =   function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                //alert("From server: " + response.getReturnValue());
                console.log("BoatSearch Results"+response.getReturnValue());
                component.set("v.boats",response.getReturnValue());
                
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
           }
        
        
        var action = component.get("c.getBoats");
        action.setParams({"boatTypeId" : boatType});
        action.setCallback(this, callback);
        
        $A.enqueueAction(action);

	}
})