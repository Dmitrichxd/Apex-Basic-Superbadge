({
	onSearch: function(component, selectedValue) {
        var action = component.get('c.getBoats');
		action.setParams({ boatTypeId : selectedValue });
		action.setCallback(this, $A.getCallback(function(response) {
			var state = response.getState();
			if (state === 'SUCCESS') {
				component.set('v.boats',response.getReturnValue());
				if (response.getReturnValue().length != 0) {
					component.set('v.emptyBoatList', false);
				} else {component.set('v.emptyBoatList', true);};
			}
			else  if (state === 'ERROR'){
				console.log('Failed: ' + JSON.stringify(response.getError()));
			}
		}));
		$A.enqueueAction(action); 
    }
})