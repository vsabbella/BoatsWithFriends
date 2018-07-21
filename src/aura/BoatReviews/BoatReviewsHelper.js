({
	onInit:function(component,event) {
        console.log('Helpers onInit:');
        var action = component.get("c.getAll");
        action.setParams({ boatId : component.get("v.boat").Id });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                //alert("From server: " + response.getReturnValue());
                //console.log('success'+response.getReturnValue());
                component.set("v.boatReviews", response.getReturnValue());
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
                console.log('incomplete');
            }
            else if (state === "ERROR") {
                console.log('error');
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
        });
        $A.enqueueAction(action);

	}
})