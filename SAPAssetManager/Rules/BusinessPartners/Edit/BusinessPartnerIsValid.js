import libCom from '../../Common/Library/CommonLibrary';
import FetchRequest from '../../Common/Query/FetchRequest';
import BusinessPartnerEditCountryPickerValue from './BusinessPartnerEditCountryPickerValue';

/**
 * Returns true if we can verify all fields being edited in a Business Partner are valid
 * @param {Context} context - Calling context ( BusinessPartnerEdit pageProxy )
 */
export default function BusinessPartnerIsValid(context) {

    let controls = context.getControl('FormCellContainer').getControls();
    // Clear previous
    clearInLineErrors(controls);

    // Map the controls to their name for convenience
    let controlMap = {};
    for (let item of controls) {
        controlMap[item.getName()] = item;
    }

    // Map invalid controls to their error message
    let errorMap = {};

    findInvalidControls(context, controlMap, errorMap);
    // Retrieve the country object
    let selectedCountry = BusinessPartnerEditCountryPickerValue(context);
    if (selectedCountry) {
        return new FetchRequest().get(context, `Countries('${selectedCountry}')`, true).then((result) => {
            let country = result.getItem(0);
            libCom.setStateVariable(context, 'DialingCode', country.DialingCode);
            findInvalidPhoneNumbers(context, country, controlMap, errorMap);
            findInvalidAreaCode(context, country, controlMap, errorMap);
            return invalidateControls(context, controlMap, errorMap);
        });

    }


    return Promise.resolve(invalidateControls(context, controlMap, errorMap));
}

/**
 * Clear inline errors from all controls
 * @param {[IControl]} controls - array of controls
 */
export function clearInLineErrors(controls) {
    for (let item of controls) {
        libCom.clearValidationOnInput(item);
    }
}

/**
 * Find controls with invalid length
 * @param {Context} context - calling context
 * @param {*} controlMap - Map controls to names
 * @param {*} errorMap -
 */
export function findInvalidControls(context, controlMap, errorMap) {
    let maxLengths = {
        'House': 10,
        'Street': 60,
        'City': 40,
        'ZipCode': 10,
        'Building': 10,
        'Floor': 10,
        'Room': 10,
        'Email': 241,
        'Phone': 30,
        'Fax': 30,
        'Mobile': 30,
    };
    for (let item of Object.keys(controlMap)) {
        let maxLength = maxLengths[item];
        if (maxLength === undefined) continue;

        if (controlMap[item].getValue()) {
            let valueLength = controlMap[item].getValue().length;
            if (valueLength > maxLength) {
                let message = context.localizeText('exceeds_max_length_x_x', [valueLength, maxLength]);
                errorMap[item] = message;
            }
        }
    }
}

/**
 * Find entered phone numbers that are invalid
 * @param {*} context
 * @param {*} country
 * @param {*} controlMap
 * @param {*} errorMap
 */
export function findInvalidPhoneNumbers(context, country, controlMap, errorMap) {
    // Validate the phone numbers for based on country address
    // The country code should be assumed if it's in the same country
    if (country.DialingCode.length > 0) {
        for (let item of ['Phone', 'Fax', 'Mobile']) {
            let control = controlMap[item];
            let value = control.getValue();
            let pruned = value.trim();
            if (pruned.startsWith(country.DialingCode) || pruned.startsWith('+')) {
                errorMap[item] = context.localizeText('remove_country_code');
            }
        }
    }
}

/**
 * Determine if the area code control has invalid value
 * @param {*} country
 * @param {*} controlMap
 * @param {*} errorMap
 */
