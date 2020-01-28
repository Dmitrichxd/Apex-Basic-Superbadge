public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static list<Boat__c> getBoats(string boatTypeId){
        if (boatTypeId == 'All Types' || boatTypeId == '') {
            return [SELECT Name, ID, Description__c, Price__c, 
            Length__c, Contact__c, Picture__c, Contact__r.Name, 
            Contact__r.Email, Contact__r.HomePhone, BoatType__r.Name, 
            Geolocation__Latitude__s, Geolocation__Longitude__s
                     FROM Boat__c];
        } else {
        list<BoatType__c> boatType = [SELECT Name, ID 
                                      FROM boatType__c 
                                      WHERE Name =: boatTypeId];
        if (!boatType.isEmpty()) {                          
        return [SELECT Name, ID, Description__c, Price__c, 
            Length__c, Contact__c, Picture__c, Contact__r.Name, 
            Contact__r.Email, Contact__r.HomePhone, BoatType__r.Name, 
            Geolocation__Latitude__s, Geolocation__Longitude__s
                     FROM Boat__c WHERE boatType__c =: boatType[0].ID];                     
        } else return new list<Boat__c>();
        }
    }
}