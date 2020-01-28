public with sharing class BoatSearchFormController {
    
    @AuraEnabled
    public static List<BoatType__c> getOptionsList(){
        return [SELECT Name,id FROM BoatType__c];
    }
}