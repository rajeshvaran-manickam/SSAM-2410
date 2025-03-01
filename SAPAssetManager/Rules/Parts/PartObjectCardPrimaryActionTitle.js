import IssueEnableFromObjectCard from './Issue/IssueEnableFromObjectCard';
import PartReturnEnable from './Return/CreateUpdate/PartReturnEnable';

export default async function PartObjectCardPrimaryActionTitle(context) {
    if (await PartReturnEnable(context)) {
        return context.localizeText('return_text');
    } else if (await IssueEnableFromObjectCard(context)) {
        return context.localizeText('issue');
    }

    return '';
}
