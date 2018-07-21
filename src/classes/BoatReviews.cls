public class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        system.assert(boatId!=null,'boatId is null');
        List<BoatReview__c> boatReviews = [Select Id,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName from BoatReview__c where boat__c = :boatId order by createdDate desc];
        
        return boatReviews;
    }

}