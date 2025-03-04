import IsClassicLayoutEnabled from '../../Common/IsClassicLayoutEnabled';
import MeterLibrary from '../Common/MeterLibrary';

export default function MeterCreateUpdateNavFromDevices(context) {
    return context.read('/SAPAssetManager/Services/AssetManager.service', context.binding['@odata.readLink'] + '/OrderISULink_Nav', [], '').then(function(result) {
        for (let i = 0; i < result.length; i ++) {
            if (result.getItem(i)['@odata.type'] === '#sap_mobile.OrderISULink') {
                return context.read('/SAPAssetManager/Services/AssetManager.service', result.getItem(i)['@odata.readLink'], [], '$expand=Device_Nav/DeviceCategory_Nav/Material_Nav,DeviceLocation_Nav/Premise_Nav,Device_Nav/RegisterGroup_Nav/Division_Nav,Device_Nav/Equipment_Nav/ObjectStatus_Nav/SystemStatus_Nav,Device_Nav/GoodsMovement_Nav,DeviceLocation_Nav/FuncLocation_Nav/Address/AddressCommunication,ConnectionObject_Nav/FuncLocation_Nav/Address/AddressCommunication,DeviceLocation_Nav/Premise_Nav,Workorder_Nav/OrderISULinks,Workorder_Nav/OrderMobileStatus_Nav').then(function(result2) {
                    let isuLink = result2.getItem(0);
                    context.setActionBinding(isuLink);
                    if (isuLink.ISUProcess.substr(-5) !== '_EDIT') {
                        MeterLibrary.setMeterTransactionType(context, isuLink.ISUProcess + '_EDIT');
                    }
                    if (IsClassicLayoutEnabled(context)) {
                        return context.executeAction('/SAPAssetManager/Actions/Meters/CreateUpdate/MeterCreateUpdateNav.action');
                    }
                    return context.executeAction('/SAPAssetManager/Rules/Meters/CreateUpdate/InstallMeterNav.js');
                });
            }
        }
        return context.executeAction('/SAPAssetManager/Actions/ErrorArchive/ErrorArchiveUnkownEntity.action');
    });
}
