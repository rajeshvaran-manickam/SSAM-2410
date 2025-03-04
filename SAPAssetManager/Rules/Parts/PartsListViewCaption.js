export default function PartsListViewCaption(context) {
    let filterOpts = [];
    if (context.binding['@odata.type'] === '#sap_mobile.WorkOrderHeader') {
        return context.count('/SAPAssetManager/Services/OnlineAssetManager.service', context.binding['@odata.readLink'] + '/Components', '').then(count => {
            let params=[count];
            context.setCaption(context.localizeText('parts_x', params));
        }); 
    }
    if (context.binding.OrderId) {
        filterOpts.push(`OrderId eq '${context.binding.OrderId}'`);
    }
    if (context.binding.OperationNo) {
        filterOpts.push(`OperationNo eq '${context.binding.OperationNo}'`);
    }
    return context.count('/SAPAssetManager/Services/AssetManager.service','MyWorkOrderComponents', `$filter=${filterOpts.join(' and ')}`).then(count => {
        let params=[count];
        context.setCaption(context.localizeText('parts_x', params));
    }); 
}
