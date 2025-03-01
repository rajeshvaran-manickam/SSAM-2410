import CommonLibrary from '../Common/Library/CommonLibrary';
import FunctionalLocationFastFilters from '../FastFilters/MultiPersonaFilters/FunctionalLocationFastFilters';

export default function FunctionalLocationFastFiltersItems(context) {
    let FunctionalLocationFastFiltersClass = new FunctionalLocationFastFilters(context);

    return prepareDataForFastFilters(context, FunctionalLocationFastFiltersClass).then(() => {

        /** 
            to customize the list of fast filters, the getFastFilters method must be overwritten in the FunctionalLocationFastFilters class
            getFastFilters returns a list of filter objects
            each object contains:
            for filters: filter name, filter value, filter property (if the value is not a complex query), filter group (combines multiple filters with "or"), visible
            for sortes: caption, value, visible
        */
        return FunctionalLocationFastFiltersClass.getFastFilterItemsForListPage(context);
    });
}

function prepareDataForFastFilters(context, FunctionalLocationFastFiltersClass) {
    let promises = [];
    promises.push(context.read('/SAPAssetManager/Services/AssetManager.service', 'MyFuncLocDocuments', ['FuncLocIdIntern'], '$filter=sap.hasPendingChanges()'));
  
    let workCenters = CommonLibrary.getParsedUserWorkCenters();
    if (workCenters.length) {
        let query = '$filter=';
        query += workCenters.map(workCenter => {
            return `ExternalWorkCenterId eq '${workCenter}'`;
        }).join(' or ');
        promises.push(context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', ['WorkCenterId'], query));
    }

    return Promise.all(promises).then(results => {
        let ids = [];

        if (results[0].length) {
            results[0].forEach(result => {
                if (result.FuncLocIdIntern) {
                    ids.push(`FuncLocIdIntern eq '${result.FuncLocIdIntern}'`);
                }
            });
        }

        context.getPageProxy().getClientData().FunctionalLocationFastFiltersClass = FunctionalLocationFastFiltersClass;

        if (ids.length) {
            let query = ids.join(' or ');
            FunctionalLocationFastFiltersClass.setConfigProperty('modifiedFilterQuery', query);
        }

        let workCentersResults = results[1] || [];
        let workCentersIds = [];
        workCentersResults.forEach(workCenter => {
            workCentersIds.push(workCenter.WorkCenterId);
        });
        FunctionalLocationFastFiltersClass.setConfigProperty('workCenters', workCentersIds);
        return Promise.resolve();
    });
}
