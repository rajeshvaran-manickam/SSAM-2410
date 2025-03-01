import filterOnLoaded from './FilterOnLoaded';

export default function EquipmentFilterOnLoaded(context) {
    filterOnLoaded(context); //Run the default filter on loaded
    let clientData = context.evaluateTargetPath('#Page:EquipmentListViewPage/#ClientData');
    if (clientData.EquipmentFastFiltersClass) {
        clientData.EquipmentFastFiltersClass.resetClientData(context);
        clientData.EquipmentFastFiltersClass.setFastFilterValuesToFilterPage(context);
    }
}
