import libCom from '../Common/Library/CommonLibrary';
import filterOnLoaded from './FilterOnLoaded';

export default function FLOCFilterOnLoaded(context) {
    filterOnLoaded(context); //Run the default filter on loaded
    let clientData = context.evaluateTargetPath('#Page:FunctionalLocationListViewPage/#ClientData');
    if (clientData.FunctionalLocationFastFiltersClass) {
        clientData.FunctionalLocationFastFiltersClass.resetClientData(context);
        clientData.FunctionalLocationFastFiltersClass.setFastFilterValuesToFilterPage(context);
    }
    const prevPage = context.evaluateTargetPathForAPI('#Page:-Previous');
    const currentFilter = libCom.getQueryOptionFromFilter(prevPage);
    if (currentFilter && currentFilter.includes('islocal')) {
        let control = context.evaluateTargetPath('#Page:FunctionalLocationFilterPage/#Control:LocalFilter');
        control.setValue('true');
    }
}
