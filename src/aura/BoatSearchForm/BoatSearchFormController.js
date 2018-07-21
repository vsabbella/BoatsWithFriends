({
    loadOptions: function (component, event, helper) {
        
        // Load the options
        
        var opts = [
            { value: "", label: "All Types"},
            //{ value: "Green", label: "Green" },
            //{ value: "Blue", label: "Blue" }
        ];
            
            var getBoatypesAction = component.get('c.getBoatTypes');
            getBoatypesAction.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
            // Alert the user with the value returned 
            // from the server
            //alert("From server: " + response.getReturnValue());
            console.log('-->'+opts);
            //console.log('Return value:'+ instanceOf(response.getReturnValue()));
            
            //var boatTypes= response.getReturnValue().split(',');
            response.getReturnValue().forEach(function(boatType){
            //console.log(''+ele);
            opts.push({value:boatType.Id, label:boatType.Name});
            });          
            
            console.log(''+opts);
            component.set("v.options", opts);
            
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
 });


component.set("v.options", opts);
component.set("v.selectedValue", "All Types");


// display or hide the new button
if(true || $A.get('e.force:createRecord')) {
    component.set('v.showNewButton', true);
}

$A.enqueueAction(getBoatypesAction);



},
    onFormSubmit: function (cmp, event, helper) {       
        
        var FormSubmitEvent = cmp.getEvent("FormSubmit");
        var boatTypeId = cmp.find("mySelect").get("v.value");
        //var searchAction = 
        FormSubmitEvent.setParams({"formData":{"boatTypeId":boatTypeId}});
        console.log('firing the formsubmitEvent.. boatTypeId:'+boatTypeId);
        console.log('formsubmitEvent: get param:'+FormSubmitEvent.getParam("formData").boatTypeId);
        FormSubmitEvent.fire();
        var callme= cmp.get("c.callMe");
        console.log("cmp:"+cmp, "callme"+callme);
        
    },
        handleClick:function(cmp, event, helper){
            console.log('handleClick::');
            var selectedButtonLabel = event.getSource().get("v.label");
            //alert("Button label: " + selectedButtonLabel);
            var compEvent = cmp.getEvent("newBoatEvent");
            compEvent.fire();
            /**/
            
        },
            createNewBoat:function(cmp, event, helper){
                console.log('createNewBoat event handler.');
                var boatTypeId = cmp.find("mySelect").get("v.value");
            var createNewBoatEvent = $A.get("e.force:createRecord");
            if(createNewBoatEvent){
                createNewBoatEvent.setParams({
                    "entityApiName": "Boat__c",
                    "defaultFieldValues": {
                        //'Phone' : '415-240-6590',
                        'BoatType__c' : boatTypeId
                    }
                });
                createNewBoatEvent.fire(); 
            }
            },    
            callMe:function(){
                console.log('call Me invoked.');
            }
})