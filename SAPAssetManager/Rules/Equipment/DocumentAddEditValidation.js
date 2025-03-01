import libDoc from '../Documents/DocumentLibrary';
import libCom from '../Common/Library/CommonLibrary';

export default function DocumentAddEditValidation(context) {
    // check description length.
    // check attachment count, run the validation rule if there is an attachment
    // return true if there is no new attachment.
    let dict = libCom.getControlDictionaryFromPage(context);
    if (dict.AttachmentDescription) {
        dict.AttachmentDescription.clearValidation();
        let charLimitInt = context.getGlobalDefinition('/SAPAssetManager/Globals/Documents/DocumentDescriptionMaximumLength.global').getValue();
        const descriptionLength = dict.AttachmentDescription.getValue() ? dict.AttachmentDescription.getValue().length : 0;
    
        if (descriptionLength > charLimitInt) {
            const errorText = context.localizeText('validation_maximum_field_length', [charLimitInt]);
            libCom.executeInlineControlError(context, dict.AttachmentDescription, errorText);
            return Promise.resolve(false);
        } else {
            if (libDoc.validationAttachmentCount(context) > 0 || descriptionLength > 0) {
                return libDoc.createValidationRule(context);
            } else {
                return Promise.resolve(true);
            }
        }
    } else {
        if (libDoc.validationAttachmentCount(context) > 0) {
            return libDoc.createValidationRule(context);
        } else {
            return Promise.resolve(true);
        }
    }
}
