({
    doInit: function (component, event, helper) {
        helper.onInit(component, event, helper);

    },

    onSave: function (component, event, helper) {
        component.find("service").saveRecord(function (saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state ===
                "DRAFT") {
                var resultsToast = $A.get("e.force:showToast");
                if (resultsToast) {
                    resultsToast.setParams({
                        "title": "Success!",
                        "message": "The review was saved."
                    });
                    resultsToast.fire();
                }
                else { alert('Boat Review Created'); }
            }
            else if (saveResult.state === "ERROR") {
                var errMsg = '';
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                component.set("v.recordError", errMsg);
            }
            else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: '
                    + JSON.stringify(saveResult.error));
            }
            component.getEvent('BoatReviewAdded').fire();
            helper.onInit(component, event, helper);
        });
    },

    onRecordUpdated: function (component, event, helper) {
        var eventParams = event.getParams();
        if (eventParams.changeType === "CHANGED") {
            var saveResultsToast = $A.get("e.force:showToast");
            if (saveResultsToast != 'undefined') {
                saveResultsToast.setParams({
                    "title": "Saved",
                    "message": "Boat Review Saved"
                });
                saveResultsToast.fire();
            }
            else {
                alert('Boat Review Saved');
            }
        }
    }

})