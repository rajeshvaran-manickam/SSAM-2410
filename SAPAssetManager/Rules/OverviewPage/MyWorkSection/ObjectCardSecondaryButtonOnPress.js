import libCom from '../../Common/Library/CommonLibrary';
import ObjectCardButtonOnPress from './ObjectCardButtonOnPress';

export default function ObjectCardSecondaryButtonOnPress(context) {
    const pageProxy = context.getPageProxy();
    const binding = pageProxy.getActionBinding();
    libCom.setStateVariable(context, 'IsOnOperationBinding', binding);

    return ObjectCardButtonOnPress(context, binding, ['S', 'N']);
}
