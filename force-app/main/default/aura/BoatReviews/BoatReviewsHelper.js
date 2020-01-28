({
    onInit: function (component) {
        var action = component.get('c.getAll');
        action.setParams({ boatId : component.get('v.boat.Id') });

        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.boatReviews', response.getReturnValue());
                if (response.getReturnValue().length != 0) {
					component.set('v.emptyBoatTypeList', false);
                } else {component.set('v.emptyBoatTypeList', true);};
            }
            else if (state === 'ERROR') {
                console.log('Failed: ' + JSON.stringify(response.getError()));
            }
        }));
        $A.enqueueAction(action);
    }
})