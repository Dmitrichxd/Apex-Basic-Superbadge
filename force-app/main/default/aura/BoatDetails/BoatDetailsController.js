({
  onBoatSelected: function (component, event, helper) {
    //var service = component.find("service");
    //service.reloadRecord();
    var boat = event.getParam('boat');
    component.set("v.boat", boat);
    component.set("v.id", boat.id); 
  },

  onRecordUpdated: function (component, event, helper) {
    var BRcmp = component.find('BRcmp');
    BRcmp.refresh();
  },

  onBoatReviewAdded: function (component, event, helper) {
    component.find("tabs").set("v.selectedTabId", "boatreviewtab");
    var BRcmp = component.find('BRcmp');
    BRcmp.refresh();
  },
})