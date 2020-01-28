@IsTest
private class WarehouseCalloutServiceTest {
        @IsTest
        private static void WarehouseCalloutServiceTest() {
            Test.startTest();
            Test.setMock(HttpCalloutMock.class, new WarehouseCalloutServiceMock());
            WarehouseCalloutService.runWarehouseEquipmentSync();
            Test.stopTest();
        }

}