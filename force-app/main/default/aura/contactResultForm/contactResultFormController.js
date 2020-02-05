({
	init: function (component, event, helper) {
		let searchingName = component.get('v.searchingName');
		helper.onSearch(component, searchingName);
	},

	makeContactListLonger: function (component, event, helper) {
		let searchingName = component.get('v.searchingName');
		let recordsLimit = component.get('v.recordsLimit') + 5;
		component.set('v.recordsLimit', recordsLimit);
		helper.onSearch(component, searchingName);
	}
})
