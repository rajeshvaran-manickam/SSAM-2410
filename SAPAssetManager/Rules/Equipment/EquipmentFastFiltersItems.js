import EquipmentFastFilters from '../FastFilters/MultiPersonaFilters/EquipmentFastFilters';
import CommonLibrary from '../Common/Library/CommonLibrary';
import ValidationLibrary from '../Common/Library/ValidationLibrary';

export default function EquipmentFastFiltersItems(context) {
    const EquipmentFastFiltersClass = new EquipmentFastFilters(context);

    context.getPageProxy().getClientData().EquipmentFastFiltersClass = EquipmentFastFiltersClass;
    return prepareDataForFastFilters(context, EquipmentFastFiltersClass).then(() => {
        /**
            to customize the list of fast filters, the getFastFilters method must be overwritten in the EquipmentFastFilters class
            getFastFilters returns a list of filter objects
            each object contains:
            for filters: filter name, filter value, filter property (if the value is not a complex query), filter group (combines multiple filters with "or"), visible
            for sortes: caption, value, visible
         */
        return EquipmentFastFiltersClass.getFastFilterItemsForListPage(context);
    });
}

function prepareDataForFastFilters(context, EquipmentFastFiltersClass) {
    const workCenters = CommonLibrary.getParsedUserWorkCenters();
    let workCenterQuery;

    if (workCenters.length) {
        workCenterQuery = '$filter=' + workCenters.map(workCenter => {
            return `ExternalWorkCenterId eq '${workCenter}'`;
        }).join(' or ');
    }

    return Promise.all([
        context.read('/SAPAssetManager/Services/AssetManager.service', 'MyEquipDocuments', ['EquipId'], '$filter=sap.hasPendingChanges()'),
        workCenterQuery ? context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', ['WorkCenterId'], workCenterQuery) : '',
    ]).then((/** @type {[ObservableArray<MyEquipDocument>, ObservableArray<WorkCenter>]} */[equipDocuments, workCenterResults]) => {
        if (!ValidationLibrary.evalIsEmpty(equipDocuments)) {
            const idQuery = Array.from(equipDocuments, ed => `EquipId eq '${ed.EquipId}'`).join(' or ');
            EquipmentFastFiltersClass.setConfigProperty('modifiedFilterQuery', idQuery);
        }
        EquipmentFastFiltersClass.setConfigProperty('workCenters', Array.from(workCenterResults || [], (/** @type {WorkCenter} */ wc) => wc.WorkCenterId));
    });
}
