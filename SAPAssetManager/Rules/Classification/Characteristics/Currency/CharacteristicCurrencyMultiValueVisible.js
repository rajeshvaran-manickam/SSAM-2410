import libCommon from '../../../Common/Library/CommonLibrary';

export default function CharacteristicCurrencyMultiValueVisible(formCellContainerProxy) {
    let dataType = formCellContainerProxy.binding.Characteristic.DataType;
    let singleValue = formCellContainerProxy.binding.Characteristic.SingleValue;
    if (singleValue === '' && dataType === 'CURR') {
        libCommon.setStateVariable(formCellContainerProxy,'VisibleControlFrom',formCellContainerProxy.getName());
        libCommon.setStateVariable(formCellContainerProxy, 'MultiListPicker',true);
        return true;
    }
    return false;
}
