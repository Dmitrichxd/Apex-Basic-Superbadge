({
    contactClose: function (component, event, helper) {
        component.find("overlayLib").notifyClose();
    },

    contactEdit: function (component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.contact.Id")
        });
        editRecordEvent.fire();
    },

    contactView: function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": component.get("v.contact.Id"),
          "slideDevName": "detail"
        });
        navEvt.fire();
    },
})
