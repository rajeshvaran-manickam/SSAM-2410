/**
* Reads the Inspection Point Code Description
* @param {IClientAPI} context
*/
export default function InspectionPointCodeWithRead(context) {
    return context.read('/SAPAssetManager/Services/AssetManager.service', context.binding['@odata.readLink'], [], '$expand=InspCode_Nav').then(result => {
        return result.getItem(0)?.InspCode_Nav?.CodeDesc || '-';
    }).catch(() => {
        return '-';
    });
}
