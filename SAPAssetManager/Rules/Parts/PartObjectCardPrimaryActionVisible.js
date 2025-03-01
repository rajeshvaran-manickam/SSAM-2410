import IssueEnableFromObjectCard from './Issue/IssueEnableFromObjectCard';
import PartReturnEnable from './Return/CreateUpdate/PartReturnEnable';

export default async function PartObjectCardPrimaryActionVisible(context) {
    return await PartReturnEnable(context) || await IssueEnableFromObjectCard(context);
}

