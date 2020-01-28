({
	doSearch : function(component, event, helper) {
		var params = event.getParam('arguments');
		helper.onSearch(component, params.boatTypeId);
	},

	init: function(component, event, helper) {
		helper.onSearch(component, '');	
	},

	onBoatSelect: function(component, event, helper) {
		var boatId = event.getParam('boatId');
		component.set("v.selectedBoatId", boatId);
	},

})