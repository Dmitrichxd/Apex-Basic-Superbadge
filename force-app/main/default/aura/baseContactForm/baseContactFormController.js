({
    onContactSearchStarted : function(component, event) {
        var searchingName = event.getParam('searchingName');
		component.set("v.searchingName", searchingName);
    }
})
