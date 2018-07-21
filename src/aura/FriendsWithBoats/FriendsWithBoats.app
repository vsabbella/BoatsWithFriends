<aura:application extends="force:slds">
    
    <div>
        <lightning:layout multipleRows="true" horizontalAlign="center" pullToBoundary="medium">
            <lightning:layoutItem size="6" padding="around-small">
                <div><c:BoatSearch /></div>
            </lightning:layoutItem>
            <lightning:layoutItem size="6" padding="around-small">
                <div><c:BoatDetails /></div>
            </lightning:layoutItem>
            <lightning:layoutItem size="6" padding="around-small">
                <div><c:Map aura:id="map"/></div>
            </lightning:layoutItem>
        </lightning:layout>
    </div>
	
</aura:application>