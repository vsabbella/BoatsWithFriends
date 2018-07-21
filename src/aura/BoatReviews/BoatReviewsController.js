({
    doInit : function(cmp, event, helper){
        helper.onInit(cmp, event);
    },
    onUserInfoClick:function(component,event,helper){
        //console.log('hyperlink click:'+event.currentTarget.getAttribute('data-userid'));
        var userId = event.currentTarget.getAttribute('data-userid');
        var navEvt = $A.get("e.force:navigateToSObject");
        console.log('navEvt'+navEvt);
        if(navEvt){
            navEvt.setParams({
                "recordId" : userId,
            });
            navEvt.fire();
        }
        
        
    },
    onBoatChange:function(component,event,helper){
        helper.onInit(cmp, event);
    }
   
})