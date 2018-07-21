public class BoatSearchController {
    @AuraEnabled 
    public static List<BoatType__c> getBoatTypes(){
       List<BoatType__c> boatTypes = [select Id,Name from BoatType__c];
        
        return boatTypes;
    }
    
}