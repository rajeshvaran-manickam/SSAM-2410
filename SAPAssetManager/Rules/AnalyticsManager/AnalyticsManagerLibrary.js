import { AnalyticsManager } from 'extension-SAMFoundation';
import { GlobalVar } from '../Common/Library/GlobalCommon';

export default class {

     /**
     * Configure the app to use Analytic when systemSetting is Production
     * The paramters for Analytic are as follows
     * AnalyticsManager.setParameters("License Number")
     * @param {*} context
     * @param {*} onInitComplete
     * @returns {boolean}
     */
     static setAnalyticParameters(context, onInitComplete) {
        let licenseNo = GlobalVar.getUserSystemInfo().get(context.getGlobalDefinition('/SAPAssetManager/Globals/AnalyticsManager/LicenseNumber.global').getValue());
        return AnalyticsManager.initWithUserData(context, licenseNo, onInitComplete);
    }

     /**
     * Operation is successfully completed. Done button is clicked after confirmation screen
     * Supported on assignment type 2, 4, 5, 6
     * @param {}
     * @returns {void}
     */
     static operationCompleteSuccess() {
        AnalyticsManager.logEvent('operation.complete.success');
    }

    /**
     * Operation is cancelled on confirmation screen
     * Supported on assignment type 2, 4, 5, 6
     * @param {}
     * @returns {void}
     */
    static operationCompleteCancel() {
        AnalyticsManager.logEvent('operation.complete.cancel');
    }

    /**
     * Order is successfully completed. Done button is clicked after confirmation screen
     * Supported on assignment type 1, 7, 8
     * @param {}
     * @returns {void}
     */
    static orderCompleteSuccess() {
        AnalyticsManager.logEvent('order.complete.success');
    }

    /**
     * Order is cancelled on confirmation screen
     * Supported on assignment type 1, 7, 8
     * @param {}
     * @returns {void}
     */
    static orderCompleteCancel() {
        AnalyticsManager.logEvent('order.complete.cancel');
    }

    /**
     * SubOperation is successfully completed. Done button is clicked after confirmation screen
     * Supported on assignment type 3
     * @param {}
     * @returns {void}
     */
    static suboperationCompleteSuccess() {
        AnalyticsManager.logEvent('suboperation.complete.success');
    }

    /**
     * SubOperation is cancelled on confirmation screen
     * Supported on assignment type 3
     * @param {}
     * @returns {void}
     */
    static suboperationCompleteCancel() {
        AnalyticsManager.logEvent('suboperation.complete.cancel');
    }

    /**
     * Notification Created Successfully
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static notificationCreateSuccess() {
        AnalyticsManager.logEvent('notification.create.success');
    }

    /**
     * Notification Create Cancelled
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static notificationCreateCancel() {
        AnalyticsManager.logEvent('notification.create.cancel');
    }

    /**
     * Notification Completed Successfully
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static notificationCompleteSuccess() {
        AnalyticsManager.logEvent('notification.complete.success');
    }

    /**
     * Notification Completion Cancelled
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static notificationCompleteCancel() {
        AnalyticsManager.logEvent('notification.complete.cancel');
    }

    /**
     * App was lauched/loaded with MT persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static maintenanceTechnicaionAppLaunch() {
        AnalyticsManager.logEvent('mt.app.launch');
    }

    /**
     * App was lauched/loaded with MT STD persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static maintenanceTechnicaionSTDAppLaunch() {
        AnalyticsManager.logEvent('mt.std.app.launch');
    }

    /**
     * App was lauched/loaded with FST persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static fieldServiceTechnicaionAppLaunch() {
        AnalyticsManager.logEvent('fst.app.launch');
    }

    /**
     * App was lauched/loaded with FST Pro persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static fieldServiceTechnicaionProAppLaunch() {
        AnalyticsManager.logEvent('fst.pro.app.launch');
    }

    /**
     * App was lauched/loaded with IM persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static inventoryManagerAppLaunch() {
        AnalyticsManager.logEvent('im.app.launch');
    }

    /**
     * App was lauched/loaded with ST persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static safetyTechnicaionAppLaunch() {
        AnalyticsManager.logEvent('st.app.launch');
    }

    /**
     * Timesheet or PM Confirmation submitted
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static timeEntryCreateSuccess() {
        AnalyticsManager.logEvent('timeentry.create.success');
    }

    /**
     * Timesheet or PM Confirmation cancelled
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static timeEntryCreateCancel() {
        AnalyticsManager.logEvent('timeentry.create.cancel');
    }

    /**
     * Operational item 'Set Tagged' clicked, optional lock number and signature added, done clicked
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static operationalItemLockSuccess() {
        AnalyticsManager.logEvent('operationalitem.lock.success');
    }

    /**
     * Operational item 'Set UnTagged' clicked, optional signature added, done clicked
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static operationalItemUnlockSuccess() {
        AnalyticsManager.logEvent('operationalitem.unlock.success');
    }

    /**
     * Work Permit page - Approvals modal 'Issue Approval' clicked, optional signature added
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static permitApprovalSuccess() {
        AnalyticsManager.logEvent('permit.approval.success');
    }

    /**
     * Goods issue completed successfully
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static goodsIssueSuccess() {
        AnalyticsManager.logEvent('Goods.issue.success');
    }

    /**
     * Goods issue completion cancelled
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static goodsIssueCancel() {
        AnalyticsManager.logEvent('Goods.issue.cancel');
    }

    /**
     * Goods receipt completed successfully
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static goodsReceiptSuccess() {
        AnalyticsManager.logEvent('Goods.receipt.success');
    }

    /**
     * Goods receipt completion cancelled
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static goodsReceiptCancel() {
        AnalyticsManager.logEvent('Goods.receipt.cancel');
    }

    /**
     * Physical inventory completed successfully
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static inventoryCountSuccess() {
        AnalyticsManager.logEvent('inventory.count.success');
    }

    /**
     * Service item is successfully completed
     * Supported on assignment type 2
     * @param {}
     * @returns {void}
     */
    static serviceItemCompleteSuccess() {
        AnalyticsManager.logEvent('ServiceItem.complete.success');
    }

