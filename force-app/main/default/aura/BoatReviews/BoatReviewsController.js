({
    doInit: function (component, event, helper) {
        helper.onInit(component);
    },

    onUserInfoClick: function (component, event, helper) {
        var userid = event.currentTarget.dataset.userid;
               
        var navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt) {
            navEvt.setParams({
                "recordId": userid,
                "slideDevName": "detail"
            });
            navEvt.fire();
        }
    }
})