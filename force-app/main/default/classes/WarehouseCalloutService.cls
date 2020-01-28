public with sharing class WarehouseCalloutService {
    
  /*  public class productWrapper {
        public string externalID {get; set;}
        public boolean replacement {get; set;}
        public integer quantity {get; set;}
        public string name {get; set;}
        public integer maintenanceperiod {get; set;}
        public integer lifespan {get; set;}
        public integer cost {get; set;}
        public integer sku {get; set;}
    } */
    
    @future(callout=true)
    public static void runWarehouseEquipmentSync() {
        //ToDo: complete this method to make the callout (using @future) to the
        //      REST endpoint and update equipment on hand.
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-superbadge-apex.herokuapp.com/equipment');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        List<Product2> equipmentListToUpdate = new List<Product2>();
        if (response.getStatusCode() == 200) {
            List<Object> results = (List<Object>)JSON.deserializeUntyped(response.getBody());
            for (Object result: results) {
                Product2 equipment = new Product2();
                Map<String,Object> checkingData = (Map<String,Object>)result;
                //System.debug(checkingData);
                equipment.Replacement_Part__c = (Boolean)checkingData.get('replacement');
                equipment.Current_Inventory__c = (Integer)checkingData.get('quantity');
                equipment.Name = (String)checkingData.get('name');
                equipment.Maintenance_Cycle__c = (Integer)checkingData.get('maintenanceperiod');
                equipment.Lifespan_Months__c = (Integer)checkingData.get('lifespan');
                equipment.Cost__c = (Integer)checkingData.get('cost');
                equipment.Warehouse_SKU__c = (String)checkingData.get('sku');
                equipmentListToUpdate.add(equipment);
            }  
        }
        if (equipmentListToUpdate.size() > 0) {
            System.debug('Received the following data:');
            for (Product2 data: equipmentListToUpdate) {
                System.debug(data);
            }
            Schema.SObjectField exID = Product2.Fields.Warehouse_SKU__c;
            Database.UpsertResult [] cr = Database.upsert(equipmentListToUpdate, exID, true);
          /*  for (Database.UpsertResult sr : cr) {
            if (sr.isSuccess()) {
            }
            else {                
                for(Database.Error err : sr.getErrors()) {
                    System.debug('error has occurred.' + err.getStatusCode() + ': ' + err.getMessage());                    
                    System.debug('fields that affected this error: ' + err.getFields());
                    
                }
            }
            } */
        }         
    }
}