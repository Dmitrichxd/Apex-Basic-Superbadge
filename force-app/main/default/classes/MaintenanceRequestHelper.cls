public with sharing class MaintenanceRequestHelper {

public static void updateWorkOrders() {
    // TODO: Complete the method to update workorders 
    list<Case> checkingOrders = [SELECT ID, Case.Vehicle__c, Equipment__c, Equipment__r.Maintenance_Cycle__c, Type, Status
                                 FROM Case
                                 WHERE ID IN :Trigger.new
                                 LIMIT 200];
    if(checkingOrders !=null && checkingOrders.size()>0 ){
        List<Case> ordersToInsert = new List<Case>();
        for (Case checkingOrder : checkingOrders) {
        if (checkingOrder.Status == 'Closed' && checkingOrder.Type == 'Routine Maintenance') {
        Case newOrder = new case();
        newOrder.Date_Reported__c = Date.today();
        newOrder.Date_Due__c = Date.today().addDays(Integer.valueOf(checkingOrder.Equipment__r.Maintenance_Cycle__c));
        newOrder.Subject = 'Test';
        newOrder.Type = 'Routine Maintenance';
        newOrder.Vehicle__c = checkingOrder.Vehicle__c;
        newOrder.Equipment__c = checkingOrder.Equipment__c; 
        newOrder.Status = 'New';
        newOrder.Origin = 'Phone';  
        ordersToInsert.add(newOrder);
        } 
    }
    insert ordersToInsert;
    }   
}        
}
/*
public class MaintenanceRequestHelper {

public static void updateWorkOrders(){
// update workorders
//bulk determine
List<case> maintenanceRequestList=[select id,case.Vehicle__c,Equipment__c,Equipment__r.Maintenance_Cycle__c,Type,Status from case where id in :Trigger.New limit 200];
if(maintenanceRequestList !=null && maintenanceRequestList.size()>0 ){
List<Case> insertMaintenanceRequest=getCaseList(maintenanceRequestList);
insert insertMaintenanceRequest;
}
}

public static List<Case> getCaseList(List<Case> maintenanceRequestList){
List<Case> newMaintenanceRequestList= new List<Case>();
for(Case cas:maintenanceRequestList){
if(cas.Type=='Routine Maintenance' && cas.Status=='Closed'){
case newMaintenanceRequest=new Case();
newMaintenanceRequest.Subject='test';
newMaintenanceRequest.Type='Routine Maintenance';
newMaintenanceRequest.Vehicle__c=cas.Vehicle__c;
newMaintenanceRequest.Equipment__c=cas.Equipment__c;
newMaintenanceRequest.Date_Reported__c=date.Today();
newMaintenanceRequest.Date_Due__c=Date.today().addDays(Integer.valueOf(cas.Equipment__r.Maintenance_Cycle__c));
newMaintenanceRequest.Status='New';
newMaintenanceRequest.Origin='Phone';
newMaintenanceRequestList.add(newMaintenanceRequest);
}
}
return newMaintenanceRequestList;
}
} */