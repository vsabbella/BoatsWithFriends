({
	onFormSubmit : function(component, event) {
		var boatTypeId = event.getParam("formData").boatTypeId;
        console.log('event.getparams'+boatTypeId);
        //console.log(' bubbled formsubmit event. formData.boatTypeId'+boatTypeId.toString());
        var searchResultsCmp = component.find("searchResultscmp");
        searchResultsCmp.search(boatTypeId);
        
	}
})