export function findInvalidAreaCode(context, country, controlMap, errorMap) {
    let postalCodeLength = parseInt(country.PostalCodeLength);
    let postalCodeMaskLength = country.PostalCodeMask.length;
    let postalCodeMask2Length = country.PostalCodeMask2.length;
    let zipValue = controlMap.ZipCode.getValue();

    if (postalCodeLength > 0 && zipValue.length === 0) {
        errorMap.ZipCode = context.localizeText('field_is_required');
        return;
    }

    if (postalCodeLength > 0) {
        handlePostalCodeLength(context, errorMap, zipValue, postalCodeLength, postalCodeMaskLength, postalCodeMask2Length);
    }

    if (postalCodeLength === 0 && zipValue.length !== 0) {
        errorMap.ZipCode = context.localizeText('postal_code_not_supported', country.Description);
        return;
    }

    let postalMasks = getPostalMask(country, postalCodeMaskLength, postalCodeMask2Length);

    if (postalMasks.length > 0) {
        // Convert masks to regular expressions and determine if value matches them
        let isValidPostalCode = doesMatchPostalMasks(zipValue, postalMasks);

        if (!isValidPostalCode) {
            let textKey = postalMasks.length > 1 ? 'invalid_postal_codes' : 'invalid_postal_code';
            errorMap.ZipCode = context.localizeText(textKey, postalMasks);
        }
    }

    if (zipValue.length > postalCodeLength) {
        errorMap.ZipCode = context.localizeText('exceeds_max_length_x_x', [zipValue.length, postalCodeLength]);
    }

}

/**
 * Validate the length of postal code
 * @param {Context} context
 * @param {*} zipValue
 * @param {*} errorMap
 * @param {Number} postalCodeLength
 * @param {Number} postalCodeMaskLength
 * @param {Number} postalCodeMask2Length
 */
function handlePostalCodeLength(context, errorMap, zipValue, postalCodeLength, postalCodeMaskLength, postalCodeMask2Length) {
    if (postalCodeMaskLength > 0) {
        if (zipValue.length < postalCodeMaskLength || (zipValue.length > postalCodeMaskLength && zipValue.length < postalCodeMask2Length)) {
            errorMap.ZipCode = context.localizeText('invalid_postal_code_length', [postalCodeMaskLength]);
            return;
        }
    } else if (zipValue.length < postalCodeLength) {
        errorMap.ZipCode = context.localizeText('invalid_postal_code_length', [postalCodeLength]);
        return;
    }
}

/**
 * Creating a list of postal code masks from a given country object, based on the lengths of the postal code masks
 * @param {*} country
 * @param {*} postalCodeMaskLength
 * @param {*} postalCodeMask2Length
 */
function getPostalMask(country, postalCodeMaskLength, postalCodeMask2Length) {
    let postalMasks = [];
    if (postalCodeMaskLength > 0) postalMasks.push(country.PostalCodeMask);
    if (postalCodeMask2Length > 0) postalMasks.push(country.PostalCodeMask2);
    return postalMasks;
}

/**
 * Checking if zip code is matching with postal mask
 * @param {String} zipValue
 * @param {String[]} postalMasks
 */
function doesMatchPostalMasks(zipValue, postalMasks) {
    for (let mask of postalMasks) {
        if (isMatchingFormat(zipValue, mask)) {
            return true;
        }
    }
    return false;
}

/**
 * Returns true if a string matches a passed format:
 * N - Number
 * B - Letter
 * A - Number of Letter
 * Anything else - exact match
 *
 * @param {String} string - string to check format for
 * @param {String} format - format we expect string to match
 */
export function isMatchingFormat(string, format) {
    if (string.length !== format.length) return false;

    return [...string].every((char, i) => {
        const fChar = format.charAt(i);
        switch (fChar) {
            case 'N':
                return /\d/.test(char);
            case 'B':
                return /[a-zA-Z]/.test(char);
            case 'A':
                return /[a-zA-Z0-9]/.test(char);
            default:
                return char === fChar;
        }
    });
}

/**
 * Iterate over the error map and display in-line errors
 * @param {*} context
 * @param {*} controlMap
 * @param {*} errorMap
 */
export function invalidateControls(context, controlMap, errorMap) {

    if (Object.keys(errorMap).length === 0) return true;

    Object.keys(errorMap).forEach((item) => {
        libCom.executeInlineControlError(context, controlMap[item], errorMap[item]);
    });

    return false;
}
