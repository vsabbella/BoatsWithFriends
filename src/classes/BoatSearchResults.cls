public class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> Boats;
        system.debug(LoggingLevel.INFO, '-->'+boatTypeId);
        if(!String.isEmpty(boatTypeId))
           Boats = [select id,name,Contact__r.name, Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s from Boat__c where BoatType__c	 = :(Id)boatTypeId];
        else
            Boats = [select id,name,Contact__r.name, Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s from Boat__c];
            
        
        return Boats;
    }

}