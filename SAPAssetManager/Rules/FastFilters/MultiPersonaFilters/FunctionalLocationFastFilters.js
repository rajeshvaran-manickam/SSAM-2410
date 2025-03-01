import FastFilters, { FAST_FILTERS } from '../FastFilters';

export default class FunctionalLocationFastFilters extends FastFilters {

    constructor(context) {
        const config = {
            workCenterPropertyPath: 'WorkCenter',
            workCenters: '',
            modifiedFilterQuery: '',
        };
        const filterPageName = 'FunctionalLocationFilterPage';
        const listPageName = 'FunctionalLocationListViewPage';
        super(context, filterPageName, listPageName, config);
    }

    getFastFilters(context) {
        return [
            { name: FAST_FILTERS.MY_WORK_CENTER, value: this._getMyWorkCenterFilterItemReturnValue(), visible: this.isMyWorkCenterFilterVisible(context) },
            { name: FAST_FILTERS.MODIFIED, value: this._getPendingFilterItemReturnValue(), visible: this.isModifiedFilterVisible(context) },
        ];
    }

    getSorters(context) {
        return [
            { caption: context.localizeText('plant'), property: 'PlanningPlant', visible: this.isSorterVisible(context) },
            { caption: context.localizeText('work_center'), property: 'WorkCenter_Main_Nav/ExternalWorkCenterId', visible: this.isSorterVisible(context) },
        ];
    }

    isSorterVisible() {
        return true;
    }

    isModifiedFilterVisible() {
        return true;
    }

    isMyWorkCenterFilterVisible() {
        return true;
    }

    _getPendingFilterItemReturnValue() {
        return this.config.modifiedFilterQuery ? this.config.modifiedFilterQuery + ' or sap.hasPendingChanges()' : 'sap.hasPendingChanges()';
    }
}
