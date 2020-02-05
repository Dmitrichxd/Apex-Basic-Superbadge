({
    handleKeyUp: function (component, event) {
        var isEnterKey = event.keyCode === 13;
        var searchingContact = component.find('enter-search').get('v.value');
        if (isEnterKey) {
            var searchingName = component.getEvent("contactSearchStarted");
            searchingName.setParams({ "searchingName": searchingContact });
            searchingName.fire();
        }
    },

    searchClick: function (component, event) {
        var searchingContact = component.find('enter-search').get('v.value');
        var searchingName = component.getEvent("contactSearchStarted");
        searchingName.setParams({ "searchingName": searchingContact });
        searchingName.fire();
    }
});
