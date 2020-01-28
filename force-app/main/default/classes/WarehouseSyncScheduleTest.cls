@isTest
public class WarehouseSyncScheduleTest {
    public static String CRON_EXP = '0 0 1 * * ?';
    
    @isTest
    static void WarehouseScheduleTest() {
        Test.startTest();
        Test.setMock(HttpCalloutMock.class, new WarehouseCalloutServiceMock());
        String jobId = System.schedule('Schedule testing',
            CRON_EXP, 
            new WarehouseSyncSchedule());
        Test.stopTest();
    }
}