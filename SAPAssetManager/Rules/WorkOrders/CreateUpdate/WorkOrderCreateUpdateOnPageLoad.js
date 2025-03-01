import { WorkOrderEventLibrary as LibWoEvent, WorkOrderLibrary as libWo } from '../WorkOrderLibrary';
import style from '../../Common/Style/StyleFormCellButton';
import hideCancel from '../../ErrorArchive/HideCancelForErrorArchiveFix';
import libCom from '../../Common/Library/CommonLibrary';
import ApplicationSettings from '../../Common/Library/ApplicationSettings';
import SetUpAttachmentTypes from '../../Documents/SetUpAttachmentTypes';
import { getGeometryData, locationInfoFromObjectType } from '../../Common/GetLocationInformation';
import userFeaturesLib from '../../UserFeatures/UserFeaturesLibrary';
import ValidationLibrary from '../../Common/Library/ValidationLibrary';


/** @param {IPageProxy} context */
export default function WorkOrderCreateUpdateOnPageLoad(context) {
    hideCancel(context);
    LibWoEvent.createUpdateOnPageLoad(context);
    style(context, 'DiscardButton');

    SetUpAttachmentTypes(context);
    return GetWOGeometryDateFromPrevPageBinding(context)
        .then(geometryData => SetWOCreateUpdateLocationSection(context, geometryData))
        .then(() => libWo.isServiceOrder(context));
}

/** @returns {Promise<Geometry>} */
export function GetWOGeometryDateFromPrevPageBinding(context) {
    const isGISAddEditEnabled = userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/GISAddEdit.global').getValue());
    const prevPageBinding = context._page && context._page.previousPage && context._page.previousPage.context && context._page.previousPage.context.binding;

    if (!isGISAddEditEnabled || ValidationLibrary.evalIsEmpty(prevPageBinding)) {
        return Promise.resolve();
    }
    // Get type, minus prefix
    const type = prevPageBinding['@odata.type'] ? prevPageBinding['@odata.type'].substring('#sap_mobile.'.length) : '';
    return getGeometryData(context, type, prevPageBinding, libCom.IsOnCreate(context))
        .then(geometryData => {
            if (ValidationLibrary.evalIsEmpty(geometryData)) {
                return '';
            }
            libCom.setStateVariable(context, 'GeometryObjectType', 'WorkOrder');
            ApplicationSettings.setString(context, 'Geometry', JSON.stringify({
                geometryType: geometryData.GeometryType,
                geometryValue: geometryData.GeometryValue,
            }));
            return geometryData;
        });
}

/** @param {Geometry} geometryData  */
function SetWOCreateUpdateLocationSection(context, geometryData) {
    if (ValidationLibrary.evalIsEmpty(geometryData)) {
        return;
    }
    const container = context.getControl('FormCellContainer');
    const control = container.getControl('LocationEditTitle');
    control.setValue(locationInfoFromObjectType(context, geometryData.ObjectType, geometryData.ObjectKey));

    // redraw LocationButtonsSection
    container.getSection('LocationButtonsSection').redraw();
}
