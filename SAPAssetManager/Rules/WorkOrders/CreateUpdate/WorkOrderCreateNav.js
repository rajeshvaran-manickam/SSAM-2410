import libCommon from '../../Common/Library/CommonLibrary';
import assnType from '../../Common/Library/AssignmentType';
import lamCopy from './WorkOrderCreateLAMCopy';
import WorkOrderCreateGetDefaultOrderType from './WorkOrderCreateGetDefaultOrderType';
import {WorkOrderLibrary as libWo} from '../WorkOrderLibrary';
import ManageDeepLink from '../../DeepLinks/ManageDeepLink';
import PreloadHierarchyListPickerValues from '../../HierarchyControl/PreloadHierarchyListPickerValues';

export default function WorkOrderCreateNav(clientAPI) {
    //Remove variable FollowUpFlagPage before create
    libWo.removeFollowUpFlagPage(clientAPI);

    //Set the global TransactionType variable to CREATE
    libCommon.setOnCreateUpdateFlag(clientAPI, 'CREATE');

    //set the CHANGSET flag to true
    libCommon.setOnChangesetFlag(clientAPI, true);
    libCommon.setOnWOChangesetFlag(clientAPI, true);
    libCommon.resetChangeSetActionCounter(clientAPI);

    libCommon.removeStateVariable(clientAPI, 'WODefaultPlanningPlant');
    libCommon.removeStateVariable(clientAPI, 'WODefaultWorkCenterPlant');
    libCommon.removeStateVariable(clientAPI, 'WODefaultMainWorkCenter');

    let binding = clientAPI.binding;

    if (clientAPI.constructor.name === 'SectionedTableProxy') {
        if (clientAPI.getPageProxy().getExecutedContextMenuItem()) {
            binding = clientAPI.getPageProxy().getExecutedContextMenuItem().getBinding();
        }
    }
    PreloadHierarchyListPickerValues(clientAPI, '/SAPAssetManager/Pages/WorkOrders/WorkOrderCreateUpdate.page');
    return WorkOrderCreateGetDefaultOrderType(clientAPI).then(defaultType => {
        let actionBinding = {
            PlanningPlant: assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'PlanningPlant'),
            OrderType: defaultType,
            Priority: libCommon.getAppParam(clientAPI, 'WORKORDER', 'Priority'),
        };
        try {
            actionBinding.MainWorkCenterPlant = binding.MaintPlant ? binding.MaintPlant : assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'WorkCenterPlant');
            actionBinding.MainWorkCenter = binding.WorkCenter_Nav.ExternalWorkCenterId ? binding.WorkCenter_Nav.ExternalWorkCenterId : assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'MainWorkCenter');
        } catch (exc) {
            actionBinding.MainWorkCenterPlant = assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'WorkCenterPlant');
            actionBinding.MainWorkCenter = assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'MainWorkCenter');
        }
        if (libCommon.isDefined(binding)) {
            if (binding['@odata.type'] === '#sap_mobile.MyFunctionalLocation' || binding['@odata.type'] === '#sap_mobile.FunctionalLocation') {
                actionBinding.HeaderFunctionLocation = binding.FuncLocIdIntern;
                actionBinding.HeaderFlocId = binding.FuncLocId;
                actionBinding.HeaderFlocDescription = binding.FuncLocDesc;
                actionBinding.OnlineFloc = binding['@odata.type'] === '#sap_mobile.FunctionalLocation';
                if (binding.PlanningPlant) { //Save defaults for planning plant, work center plant and main work center
                    libCommon.setStateVariable(clientAPI, 'WODefaultPlanningPlant', binding.PlanningPlant);
                }
                if (binding.WorkCenter_Main_Nav && binding.WorkCenter_Main_Nav.PlantId) {
                    libCommon.setStateVariable(clientAPI, 'WODefaultWorkCenterPlant', binding.WorkCenter_Main_Nav.PlantId);
                }
                if (binding.WorkCenter_Main_Nav && binding.WorkCenter_Main_Nav.ExternalWorkCenterId) {
                    libCommon.setStateVariable(clientAPI, 'WODefaultMainWorkCenter', binding.WorkCenter_Main_Nav.ExternalWorkCenterId);
                }
            } else if (binding['@odata.type'] === '#sap_mobile.MyEquipment') {
                actionBinding.HeaderEquipment = binding.EquipId;
                actionBinding.HeaderFunctionLocation = binding.FuncLocIdIntern || binding.FunctionalLocation?.FuncLocIdIntern;
                if (binding.PlanningPlant) { //Save defaults for planning plant, work center plant and main work center
                    libCommon.setStateVariable(clientAPI, 'WODefaultPlanningPlant', binding.PlanningPlant);
                }
                if (binding.WorkCenter_Main_Nav && binding.WorkCenter_Main_Nav.PlantId) {
                    libCommon.setStateVariable(clientAPI, 'WODefaultWorkCenterPlant', binding.WorkCenter_Main_Nav.PlantId);
                }
                if (binding.WorkCenter_Main_Nav && binding.WorkCenter_Main_Nav.ExternalWorkCenterId) {
                    libCommon.setStateVariable(clientAPI, 'WODefaultMainWorkCenter', binding.WorkCenter_Main_Nav.ExternalWorkCenterId);
                }
            } else if (binding['@odata.type'] === '#sap_mobile.Equipment') { // online use case
                actionBinding.HeaderEquipment = binding.EquipId;
                actionBinding.HeaderEquipmentDesc = binding.EquipDesc;
                actionBinding.OnlineEquipment = true;
                if (binding.PlanningPlant) { //Save defaults for planning plant
                    libCommon.setStateVariable(clientAPI, 'WODefaultPlanningPlant', binding.PlanningPlant);
                }
            } else if (binding['@odata.type'] === '#sap_mobile.WorkOrderHeader') {
                actionBinding.HeaderEquipment = binding.HeaderEquipment;
                actionBinding.HeaderEquipmentDesc = binding.EquipDesc;
                actionBinding.OnlineWorkOrder = true;
                if (binding.PlanningPlant) {
                    libCommon.setStateVariable(clientAPI, 'WODefaultPlanningPlant', binding.PlanningPlant);
                }
            }
        }
        ManageDeepLink.getInstance().setObjectVariables(clientAPI);
        clientAPI.getPageProxy().setActionBinding(actionBinding);
        libCommon.setStateVariable(clientAPI, 'LocalId', ''); //Reset before starting create
        return clientAPI.executeAction('/SAPAssetManager/Actions/WorkOrders/CreateUpdate/WorkOrderCreateChangeset.action').then(() => {
            return lamCopy(clientAPI);
        });
    });
}
