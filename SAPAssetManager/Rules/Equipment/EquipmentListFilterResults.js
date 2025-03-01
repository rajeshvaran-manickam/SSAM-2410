export default function EquipmentListFilterResults(context) {
    // Get all filter criteria from filter page
    const filterResults = GetEquipmentListFilterCriteria(context);
    // Splice work center filter from all criteria so that it can be combined with existing fast filters for page
    const wcFilter = filterResults.splice(filterResults.findIndex(res => res.name === 'MaintWorkCenter'), 1)[0];

    /** @type {{EquipmentFastFiltersClass: EquipmentFastFilters}} */
    const clientData = context.evaluateTargetPath('#Page:EquipmentListViewPage/#ClientData');
    // Combine selected work centers with existing fast filters for page
    const fastFilterCriterias = clientData.EquipmentFastFiltersClass.getFastFilterValuesFromFilterPage(context, wcFilter);

    return [...filterResults, ...fastFilterCriterias].filter(c => !!c);
}

export function GetEquipmentListFilterCriteria(context) {
    const fcContainer = context.getControls().find(c => c.getType() === 'Control.Type.FormCellContainer');
    const [sortFilter, statusFilter] = ['SortFilter', 'StatusFilter'].map(n => fcContainer.getControl(n).getValue());
    const wcFilter = fcContainer.getControl('WorkCenterFilter').getFilterValue();

    return [sortFilter, statusFilter, wcFilter].filter(c => !!c);
}
