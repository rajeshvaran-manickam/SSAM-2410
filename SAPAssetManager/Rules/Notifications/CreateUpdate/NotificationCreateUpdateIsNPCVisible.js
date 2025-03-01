export default function NotificationCreateUpdateIsNPCVisible(context) {
    return context.count('/SAPAssetManager/Services/AssetManager.service', 'NotificationProcessingContexts', '').then(count => count > 0).catch(() => false);
}
