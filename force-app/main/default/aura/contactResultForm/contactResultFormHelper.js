({
	onSearch: function (component, selectedValue) {
		component.set('v.isLoaded', true);
		let recordsLimit = component.get('v.recordsLimit');
		let contacts = [{}], limittedContacts = [{}];
		var action = component.get('c.getContacts');
		action.setParams({
			searchByName: selectedValue,
		});
		action.setCallback(this, $A.getCallback(function (response) {
			var state = response.getState();
			if (state === 'SUCCESS') {
				contacts = response.getReturnValue();
				console.log(response.getReturnValue());
				console.log(contacts[0]);
				if ( recordsLimit < contacts.length) {
					for (let i = 0; i < recordsLimit; i++) {
						limittedContacts.push(contacts[i]);
					}
					limittedContacts.splice(0,1);
					component.set('v.isListTooLong', true);
				} else {
					limittedContacts = contacts;
					component.set('v.isListTooLong', false);
				}
				component.set('v.contacts', limittedContacts);
				component.set('v.isLoaded', false);
				if (response.getReturnValue().length != 0) {
					component.set('v.emptyContactList', false);
				} else { component.set('v.emptyContactList', true); };
				
			}
			else if (state === 'ERROR') {
				console.log('Failed: ' + JSON.stringify(response.getError()));
				component.set('v.isLoaded', false);
			}
		}));
		$A.enqueueAction(action);
	}
})