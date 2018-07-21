({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(cmp,event,helper){
        var lat = event.getParam("lat");
        var long = event.getParam("long");
        cmp.set("v.location",{"lat":lat, "long":long});
    }
})