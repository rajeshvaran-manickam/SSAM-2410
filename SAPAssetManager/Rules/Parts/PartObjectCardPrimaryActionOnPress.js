import IssueEnableFromObjectCard from './Issue/IssueEnableFromObjectCard';
import PartReturnEnable from './Return/CreateUpdate/PartReturnEnable';
import PartIssueNav from './Issue/PartIssueNav';
import PartReturnCreate from './Return/CreateUpdate/PartReturnCreate';

export default async function PartObjectCardPrimaryActionOnPress(context) {
    if (await PartReturnEnable(context)) {
        return PartReturnCreate(context);
    } else if (await IssueEnableFromObjectCard(context)) {
        return PartIssueNav(context);
    }

    return null;
}
