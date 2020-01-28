@isTest
public class MaintenanceRequestTest {
    
    @isTest
    public static void MaintenanceRequestTest() {
        List<Case> maintenanceList = new List<Case>();
        List<Case> maintenanceListToUpdate = new List<Case>();
        Vehicle__c vehicle = new Vehicle__c(name = 'Test Vehicle');
        Product2 equipment = new Product2(name = 'Test Eq',
                                          Maintenance_Cycle__c = 10);
        insert vehicle;
        insert equipment;
        for (Integer i = 0; i < 300; i++) {
            Case mtnce = new Case(Subject = 'Subject' + i,
                                  Type = 'Routine Maintenance',
                                  Status = 'New',
                                  Origin = 'Phone',
                                  Equipment__c = equipment.Id,
                                  Vehicle__c = vehicle.Id);
            maintenanceList.add(mtnce);
        }
        insert maintenanceList;
        for (case checkingCase : maintenanceList) {
            checkingCase.Status = 'Closed';
            maintenanceListToUpdate.add(checkingCase);
        }
        Test.StartTest();
        update maintenanceListToUpdate;
        Test.StopTest();
        Integer openedCasesCount = [SELECT count() 
                                    FROM Case 
                                    WHERE Status = 'New'];
        system.assertEquals(300, openedCasesCount);
    }
}