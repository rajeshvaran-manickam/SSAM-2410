import libForm from '../../../Common/Library/FormatLibrary';
import libMobile from '../../../MobileStatus/MobileStatusLibrary';

export default function NotificationItemTaskDetailsListFormat(context) {
    const property = context.getProperty();
    let binding = context.getBindingObject();
    switch (property) {
        case 'Title':
            return libForm.getFormattedKeyDescriptionPair(context, binding.TaskSortNumber, binding.TaskText);
        case 'Subhead':
            return context.localizeText('group') + ' | ' + binding.TaskCodeGroup;
        case 'Footnote':
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'PMCatalogCodes', [], "$filter=Catalog eq '2' and CodeGroup eq '" + binding.TaskCodeGroup + "' and Code eq '" + binding.TaskCode + "'").then(function(codeData) {
                return libForm.getFormattedKeyDescriptionPair(context, codeData.getItem(0).Code, codeData.getItem(0).CodeDescription);
            });
        case 'StatusText':
            return context.localizeText(libMobile.getMobileStatus(binding, context));
        default:
            return '';
    }
}
