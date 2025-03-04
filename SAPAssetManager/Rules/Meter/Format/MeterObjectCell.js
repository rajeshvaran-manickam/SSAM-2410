import MeterSectionLibrary from '../Common/MeterSectionLibrary';
import {ValueIfExists as format} from './Formatter';

export default async function MeterObjectCell(context) {
    let property = context.getProperty();
    let device = context.binding;
    if (context.binding.Device_Nav) {
        device = context.binding.Device_Nav;
    }

    let returnValue = '';

    switch (property) {
        case 'Title':
            returnValue = `${device.Device} - ${device.DeviceCategory_Nav.Description}`;
            break;
        case 'Subhead':
            returnValue = `${format(device.DeviceLocation_Nav.Description, '-')}`;
            break;
        case 'Footnote':
            returnValue = `${device.RegisterGroup_Nav.Division} - ${device.RegisterGroup_Nav.Division_Nav.Description}`;
            break;
        case 'StatusText':
            returnValue = `${device.Equipment_Nav.ObjectStatus_Nav.SystemStatus_Nav.StatusText}`;
            break;
        case 'SubstatusText':
            returnValue = `${device.DeviceBlocked ? context.localizeText('disconnect') : context.localizeText('connected')}`;
            break;
        case 'AccessoryButtonText':
        case 'AccessoryButtonIcon':
            returnValue = await MeterSectionLibrary.getActionButtonOrIcon(context);
            break;
        case 'Icons':
            returnValue = MeterSectionLibrary.getSectionLeftIcons(context);
            break;
        default:
            break;
    }

    return returnValue;
}
