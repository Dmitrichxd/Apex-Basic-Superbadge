({
	onFormSubmit : function(component, event, helper) {
		var value = event.getParam('formData');
		component.set('v.boatTypeId', value.boatTypeId);
		var BSRcmp = component.find("BSR");
		var boatTypeId = component.get('v.boatTypeId');
		BSRcmp.search(boatTypeId);
	},
})