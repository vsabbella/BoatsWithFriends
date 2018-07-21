({
    scriptsLoaded : function(component, event, helper) {
        console.log('afterScriptsLoaded invoked.');
        // var domEl = [get dom element of rating area]
        var domEl = component.find("ratingarea").getElement();
        // var currentRating = [get value attribute of component]
        var currentRating = component.get("v.value");
        // var readOnly = [get readonly attribute of component]
          var readOnly = component.get("v.readonly");
        
        var maxRating = 5;
        
        var callback = function(rating) {
            component.set('v.value',rating);
        }
        component.ratingObj = rating(domEl,currentRating,maxRating,callback,readOnly); 
    },
    
    onValueChange: function(component,event,helper) {
        console.log('onValueChange invoked....');
        if (component.ratingObj) {
            var value = component.get('v.value');
            component.ratingObj.setRating(value,false);
        }
    }
    
})