({  init: function (component, event, helper) {
    var action = component.get('c.getOptionsList');
    action.setCallback(this, $A.getCallback(function(response) {
        var state = response.getState();
        if (state === 'SUCCESS') {
            component.set('v.boatTypes', response.getReturnValue());
            var boatTypes = response.getReturnValue();
            var options = new Array();
            for (var key in boatTypes) {
                options.push(boatTypes[key]['Name']);
            }
            component.set('v.options',options);
        }
        else  if (state === 'ERROR'){
            console.log('Failed: ' + JSON.stringify(response.getError()));
        }
    }));
    $A.enqueueAction(action); 
    if (!$A.util.isEmpty($A.get('event.force:createRecord'))) {
        component.set('v.isNewButtonVisible', true);
    };
},
  
  createRecord : function (component, event, helper) {
      var boatTypeName = component.get('v.selectedValue');
      var boatId;
      var boatTypes = component.get('v.boatTypes');
      console.log(JSON.stringify(boatTypes));
      for (var key in boatTypes) {
          if (boatTypes[key]['Name'] == boatTypeName) {
              boatId = boatTypes[key]['Id'];
          };
      };
      console.log(boatId);
      if (boatTypeName != 'All Types') {
          var createRecordEvent = $A.get('e.force:createRecord');
          createRecordEvent.setParams({
              'entityApiName': 'Boat__c',
              'defaultFieldValues': {
                  'BoatType__c' : boatId,
              } 
          });
          createRecordEvent.fire();
      };
  },
  
  onFormSubmit : function (component, event, helper) {
      var boatEvent = component.getEvent("formSubmit");
      var boatTypeId = component.get("v.selectedValue");
      boatEvent.setParams({"formData":
                    {"boatTypeId" : boatTypeId}
      });
      boatEvent.fire();
  } 
 })