({
    doSearch: function(component, event, helper){
        //doSearch();
        console.log('doSearch Invoked...');
        var params = event.getParam('arguments');
        if (params) {
            var boatTypeId = params.boatTypeId;
            //console.log("message: " + message);
            component.set("v.boatTypeId",boatTypeId);
            console.log('Before Calling helper onSearch:'+boatTypeId);
            helper.onSearch(component,boatTypeId);
            //return boatTypeId;
        }
        
    },
    
    doInit : function(component, event, helper) {
        //
        
        var boatType= component.get("v.boatTypeId");
        helper.onSearch(component,boatType);
        
        
        },
    onBoatSelect: function(component, event, helper){
        console.log('Boat selected evt handler from boatsearchResults..');
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId",boatId);
        
    }
})