    /**
     * Service order is successfully completed
     * Supported on assignment type 1
     * @param {}
     * @returns {void}
     */
    static serviceOrderCompleteSuccess() {
        AnalyticsManager.logEvent('ServiceOrder.complete.success');
    }

    /**
     * Service Confirmation Item is successfully Created
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static serviceConfirmationItemCreateSuccess() {
        AnalyticsManager.logEvent('ServiceConfirmationItem.Create.success');
    }

    /**
     * Service Request is successfully Created
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static serviceRequestCreateSuccess() {
        AnalyticsManager.logEvent('ServiceRequest.Create.success');
    }

    /**
     * Inspection is successfully Created
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static inspectionCreateSuccess() {
        AnalyticsManager.logEvent('inspection.create.success');
    }

    /**
     * Inspection is successfully Cancelled during creation
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static inspectionCreateCancel() {
        AnalyticsManager.logEvent('inspection.create.cancel');
    }

    /**
     * Search Completion
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static searchComplete() {
        AnalyticsManager.logEvent('Search.complete');
    }

    /**
     * App Launched
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static appLaunch() {
        AnalyticsManager.logEvent('app.launch');
    }

    /**
     * Return to Overview page with MT persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static maintenanceTechnicaionReturnOverview() {
        AnalyticsManager.logEvent('mt.overview.return');
    }

    /**
     * Return to Overview page with MT Std persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static maintenanceTechnicaionStdReturnOverview() {
        AnalyticsManager.logEvent('mt.std.overview.return');
    }

    /**
     * Return to Overview page with FST persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static fieldServiceTechnicaionReturnOverview() {
        AnalyticsManager.logEvent('fst.overview.return');
    }

    /**
     * Return to Overview page with FST pro persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static fieldServiceTechnicaionProReturnOverview() {
        AnalyticsManager.logEvent('fst.pro.overview.return');
    }

    /**
     * Return to Overview page with IM persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static inventoryManagerReturnOverview() {
        AnalyticsManager.logEvent('im.overview.return');
    }

    /**
     * Return to Overview page with ST/WCM persona
     * Supported on all assignment types
     * @param {}
     * @returns {void}
     */
    static safetyTechnicaionReturnOverview() {
        AnalyticsManager.logEvent('st.overview.return');
    }

    static systemLaunch(context) {
        let systemSetting = GlobalVar.getUserSystemInfo().get(context.getGlobalDefinition('/SAPAssetManager/Globals/AnalyticsManager/SystemClientRole.global').getValue());
        if (systemSetting === 'P') {
            AnalyticsManager.logEvent('production.system.launch');
        } else if (systemSetting === 'T') {
            AnalyticsManager.logEvent('test.system.launch');
        }
    }
}
