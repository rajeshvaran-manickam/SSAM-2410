import appSettings from '../../Common/Library/ApplicationSettings';
import libVal from '../../Common/Library/ValidationLibrary';
import { DefiningRequestsLite } from '../Common/EWMLibrary';
import libCom from '../../Common/Library/CommonLibrary';
/**
* This is used to set defining requests based on documents, that are need to be downloaded
* we're taking document type and put all required entity sets into final array (each one can be put only once)
* @param {IClientAPI} context
*/
export default function GetEWMDefiningRequests(context) {
    let count = appSettings.getNumber(context, 'EWMEntityCount');
    const downloadLite = (libCom.getAppParam(context, 'EWM', 'download.lite') === 'Y');
    let definingRequests = [];
    if (libVal.evalIsNumeric(count)) {
        for (let index = 0; index < count; index++) {
            let entitysetName = appSettings.getString(context, 'EWMEntity-' + index);
            if (downloadLite) {
                if (entitysetName in DefiningRequestsLite) {
                    definingRequests.push(getDefiningObject(entitysetName));
                }
            } else {
                definingRequests.push(getDefiningObject(entitysetName));
            }
        }
    }
    return definingRequests;
}

function getDefiningObject(localVal, onlineVal) {
    // put local DB name first, then the one from online service
    // if they are same, they it supported to push onle first value
    return {
        'Name': localVal,
        'Query': onlineVal || localVal,
    };
}
