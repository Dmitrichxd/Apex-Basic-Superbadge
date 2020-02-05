public with sharing class contactsSearchResult {
    @AuraEnabled
    public static list<Contact> getContacts(string searchByName){
        if (String.isEmpty(searchByName)) {
            return [SELECT Name, FirstName, LastName, Email, Title, Phone, Account.Name, LastModifiedDate, Owner.Name, Id
                    FROM Contact
                    ORDER BY LastModifiedDate DESC];
        } else {                    
        return [SELECT Name, FirstName, LastName, Email, Title, Phone, Account.Name, LastModifiedDate, Owner.Name, Id
                FROM Contact 
                WHERE Contact.FirstName =: searchByName 
                OR Contact.LastName =: searchByName
                ORDER BY LastModifiedDate DESC];                     
        }
}
}
