
export default function FLOCFilteringResult(context) {
    let filterResults = GetFLOCFilteringCriteria(context);
    const wcFilter = filterResults.splice(filterResults.findIndex(res => res.name === 'WorkCenter'), 1)[0];

    let clientData = context.evaluateTargetPath('#Page:FunctionalLocationListViewPage/#ClientData');
    if (clientData.FunctionalLocationFastFiltersClass) {
        filterResults = filterResults.concat(clientData.FunctionalLocationFastFiltersClass.getFastFilterValuesFromFilterPage(context, wcFilter));
    }

    return filterResults;
}

export function GetFLOCFilteringCriteria(context) {
    const fcContainer = context.getControls().find(c => c.getType() === 'Control.Type.FormCellContainer');
    const [sortFilter, localFilter] = ['SortFilter', 'LocalFilter'].map(n => fcContainer.getControl(n).getValue());
    const wcFilter = fcContainer.getControl('WorkCenterFilter').getFilterValue();
    let filterResults = [wcFilter, sortFilter];

    if (localFilter && localFilter.filterItems.length && localFilter.filterItems[0]) {
        let filter = context.createFilterCriteria(context.filterTypeEnum.Filter, undefined, undefined, ['sap.islocal()'], true, undefined, [context.localizeText('is_local')]);
        filterResults.push(filter);
    }

    return filterResults;
}
