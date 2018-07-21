({
    onFullDetails: function(component, event, helper) {
        console.log('onFullDetails');
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams({
                "recordId": component.get("boat").Id,
                "slideDevName": "related"
            });
            navEvt.fire();
        }
        
    },
    doInit: function(component, event, helper){
        if( $A.get("e.force:navigateToSObject"))
           component.set("showFullDetailsButton",true);
    }
})