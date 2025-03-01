interface AcctIndicator {
    AcctIndicator: string;
    AcctIndicatorDesc: string;
    Confirmations: Array<Confirmation> | DeferredContent;
    WOHeaders_Nav: Array<MyWorkOrderHeader> | DeferredContent;
}

type AcctIndicatorId = string | {AcctIndicator: string};

interface EditableAcctIndicator extends Pick<AcctIndicator, "AcctIndicatorDesc"> {
}

interface ActivityReason {
    ActivityReason: string;
    Description: string;
    LossOfCertification: string;
    LossOfLotMembership: string;
    PermitForInstallation: string;
    PermitForRemoval: string;
    PermitForReplace: string;
}

type ActivityReasonId = string | {ActivityReason: string};

interface EditableActivityReason extends Pick<ActivityReason, "Description" | "LossOfCertification" | "LossOfLotMembership" | "PermitForInstallation" | "PermitForRemoval" | "PermitForReplace"> {
}

interface ActivityType {
    ActivityType: string;
    ActivityTypeDescription: string;
    NumberRange: string;
    OrderCategory: string;
    OrderType: string;
}

type ActivityTypeId = {ActivityType: string,OrderType: string};

interface EditableActivityType extends Pick<ActivityType, "ActivityType" | "ActivityTypeDescription" | "NumberRange" | "OrderCategory" | "OrderType"> {
}

interface Address {
    AddressNum: string;
    Building: string;
    City: string;
    Country: string;
    CountryVersionFlag: string;
    FirstName: string;
    Floor: string;
    HouseNum: string;
    LastName: string;
    Name: string;
    PersonalAddress: string;
    PostalCode: string;
    Region: string;
    RoomNum: string;
    Street: string;
    AddressCommunication: Array<AddressCommunication> | DeferredContent;
    AddressGeocode_Nav: AddressGeocode | null | DeferredContent;
    Country_Nav: Country | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    EquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Notification: MyNotificationHeader | null | DeferredContent;
    NotificationPartner: Array<MyNotificationPartner> | DeferredContent;
    Region_Nav: Region | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
    WorkOrderPartner: Array<MyWorkOrderPartner> | DeferredContent;
}

type AddressId = string | {AddressNum: string};

interface EditableAddress extends Pick<Address, "Building" | "City" | "Country" | "CountryVersionFlag" | "FirstName" | "Floor" | "HouseNum" | "LastName" | "Name" | "PersonalAddress" | "PostalCode" | "Region" | "RoomNum" | "Street"> {
}

interface AddressAtWork {
    AddressNum: string;
    Building: string;
    City: string;
    Country: string;
    CountryVersionFlag: string;
    Department: string;
    FirstName: string;
    Floor: string;
    Function: string;
    HouseNum: string;
    LastName: string;
    Name: string;
    PersonNum: string;
    PersonalAddress: string;
    PostalCode: string;
    Region: string;
    RoomNum: string;
    Street: string;
    AddressAtWorkComm: Array<AddressAtWorkComm> | DeferredContent;
    EquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    FuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    NotificationPartner: Array<MyNotificationPartner> | DeferredContent;
    SAPUser_Nav: Array<SAPUser> | DeferredContent;
    WorkOrderPartner: Array<MyWorkOrderPartner> | DeferredContent;
}

type AddressAtWorkId = {PersonNum: string,AddressNum: string};

interface EditableAddressAtWork extends Pick<AddressAtWork, "AddressNum" | "Building" | "City" | "Country" | "CountryVersionFlag" | "Department" | "FirstName" | "Floor" | "Function" | "HouseNum" | "LastName" | "Name" | "PersonNum" | "PersonalAddress" | "PostalCode" | "Region" | "RoomNum" | "Street"> {
}

interface AddressAtWorkComm {
    AddressNum: string;
    CommType: string;
    Country: string;
    Default: string;
    EMail: string;
    PersonNum: string;
    PreferTelType: string;
    SequenceNum: string;
    TelExtension: string;
    TelNumber: string;
    TelNumberCall: string;
    TelNumberLong: string;
    AddressAtWork: AddressAtWork | null | DeferredContent;
}

type AddressAtWorkCommId = {PersonNum: string,AddressNum: string,CommType: string,SequenceNum: string};

interface EditableAddressAtWorkComm extends Pick<AddressAtWorkComm, "AddressNum" | "CommType" | "Country" | "Default" | "EMail" | "PersonNum" | "PreferTelType" | "SequenceNum" | "TelExtension" | "TelNumber" | "TelNumberCall" | "TelNumberLong"> {
}

interface AddressCommunication {
    AddressNum: string;
    CommType: string;
    Country: string;
    Default: string;
    EMail: string;
    PersonNum: string;
    PreferTelType: string;
    SequenceNum: string;
    TelExtension: string;
    TelNumber: string;
    TelNumberCall: string;
    TelNumberLong: string;
    Address: Address | null | DeferredContent;
}

type AddressCommunicationId = {PersonNum: string,AddressNum: string,SequenceNum: string,CommType: string};

interface EditableAddressCommunication extends Pick<AddressCommunication, "AddressNum" | "CommType" | "Country" | "Default" | "EMail" | "PersonNum" | "PreferTelType" | "SequenceNum" | "TelExtension" | "TelNumber" | "TelNumberCall" | "TelNumberLong"> {
}

interface AddressDetSequence {
    Active: string;
    BusinessObject: string;
    PMObjectType: string;
    SequenceNo: string;
    SrcObjectTechEntityType: string;
    SrcObjectType: string;
}

type AddressDetSequenceId = {BusinessObject: string,PMObjectType: string,SrcObjectTechEntityType: string,SrcObjectType: string};

interface EditableAddressDetSequence extends Pick<AddressDetSequence, "Active" | "BusinessObject" | "PMObjectType" | "SequenceNo" | "SrcObjectTechEntityType" | "SrcObjectType"> {
}

interface AddressGeocode {
    AddressNumber: string;
    LogicalSystem: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    SpatialObjectGUID: string;
    SpatialObjectId: string;
    Address_Nav: Address | DeferredContent;
    Geometry_Nav: Geometry | null | DeferredContent;
}

type AddressGeocodeId = {ObjectKey: string,LogicalSystem: string,ObjectType: string,ObjectGroup: string,ObjectGroup1: string};

interface EditableAddressGeocode extends Pick<AddressGeocode, "AddressNumber" | "LogicalSystem" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "SpatialObjectGUID" | "SpatialObjectId"> {
}

interface AnswerHeader {
    AnswerId: string;
    AnswerOptionCount: string;
    Client: string;
    DisplayId: string;
    HasDependentObjects: string;
    LongDescription: string;
    Name: string;
    OrganizationName: string;
    ShortDescription: string;
    Status: string;
    Type: string;
    UoM: string;
    AnswerOptions_Nav: Array<AnswerOption> | DeferredContent;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    FormQuestion_Nav: Array<FormQuestion> | DeferredContent;
}

type AnswerHeaderId = string | {AnswerId: string};

interface EditableAnswerHeader extends Pick<AnswerHeader, "AnswerOptionCount" | "Client" | "DisplayId" | "HasDependentObjects" | "LongDescription" | "Name" | "OrganizationName" | "ShortDescription" | "Status" | "Type" | "UoM"> {
}

interface AnswerOption {
    AnswerId: string;
    DisplayId: string;
    HasDependentObjects: string;
    IsSelected: string | null;
    LongDescription: string | null;
    OptionID: string;
    ScaleDimension: string;
    ShortDescription: string;
    SortNumber: string;
    UoM: string | null;
    Value1: string;
    Value2: string | null;
    Weightage: string;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
}

type AnswerOptionId = {AnswerId: string,OptionID: string};

interface EditableAnswerOption extends Pick<AnswerOption, "AnswerId" | "DisplayId" | "HasDependentObjects" | "OptionID" | "ScaleDimension" | "ShortDescription" | "SortNumber" | "Value1" | "Weightage">, Partial<Pick<AnswerOption, "IsSelected" | "LongDescription" | "UoM" | "Value2">> {
}

interface AppParam {
    FlagNoChange: boolean;
    ParamComment: string;
    ParamGroup: string;
    ParamScope: string;
    ParamType: string;
    ParamValue: string;
    ParameterName: string;
    RecordNo: string;
}

type AppParamId = string | {RecordNo: string};

interface EditableAppParam extends Pick<AppParam, "FlagNoChange" | "ParamComment" | "ParamGroup" | "ParamScope" | "ParamType" | "ParamValue" | "ParameterName"> {
}

interface AssetCentralEquipmentIndicator {
    AINEquipmentGUID: string;
    AggregatedValue: string | null;
    EquipId: string;
    IndicatorCategory: string | null;
    IndicatorCategoryDescription: string | null;
    IndicatorColorCode: string | null;
    IndicatorDesc: string;
    IndicatorGroupDesc: string;
    IndicatorGroupId: string;
    IndicatorGroupInternalId: string;
    IndicatorGroupName: string;
    IndicatorId: string | null;
    IndicatorInstanceId: string;
    IndicatorInternalId: string | null;
    IndicatorName: string;
    IndicatorType: string | null;
    MaximumThreshold: string | null;
    MinimumThreshold: string | null;
    NormalFlag: string | null;
    TemplateId: string | null;
    TemplateInternalId: string | null;
    ThresholdDesc: string | null;
    Trend: string | null;
    UoMDescription: string | null;
    UpdateTimeStamp: string | null;
    Equipment_Nav: MyEquipment | null | DeferredContent;
}

type AssetCentralEquipmentIndicatorId = {AINEquipmentGUID: string,IndicatorInstanceId: string,IndicatorGroupId: string};

interface EditableAssetCentralEquipmentIndicator extends Pick<AssetCentralEquipmentIndicator, "AINEquipmentGUID" | "EquipId" | "IndicatorDesc" | "IndicatorGroupDesc" | "IndicatorGroupId" | "IndicatorGroupInternalId" | "IndicatorGroupName" | "IndicatorInstanceId" | "IndicatorName">, Partial<Pick<AssetCentralEquipmentIndicator, "AggregatedValue" | "IndicatorCategory" | "IndicatorCategoryDescription" | "IndicatorColorCode" | "IndicatorId" | "IndicatorInternalId" | "IndicatorType" | "MaximumThreshold" | "MinimumThreshold" | "NormalFlag" | "TemplateId" | "TemplateInternalId" | "ThresholdDesc" | "Trend" | "UoMDescription" | "UpdateTimeStamp">> {
}

interface AssetCentralObjectLink {
    AINObjectId: string;
    AINObjectType: string;
    EAMObjectId: string;
    EAMObjectType: string;
    EquipId: string;
    FuncLocIdIntern: string;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
}

type AssetCentralObjectLinkId = string | {AINObjectId: string};

interface EditableAssetCentralObjectLink extends Pick<AssetCentralObjectLink, "AINObjectType" | "EAMObjectId" | "EAMObjectType" | "EquipId" | "FuncLocIdIntern"> {
}

interface AttendanceType {
    AttendanceType: string;
    AttendanceTypeText: string;
    IsNonWorking: string;
    MaxDuration: string;
    MinDuration: string;
    PersonnelArea: string;
    PersonnelSubarea: string;
    PersonnelSubareaGrouping: string;
}

type AttendanceTypeId = {PersonnelSubareaGrouping: string,AttendanceType: string,PersonnelArea: string,PersonnelSubarea: string};

interface EditableAttendanceType extends Pick<AttendanceType, "AttendanceType" | "AttendanceTypeText" | "IsNonWorking" | "MaxDuration" | "MinDuration" | "PersonnelArea" | "PersonnelSubarea" | "PersonnelSubareaGrouping"> {
}

interface BOMHeader {
    AlternativeBOM: string;
    BOMCategory: string;
    BOMDescription: string;
    BOMGroup: string;
    BOMId: string;
    BOMStatus: string;
    BaseQuantity: string;
    BaseUoM: string;
    Counter: string;
    ValidFrom: string;
    ValidTo: string;
    BOMItems_Nav: Array<BOMItem> | DeferredContent;
    EquiBOMs_Nav: Array<EquipmentBOM> | DeferredContent;
    FLocBOMs_Nav: Array<FunctionalLocationBOM> | DeferredContent;
    MaterialBOM_Nav: Array<MaterialBOM> | DeferredContent;
}

type BOMHeaderId = {BOMId: string,BOMCategory: string};

interface EditableBOMHeader extends Pick<BOMHeader, "AlternativeBOM" | "BOMCategory" | "BOMDescription" | "BOMGroup" | "BOMId" | "BOMStatus" | "BaseQuantity" | "BaseUoM" | "Counter" | "ValidFrom" | "ValidTo"> {
}

interface BOMItem {
    BOMCategory: string;
    BOMId: string;
    BOMPath: string;
    ChildBoMCategory: string;
    ChildBoMId: string;
    ChildBoMUsage: string;
    ChildItemNode: string;
    Component: string;
    Counter: string;
    DocDesc: string;
    InheritedItemNode: string;
    ItemCategory: string;
    ItemGroup: string;
    ItemId: string;
    ItemNode: string;
    ItemText1: string;
    ItemText2: string;
    MaterialDesc: string;
    MaterialNum: string;
    ObjectType: string;
    PMAssembly: string;
    Quantity: string;
    RequiredComponent: string;
    Sort: string;
    UoM: string;
    ValidFrom: string;
    ValidTo: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    ItemCategory_Nav: ItemCategory | null | DeferredContent;
}

type BOMItemId = {BOMId: string,ItemNode: string,BOMCategory: string};

interface EditableBOMItem extends Pick<BOMItem, "BOMCategory" | "BOMId" | "BOMPath" | "ChildBoMCategory" | "ChildBoMId" | "ChildBoMUsage" | "ChildItemNode" | "Component" | "Counter" | "DocDesc" | "InheritedItemNode" | "ItemCategory" | "ItemGroup" | "ItemId" | "ItemNode" | "ItemText1" | "ItemText2" | "MaterialDesc" | "MaterialNum" | "ObjectType" | "PMAssembly" | "Quantity" | "RequiredComponent" | "Sort" | "UoM" | "ValidFrom" | "ValidTo"> {
}

interface BlockingStatus {
    DeliveryBlock: string;
    DeliveryBlockDesc: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
}

type BlockingStatusId = string | {DeliveryBlock: string};

interface EditableBlockingStatus extends Pick<BlockingStatus, "DeliveryBlockDesc"> {
}

interface BusinessArea {
    BusinessArea: string;
    BusinessAreaDesc: string;
}

type BusinessAreaId = string | {BusinessArea: string};

interface EditableBusinessArea extends Pick<BusinessArea, "BusinessAreaDesc"> {
}

interface BusinessPartner {
    AddressNum: string;
    BPNum: string;
    BPType: string;
    CostCenter: string;
    FirstName: string;
    FullName: string;
    LastName: string;
    OrgName1: string;
    OrgName2: string;
    PersonNum: string;
    UserName: string;
    Address: Address | DeferredContent;
    AddressAtWork: AddressAtWork | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    EquipmentPartner: MyEquipPartner | null | DeferredContent;
    FunctionalLocPartner: MyFuncLocPartner | null | DeferredContent;
    NotificationPartner: MyNotificationPartner | null | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
    WCMApplicationPartner_Nav: WCMApplicationPartner | null | DeferredContent;
    WCMApprovalPartner_Nav: WCMApprovalPartner | null | DeferredContent;
    WCMDocumentPartner_Nav: WCMDocumentPartner | null | DeferredContent;
    WorkOrderPartner: MyWorkOrderPartner | null | DeferredContent;
}

type BusinessPartnerId = string | {BPNum: string};

interface EditableBusinessPartner extends Pick<BusinessPartner, "AddressNum" | "BPType" | "CostCenter" | "FirstName" | "FullName" | "LastName" | "OrgName1" | "OrgName2" | "PersonNum" | "UserName"> {
}

interface COActivityType {
    ActivityType: string;
    ActivityTypeDescription: string;
    ControllingArea: string;
    CostCenter: string;
    CostCenterDescription: string;
    FiscalYear: string;
    IsOvertime: string;
}

type COActivityTypeId = {FiscalYear: string,CostCenter: string,ControllingArea: string,ActivityType: string};

interface EditableCOActivityType extends Pick<COActivityType, "ActivityType" | "ActivityTypeDescription" | "ControllingArea" | "CostCenter" | "CostCenterDescription" | "FiscalYear" | "IsOvertime"> {
}

interface CategorizationSchema {
    CategoryDescription: string;
    CategoryGuid: string;
    CategoryGuid32: string;
    CategoryID: string;
    CategoryLevel: string;
    CategoryName: string;
    Code: string;
    CodeCatalog: string;
    CodeGroup: string;
    CodeText: string;
    NodeLeaf: string;
    PareGuid: string;
    PareGuid32: string;
    SchemaGuid: string;
    SchemaGuid32: string;
    SchemaID: string;
    SubjectProfile: string;
    S4ConfItemCat1_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat2_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat3_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat4_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfirmationCat1_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat2_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat3_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat4_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4OrderCat1_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat2_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat3_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat4_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4RequestCat1_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat1_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat2_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat2_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat3_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat3_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat4_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat4_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4ServItemCat1_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat2_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat3_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat4_Nav: Array<S4ServiceItem> | DeferredContent;
}

type CategorizationSchemaId = {SchemaGuid: string,CategoryGuid: string};

interface EditableCategorizationSchema extends Pick<CategorizationSchema, "CategoryDescription" | "CategoryGuid" | "CategoryGuid32" | "CategoryID" | "CategoryLevel" | "CategoryName" | "Code" | "CodeCatalog" | "CodeGroup" | "CodeText" | "NodeLeaf" | "PareGuid" | "PareGuid32" | "SchemaGuid" | "SchemaGuid32" | "SchemaID" | "SubjectProfile"> {
}

interface CatsTimesheet {
    Activity: string;
    ActivityType: string;
    AttendAbsenceType: string;
    ControllerArea: string;
    CostCenter: string;
    Counter: string;
    Date: string | null;
    DocumentNumber: string;
    EndTime: string | null;
    Hours: string;
    LastChangeDate: string | null;
    LastChangeTime: string;
    LongTextFlag: string;
    Network: string;
    Operation: string | null;
    PersonnelNumber: string;
    Plant: string;
    RecOrder: string | null;
    SenderCostCenter: string;
    ShortText: string;
    StartTime: string | null;
    StartTimestamp: string | null;
    Status: string;
    SubOperation: string | null;
    WBSElement: string;
    Workcenter: string;
    Employee: Employee | DeferredContent;
    MyWOHeader: MyWorkOrderHeader | null | DeferredContent;
    MyWOOperation: MyWorkOrderOperation | null | DeferredContent;
    MyWOSubOperation: MyWorkOrderSubOperation | null | DeferredContent;
    Text: Array<CatsTimesheetText> | DeferredContent;
}

type CatsTimesheetId = string | {Counter: string};

interface EditableCatsTimesheet extends Pick<CatsTimesheet, "Activity" | "ActivityType" | "AttendAbsenceType" | "ControllerArea" | "CostCenter" | "DocumentNumber" | "Hours" | "LastChangeTime" | "LongTextFlag" | "Network" | "PersonnelNumber" | "Plant" | "SenderCostCenter" | "ShortText" | "Status" | "WBSElement" | "Workcenter">, Partial<Pick<CatsTimesheet, "Date" | "EndTime" | "LastChangeDate" | "Operation" | "RecOrder" | "StartTime" | "StartTimestamp" | "SubOperation">> {
}

interface CatsTimesheetOverviewRow {
    Date: string;
    Hours: string;
    TimesheetEntry: Array<CatsTimesheet> | DeferredContent;
}

type CatsTimesheetOverviewRowId = string | {Date: string};

interface EditableCatsTimesheetOverviewRow extends Pick<CatsTimesheetOverviewRow, "Hours"> {
}

interface CatsTimesheetText {
    Counter: string;
    NewTextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjectType: string;
    TextString: string;
    TimesheetEntry: CatsTimesheet | DeferredContent;
}

type CatsTimesheetTextId = string | {Counter: string};

interface EditableCatsTimesheetText extends Pick<CatsTimesheetText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjectType" | "TextString"> {
}

interface CharValueCode {
    ValueCode1: string | null;
    ValueCode2: string | null;
    ValueRel: string;
    ClassCharValCode_Nav: Array<ClassCharacteristicValue> | DeferredContent;
    EquipCharValCode_Nav: Array<MyEquipClassCharValue> | DeferredContent;
    FuncLocCharValCode_Nav: Array<MyFuncLocClassCharValue> | DeferredContent;
}

type CharValueCodeId = string | {ValueRel: string};

interface EditableCharValueCode extends Partial<Pick<CharValueCode, "ValueCode1" | "ValueCode2">> {
}

interface Characteristic {
    AdditionalVal: string | null;
    CaseSensitive: string | null;
    CharDesc: string | null;
    CharId: string;
    CharName: string | null;
    DataType: string | null;
    EntryRequired: string | null;
    Exponent: number | null;
    FieldName: string | null;
    IntCounter: string;
    IntValueAllow: string | null;
    NumofChar: number | null;
    NumofDecimal: number | null;
    SingleValue: string | null;
    TableName: string | null;
    Template: string | null;
    UoM: string | null;
    UoMExt: string | null;
    ValueSign: string | null;
    CharacteristicValues: Array<ClassCharacteristicValue> | DeferredContent;
    ClassCharacteristics: Array<ClassCharacteristic> | DeferredContent;
    EquiClassCharValue: Array<MyEquipClassCharValue> | DeferredContent;
    FuncLocClassCharValue: Array<MyFuncLocClassCharValue> | DeferredContent;
}

type CharacteristicId = string | {CharId: string};

interface EditableCharacteristic extends Pick<Characteristic, "IntCounter">, Partial<Pick<Characteristic, "AdditionalVal" | "CaseSensitive" | "CharDesc" | "CharName" | "DataType" | "EntryRequired" | "Exponent" | "FieldName" | "IntValueAllow" | "NumofChar" | "NumofDecimal" | "SingleValue" | "TableName" | "Template" | "UoM" | "UoMExt" | "ValueSign">> {
}

interface ChecklistAssessmentQuestion {
    AINObjectId: string;
    AnswerId: string;
    AssessmentId: string;
    CLTemplateId: string;
    ChecklistType: string;
    Comments: string;
    DisplayId: string;
    FormId: string;
    GroupId: string;
    Language: string;
    ObjectId: string;
    QuestionId: string;
    SelectedAnswerOptionId: string;
    SortNumber: string;
    Status: string;
    TemplateId: string;
    Version: string;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    AnswerOption_Nav: AnswerOption | null | DeferredContent;
    ChecklistBusObject_Nav: ChecklistBusObject | null | DeferredContent;
    FormGroup_Nav: FormGroup | null | DeferredContent;
    FormQuestion_Nav: FormQuestion | null | DeferredContent;
}

type ChecklistAssessmentQuestionId = {AssessmentId: string,GroupId: string,ObjectId: string,QuestionId: string};

interface EditableChecklistAssessmentQuestion extends Pick<ChecklistAssessmentQuestion, "AINObjectId" | "AnswerId" | "AssessmentId" | "CLTemplateId" | "ChecklistType" | "Comments" | "DisplayId" | "FormId" | "GroupId" | "Language" | "ObjectId" | "QuestionId" | "SelectedAnswerOptionId" | "SortNumber" | "Status" | "TemplateId" | "Version"> {
}

interface ChecklistBusObject {
    AssessmentId: string;
    ChecklistTemplateOrder: string;
    DisplayId: string;
    EquipId: string;
    FormId: string;
    FuncLocIdIntern: string;
    ObjectId: string;
    ObjectType: string;
    Status: string;
    TemplateId: string;
    AssessmentQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    Form_Nav: Form | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
}

type ChecklistBusObjectId = {TemplateId: string,AssessmentId: string,ObjectId: string};

interface EditableChecklistBusObject extends Pick<ChecklistBusObject, "AssessmentId" | "ChecklistTemplateOrder" | "DisplayId" | "EquipId" | "FormId" | "FuncLocIdIntern" | "ObjectId" | "ObjectType" | "Status" | "TemplateId"> {
}

interface ClassCharacteristic {
    IntCounter: string;
    InternCharNum: string;
    InternClassNum: string;
    ItemId: string;
    LAMEnabled: string;
    Characteristic: Characteristic | null | DeferredContent;
    ClassDefinition: ClassDefinition | null | DeferredContent;
}

type ClassCharacteristicId = {ItemId: string,InternClassNum: string,IntCounter: string};

interface EditableClassCharacteristic extends Pick<ClassCharacteristic, "IntCounter" | "InternCharNum" | "InternClassNum" | "ItemId" | "LAMEnabled"> {
}

interface ClassCharacteristicValue {
    CharId: string;
    CharValCounter: string;
    CharValDesc: string | null;
    CharValFrom: string | null;
    CharValTo: string | null;
    CharValue: string | null;
    IntCounter: string;
    UoM: string | null;
    ValueRel: string | null;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
}

type ClassCharacteristicValueId = {CharValCounter: string,CharId: string,IntCounter: string};

interface EditableClassCharacteristicValue extends Pick<ClassCharacteristicValue, "CharId" | "CharValCounter" | "IntCounter">, Partial<Pick<ClassCharacteristicValue, "CharValDesc" | "CharValFrom" | "CharValTo" | "CharValue" | "UoM" | "ValueRel">> {
}

interface ClassDefinition {
    ClassDesc: string | null;
    ClassId: string;
    ClassStatus: string;
    ClassType: string;
    InternClassNum: string;
    ClassCharacteristics: Array<ClassCharacteristic> | DeferredContent;
    EquipClass: MyEquipClass | null | DeferredContent;
    FuncLocClass: MyFuncLocClass | null | DeferredContent;
}

type ClassDefinitionId = string | {InternClassNum: string};

interface EditableClassDefinition extends Pick<ClassDefinition, "ClassId" | "ClassStatus" | "ClassType">, Partial<Pick<ClassDefinition, "ClassDesc">> {
}

interface ClassType {
    ClassType: string;
    Description: string | null;
    Table: string | null;
    Texts: string | null;
}

type ClassTypeId = string | {ClassType: string};

interface EditableClassType extends Partial<Pick<ClassType, "Description" | "Table" | "Texts">> {
}

interface Confirmation {
    AccountingIndicator: string;
    ActivityType: string;
    ActualDuration: string;
    ActualDurationUOM: string;
    ActualWork: string;
    ActualWorkUOM: string;
    CompleteFlag: string;
    ConfirmationCounter: string;
    ConfirmationNum: string;
    CreatedBy: string;
    CreatedDate: string | null;
    CreatedTime: string;
    Description: string;
    FinalConfirmation: string;
    FinishDate: string | null;
    FinishTime: string;
    LAMObjectType: string;
    LAMTableKey: string;
    Operation: string;
    OrderID: string;
    OrderType: string;
    PersonnelNumber: string;
    Plant: string;
    PostingDate: string | null;
    ReverseIndicator: string;
    StartDate: string | null;
    StartTime: string;
    StartTimeStamp: string | null;
    SubOperation: string;
    VarianceReason: string;
    WorkCenter: string;
    AcctIndicator: AcctIndicator | DeferredContent;
    ConfirmationOverview: ConfirmationOverviewRow | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<ConfirmationLongText> | DeferredContent;
    Variance: VarianceReason | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
    WorkOrderSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type ConfirmationId = {ConfirmationNum: string,ConfirmationCounter: string};

interface EditableConfirmation extends Pick<Confirmation, "AccountingIndicator" | "ActivityType" | "ActualDuration" | "ActualDurationUOM" | "ActualWork" | "ActualWorkUOM" | "CompleteFlag" | "ConfirmationCounter" | "ConfirmationNum" | "CreatedBy" | "CreatedTime" | "Description" | "FinalConfirmation" | "FinishTime" | "LAMObjectType" | "LAMTableKey" | "Operation" | "OrderID" | "OrderType" | "PersonnelNumber" | "Plant" | "ReverseIndicator" | "StartTime" | "SubOperation" | "VarianceReason" | "WorkCenter">, Partial<Pick<Confirmation, "CreatedDate" | "FinishDate" | "PostingDate" | "StartDate" | "StartTimeStamp">> {
}

interface ConfirmationLongText {
    ConfirmationCounter: string;
    ConfirmationNum: string;
    NewTextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    Confirmation: Confirmation | DeferredContent;
}

type ConfirmationLongTextId = {ConfirmationNum: string,ConfirmationCounter: string};

interface EditableConfirmationLongText extends Pick<ConfirmationLongText, "ConfirmationCounter" | "ConfirmationNum" | "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface ConfirmationOverviewRow {
    ActualDuration: string;
    ActualDurationUOM: string;
    ActualWork: string;
    ActualWorkUOM: string;
    PostingDate: string;
    Confirmations: Array<Confirmation> | DeferredContent;
}

type ConfirmationOverviewRowId = string | {PostingDate: string};

interface EditableConfirmationOverviewRow extends Pick<ConfirmationOverviewRow, "ActualDuration" | "ActualDurationUOM" | "ActualWork" | "ActualWorkUOM"> {
}

interface ConnectionObject {
    AuthorizationGroup: string;
    ConnectionObject: string;
    Country: string;
    Description: string;
    MaintenancePlant: string;
    PoliticalRegStrutureElement: string;
    AuthorizationGroup_Nav: PMAuthorizationGroup | DeferredContent;
    ConnectionObjectMRNote_Nav: Array<ConnectionObjectMRNote> | DeferredContent;
    DeviceLocations_Nav: Array<DeviceLocation> | DeferredContent;
    Devices_Nav: Array<Device> | DeferredContent;
    FuncLocation_Nav: MyFunctionalLocation | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
    PolRegStructElement_Nav: PolRegStructElement | DeferredContent;
    Premises_Nav: Array<Premise> | DeferredContent;
    StreetRouteConnectionObject_Nav: StreetRouteConnectionObject | null | DeferredContent;
    StreetRoute_Nav: StreetRoute | null | DeferredContent;
}

type ConnectionObjectId = string | {ConnectionObject: string};

interface EditableConnectionObject extends Pick<ConnectionObject, "AuthorizationGroup" | "Country" | "Description" | "MaintenancePlant" | "PoliticalRegStrutureElement"> {
}

interface ConnectionObjectMRNote {
    ConnectionObject: string;
    NoteID: string;
    Priority: string;
    SequenceNum: string;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    MeterReaderNote_Nav: MeterReaderNote | DeferredContent;
}

type ConnectionObjectMRNoteId = {ConnectionObject: string,SequenceNum: string};

interface EditableConnectionObjectMRNote extends Pick<ConnectionObjectMRNote, "ConnectionObject" | "NoteID" | "Priority" | "SequenceNum"> {
}

interface ConsequenceCategory {
    CategoryId: string;
    GroupId: string;
    PrioritizationProfileId: string;
    Subtitle: string;
    Title: string;
    ConsequenceGroup_Nav: ConsequenceGroup | null | DeferredContent;
    ConsequenceLikelihoodMap_Nav: Array<ConsequenceLikelihoodMap> | DeferredContent;
    ConsequenceSeverity_Nav: Array<ConsequenceSeverity> | DeferredContent;
}

type ConsequenceCategoryId = {CategoryId: string,GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceCategory extends Pick<ConsequenceCategory, "CategoryId" | "GroupId" | "PrioritizationProfileId" | "Subtitle" | "Title"> {
}

interface ConsequenceGroup {
    Description: string;
    GroupId: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: Array<ConsequenceCategory> | DeferredContent;
    PrioritizationProfile_Nav: PrioritizationProfile | null | DeferredContent;
}

type ConsequenceGroupId = {GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceGroup extends Pick<ConsequenceGroup, "Description" | "GroupId" | "PrioritizationProfileId"> {
}

interface ConsequenceLikelihood {
    Description: string;
    LikelihoodId: string;
    Position: string;
    ConsequenceLikelihoodMap_Nav: Array<ConsequenceLikelihoodMap> | DeferredContent;
}

type ConsequenceLikelihoodId = string | {LikelihoodId: string};

interface EditableConsequenceLikelihood extends Pick<ConsequenceLikelihood, "Description" | "Position"> {
}

interface ConsequenceLikelihoodMap {
    CategoryId: string;
    GroupId: string;
    LikelihoodId: string;
    LikelihoodPosition: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: ConsequenceCategory | null | DeferredContent;
    ConsequenceLikelihood_Nav: ConsequenceLikelihood | null | DeferredContent;
}

type ConsequenceLikelihoodMapId = {CategoryId: string,GroupId: string,LikelihoodId: string,LikelihoodPosition: string,PrioritizationProfileId: string};

interface EditableConsequenceLikelihoodMap extends Pick<ConsequenceLikelihoodMap, "CategoryId" | "GroupId" | "LikelihoodId" | "LikelihoodPosition" | "PrioritizationProfileId"> {
}

interface ConsequenceSeverity {
    CategoryId: string;
    ConsequenceId: string;
    Description: string;
    GroupId: string;
    Position: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: ConsequenceCategory | null | DeferredContent;
}

type ConsequenceSeverityId = {CategoryId: string,ConsequenceId: string,GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceSeverity extends Pick<ConsequenceSeverity, "CategoryId" | "ConsequenceId" | "Description" | "GroupId" | "Position" | "PrioritizationProfileId"> {
}

interface ControlKey {
    Application: string;
    ConfirmationIndicator: string;
    ControlKey: string;
    ControlKeyDescription: string;
    InspCharRequired: string;
}

type ControlKeyId = {Application: string,ControlKey: string};

interface EditableControlKey extends Pick<ControlKey, "Application" | "ConfirmationIndicator" | "ControlKey" | "ControlKeyDescription" | "InspCharRequired"> {
}

interface CostCenter {
    BusinessArea: string;
    CCtrCategory: string;
    COArea: string;
    CompanyCode: string;
    CostCenter: string;
    Description: string;
    Language: string;
    LockActPCosts: string;
    Name1: string;
    PersonResp: string;
    Planpricosts: string;
    ShortText: string;
    UserResponsible: string;
    ValidFrom: string;
    ValidTo: string;
}

type CostCenterId = {COArea: string,CostCenter: string,ValidTo: string};

interface EditableCostCenter extends Pick<CostCenter, "BusinessArea" | "CCtrCategory" | "COArea" | "CompanyCode" | "CostCenter" | "Description" | "Language" | "LockActPCosts" | "Name1" | "PersonResp" | "Planpricosts" | "ShortText" | "UserResponsible" | "ValidFrom" | "ValidTo"> {
}

interface Country {
    Country: string;
    Description: string;
    DialingCode: string;
    PostalCodeLength: string;
    PostalCodeMask: string;
    PostalCodeMask2: string;
    Addresses_Nav: Array<Address> | DeferredContent;
    Regions_Nav: Array<Region> | DeferredContent;
}

type CountryId = string | {Country: string};

interface EditableCountry extends Pick<Country, "Description" | "DialingCode" | "PostalCodeLength" | "PostalCodeMask" | "PostalCodeMask2"> {
}

interface CrewList {
    CompanyCode: string | null;
    CreationTimeStamp: string;
    CrewId: string;
    CrewListNo: string;
    ListReferenceKey: string | null;
    ListType: string | null;
    OriginTimeStamp: string | null;
    Plant: string | null;
    SAPUserName: string;
    UserGuid: string;
    CrewListItems: Array<CrewListItem> | DeferredContent;
}

type CrewListId = string | {CrewId: string};

interface EditableCrewList extends Pick<CrewList, "CreationTimeStamp" | "CrewListNo" | "SAPUserName" | "UserGuid">, Partial<Pick<CrewList, "CompanyCode" | "ListReferenceKey" | "ListType" | "OriginTimeStamp" | "Plant">> {
}

interface CrewListItem {
    CatsHours: string | null;
    CatsUoM: string | null;
    CompanyCode: string | null;
    CrewId: string;
    CrewItemId: string;
    CrewItemKey: string;
    CrewItemType: string;
    Plant: string | null;
    RemovalFlag: string | null;
    RemovalTimeStamp: string | null;
    WorkDate: string | null;
    CrewList: CrewList | null | DeferredContent;
    Employee: Employee | DeferredContent;
    Fleet: Fleet | null | DeferredContent;
}

type CrewListItemId = string | {CrewItemId: string};

interface EditableCrewListItem extends Pick<CrewListItem, "CrewId" | "CrewItemKey" | "CrewItemType">, Partial<Pick<CrewListItem, "CatsHours" | "CatsUoM" | "CompanyCode" | "Plant" | "RemovalFlag" | "RemovalTimeStamp" | "WorkDate">> {
}

interface Currency {
    ALTWR: string;
    GDATU: string | null;
    ISOCD: string;
    KTEXT: string;
    SPRAS: string;
    WAERS: string;
    XPRIMARY: string;
    S4ConfirmItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ContractItems_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type CurrencyId = string | {WAERS: string};

interface EditableCurrency extends Pick<Currency, "ALTWR" | "ISOCD" | "KTEXT" | "SPRAS" | "XPRIMARY">, Partial<Pick<Currency, "GDATU">> {
}

interface Customer {
    AddressNum: string;
    Customer: string;
    CustomerAccountGroup: string;
    Name1: string;
    PartnerNum: string;
    Address_Nav: Address | DeferredContent;
    CustomerSalesData_Nav: Array<CustomerSalesData> | DeferredContent;
    NotifSales_Nav: Array<MyNotificationSales> | DeferredContent;
    OutboundDelivery_Nav: Array<OutboundDelivery> | DeferredContent;
    WOSales_Nav: Array<MyWorkOrderSales> | DeferredContent;
}

type CustomerId = string | {Customer: string};

interface EditableCustomer extends Pick<Customer, "AddressNum" | "CustomerAccountGroup" | "Name1" | "PartnerNum"> {
}

interface CustomerSalesData {
    Customer: string;
    DistributionChannel: string;
    Division: string;
    IncoTerms: string;
    IncotermsPart2: string;
    SalesOrg: string;
    Customer_Nav: Customer | DeferredContent;
}

type CustomerSalesDataId = {Customer: string,SalesOrg: string,DistributionChannel: string,Division: string};

interface EditableCustomerSalesData extends Pick<CustomerSalesData, "Customer" | "DistributionChannel" | "Division" | "IncoTerms" | "IncotermsPart2" | "SalesOrg"> {
}

interface DefectClass {
    DefectClass: string;
    QualityScore: string;
    ShortDesc: string;
    InspCode_Nav: Array<InspectionCode> | DeferredContent;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
    PMCatalogCode_Nav: Array<PMCatalogCode> | DeferredContent;
}

type DefectClassId = string | {DefectClass: string};

interface EditableDefectClass extends Pick<DefectClass, "QualityScore" | "ShortDesc"> {
}

interface DeliveryPriority {
    DeliveryPriority: string;
    Description: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
}

type DeliveryPriorityId = string | {DeliveryPriority: string};

interface EditableDeliveryPriority extends Pick<DeliveryPriority, "Description"> {
}

interface DetectionCatalog {
    DetectionCatalog: string;
    DetectionCatalogDesc: string;
    NotifType: string;
    NotifType_Nav: NotificationType | null | DeferredContent;
}

type DetectionCatalogId = string | {NotifType: string};

interface EditableDetectionCatalog extends Pick<DetectionCatalog, "DetectionCatalog" | "DetectionCatalogDesc"> {
}

interface DetectionCode {
    DetectionCatalog: string;
    DetectionCode: string;
    DetectionCodeDesc: string;
    DetectionGroup: string;
    NotifHeader_Nav: Array<MyNotificationHeader> | DeferredContent;
}

type DetectionCodeId = {DetectionCatalog: string,DetectionCode: string,DetectionGroup: string};

interface EditableDetectionCode extends Pick<DetectionCode, "DetectionCatalog" | "DetectionCode" | "DetectionCodeDesc" | "DetectionGroup"> {
}

interface DetectionGroup {
    DetectionCatalog: string;
    DetectionGroup: string;
    DetectionGroupDesc: string;
    DetectionCodes_Nav: Array<DetectionCode> | DeferredContent;
    NotifHeader_Nav: Array<MyNotificationHeader> | DeferredContent;
}

type DetectionGroupId = {DetectionCatalog: string,DetectionGroup: string};

interface EditableDetectionGroup extends Pick<DetectionGroup, "DetectionCatalog" | "DetectionGroup" | "DetectionGroupDesc"> {
}

interface Device {
    Action: string;
    ActivityDate: string | null;
    ActivityReason: string;
    ConnectionObject: string;
    Customer: string;
    Device: string;
    DeviceBlocked: boolean;
    DeviceCategory: string;
    DeviceLocation: string;
    EquipmentNum: string;
    Installation: string;
    RegisterGroup: string;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    DeviceCategory_Nav: DeviceCategory | DeferredContent;
    DeviceLocation_Nav: DeviceLocation | null | DeferredContent;
    DeviceMeterReading_Nav: Array<DeviceMeterReading> | DeferredContent;
    DisconnectObject_Nav: Array<DisconnectionObject> | DeferredContent;
    Equipment_Nav: MyEquipment | DeferredContent;
    GoodsMovement_Nav: Array<DeviceGoodsMovement> | DeferredContent;
    MeterReadings_Nav: Array<MeterReading> | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
    PeriodicMeterReading_Nav: Array<PeriodicMeterReading> | DeferredContent;
    RegisterGroup_Nav: RegisterGroup | DeferredContent;
    StreetRoute_Nav: StreetRoute | null | DeferredContent;
}

type DeviceId = string | {EquipmentNum: string};

interface EditableDevice extends Pick<Device, "Action" | "ActivityReason" | "ConnectionObject" | "Customer" | "Device" | "DeviceBlocked" | "DeviceCategory" | "DeviceLocation" | "Installation" | "RegisterGroup">, Partial<Pick<Device, "ActivityDate">> {
}

interface DeviceCategory {
    Description: string;
    DeviceCategory: string;
    RegisterGroup: string;
    Unit: string;
    Devices_Nav: Array<Device> | DeferredContent;
    Material_Nav: Material | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
}

type DeviceCategoryId = string | {DeviceCategory: string};

interface EditableDeviceCategory extends Pick<DeviceCategory, "Description" | "RegisterGroup" | "Unit"> {
}

interface DeviceGoodsMovement {
    CostCenter: string;
    EquipmentNum: string;
    MovementType: string;
    Plant: string;
    StorageLocation: string;
    Device_Nav: Device | null | DeferredContent;
}

type DeviceGoodsMovementId = string | {EquipmentNum: string};

interface EditableDeviceGoodsMovement extends Pick<DeviceGoodsMovement, "CostCenter" | "MovementType" | "Plant" | "StorageLocation"> {
}

interface DeviceLocation {
    ConnectionObject: string;
    Description: string;
    DeviceLocation: string;
    LocationAddition: string;
    Premise: string;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    DeviceLocationMRNote_Nav: Array<DeviceLocationMRNote> | DeferredContent;
    Device_Nav: Device | DeferredContent;
    FuncLocation_Nav: MyFunctionalLocation | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
    Premise_Nav: Premise | null | DeferredContent;
}

type DeviceLocationId = string | {DeviceLocation: string};

interface EditableDeviceLocation extends Pick<DeviceLocation, "ConnectionObject" | "Description" | "LocationAddition" | "Premise"> {
}

interface DeviceLocationMRNote {
    DeviceLocation: string;
    NoteID: string;
    Priority: string;
    SequenceNum: string;
    DeviceLocation_Nav: DeviceLocation | null | DeferredContent;
    MeterReaderNote_Nav: MeterReaderNote | DeferredContent;
}

type DeviceLocationMRNoteId = {SequenceNum: string,DeviceLocation: string};

interface EditableDeviceLocationMRNote extends Pick<DeviceLocationMRNote, "DeviceLocation" | "NoteID" | "Priority" | "SequenceNum"> {
}

interface DeviceMeterReading {
    ActualMeterReadingDate: string | null;
    ActualMeterReadingTime: string;
    DateMaxRead: string | null;
    EquipmentNum: string;
    MeterReaderNote: string;
    MeterReaderNum: string;
    MeterReadingActive: string;
    MeterReadingDate: string | null;
    MeterReadingDocID: string;
    MeterReadingReason: string;
    MeterReadingRecorded: string;
    MeterReadingTime: string;
    MeterReadingType: string;
    NoAmiLimit: string;
    NumberSapSegment: string;
    OrderNum: string;
    Register: string;
    SchedMeterReadingDate: string | null;
    TimeMaxReading: string;
    Device_Nav: Device | null | DeferredContent;
    MeterReading_Nav: MeterReading | null | DeferredContent;
}

type DeviceMeterReadingId = string | {MeterReadingDocID: string};

interface EditableDeviceMeterReading extends Pick<DeviceMeterReading, "ActualMeterReadingTime" | "EquipmentNum" | "MeterReaderNote" | "MeterReaderNum" | "MeterReadingActive" | "MeterReadingReason" | "MeterReadingRecorded" | "MeterReadingTime" | "MeterReadingType" | "NoAmiLimit" | "NumberSapSegment" | "OrderNum" | "Register" | "TimeMaxReading">, Partial<Pick<DeviceMeterReading, "ActualMeterReadingDate" | "DateMaxRead" | "MeterReadingDate" | "SchedMeterReadingDate">> {
}

interface DigitalSignatureApplication {
    Application: string;
    ApplicationDescription: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureObjectConfig_Nav: Array<DigitalSignatureObjectConfig> | DeferredContent;
    DigitalSignatureObject_Nav: Array<DigitalSignatureObject> | DeferredContent;
}

type DigitalSignatureApplicationId = string | {Application: string};

interface EditableDigitalSignatureApplication extends Pick<DigitalSignatureApplication, "ApplicationDescription"> {
}

interface DigitalSignatureAuthGroup {
    ApplicationId: string;
    AuthorizationGroup: string;
    AuthorizationGroupDescription: string;
    DigitalSignatureItem_Nav: Array<DigitalSignatureItem> | DeferredContent;
}

type DigitalSignatureAuthGroupId = string | {AuthorizationGroup: string};

interface EditableDigitalSignatureAuthGroup extends Pick<DigitalSignatureAuthGroup, "ApplicationId" | "AuthorizationGroupDescription"> {
}

interface DigitalSignatureHeader {
    Application: string;
    Method: string;
    Object: string;
    ObjectDescription: string;
    SignatureId: string;
    Strategy: string;
    TimeStamp: string;
    Type: string;
    Version: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureItem_Nav: Array<DigitalSignatureItem> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureMethod_Nav: DigitalSignatureMethod | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
    DigitalSignatureStrategy_Nav: DigitalSignatureStrategy | DeferredContent;
    DigitalSignatureType_Nav: DigitalSignatureType | DeferredContent;
}

type DigitalSignatureHeaderId = string | {SignatureId: string};

interface EditableDigitalSignatureHeader extends Pick<DigitalSignatureHeader, "Application" | "Method" | "Object" | "ObjectDescription" | "Strategy" | "TimeStamp" | "Type" | "Version"> {
}

interface DigitalSignatureItem {
    AuthorizationGroup: string;
    Comment: string;
    Index: number;
    IndividualSignature: string;
    Language: string;
    Process: string;
    Remark: string;
    SignatoryFirstName: string;
    SignatoryLastName: string;
    SignatureId: string;
    SignerObjectOwner: string;
    State: string;
    Step: string;
    TimeStamp: string;
    DigitalSignatureAuthGroup_Nav: DigitalSignatureAuthGroup | DeferredContent;
    DigitalSignatureHeader_Nav: DigitalSignatureHeader | DeferredContent;
}

type DigitalSignatureItemId = {Index: number,Process: string,SignatureId: string};

interface EditableDigitalSignatureItem extends Pick<DigitalSignatureItem, "AuthorizationGroup" | "Comment" | "Index" | "IndividualSignature" | "Language" | "Process" | "Remark" | "SignatoryFirstName" | "SignatoryLastName" | "SignatureId" | "SignerObjectOwner" | "State" | "Step" | "TimeStamp"> {
}

interface DigitalSignatureLink {
    Application: string;
    Notification: string;
    Object: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectNumber: string;
    ObjectType: string;
    Operation: string;
    Order: string;
    SignatureId: string;
    Strategy: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureHeader_Nav: DigitalSignatureHeader | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
    DigitalSignatureStrategy_Nav: DigitalSignatureStrategy | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    WorkOrderHeader_Nav: MyWorkOrderHeader | DeferredContent;
    WorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type DigitalSignatureLinkId = string | {SignatureId: string};

interface EditableDigitalSignatureLink extends Pick<DigitalSignatureLink, "Application" | "Notification" | "Object" | "ObjectGroup" | "ObjectGroup1" | "ObjectNumber" | "ObjectType" | "Operation" | "Order" | "Strategy"> {
}

interface DigitalSignatureMethod {
    Method: string;
    MethodDescription: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureStrategy_Nav: Array<DigitalSignatureStrategy> | DeferredContent;
}

type DigitalSignatureMethodId = string | {Method: string};

interface EditableDigitalSignatureMethod extends Pick<DigitalSignatureMethod, "MethodDescription"> {
}

interface DigitalSignatureNote {
    NoteDescription: string;
    NoteId: string;
}

type DigitalSignatureNoteId = string | {NoteId: string};

interface EditableDigitalSignatureNote extends Pick<DigitalSignatureNote, "NoteDescription"> {
}

interface DigitalSignatureObject {
    AllowComment: string;
    AllowDocumentSign: string;
    AllowObjectDescription: string;
    AllowRemark: string;
    Application: string;
    LogStructure: string;
    MetaName: string;
    Object: string;
    ObjectDescription: string;
    SignatureVersion: string;
    SubObject: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureObjectConfig_Nav: DigitalSignatureObjectConfig | null | DeferredContent;
}

type DigitalSignatureObjectId = {Application: string,Object: string};

interface EditableDigitalSignatureObject extends Pick<DigitalSignatureObject, "AllowComment" | "AllowDocumentSign" | "AllowObjectDescription" | "AllowRemark" | "Application" | "LogStructure" | "MetaName" | "Object" | "ObjectDescription" | "SignatureVersion" | "SubObject"> {
}

interface DigitalSignatureObjectConfig {
    Application: string;
    Object: string;
    ObjectType: string;
    TableFields: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
}

type DigitalSignatureObjectConfigId = {Application: string,Object: string};

interface EditableDigitalSignatureObjectConfig extends Pick<DigitalSignatureObjectConfig, "Application" | "Object" | "ObjectType" | "TableFields"> {
}

interface DigitalSignatureStrategy {
    AllowComment: boolean;
    AllowDocument: boolean;
    AllowRemark: boolean;
    AllowVerification: boolean;
    ApplicationId: string;
    Method: string;
    Strategy: string;
    StrategyDescription: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureMethod_Nav: DigitalSignatureMethod | DeferredContent;
}

type DigitalSignatureStrategyId = string | {Strategy: string};

interface EditableDigitalSignatureStrategy extends Pick<DigitalSignatureStrategy, "AllowComment" | "AllowDocument" | "AllowRemark" | "AllowVerification" | "ApplicationId" | "Method" | "StrategyDescription"> {
}

interface DigitalSignatureType {
    SignatureType: string;
    SignatureTypeDescription: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
}

type DigitalSignatureTypeId = string | {SignatureType: string};

interface EditableDigitalSignatureType extends Pick<DigitalSignatureType, "SignatureTypeDescription"> {
}

interface DisconnectActivityStatus {
    Description: string;
    ReconnectFlag: string;
    Status: string;
    DisconnectActivity_Nav: Array<DisconnectionActivity> | DeferredContent;
}

type DisconnectActivityStatusId = string | {Status: string};

interface EditableDisconnectActivityStatus extends Pick<DisconnectActivityStatus, "Description" | "ReconnectFlag"> {
}

interface DisconnectDocStatus {
    Description: string;
    Status: string;
    DisconnectDoc_Nav: Array<DisconnectionDocument> | DeferredContent;
}

type DisconnectDocStatusId = string | {Status: string};

interface EditableDisconnectDocStatus extends Pick<DisconnectDocStatus, "Description"> {
}

interface DisconnectionActivity {
    ActivityDate: string | null;
    ActivityNum: string;
    ActivityStatus: string;
    ActivityTime: string;
    ActivityType: string;
    BudgetBillingPlanChanged: string;
    CompleteFlag: string;
    DisconnectCanceled: string;
    DisconnectFlag: string;
    DisconnectType: string;
    DocNum: string;
    NewOrderFlag: string;
    OrderId: string;
    DisconnectActivityStatus_Nav: DisconnectActivityStatus | null | DeferredContent;
    DisconnectActivityType_Nav: DisconnectionActivityType | DeferredContent;
    DisconnectDoc_Nav: DisconnectionDocument | null | DeferredContent;
    DisconnectObject_Nav: Array<DisconnectionObject> | DeferredContent;
    DisconnectType_Nav: DisconnectionType | null | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | DeferredContent;
}

type DisconnectionActivityId = {ActivityNum: string,DocNum: string};

interface EditableDisconnectionActivity extends Pick<DisconnectionActivity, "ActivityNum" | "ActivityStatus" | "ActivityTime" | "ActivityType" | "BudgetBillingPlanChanged" | "CompleteFlag" | "DisconnectCanceled" | "DisconnectFlag" | "DisconnectType" | "DocNum" | "NewOrderFlag" | "OrderId">, Partial<Pick<DisconnectionActivity, "ActivityDate">> {
}

interface DisconnectionActivityType {
    ActivityType: string;
    ActivityTypeDescription: string;
    DisconnectionActivity_Nav: DisconnectionActivity | DeferredContent;
}

type DisconnectionActivityTypeId = string | {ActivityType: string};

interface EditableDisconnectionActivityType extends Pick<DisconnectionActivityType, "ActivityTypeDescription"> {
}

interface DisconnectionDocument {
    DisconnectReason: string;
    DocNum: string;
    DocStatus: string;
    ProcessVariant: string;
    RefObjKey: string;
    RefObjType: string;
    DisconnectActivity_Nav: Array<DisconnectionActivity> | DeferredContent;
    DisconnectDocStatus_Nav: DisconnectDocStatus | null | DeferredContent;
    DisconnectObject_Nav: Array<DisconnectionObject> | DeferredContent;
    DisconnectReason_Nav: DisconnectionReason | null | DeferredContent;
    ProcessVariant_Nav: ProcessVariant | null | DeferredContent;
}

type DisconnectionDocumentId = string | {DocNum: string};

interface EditableDisconnectionDocument extends Pick<DisconnectionDocument, "DisconnectReason" | "DocStatus" | "ProcessVariant" | "RefObjKey" | "RefObjType"> {
}

interface DisconnectionObject {
    ActivityDate: string | null;
    ActivityNum: string;
    ActivityTime: string;
    DeviceLocation: string;
    DisconnectStatus: string;
    DisconnectType: string;
    DocNum: string;
    EquipmentNum: string;
    ObjectNum: string;
    ObjectType: string;
    Device_Nav: Device | null | DeferredContent;
    DisconnectActivity_Nav: DisconnectionActivity | null | DeferredContent;
    DisconnectDoc_Nav: DisconnectionDocument | null | DeferredContent;
}

type DisconnectionObjectId = {ActivityNum: string,ObjectNum: string,DocNum: string};

interface EditableDisconnectionObject extends Pick<DisconnectionObject, "ActivityNum" | "ActivityTime" | "DeviceLocation" | "DisconnectStatus" | "DisconnectType" | "DocNum" | "EquipmentNum" | "ObjectNum" | "ObjectType">, Partial<Pick<DisconnectionObject, "ActivityDate">> {
}

interface DisconnectionReason {
    Description: string;
    DisconnectionReason: string;
    DisconnectDocument_Nav: DisconnectionDocument | null | DeferredContent;
}

type DisconnectionReasonId = string | {DisconnectionReason: string};

interface EditableDisconnectionReason extends Pick<DisconnectionReason, "Description"> {
}

interface DisconnectionType {
    Description: string;
    DisconnectionType: string;
    DisconnectActivity_Nav: Array<DisconnectionActivity> | DeferredContent;
}

type DisconnectionTypeId = string | {DisconnectionType: string};

interface EditableDisconnectionType extends Pick<DisconnectionType, "Description"> {
}

interface DistributionChannel {
    DistributionChannelCode: string;
    DistributionChannelText: string;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
}

type DistributionChannelId = string | {DistributionChannelCode: string};

interface EditableDistributionChannel extends Pick<DistributionChannel, "DistributionChannelText"> {
}

interface Division {
    Description: string;
    Division: string;
    Installations_Nav: Array<Installation> | DeferredContent;
    Plants_NAV: Array<Plant> | DeferredContent;
    RegisterGroups_Nav: Array<RegisterGroup> | DeferredContent;
}

type DivisionId = string | {Division: string};

interface EditableDivision extends Pick<Division, "Description"> {
}

interface Document {
    Description: string;
    DocumentID: string;
    FileName: string;
    FileSize: string;
    FileType: string;
    MimeType: string;
    ObjectKey: string;
    ObjectLink: string;
    ObjectType: string;
    StorageCategory: string;
    URL: string;
    WSApplication: string;
    EquipDocuments: Array<MyEquipDocument> | DeferredContent;
    FileExtension_Nav: FileExtension | DeferredContent;
    FuncLocDocuments: Array<MyFuncLocDocument> | DeferredContent;
    InspMethodDocs_Nav: Array<InspectionMethodDocument> | DeferredContent;
    MatDocAttachment_Nav: Array<MatDocAttachment> | DeferredContent;
    NotifDocuments: Array<MyNotifDocument> | DeferredContent;
    PRTDocuments: Array<MyWorkOrderTool> | DeferredContent;
    ReportTemplate_Nav: Array<ReportTemplate> | DeferredContent;
    WODocuments: Array<MyWorkOrderDocument> | DeferredContent;
}

type DocumentId = string | {DocumentID: string};

interface EditableDocument extends Pick<Document, "Description" | "FileName" | "FileSize" | "FileType" | "MimeType" | "ObjectKey" | "ObjectLink" | "ObjectType" | "StorageCategory" | "URL" | "WSApplication"> {
}

interface DynamicFormAttachment {
    AppName: string;
    AttachmentID: string;
    FormInstanceID: string;
    FormName: string;
    FormVersion: string;
    MimeType: string;
}

type DynamicFormAttachmentId = {FormVersion: string,FormName: string,FormInstanceID: string,AttachmentID: string,AppName: string};

interface EditableDynamicFormAttachment extends Pick<DynamicFormAttachment, "AppName" | "AttachmentID" | "FormInstanceID" | "FormName" | "FormVersion" | "MimeType"> {
}

interface DynamicFormInstance {
    AppName: string;
    ChangeToken: string;
    Content: string;
    FormInstanceID: string;
    FormName: string;
    FormStatus: string;
    FormVersion: string;
    Mandatory: string;
    ObjectKey: string;
    ObjectType: string;
    OperationNumber: string;
    OrderID: string;
    SortField: string;
    TechnicalEntityKey: string;
    TechnicalEntityType: string;
    DynamicFormTemplate_Nav: DynamicFormTemplate | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type DynamicFormInstanceId = {FormVersion: string,FormName: string,FormInstanceID: string,AppName: string};

interface EditableDynamicFormInstance extends Pick<DynamicFormInstance, "AppName" | "ChangeToken" | "Content" | "FormInstanceID" | "FormName" | "FormStatus" | "FormVersion" | "Mandatory" | "ObjectKey" | "ObjectType" | "OperationNumber" | "OrderID" | "SortField" | "TechnicalEntityKey" | "TechnicalEntityType"> {
}

interface DynamicFormTemplate {
    AppName: string;
    Content: string;
    FormName: string;
    FormVersion: string;
    DynamicFormInstance_Nav: Array<DynamicFormInstance> | DeferredContent;
}

type DynamicFormTemplateId = {AppName: string,FormName: string,FormVersion: string};

interface EditableDynamicFormTemplate extends Pick<DynamicFormTemplate, "AppName" | "Content" | "FormName" | "FormVersion"> {
}

interface EAMOverallStatusConfig {
    Description: string;
    EAMOverallStatus: string;
    EAMOverallStatusProfile: string;
    EntityType: string;
    IsLogged: string;
    IsSkippable: string;
    MobileStatus: string;
    ObjectType: string;
    OverallStatusLabel: string;
    Phase: string;
    PhaseDesc: string;
    SequenceNum: number;
    Status: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    StatusProfile: string;
    Subphase: string;
    SubphaseDesc: string;
    SystemStatus: string;
    TransitionTextKey: string;
    UserStatus: string;
    NextOverallStatusSeq_Nav: Array<EAMOverallStatusSeq> | DeferredContent;
    OverallStatusSeq_Nav: Array<EAMOverallStatusSeq> | DeferredContent;
    PMMobileStatus_Nav: Array<PMMobileStatus> | DeferredContent;
}

type EAMOverallStatusConfigId = {EAMOverallStatusProfile: string,Status: string};

interface EditableEAMOverallStatusConfig extends Pick<EAMOverallStatusConfig, "Description" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "EntityType" | "IsLogged" | "IsSkippable" | "MobileStatus" | "ObjectType" | "OverallStatusLabel" | "Phase" | "PhaseDesc" | "SequenceNum" | "Status" | "StatusAttribute1" | "StatusAttribute2" | "StatusProfile" | "Subphase" | "SubphaseDesc" | "SystemStatus" | "TransitionTextKey" | "UserStatus"> {
}

interface EAMOverallStatusSeq {
    CannotBeSkipped: string;
    EAMNextOverallStatus: string;
    EAMOverallStatus: string;
    EAMOverallStatusProfile: string;
    FromStatus: string;
    IsMandatory: string;
    PhaseModelRelevant: string;
    RoleType: string;
    ToStatus: string;
    TransitionType: string;
    UserPersona: string;
    NextOverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
    OverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
}

type EAMOverallStatusSeqId = {UserPersona: string,EAMOverallStatusProfile: string,RoleType: string,FromStatus: string,ToStatus: string};

interface EditableEAMOverallStatusSeq extends Pick<EAMOverallStatusSeq, "CannotBeSkipped" | "EAMNextOverallStatus" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "FromStatus" | "IsMandatory" | "PhaseModelRelevant" | "RoleType" | "ToStatus" | "TransitionType" | "UserPersona"> {
}

interface Effect {
    Effect: string;
    EffectDescription: string;
    NotificationHeaders_Nav: Array<MyNotificationHeader> | DeferredContent;
}

type EffectId = string | {Effect: string};

interface EditableEffect extends Pick<Effect, "EffectDescription"> {
}

interface Employee {
    ControllingArea: string;
    EmployeeName: string;
    EndDate: string | null;
    FirstName: string;
    LastName: string;
    PartnerNumber: string;
    PersonnelArea: string;
    PersonnelNumber: string;
    StartDate: string | null;
    UserID: string;
    CatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    CrewListItem: Array<CrewListItem> | DeferredContent;
    EmployeeAddress_Nav: Array<EmployeeAddress> | DeferredContent;
    EmployeeCommunications_Nav: Array<EmployeeCommunication> | DeferredContent;
    MyEquipPartners_Nav: Array<MyEquipPartner> | DeferredContent;
    MyFuncLocPartners_Nav: Array<MyFuncLocPartner> | DeferredContent;
    MyNotifPartners_Nav: Array<MyNotificationPartner> | DeferredContent;
    MyWorkOrderPartners_Nav: Array<MyWorkOrderPartner> | DeferredContent;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
    WorkOrderOperation_Nav: Array<MyWorkOrderOperation> | DeferredContent;
}

type EmployeeId = string | {PersonnelNumber: string};

interface EditableEmployee extends Pick<Employee, "ControllingArea" | "EmployeeName" | "FirstName" | "LastName" | "PartnerNumber" | "PersonnelArea" | "UserID">, Partial<Pick<Employee, "EndDate" | "StartDate">> {
}

interface EmployeeAddress {
    AddressType: string;
    Building: string;
    CareOfName: string;
    City: string;
    Country: string;
    District: string;
    Floor: string;
    HouseNum: string;
    PersonnelNum: string;
    PostalCode: string;
    SequenceNum: string;
    Street: string;
    Employee_Nav: Employee | DeferredContent;
}

type EmployeeAddressId = {SequenceNum: string,PersonnelNum: string,AddressType: string};

interface EditableEmployeeAddress extends Pick<EmployeeAddress, "AddressType" | "Building" | "CareOfName" | "City" | "Country" | "District" | "Floor" | "HouseNum" | "PersonnelNum" | "PostalCode" | "SequenceNum" | "Street"> {
}

interface EmployeeCommunication {
    CommunicationType: string;
    PersonnelNumber: string;
    SequenceNum: string;
    Value: string;
    Employee_Nav: Employee | DeferredContent;
}

type EmployeeCommunicationId = {CommunicationType: string,PersonnelNumber: string,SequenceNum: string};

interface EditableEmployeeCommunication extends Pick<EmployeeCommunication, "CommunicationType" | "PersonnelNumber" | "SequenceNum" | "Value"> {
}

interface EquipObjectType {
    ObjectType: string;
    ObjectTypeDesc: string;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
}

type EquipObjectTypeId = string | {ObjectType: string};

interface EditableEquipObjectType extends Pick<EquipObjectType, "ObjectTypeDesc"> {
}

interface EquipTemplate {
    EquipCategory: string;
    EquipId: string;
}

type EquipTemplateId = string | {EquipId: string};

interface EditableEquipTemplate extends Pick<EquipTemplate, "EquipCategory"> {
}

interface EquipmentBOM {
    AlternativeBOM: string;
    BOMCategory: string;
    BOMId: string;
    BOMUsage: string;
    EquipId: string;
    Plant: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
}

type EquipmentBOMId = {BOMId: string,AlternativeBOM: string,EquipId: string,BOMUsage: string,Plant: string,BOMCategory: string};

interface EditableEquipmentBOM extends Pick<EquipmentBOM, "AlternativeBOM" | "BOMCategory" | "BOMId" | "BOMUsage" | "EquipId" | "Plant"> {
}

interface EquipmentCategory {
    EquipCategory: string;
    EquipCategoryDesc: string;
    EquipTemplate_Nav: Array<EquipTemplate> | DeferredContent;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
}

type EquipmentCategoryId = string | {EquipCategory: string};

interface EditableEquipmentCategory extends Pick<EquipmentCategory, "EquipCategoryDesc"> {
}

interface FSMFormAttachment {
    Category: string;
    CreatedTimestamp: string | null;
    Description: string;
    DocumentId: string;
    FileContent: string;
    FileName: string;
    Id: string;
    Inactive: boolean;
    LastChangedTimestamp: string | null;
    MimeType: string;
    ObjectId: string;
    ObjectType: string;
    Status: string;
    Title: string;
    Type: string;
}

type FSMFormAttachmentId = string | {Id: string};

interface EditableFSMFormAttachment extends Pick<FSMFormAttachment, "Category" | "Description" | "DocumentId" | "FileContent" | "FileName" | "Inactive" | "MimeType" | "ObjectId" | "ObjectType" | "Status" | "Title" | "Type">, Partial<Pick<FSMFormAttachment, "CreatedTimestamp" | "LastChangedTimestamp">> {
}

interface FSMFormInstance {
    ActivityId: string;
    Branches: string;
    ChecklistId: string;
    Closed: boolean;
    Content: string;
    CreatePerson: string;
    CreatedTimeStamp: string | null;
    DataVersion: number;
    Description: string;
    ExternalId: string;
    Groups: string;
    Id: string;
    Inactive: boolean;
    Language: string;
    LastChanged: string;
    LastChangedBy: string;
    LastChangedTimestamp: string | null;
    Location: string;
    Mandatory: boolean;
    Operation: string;
    OrgLevel: string;
    Owners: string;
    ResponsiblePerson: string;
    SyncObjectKPIs: string;
    SyncStatus: string;
    Template: string;
    UdfMetaGroups: string;
    UdfValues: string;
    Version: number;
    WorkOrder: string;
    FSMFormTemplate_Nav: FSMFormTemplate | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | DeferredContent;
}

type FSMFormInstanceId = string | {Id: string};

interface EditableFSMFormInstance extends Pick<FSMFormInstance, "ActivityId" | "Branches" | "ChecklistId" | "Closed" | "Content" | "CreatePerson" | "DataVersion" | "Description" | "ExternalId" | "Groups" | "Inactive" | "Language" | "LastChanged" | "LastChangedBy" | "Location" | "Mandatory" | "Operation" | "OrgLevel" | "Owners" | "ResponsiblePerson" | "SyncObjectKPIs" | "SyncStatus" | "Template" | "UdfMetaGroups" | "UdfValues" | "Version" | "WorkOrder">, Partial<Pick<FSMFormInstance, "CreatedTimeStamp" | "LastChangedTimestamp">> {
}

interface FSMFormTemplate {
    Branches: string;
    ChecklistCategory: string;
    Content: string;
    CreatePerson: string;
    CreatedTimeStamp: string | null;
    DefaultLanguage: string;
    Description: string;
    ExternalId: string;
    Groups: string;
    HazardType: string;
    Id: string;
    Inactive: boolean;
    LastChanged: string;
    LastChangedBy: string;
    Location: string;
    Name: string;
    OrgLevel: string;
    Owners: string;
    Status: string;
    SyncObjectKPIs: string;
    SyncStatus: string;
    Tag: string;
    UdfMetaGroups: string;
    UdfValues: string;
    Version: number;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
}

type FSMFormTemplateId = string | {Id: string};

interface EditableFSMFormTemplate extends Pick<FSMFormTemplate, "Branches" | "ChecklistCategory" | "Content" | "CreatePerson" | "DefaultLanguage" | "Description" | "ExternalId" | "Groups" | "HazardType" | "Inactive" | "LastChanged" | "LastChangedBy" | "Location" | "Name" | "OrgLevel" | "Owners" | "Status" | "SyncObjectKPIs" | "SyncStatus" | "Tag" | "UdfMetaGroups" | "UdfValues" | "Version">, Partial<Pick<FSMFormTemplate, "CreatedTimeStamp">> {
}

interface FileExtension {
    Description: string;
    Extension: string;
    Type: string;
    Document_Nav: Array<Document> | DeferredContent;
}

type FileExtensionId = string | {Type: string};

interface EditableFileExtension extends Pick<FileExtension, "Description" | "Extension"> {
}

interface FldLogsContainer {
    VoyageStageUUID: string;
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    TripCounter: string;
    ContainerStatus: string;
    ProcessingStartDat: string | null;
    ProcessingEndDate: string | null;
    SourcePlant: string;
    ShipmentID: string;
    ProcessType: string;
    DestinationPlant: string;
    ContainerUUID: string;
    ContainerUnitID: string;
    AllProcessed: string;
    Delete: string;
    ChangedOn: string;
    VoyageUUID: string;
    VoyageNumber: string;
    ShippingPoint: string;
    ReceivingPoint: string;
    IsContainerReleased: string;
    ParentCtnID: string;
    SupplierNo: string;
    Ctnclassification: string;
    ContainerSourcePlant: string;
    ContainerDestPlant: string;
    FldLogsContainerItem_Nav: Array<FldLogsContainerItem> | DeferredContent;
    FldLogsContainerStatus_Nav: FldLogsContainerStatus | null | DeferredContent;
    FldLogsPackage_Nav: Array<FldLogsPackage> | DeferredContent;
}

type FldLogsContainerId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,TripCounter: string};

interface EditableFldLogsContainer extends Pick<FldLogsContainer, "VoyageStageUUID" | "ContainerID" | "DispatchDate" | "DispatchLoc" | "TripCounter" | "ContainerStatus" | "SourcePlant" | "ShipmentID" | "ProcessType" | "DestinationPlant" | "ContainerUUID" | "ContainerUnitID" | "AllProcessed" | "Delete" | "ChangedOn" | "VoyageUUID" | "VoyageNumber" | "ShippingPoint" | "ReceivingPoint" | "IsContainerReleased" | "ParentCtnID" | "SupplierNo" | "Ctnclassification" | "ContainerSourcePlant" | "ContainerDestPlant">, Partial<Pick<FldLogsContainer, "ProcessingStartDat" | "ProcessingEndDate">> {
}

interface FldLogsContainerItem {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    HandlingUnitID: string;
    ReferenceDocNumber: string;
    TripCounter: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string;
    Comments: string;
    Comments1: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocument: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    FldLogsRetServicePurOrd: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    HandlingUnitExternalID: string;
    HandlingUnitQuantity: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    InboundDeliveryItem: string;
    InspectionLot: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MaintenanceOrder: string;
    MatDocItem: string;
    MatDocYear: string;
    Material: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    OutboundDeliveryItem: string;
    PackagingMaterial: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocument: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceDocumentLongNumber: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RefurbishmentOrder: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    RetblQtyBaseUnit: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    RetblQtyOrderUnit: string;
    ReturnStatus: string;
    SerialNumber: string;
    ShipmentItemID: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StockTransportOrder: string;
    StorageType: string;
    SubcontractingPO: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    WarehouseTask: string;
}

type FldLogsContainerItemId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,HandlingUnitID: string,ReferenceDocNumber: string,TripCounter: string};

interface EditableFldLogsContainerItem extends Pick<FldLogsContainerItem, "ContainerID" | "DispatchDate" | "DispatchLoc" | "HandlingUnitID" | "ReferenceDocNumber" | "TripCounter" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "ChangedOn" | "Comments" | "Comments1" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocument" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "FldLogsRetServicePurOrd" | "GoodsReceivingPoint" | "HandlingDecision" | "HandlingUnitExternalID" | "HandlingUnitQuantity" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "InboundDeliveryItem" | "InspectionLot" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MaintenanceOrder" | "MatDocItem" | "MatDocYear" | "Material" | "MaterialDocument" | "OutboundDelivery" | "OutboundDeliveryItem" | "PackagingMaterial" | "PackagingType" | "ProcessType" | "PurchasingDocument" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceDocumentLongNumber" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RefurbishmentOrder" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "RetblQtyBaseUnit" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "RetblQtyOrderUnit" | "ReturnStatus" | "SerialNumber" | "ShipmentItemID" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StockTransportOrder" | "StorageType" | "SubcontractingPO" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "WarehouseTask"> {
}

interface FldLogsContainerItemStatus {
    FldContainerItemStatus: string;
    FldContainerItemStatusDesc: string;
}

type FldLogsContainerItemStatusId = string | {FldContainerItemStatus: string};

interface EditableFldLogsContainerItemStatus extends Pick<FldLogsContainerItemStatus, "FldContainerItemStatusDesc"> {
}

interface FldLogsVoyage {
    VoyageStageUUID: string;
    SourcePlant: string;
    DestinationPlant: string;
    SourceStage: string;
    DestinationStage: string;
    PlannedDeptrDate: string | null;
    PlannedArrivalDate: string | null;
    VoyageStatusCode: string;
    ChangedOn: string;
    StartTime: string | null;
    EndTime: string | null;
    VoyageNumber: string;
    VoyageTypeCode: string;
    VoyageVehnumber: string;
    VoyageVehName: string;
    ExternallyManaged: string;
    CountryRegionKey: string;
    Supplier: string;
    ContainerNotAllwd: string;
    FldLogsContainer_Nav: Array<FldLogsContainer> | DeferredContent;
    FldLogsPackage_Nav: Array<FldLogsPackage> | DeferredContent;
    FldLogsVoyageStatus_Nav: FldLogsVoyageStatusCodeType | null | DeferredContent;
    FldLogsVoyageType_Nav: FldLogsVoyageTypeCode | null | DeferredContent;
}

type FldLogsVoyageId = string | {VoyageStageUUID: string};

interface EditableFldLogsVoyage extends Pick<FldLogsVoyage, "SourcePlant" | "DestinationPlant" | "SourceStage" | "DestinationStage" | "VoyageStatusCode" | "ChangedOn" | "VoyageNumber" | "VoyageTypeCode" | "VoyageVehnumber" | "VoyageVehName" | "ExternallyManaged" | "CountryRegionKey" | "Supplier" | "ContainerNotAllwd">, Partial<Pick<FldLogsVoyage, "PlannedDeptrDate" | "PlannedArrivalDate" | "StartTime" | "EndTime">> {
}

interface FldLogsHuDelItem {
    DispatchDate: string;
    DispatchLoc: string;
    HandlingUnitID: string;
    ReferenceDocNumber: string;
    ShipmentItemID: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string | null;
    Comments: string;
    Comments1: string;
    ContainerID: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocument: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    FldLogsRetServicePurOrd: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    HandlingUnitExternalID: string;
    HandlingUnitQuantity: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    InboundDeliveryItem: string;
    InspectionLot: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MaintenanceOrder: string;
    MatDocItem: string;
    MatDocYear: string;
    Material: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    OutboundDeliveryItem: string;
    PackagingMaterial: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocument: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RefurbishmentOrder: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    RetblQtyBaseUnit: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    RetblQtyOrderUnit: string;
    ReturnStatus: string;
    SerialNumber: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StockTransportOrder: string;
    StorageType: string;
    SubcontractingPO: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    WarehouseTask: string;
    FldLogsHUDelItemStatus_Nav: FldLogsContainerItemStatus | null | DeferredContent;
}

type FldLogsHuDelItemId = {DispatchDate: string,DispatchLoc: string,HandlingUnitID: string,ReferenceDocNumber: string,ShipmentItemID: string};

interface EditableFldLogsHuDelItem extends Pick<FldLogsHuDelItem, "DispatchDate" | "DispatchLoc" | "HandlingUnitID" | "ReferenceDocNumber" | "ShipmentItemID" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "Comments" | "Comments1" | "ContainerID" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocument" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "FldLogsRetServicePurOrd" | "GoodsReceivingPoint" | "HandlingDecision" | "HandlingUnitExternalID" | "HandlingUnitQuantity" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "InboundDeliveryItem" | "InspectionLot" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MaintenanceOrder" | "MatDocItem" | "MatDocYear" | "Material" | "MaterialDocument" | "OutboundDelivery" | "OutboundDeliveryItem" | "PackagingMaterial" | "PackagingType" | "ProcessType" | "PurchasingDocument" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RefurbishmentOrder" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "RetblQtyBaseUnit" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "RetblQtyOrderUnit" | "ReturnStatus" | "SerialNumber" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StockTransportOrder" | "StorageType" | "SubcontractingPO" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "WarehouseTask">, Partial<Pick<FldLogsHuDelItem, "ChangedOn">> {
}

interface FldLogsPackage {
    VoyageStageUUID: string;
    ParentCtnID: string;
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    TripCounter: string;
    AllProcessed: string;
    ChangedOn: string;
    ContainerStatus: string;
    ContainerUUID: string;
    ContainerUnitID: string;
    Ctnclassification: string;
    Delete: string;
    DestinationPlant: string;
    IsContainerReleased: string;
    ProcessType: string;
    ProcessingEndDate: string | null;
    ProcessingStartDat: string | null;
    ReceivingPoint: string;
    ShipmentID: string;
    ShippingPoint: string;
    SourcePlant: string;
    SupplierNo: string;
    VoyageNumber: string;
    VoyageUUID: string;
    PackagingSourcePlant: string;
    PackagingDestPlant: string;
    FldLogsContainerStatus_Nav: FldLogsContainerStatus | null | DeferredContent;
    FldLogsPackageItem_Nav: Array<FldLogsPackageItem> | DeferredContent;
}

type FldLogsPackageId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,TripCounter: string};

interface EditableFldLogsPackage extends Pick<FldLogsPackage, "VoyageStageUUID" | "ParentCtnID" | "ContainerID" | "DispatchDate" | "DispatchLoc" | "TripCounter" | "AllProcessed" | "ChangedOn" | "ContainerStatus" | "ContainerUUID" | "ContainerUnitID" | "Ctnclassification" | "Delete" | "DestinationPlant" | "IsContainerReleased" | "ProcessType" | "ReceivingPoint" | "ShipmentID" | "ShippingPoint" | "SourcePlant" | "SupplierNo" | "VoyageNumber" | "VoyageUUID" | "PackagingSourcePlant" | "PackagingDestPlant">, Partial<Pick<FldLogsPackage, "ProcessingEndDate" | "ProcessingStartDat">> {
}

interface FldLogsPackageItem {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    HandlingUnitID: string;
    ReferenceDocNumber: string;
    TripCounter: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string;
    Comments: string;
    Comments1: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocument: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    FldLogsRetServicePurOrd: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    HandlingUnitExternalID: string;
    HandlingUnitQuantity: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    InboundDeliveryItem: string;
    InspectionLot: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MaintenanceOrder: string;
    MatDocItem: string;
    MatDocYear: string;
    Material: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    OutboundDeliveryItem: string;
    PackagingMaterial: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocument: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceDocumentLongNumber: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RefurbishmentOrder: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    RetblQtyBaseUnit: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    RetblQtyOrderUnit: string;
    ReturnStatus: string;
    SerialNumber: string;
    ShipmentItemID: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StockTransportOrder: string;
    StorageType: string;
    SubcontractingPO: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    WarehouseTask: string;
    FldLogsContainerItemStatus_Nav: FldLogsContainerItemStatus | null | DeferredContent;
}

type FldLogsPackageItemId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,HandlingUnitID: string,ReferenceDocNumber: string,TripCounter: string};

interface EditableFldLogsPackageItem extends Pick<FldLogsPackageItem, "ContainerID" | "DispatchDate" | "DispatchLoc" | "HandlingUnitID" | "ReferenceDocNumber" | "TripCounter" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "ChangedOn" | "Comments" | "Comments1" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocument" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "FldLogsRetServicePurOrd" | "GoodsReceivingPoint" | "HandlingDecision" | "HandlingUnitExternalID" | "HandlingUnitQuantity" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "InboundDeliveryItem" | "InspectionLot" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MaintenanceOrder" | "MatDocItem" | "MatDocYear" | "Material" | "MaterialDocument" | "OutboundDelivery" | "OutboundDeliveryItem" | "PackagingMaterial" | "PackagingType" | "ProcessType" | "PurchasingDocument" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceDocumentLongNumber" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RefurbishmentOrder" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "RetblQtyBaseUnit" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "RetblQtyOrderUnit" | "ReturnStatus" | "SerialNumber" | "ShipmentItemID" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StockTransportOrder" | "StorageType" | "SubcontractingPO" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "WarehouseTask"> {
}

interface FldLogsVoyageStatusCodeType {
    VoyageStatusCodeType: string;
    Description: string;
}

type FldLogsVoyageStatusCodeTypeId = string | {VoyageStatusCodeType: string};

interface EditableFldLogsVoyageStatusCodeType extends Pick<FldLogsVoyageStatusCodeType, "Description"> {
}

interface FldLogsVoyageTypeCode {
    VoyageTypeCode: string;
    Description: string;
}

type FldLogsVoyageTypeCodeId = string | {VoyageTypeCode: string};

interface EditableFldLogsVoyageTypeCode extends Pick<FldLogsVoyageTypeCode, "Description"> {
}

interface FldLogsContainerStatus {
    FldContainerStatus: string;
    FldContainerStatusDescription: string;
}

type FldLogsContainerStatusId = string | {FldContainerStatus: string};

interface EditableFldLogsContainerStatus extends Pick<FldLogsContainerStatus, "FldContainerStatusDescription"> {
}

interface FldLogsPlant {
    Plant: string;
    PlantName: string;
}

type FldLogsPlantId = string | {Plant: string};

interface EditableFldLogsPlant extends Pick<FldLogsPlant, "PlantName"> {
}

interface FldlogsSupproc {
    SupplyProcess: string;
    SupplyProcessText: string;
}

type FldlogsSupprocId = string | {SupplyProcess: string};

interface EditableFldlogsSupproc extends Pick<FldlogsSupproc, "SupplyProcessText"> {
}

interface Fleet {
    ABCIndicator: string | null;
    Asset: string | null;
    Batch: string | null;
    BusinessArea: string | null;
    CRObjectType: string | null;
    CatalogProfile: string | null;
    CompanyCode: string | null;
    ConstructionMonth: string | null;
    ConstructionType: string | null;
    ConstructionYear: string | null;
    ControllingArea: string | null;
    CostCenter: string | null;
    CountryOfManufact: string | null;
    DeleteIndicator: string | null;
    DeliveryDate: string | null;
    DistributionChannel: string | null;
    EquipCategory: string | null;
    EquipDivision: string | null;
    EquipmentDataExists: string | null;
    EquipmentDesc: string | null;
    EquipmentNumber: string;
    Field: string | null;
    FleetObjectData: string | null;
    ISU: string | null;
    InventoryNumber: string | null;
    LicensePlateNumber: string | null;
    LocAcctAssignment: string;
    Location: string | null;
    MaintenancePlan: string | null;
    MaintenancePlant: string | null;
    ManufDrawingNumber: string | null;
    ManufSerialNumber: string | null;
    ManufactPartNo: string | null;
    Manufacturer: string | null;
    ManufacturerVIN: string | null;
    Material: string | null;
    MeasuringPoint: string | null;
    ModelNumber: string | null;
    ObjReference: string | null;
    ObjectNumber: string;
    PMDivision: string | null;
    PMObjectType: string | null;
    PPWorkCenter: string | null;
    PlannerGroup: string | null;
    PlanningPlant: string | null;
    Plant: string | null;
    PlantSection: string | null;
    SalesOrg: string | null;
    SerialNumber: string | null;
    SettlementOrder: string | null;
    Size: string | null;
    SortField: string | null;
    StorageLocation: string | null;
    SubNumber: string | null;
    SuperOrdEquipment: string | null;
    TechnicalIdentNo: string | null;
    TechnicalObjectType: string | null;
    UnitOfWeight: string | null;
    UsagePerConsecNo: string | null;
    ValidTo: string | null;
    VehicleType: string | null;
    WBSElement: string | null;
    WeightOfObject: string | null;
    CrewListItem: CrewListItem | null | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
}

type FleetId = string | {EquipmentNumber: string};

interface EditableFleet extends Pick<Fleet, "LocAcctAssignment" | "ObjectNumber">, Partial<Pick<Fleet, "ABCIndicator" | "Asset" | "Batch" | "BusinessArea" | "CRObjectType" | "CatalogProfile" | "CompanyCode" | "ConstructionMonth" | "ConstructionType" | "ConstructionYear" | "ControllingArea" | "CostCenter" | "CountryOfManufact" | "DeleteIndicator" | "DeliveryDate" | "DistributionChannel" | "EquipCategory" | "EquipDivision" | "EquipmentDataExists" | "EquipmentDesc" | "Field" | "FleetObjectData" | "ISU" | "InventoryNumber" | "LicensePlateNumber" | "Location" | "MaintenancePlan" | "MaintenancePlant" | "ManufDrawingNumber" | "ManufSerialNumber" | "ManufactPartNo" | "Manufacturer" | "ManufacturerVIN" | "Material" | "MeasuringPoint" | "ModelNumber" | "ObjReference" | "PMDivision" | "PMObjectType" | "PPWorkCenter" | "PlannerGroup" | "PlanningPlant" | "Plant" | "PlantSection" | "SalesOrg" | "SerialNumber" | "SettlementOrder" | "Size" | "SortField" | "StorageLocation" | "SubNumber" | "SuperOrdEquipment" | "TechnicalIdentNo" | "TechnicalObjectType" | "UnitOfWeight" | "UsagePerConsecNo" | "ValidTo" | "VehicleType" | "WBSElement" | "WeightOfObject">> {
}

interface Form {
    Client: string;
    CreatedOn: string | null;
    DisplayId: string;
    FormId: string;
    Language: string;
    LongDescription: string;
    MatrixDisplayID: string;
    MobileStatus: string;
    ObjectCount: string;
    Ownership: string;
    ShortDescription: string;
    Source: string;
    Status: string;
    StatusText: string;
    Type: string;
    TypeDescription: string;
    UpdatedOn: string | null;
    ChecklistBusObjects_Nav: Array<ChecklistBusObject> | DeferredContent;
}

type FormId = string | {FormId: string};

interface EditableForm extends Pick<Form, "Client" | "DisplayId" | "Language" | "LongDescription" | "MatrixDisplayID" | "MobileStatus" | "ObjectCount" | "Ownership" | "ShortDescription" | "Source" | "Status" | "StatusText" | "Type" | "TypeDescription">, Partial<Pick<Form, "CreatedOn" | "UpdatedOn">> {
}

interface FormGroup {
    DisplayId: string;
    GroupId: string;
    HasDependentObjects: string;
    ImageURL: string;
    LongDescription: string;
    OrganizationName: string;
    ShortDescription: string;
    Status: string;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    TemplateGroups_Nav: Array<FormTemplateGroup> | DeferredContent;
}

type FormGroupId = string | {GroupId: string};

interface EditableFormGroup extends Pick<FormGroup, "DisplayId" | "HasDependentObjects" | "ImageURL" | "LongDescription" | "OrganizationName" | "ShortDescription" | "Status"> {
}

interface FormQuestion {
    AnswerId: string;
    DisplayId: string;
    HasDependentObjects: string;
    LongDescription: string;
    MaxScaleOptionsValue: string;
    MinScaleOptionsValue: string;
    OrganizationName: string;
    QuestionDesc: string;
    QuestionId: string;
    QuestionText: string;
    ScaleOptionCount: string;
    ShortDescription: string;
    Status: string;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    ChecklistQuestions_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    TemplateQuestions_Nav: Array<FormTemplateQuestion> | DeferredContent;
}

type FormQuestionId = string | {QuestionId: string};

interface EditableFormQuestion extends Pick<FormQuestion, "AnswerId" | "DisplayId" | "HasDependentObjects" | "LongDescription" | "MaxScaleOptionsValue" | "MinScaleOptionsValue" | "OrganizationName" | "QuestionDesc" | "QuestionText" | "ScaleOptionCount" | "ShortDescription" | "Status"> {
}

interface FormTemplateGroup {
    DisplayId: string;
    GroupId: string;
    SortNumber: string;
    TemplateId: string;
    FormGroup_Nav: FormGroup | null | DeferredContent;
    GroupQuestion_Nav: Array<FormTemplateQuestion> | DeferredContent;
    TemplateHeader_Nav: FormTemplateHeader | null | DeferredContent;
}

type FormTemplateGroupId = {TemplateId: string,GroupId: string};

interface EditableFormTemplateGroup extends Pick<FormTemplateGroup, "DisplayId" | "GroupId" | "SortNumber" | "TemplateId"> {
}

interface FormTemplateHeader {
    BusinessObjects: string;
    DisplayId: string;
    FormCategory: string;
    IntentCode: string;
    LongDescription: string;
    PublishDate: string;
    ShortDescription: string;
    Status: string;
    TemplateId: string;
    Version: string;
    TemplateGroups_Nav: Array<FormTemplateGroup> | DeferredContent;
}

type FormTemplateHeaderId = string | {TemplateId: string};

interface EditableFormTemplateHeader extends Pick<FormTemplateHeader, "BusinessObjects" | "DisplayId" | "FormCategory" | "IntentCode" | "LongDescription" | "PublishDate" | "ShortDescription" | "Status" | "Version"> {
}

interface FormTemplateQuestion {
    AnswerId: string;
    DisplayId: string;
    GroupId: string;
    QuestionId: string;
    SortNumber: string;
    Status: string;
    TemplateId: string;
    Version: string;
    FormQuestion_Nav: FormQuestion | null | DeferredContent;
    TemplateGroup_Nav: FormTemplateGroup | null | DeferredContent;
}

type FormTemplateQuestionId = {GroupId: string,TemplateId: string,QuestionId: string};

interface EditableFormTemplateQuestion extends Pick<FormTemplateQuestion, "AnswerId" | "DisplayId" | "GroupId" | "QuestionId" | "SortNumber" | "Status" | "TemplateId" | "Version"> {
}

interface FuncLocCategory {
    FuncLocCategory: string;
    FuncLocCategoryDesc: string;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
}

type FuncLocCategoryId = string | {FuncLocCategory: string};

interface EditableFuncLocCategory extends Pick<FuncLocCategory, "FuncLocCategoryDesc"> {
}

interface FuncLocLabel {
    FuncLocLabel: string;
    FuncLocLabelDesc: string;
    PrimaryLabel: string;
    Unique: string;
}

type FuncLocLabelId = string | {FuncLocLabel: string};

interface EditableFuncLocLabel extends Pick<FuncLocLabel, "FuncLocLabelDesc" | "PrimaryLabel" | "Unique"> {
}

interface FuncLocStructInd {
    EditMask: string;
    FuncLocStructInd: string;
    FuncLocStructIndDesc: string;
    HierarchyLevels: string;
}

type FuncLocStructIndId = string | {FuncLocStructInd: string};

interface EditableFuncLocStructInd extends Pick<FuncLocStructInd, "EditMask" | "FuncLocStructIndDesc" | "HierarchyLevels"> {
}

interface FuncLocTemplate {
    FuncLocCategory: string;
    FuncLocId: string;
    FuncLocIdIntern: string;
}

type FuncLocTemplateId = string | {FuncLocIdIntern: string};

interface EditableFuncLocTemplate extends Pick<FuncLocTemplate, "FuncLocCategory" | "FuncLocId"> {
}

interface FunctionalLocationBOM {
    AlternativeBOM: string;
    BOMCategory: string;
    BOMId: string;
    BOMUsage: string;
    FuncLocIdIntern: string;
    Plant: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
}

type FunctionalLocationBOMId = {AlternativeBOM: string,BOMId: string,FuncLocIdIntern: string,BOMUsage: string,BOMCategory: string,Plant: string};

interface EditableFunctionalLocationBOM extends Pick<FunctionalLocationBOM, "AlternativeBOM" | "BOMCategory" | "BOMId" | "BOMUsage" | "FuncLocIdIntern" | "Plant"> {
}

interface GISMapParameter {
    ParameterGroup: string;
    ParameterName: string;
    ParameterValue: string;
    ParentParemeterGroup: string;
}

type GISMapParameterId = {ParameterGroup: string,ParameterName: string,ParentParemeterGroup: string};

interface EditableGISMapParameter extends Pick<GISMapParameter, "ParameterGroup" | "ParameterName" | "ParameterValue" | "ParentParemeterGroup"> {
}

interface GLAccount {
    AuthorizationGroup: string;
    ChartofAccounts: string;
    CompanyCode: string;
    GLAccount: string;
    GLAccountLongText: string;
    GLAccountText: string;
    Language: string;
    SearchTerm: string;
}

type GLAccountId = {GLAccount: string,ChartofAccounts: string};

interface EditableGLAccount extends Pick<GLAccount, "AuthorizationGroup" | "ChartofAccounts" | "CompanyCode" | "GLAccount" | "GLAccountLongText" | "GLAccountText" | "Language" | "SearchTerm"> {
}

interface Geometry {
    GeometryType: string;
    GeometryValue: string;
    LogicalSystem: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    OutputFormat: string;
    SegmentCount: number;
    SegmentNo: number;
    SpacialGUId: string;
    SpacialId: string;
    EquipGeometries: Array<MyEquipGeometry> | DeferredContent;
    Equip_Nav: MyEquipment | null | DeferredContent;
    FuncLocGeometries: Array<MyFuncLocGeometry> | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    NotifGeometries: Array<MyNotifGeometry> | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    WOGeometries: Array<MyWorkOrderGeometry> | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type GeometryId = {SpacialId: string,SpacialGUId: string,ObjectGroup1: string,ObjectGroup: string};

interface EditableGeometry extends Pick<Geometry, "GeometryType" | "GeometryValue" | "LogicalSystem" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "OutputFormat" | "SegmentCount" | "SegmentNo" | "SpacialGUId" | "SpacialId"> {
}

interface GlobalParam {
    FlagNoChange: boolean;
    ParamComment: string;
    ParamGroup: string;
    ParamScope: string;
    ParamType: string;
    ParamValue: string;
    ParameterName: string;
    RecordNo: string;
}

type GlobalParamId = string | {RecordNo: string};

interface EditableGlobalParam extends Pick<GlobalParam, "FlagNoChange" | "ParamComment" | "ParamGroup" | "ParamScope" | "ParamType" | "ParamValue" | "ParameterName"> {
}

interface InboundDelivery {
    ActualGoodsMvtDate: string | null;
    DeliveryBlock: string;
    DeliveryDate: string;
    DeliveryNum: string;
    DeliveryPriority: string;
    DeliveryType: string;
    DocumentCategory: string;
    GoodsMvtStatus: string;
    NumPackages: number;
    OverallStatus: string;
    ReceivingPlant: string;
    ShippingConditions: string;
    ShippingPoint: string;
    TotalWeight: string;
    UnloadingPoint: string;
    Vendor: string;
    WMStatus: string;
    WeightUnit: string;
    BlockingStatus_Nav: BlockingStatus | null | DeferredContent;
    DeliveryPriority_Nav: DeliveryPriority | null | DeferredContent;
    Items_Nav: Array<InboundDeliveryItem> | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
}

type InboundDeliveryId = string | {DeliveryNum: string};

interface EditableInboundDelivery extends Pick<InboundDelivery, "DeliveryBlock" | "DeliveryDate" | "DeliveryPriority" | "DeliveryType" | "DocumentCategory" | "GoodsMvtStatus" | "NumPackages" | "OverallStatus" | "ReceivingPlant" | "ShippingConditions" | "ShippingPoint" | "TotalWeight" | "UnloadingPoint" | "Vendor" | "WMStatus" | "WeightUnit">, Partial<Pick<InboundDelivery, "ActualGoodsMvtDate">> {
}

interface InboundDeliveryItem {
    Batch: string;
    DeliveryNum: string;
    DenominatorConvertSKU: string;
    GoodsMvmtStatus: string;
    Item: string;
    ItemCategory: string;
    ItemGMRelevant: string;
    ItemType: string;
    Material: string;
    MovementType: string;
    NumeratorConvertSKU: string;
    PickedDiffQuantity: string | null;
    PickedQuantity: string | null;
    Plant: string;
    Quantity: string;
    ReasonForMovement: string;
    SalesUnit: string;
    StorageBin: string;
    StorageLocation: string;
    UOM: string;
    WMStatus: string;
    InboundDeliverySerial_Nav: Array<InboundDeliverySerial> | DeferredContent;
    InboundDelivery_Nav: InboundDelivery | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
}

type InboundDeliveryItemId = {DeliveryNum: string,Item: string};

interface EditableInboundDeliveryItem extends Pick<InboundDeliveryItem, "Batch" | "DeliveryNum" | "DenominatorConvertSKU" | "GoodsMvmtStatus" | "Item" | "ItemCategory" | "ItemGMRelevant" | "ItemType" | "Material" | "MovementType" | "NumeratorConvertSKU" | "Plant" | "Quantity" | "ReasonForMovement" | "SalesUnit" | "StorageBin" | "StorageLocation" | "UOM" | "WMStatus">, Partial<Pick<InboundDeliveryItem, "PickedDiffQuantity" | "PickedQuantity">> {
}

interface InboundDeliverySerial {
    DeliveryNum: string;
    Item: string;
    SerialNumber: string;
    InboundDeliveryItem_Nav: InboundDeliveryItem | DeferredContent;
}

type InboundDeliverySerialId = {SerialNumber: string,DeliveryNum: string,Item: string};

interface EditableInboundDeliverySerial extends Pick<InboundDeliverySerial, "DeliveryNum" | "Item" | "SerialNumber"> {
}

interface InspectionCatalogValuation {
    ShortText: string;
    Valuation: string;
    InspectionCodes_Nav: Array<InspectionCode> | DeferredContent;
    InspectionLots_Nav: Array<InspectionLot> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
}

type InspectionCatalogValuationId = string | {Valuation: string};

interface EditableInspectionCatalogValuation extends Pick<InspectionCatalogValuation, "ShortText"> {
}

interface InspectionCharStatus {
    ShortDesc: string;
    Status: string;
    InspChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type InspectionCharStatusId = string | {Status: string};

interface EditableInspectionCharStatus extends Pick<InspectionCharStatus, "ShortDesc"> {
}

interface InspectionCharacteristic {
    CalculatedCharFlag: string;
    Catalog: string;
    CatalogVersion: string;
    ChangedAt: string | null;
    ChangedBy: string;
    CharAttributeFlag: string;
    CharCategory: string;
    CharId: string;
    Code: string;
    CodeGroup: string;
    CreatedAt: string | null;
    CreatedBy: string;
    DecimalPlaces: number;
    DefectClass: string;
    DefectRecordingFlag: string;
    Formula1: string;
    Formula2: string;
    InspectionChar: string;
    InspectionLot: string;
    InspectionMethod: string;
    InspectionMethodPlant: string;
    InspectionMethodVersion: string;
    InspectionNode: string;
    InspectionScope: string;
    LongTermInspFlag: string;
    LongTextFlag: string;
    LongTextLang: string;
    LowerLimit: string;
    LowerLimitFlag: string;
    MasterInspChar: string;
    MasterInspCharPlant: string;
    MasterInspCharVersion: string;
    NoOfDefect: number;
    NoOfInspected: number;
    OperationNum: string;
    OriginalInput: string;
    QuantitativeFlag: string;
    RecordingType: string;
    ResultChangedAt: string | null;
    ResultChangedBy: string;
    ResultValue: string;
    ResultValueFlag: string;
    SampleNum: string;
    SampleQty: string;
    SampleUOM: string;
    ScrapShareFlag: string;
    SelectedSet: string;
    SelectedSetFlag: string;
    SelectedSetPlant: string;
    ShortDesc: string;
    Status: string;
    TargetValue: string;
    TargetValueFlag: string;
    UpperLimit: string;
    UpperLimitFlag: string;
    Valuation: string;
    ValueAbove: string;
    ValueBelow: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    InspCharStatus_Nav: InspectionCharStatus | null | DeferredContent;
    InspValuation_Nav: InspectionResultValuation | null | DeferredContent;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
    InspectionPoint_Nav: InspectionPoint | null | DeferredContent;
    MasterInspChar_Nav: MasterInspectionChar | null | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
}

type InspectionCharacteristicId = {InspectionNode: string,InspectionChar: string,SampleNum: string,InspectionLot: string};

interface EditableInspectionCharacteristic extends Pick<InspectionCharacteristic, "CalculatedCharFlag" | "Catalog" | "CatalogVersion" | "ChangedBy" | "CharAttributeFlag" | "CharCategory" | "CharId" | "Code" | "CodeGroup" | "CreatedBy" | "DecimalPlaces" | "DefectClass" | "DefectRecordingFlag" | "Formula1" | "Formula2" | "InspectionChar" | "InspectionLot" | "InspectionMethod" | "InspectionMethodPlant" | "InspectionMethodVersion" | "InspectionNode" | "InspectionScope" | "LongTermInspFlag" | "LongTextFlag" | "LongTextLang" | "LowerLimit" | "LowerLimitFlag" | "MasterInspChar" | "MasterInspCharPlant" | "MasterInspCharVersion" | "NoOfDefect" | "NoOfInspected" | "OperationNum" | "OriginalInput" | "QuantitativeFlag" | "RecordingType" | "ResultChangedBy" | "ResultValue" | "ResultValueFlag" | "SampleNum" | "SampleQty" | "SampleUOM" | "ScrapShareFlag" | "SelectedSet" | "SelectedSetFlag" | "SelectedSetPlant" | "ShortDesc" | "Status" | "TargetValue" | "TargetValueFlag" | "UpperLimit" | "UpperLimitFlag" | "Valuation" | "ValueAbove" | "ValueBelow">, Partial<Pick<InspectionCharacteristic, "ChangedAt" | "CreatedAt" | "ResultChangedAt">> {
}

interface InspectionCode {
    Catalog: string;
    Code: string;
    CodeDesc: string;
    CodeGroup: string;
    CodeGroupDesc: string;
    DefectClass: string;
    Plant: string;
    QualityScore: number;
    SelectedSet: string;
    ValuationStatus: string;
    Version: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    InspCharacteristics_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspHistories_Nav: Array<InspectionHistory> | DeferredContent;
    InspPoints_Nav: Array<InspectionPoint> | DeferredContent;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionLots_Nav: Array<InspectionLot> | DeferredContent;
}

type InspectionCodeId = {Plant: string,SelectedSet: string,Catalog: string,CodeGroup: string,Code: string};

interface EditableInspectionCode extends Pick<InspectionCode, "Catalog" | "Code" | "CodeDesc" | "CodeGroup" | "CodeGroupDesc" | "DefectClass" | "Plant" | "QualityScore" | "SelectedSet" | "ValuationStatus" | "Version"> {
}

interface InspectionHistory {
    DefectCatalog: string;
    DefectClass: string;
    DefectCode: string;
    DefectCodeGroup: string;
    DefectPlant: string;
    DefectSelectedSet: string;
    EndDate: string | null;
    InputValue: string;
    InspectionChar: string;
    InspectionLot: string;
    InspectionNode: string;
    Inspector: string;
    LastChangedDate: string | null;
    MasterInspChar: string;
    MasterInspVersion: string;
    MeanValue: string;
    NumOfDefects: number;
    NumOfInspected: number;
    Plant: string;
    SampleNum: string;
    StartDate: string | null;
    Valuation: string;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    MasterInspChar_Nav: MasterInspectionChar | null | DeferredContent;
}

type InspectionHistoryId = {InspectionLot: string,InspectionNode: string,InspectionChar: string,SampleNum: string};

interface EditableInspectionHistory extends Pick<InspectionHistory, "DefectCatalog" | "DefectClass" | "DefectCode" | "DefectCodeGroup" | "DefectPlant" | "DefectSelectedSet" | "InputValue" | "InspectionChar" | "InspectionLot" | "InspectionNode" | "Inspector" | "MasterInspChar" | "MasterInspVersion" | "MeanValue" | "NumOfDefects" | "NumOfInspected" | "Plant" | "SampleNum" | "Valuation">, Partial<Pick<InspectionHistory, "EndDate" | "LastChangedDate" | "StartDate">> {
}

interface InspectionLot {
    CodeVersion: string;
    CreatedAt: string | null;
    CreatedBy: string;
    EAMChecklistInd: string;
    EndDate: string | null;
    Equipment: string;
    FunctionalLocation: string;
    InspectionLot: string;
    InspectionLotOrigin: string;
    InspectionType: string;
    ObjCategory: string;
    ObjNum: string;
    OrderId: string;
    Plant: string;
    QualityScore: string;
    SelectedSetVersion: string;
    ShortDesc: string;
    StartDate: string | null;
    SystemStatus: string;
    TaskListGroup: string;
    TaskListType: string;
    TaskListUsage: string;
    UDCatalog: string;
    UDChangedAt: string;
    UDChangedBy: string;
    UDChangedDate: string | null;
    UDCode: string;
    UDCodeGroup: string;
    UDCreatedAt: string;
    UDCreatedBy: string;
    UDCreatedDate: string | null;
    UDSelectedSet: string;
    UserStatus: string;
    ValuationStatus: string;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    NotifHeaders_Nav: Array<MyNotificationHeader> | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type InspectionLotId = string | {InspectionLot: string};

interface EditableInspectionLot extends Pick<InspectionLot, "CodeVersion" | "CreatedBy" | "EAMChecklistInd" | "Equipment" | "FunctionalLocation" | "InspectionLotOrigin" | "InspectionType" | "ObjCategory" | "ObjNum" | "OrderId" | "Plant" | "QualityScore" | "SelectedSetVersion" | "ShortDesc" | "SystemStatus" | "TaskListGroup" | "TaskListType" | "TaskListUsage" | "UDCatalog" | "UDChangedAt" | "UDChangedBy" | "UDCode" | "UDCodeGroup" | "UDCreatedAt" | "UDCreatedBy" | "UDSelectedSet" | "UserStatus" | "ValuationStatus">, Partial<Pick<InspectionLot, "CreatedAt" | "EndDate" | "StartDate" | "UDChangedDate" | "UDCreatedDate">> {
}

interface InspectionMethod {
    LongTextFlag: string;
    Method: string;
    Plant: string;
    ShortDesc: string;
    SortField: string;
    Status: string;
    StatusDesc: string;
    Version: string;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    MethodDoc_Nav: Array<InspectionMethodDocument> | DeferredContent;
    MethodLongText_Nav: InspectionMethodLongText | null | DeferredContent;
}

type InspectionMethodId = {Version: string,Method: string,Plant: string};

interface EditableInspectionMethod extends Pick<InspectionMethod, "LongTextFlag" | "Method" | "Plant" | "ShortDesc" | "SortField" | "Status" | "StatusDesc" | "Version"> {
}

interface InspectionMethodDocument {
    DocumentID: string;
    Method: string;
    ObjectKey: string;
    Plant: string;
    RelationshipID: string;
    Version: string;
    Document_Nav: Document | null | DeferredContent;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
}

type InspectionMethodDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableInspectionMethodDocument extends Pick<InspectionMethodDocument, "DocumentID" | "Method" | "ObjectKey" | "Plant" | "RelationshipID" | "Version"> {
}

interface InspectionMethodLongText {
    Method: string;
    ObjectKey: string;
    Plant: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    Version: string;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
}

type InspectionMethodLongTextId = {Version: string,Method: string,Plant: string};

interface EditableInspectionMethodLongText extends Pick<InspectionMethodLongText, "Method" | "ObjectKey" | "Plant" | "TextId" | "TextObjType" | "TextString" | "Version"> {
}

interface InspectionPoint {
    ConfirmCounter: string;
    ConfirmNum: string;
    EquipNum: string;
    FuncLocId: string;
    FuncLocIntern: string;
    InspectionLot: string;
    InspectionNode: string;
    Inspector: string;
    OperationNo: string;
    OrderId: string;
    Plant: string;
    SampleNum: string;
    ValCatalog: string;
    ValCode: string;
    ValCodeGroup: string;
    ValSelectedSet: string;
    ValuationStatus: string;
    Equip_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    InspCode_Nav: InspectionCode | null | DeferredContent;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type InspectionPointId = {InspectionLot: string,InspectionNode: string,SampleNum: string};

interface EditableInspectionPoint extends Pick<InspectionPoint, "ConfirmCounter" | "ConfirmNum" | "EquipNum" | "FuncLocId" | "FuncLocIntern" | "InspectionLot" | "InspectionNode" | "Inspector" | "OperationNo" | "OrderId" | "Plant" | "SampleNum" | "ValCatalog" | "ValCode" | "ValCodeGroup" | "ValSelectedSet" | "ValuationStatus"> {
}

interface InspectionResultValuation {
    ShortText: string;
    Valuation: string;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type InspectionResultValuationId = string | {Valuation: string};

interface EditableInspectionResultValuation extends Pick<InspectionResultValuation, "ShortText"> {
}

interface Installation {
    Division: string;
    Installation: string;
    InstallationDate: string | null;
    InstallationStatus: string;
    InstallationType: string;
    Premise: string;
    Division_Nav: Division | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
    Premise_Nav: Premise | null | DeferredContent;
}

type InstallationId = string | {Installation: string};

interface EditableInstallation extends Pick<Installation, "Division" | "InstallationStatus" | "InstallationType" | "Premise">, Partial<Pick<Installation, "InstallationDate">> {
}

interface ItemCategory {
    ItemCategory: string;
    ItemCategoryDesc: string;
    BOMItemCategory_Nav: Array<BOMItem> | DeferredContent;
    CompItemCategory_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type ItemCategoryId = string | {ItemCategory: string};

interface EditableItemCategory extends Pick<ItemCategory, "ItemCategoryDesc"> {
}

interface LAMCharacteristicValue {
    CharValCounter: string;
    ClassType: string;
    EndPoint: string;
    InternCharacteristic: string;
    InternCounter: string;
    LAMInternCounter: string;
    Length: string;
    ObjClassFlag: string;
    ObjectKey: string;
    StartPoint: string;
    Table: string;
    UOM: string;
    MyEquipClassCharValue_Nav: MyEquipClassCharValue | null | DeferredContent;
    MyFuncLocClassCharValue_Nav: MyFuncLocClassCharValue | null | DeferredContent;
}

type LAMCharacteristicValueId = {LAMInternCounter: string,ObjectKey: string,CharValCounter: string,ObjClassFlag: string,ClassType: string,InternCounter: string,Table: string,InternCharacteristic: string};

interface EditableLAMCharacteristicValue extends Pick<LAMCharacteristicValue, "CharValCounter" | "ClassType" | "EndPoint" | "InternCharacteristic" | "InternCounter" | "LAMInternCounter" | "Length" | "ObjClassFlag" | "ObjectKey" | "StartPoint" | "Table" | "UOM"> {
}

interface LAMObjectDatum {
    ConfirmationCounter: string;
    ConfirmationNum: string;
    EndMarker: string;
    EndMarkerDistance: string;
    EndPoint: string;
    EquipId: string;
    FuncLocIdIntern: string;
    LRPId: string;
    Length: string;
    MarkerUOM: string;
    MeasurementDocNum: string;
    NotifItemNumber: string;
    NotificationNumber: string;
    ObjectType: string;
    Offset1Type: string;
    Offset1UOM: string;
    Offset1Value: string;
    Offset2Type: string;
    Offset2UOM: string;
    Offset2Value: string;
    OperationNo: string;
    OrderId: string;
    Point: string;
    StartMarker: string;
    StartMarkerDistance: string;
    StartPoint: string;
    TableKey: string;
    UOM: string;
    Confirmation_Nav: Confirmation | null | DeferredContent;
    MeasurementDocument_Nav: MeasurementDocument | null | DeferredContent;
    MeasuringPoint_Nav: MeasuringPoint | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyNotificationItem_Nav: MyNotificationItem | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type LAMObjectDatumId = {ObjectType: string,TableKey: string};

interface EditableLAMObjectDatum extends Pick<LAMObjectDatum, "ConfirmationCounter" | "ConfirmationNum" | "EndMarker" | "EndMarkerDistance" | "EndPoint" | "EquipId" | "FuncLocIdIntern" | "LRPId" | "Length" | "MarkerUOM" | "MeasurementDocNum" | "NotifItemNumber" | "NotificationNumber" | "ObjectType" | "Offset1Type" | "Offset1UOM" | "Offset1Value" | "Offset2Type" | "Offset2UOM" | "Offset2Value" | "OperationNo" | "OrderId" | "Point" | "StartMarker" | "StartMarkerDistance" | "StartPoint" | "TableKey" | "UOM"> {
}

interface LAMOffsetType {
    DefaultOffset: string;
    Description: string;
    DocumentationObject: string;
    OffsetTypeCode: string;
    UOM: string;
}

type LAMOffsetTypeId = string | {OffsetTypeCode: string};

interface EditableLAMOffsetType extends Pick<LAMOffsetType, "DefaultOffset" | "Description" | "DocumentationObject" | "UOM"> {
}

interface LinearReferencePatternHeader {
    Description: string;
    LRPId: string;
    MarkerDistanceCode: string;
    Type: string;
    UOM: string;
    LRPItem_Nav: Array<LinearReferencePatternItem> | DeferredContent;
}

type LinearReferencePatternHeaderId = string | {LRPId: string};

interface EditableLinearReferencePatternHeader extends Pick<LinearReferencePatternHeader, "Description" | "MarkerDistanceCode" | "Type" | "UOM"> {
}

interface LinearReferencePatternItem {
    Description: string;
    LRPId: string;
    Length: string;
    Marker: string;
    MarkerType: string;
    StartPoint: string;
    TechnicalObject: string;
    UOM: string;
}

type LinearReferencePatternItemId = {LRPId: string,Marker: string};

interface EditableLinearReferencePatternItem extends Pick<LinearReferencePatternItem, "Description" | "LRPId" | "Length" | "Marker" | "MarkerType" | "StartPoint" | "TechnicalObject" | "UOM"> {
}

interface Location {
    Location: string;
    LocationName: string;
    Plant: string;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
    Plant_Nav: Plant | DeferredContent;
}

type LocationId = {Location: string,Plant: string};

interface EditableLocation extends Pick<Location, "Location" | "LocationName" | "Plant"> {
}

interface MarkedJob {
    OrderId: string;
    PreferenceGroup: string;
    PreferenceName: string;
    PreferenceValue: string;
    RecordId: string;
    UserGUID: string;
    WorkOrderHeader: MyWorkOrderHeader | null | DeferredContent;
}

type MarkedJobId = string | {OrderId: string};

interface EditableMarkedJob extends Pick<MarkedJob, "PreferenceGroup" | "PreferenceName" | "PreferenceValue" | "RecordId" | "UserGUID"> {
}

interface MasterInspCharLongText {
    MasterInspChar: string;
    MasterInspCharPlant: string;
    MasterInspCharVersion: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    MasterInspChar_Nav: MasterInspectionChar | null | DeferredContent;
}

type MasterInspCharLongTextId = {MasterInspChar: string,MasterInspCharVersion: string,MasterInspCharPlant: string};

interface EditableMasterInspCharLongText extends Pick<MasterInspCharLongText, "MasterInspChar" | "MasterInspCharPlant" | "MasterInspCharVersion" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MasterInspectionChar {
    CalculatedCharFlag: string;
    CharAttributeFlag: string;
    CharCategory: string;
    CharId: string;
    DecimalPlaces: number;
    DefectCodeGroupLowerLimit: string;
    DefectCodeGroupUpperLimit: string;
    DefectCodeLowerLimit: string;
    DefectCodeUpperLimit: string;
    DefectRecordingFlag: string;
    InspectionScope: string;
    LongTermInspFlag: string;
    LowerLimit: string;
    LowerLimitFlag: string;
    MasterInspChar: string;
    MasterInspCharPlant: string;
    MasterInspCharVersion: string;
    QuantitativeFlag: string;
    RecordingType: string;
    SampleProcReqFlag: string;
    ScrapShareFlag: string;
    ShortDesc: string;
    SortField: string;
    TargetValue: string;
    TargetValueFlag: string;
    UoM: string;
    UpperLimit: string;
    UpperLimitFlag: string;
    InspHistory_Nav: Array<InspectionHistory> | DeferredContent;
    InspectionChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
    LongText_Nav: Array<MasterInspCharLongText> | DeferredContent;
}

type MasterInspectionCharId = {MasterInspChar: string,MasterInspCharVersion: string,MasterInspCharPlant: string};

interface EditableMasterInspectionChar extends Pick<MasterInspectionChar, "CalculatedCharFlag" | "CharAttributeFlag" | "CharCategory" | "CharId" | "DecimalPlaces" | "DefectCodeGroupLowerLimit" | "DefectCodeGroupUpperLimit" | "DefectCodeLowerLimit" | "DefectCodeUpperLimit" | "DefectRecordingFlag" | "InspectionScope" | "LongTermInspFlag" | "LowerLimit" | "LowerLimitFlag" | "MasterInspChar" | "MasterInspCharPlant" | "MasterInspCharVersion" | "QuantitativeFlag" | "RecordingType" | "SampleProcReqFlag" | "ScrapShareFlag" | "ShortDesc" | "SortField" | "TargetValue" | "TargetValueFlag" | "UoM" | "UpperLimit" | "UpperLimitFlag"> {
}

interface MatDocAttachment {
    DocumentID: string;
    MatDocYear: string;
    MaterialDoc: string;
    ObjectKey: string;
    RelationShipID: string;
    Document: Document | null | DeferredContent;
    MaterialDocument_Nav: MaterialDocument | DeferredContent;
}

type MatDocAttachmentId = {ObjectKey: string,RelationShipID: string};

interface EditableMatDocAttachment extends Pick<MatDocAttachment, "DocumentID" | "MatDocYear" | "MaterialDoc" | "ObjectKey" | "RelationShipID"> {
}

interface MatDocItemSerialNum {
    MatDocItem: string;
    MaterialDocNumber: string;
    MaterialDocYear: string;
    SerialNum: string;
    UniversalItemId: string;
    MatDocItem_Nav: MaterialDocItem | DeferredContent;
}

type MatDocItemSerialNumId = {SerialNum: string,MaterialDocYear: string,MaterialDocNumber: string,MatDocItem: string};

interface EditableMatDocItemSerialNum extends Pick<MatDocItemSerialNum, "MatDocItem" | "MaterialDocNumber" | "MaterialDocYear" | "SerialNum" | "UniversalItemId"> {
}

interface Material {
    ManufacturerPartNum: string;
    BaseUOM: string;
    Description: string;
    Division: string;
    EanUpc: string;
    GrossWeight: string;
    MaterialGroup: string;
    MaterialNum: string;
    MaterialType: string;
    NetWeight: string;
    ProductHierarchy: string;
    SerialNumberProfile: string;
    Volume: string;
    VolumeUnit: string;
    WeightUnit: string;
    DeviceCategory: DeviceCategory | null | DeferredContent;
    InboundDeliveryItem_Nav: Array<InboundDeliveryItem> | DeferredContent;
    MaterialBOM_Nav: Array<MaterialBOM> | DeferredContent;
    MaterialBatchStock_Nav: Array<MaterialBatchStock> | DeferredContent;
    MaterialBatch_Nav: Array<MaterialBatch> | DeferredContent;
    MaterialPlants: Array<MaterialPlant> | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialSLocs: Array<MaterialSLoc> | DeferredContent;
    MaterialSales_Nav: Array<MaterialSales> | DeferredContent;
    MaterialUOMs: Array<MaterialUOM> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    OutboundDeliveryItem_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    SerialNumbers: Array<MyEquipSerialNumber> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WorkOrderComponent: Array<MyWorkOrderComponent> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MaterialId = string | {MaterialNum: string};

interface EditableMaterial extends Pick<Material, "ManufacturerPartNum" | "BaseUOM" | "Description" | "Division" | "EanUpc" | "GrossWeight" | "MaterialGroup" | "MaterialType" | "NetWeight" | "ProductHierarchy" | "SerialNumberProfile" | "Volume" | "VolumeUnit" | "WeightUnit"> {
}

interface MaterialBOM {
    BOMCategory: string;
    BOMId: string;
    BOMUsage: string;
    MaterialNum: string;
    Plant: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
}

type MaterialBOMId = {BOMId: string,MaterialNum: string,Plant: string,BOMCategory: string,BOMUsage: string};

interface EditableMaterialBOM extends Pick<MaterialBOM, "BOMCategory" | "BOMId" | "BOMUsage" | "MaterialNum" | "Plant"> {
}

interface MaterialBatch {
    Batch: string;
    BatchType: string;
    MaterialNum: string;
    Plant: string;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    Material_Nav: Material | DeferredContent;
    MyEquipSerialNum_Nav: Array<MyEquipSerialNumber> | DeferredContent;
    MyWOComponent_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type MaterialBatchId = {MaterialNum: string,Batch: string,Plant: string};

interface EditableMaterialBatch extends Pick<MaterialBatch, "Batch" | "BatchType" | "MaterialNum" | "Plant"> {
}

interface MaterialBatchStock {
    Batch: string;
    MaterialNum: string;
    Plant: string;
    StorageLocation: string;
    UnrestrictedQuantity: string;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    Material_Nav: Material | DeferredContent;
    MyEquipSerialNumber_Nav: Array<MyEquipSerialNumber> | DeferredContent;
    MyWorkOrderComponent_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type MaterialBatchStockId = {MaterialNum: string,Plant: string,StorageLocation: string,Batch: string};

interface EditableMaterialBatchStock extends Pick<MaterialBatchStock, "Batch" | "MaterialNum" | "Plant" | "StorageLocation" | "UnrestrictedQuantity"> {
}

interface MaterialDocItem {
    AutoGenerateSerialNumbers: string;
    Batch: string;
    CostCenter: string;
    Customer: string;
    Delivery: string;
    DeliveryItem: string;
    EntryQuantity: string;
    EntryUOM: string;
    FinalIssue: string;
    GLAccount: string;
    GoodsRecipient: string;
    ItemText: string;
    MatDocItem: string;
    Material: string;
    MaterialDocNumber: string;
    MaterialDocYear: string;
    MoveBatch: string;
    MovePlant: string;
    MoveStorageLocation: string;
    MoveValuationType: string;
    MovementIndicator: string;
    MovementReason: string;
    MovementType: string;
    Network: string;
    NetworkActivity: string;
    NumOfLabels: string;
    OrderItemNumber: string;
    OrderNumber: string;
    Plant: string;
    PurchaseOrderItem: string;
    PurchaseOrderNumber: string;
    Quantity: string;
    ReferenceDocHdr: string;
    ReferenceDocItem: string;
    ReferenceDocYear: string;
    ReservationItemNumber: string;
    ReservationNumber: string;
    ResvRecordType: string;
    SalesOrderItem: string;
    SalesOrderNumber: string;
    SpecialStockInd: string;
    StockType: string;
    StockWBSElement: string;
    StorageBin: string;
    StorageLocation: string;
    UOM: string;
    UnloadingPoint: string;
    ValuationCategory: string;
    ValuationType: string;
    Vendor: string;
    WBSElement: string;
    AssociatedMaterialDoc: MaterialDocument | DeferredContent;
    InboundDeliveryItem_Nav: InboundDeliveryItem | null | DeferredContent;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDeliveryItem_Nav: OutboundDeliveryItem | null | DeferredContent;
    PurchaseOrderItem_Nav: PurchaseOrderItem | null | DeferredContent;
    PurchaseOrder_Nav: PurchaseOrderHeader | null | DeferredContent;
    ReservationItem_Nav: ReservationItem | null | DeferredContent;
    Reservation_Nav: ReservationHeader | null | DeferredContent;
    STO_Nav: StockTransportOrderHeader | null | DeferredContent;
    SerialNum: Array<MatDocItemSerialNum> | DeferredContent;
    StockTransportOrderItem_Nav: StockTransportOrderItem | null | DeferredContent;
    ValuationCategory_Nav: ValuationCategory | null | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
    WorkOrderCompMatDoc: MyWorkOrderComponentMatDoc | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type MaterialDocItemId = {MaterialDocNumber: string,MaterialDocYear: string,MatDocItem: string};

interface EditableMaterialDocItem extends Pick<MaterialDocItem, "AutoGenerateSerialNumbers" | "Batch" | "CostCenter" | "Customer" | "Delivery" | "DeliveryItem" | "EntryQuantity" | "EntryUOM" | "FinalIssue" | "GLAccount" | "GoodsRecipient" | "ItemText" | "MatDocItem" | "Material" | "MaterialDocNumber" | "MaterialDocYear" | "MoveBatch" | "MovePlant" | "MoveStorageLocation" | "MoveValuationType" | "MovementIndicator" | "MovementReason" | "MovementType" | "Network" | "NetworkActivity" | "NumOfLabels" | "OrderItemNumber" | "OrderNumber" | "Plant" | "PurchaseOrderItem" | "PurchaseOrderNumber" | "Quantity" | "ReferenceDocHdr" | "ReferenceDocItem" | "ReferenceDocYear" | "ReservationItemNumber" | "ReservationNumber" | "ResvRecordType" | "SalesOrderItem" | "SalesOrderNumber" | "SpecialStockInd" | "StockType" | "StockWBSElement" | "StorageBin" | "StorageLocation" | "UOM" | "UnloadingPoint" | "ValuationCategory" | "ValuationType" | "Vendor" | "WBSElement"> {
}

interface MaterialDocument {
    BillOfLading: string;
    DocumentDate: string | null;
    GMCode: string;
    GoodsReceiptIssueNumber: string;
    HeaderText: string;
    MaterialDocNumber: string;
    MaterialDocYear: string;
    ObjectKey: string;
    PostingDate: string | null;
    RefDocumentNumber: string;
    UserName: string;
    MatDocAttachment_Nav: Array<MatDocAttachment> | DeferredContent;
    RelatedItem: Array<MaterialDocItem> | DeferredContent;
}

type MaterialDocumentId = {MaterialDocNumber: string,MaterialDocYear: string};

interface EditableMaterialDocument extends Pick<MaterialDocument, "BillOfLading" | "GMCode" | "GoodsReceiptIssueNumber" | "HeaderText" | "MaterialDocNumber" | "MaterialDocYear" | "ObjectKey" | "RefDocumentNumber" | "UserName">, Partial<Pick<MaterialDocument, "DocumentDate" | "PostingDate">> {
}

interface MaterialPlant {
    BatchIndicator: string;
    MaterialNum: string;
    Plant: string;
    PurchasingGroup: string;
    SerialNumberProfile: string;
    ValuationArea: string;
    ValuationCategory: string;
    InboundDeliveryItem_Nav: Array<InboundDeliveryItem> | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatch_Nav: Array<MaterialBatch> | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialSLocs: Array<MaterialSLoc> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    OutboundDeliveryItem_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
    ProductionOrderComponent_Nav: Array<ProductionOrderComponent> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    ReservationItem_Nav: Array<ReservationItem> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
    ValuationCategory_Nav: ValuationCategory | null | DeferredContent;
}

type MaterialPlantId = {Plant: string,MaterialNum: string};

interface EditableMaterialPlant extends Pick<MaterialPlant, "BatchIndicator" | "MaterialNum" | "Plant" | "PurchasingGroup" | "SerialNumberProfile" | "ValuationArea" | "ValuationCategory"> {
}

interface MaterialProjectStock {
    Batch: string;
    BlockedQty: string;
    MaterialNum: string;
    Plant: string;
    QualityInspectionQty: string;
    RestrictedUseQty: string;
    SpecialStock: string;
    StorageLocation: string;
    UnrestrictedQty: string;
    WBSElement: string;
    Material: Material | DeferredContent;
    MaterialBatch: MaterialBatch | null | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialSLoc: MaterialSLoc | DeferredContent;
}

type MaterialProjectStockId = {Batch: string,MaterialNum: string,Plant: string,SpecialStock: string,StorageLocation: string,WBSElement: string};

interface EditableMaterialProjectStock extends Pick<MaterialProjectStock, "Batch" | "BlockedQty" | "MaterialNum" | "Plant" | "QualityInspectionQty" | "RestrictedUseQty" | "SpecialStock" | "StorageLocation" | "UnrestrictedQty" | "WBSElement"> {
}

interface MaterialSLoc {
    BatchIndicator: string;
    MaterialNum: string;
    OnOrderQuantity: string;
    Plant: string;
    StorageBin: string;
    StorageLocation: string;
    StorageLocationDesc: string;
    TransferSlocQuantity: string;
    UnrestrictedQuantity: string;
    Material: Material | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
}

type MaterialSLocId = {Plant: string,StorageLocation: string,MaterialNum: string};

interface EditableMaterialSLoc extends Pick<MaterialSLoc, "BatchIndicator" | "MaterialNum" | "OnOrderQuantity" | "Plant" | "StorageBin" | "StorageLocation" | "StorageLocationDesc" | "TransferSlocQuantity" | "UnrestrictedQuantity"> {
}

interface MaterialSales {
    DistributionChannel: string;
    ItemCategoryGoup: string;
    MaterialNum: string;
    SalesOrg: string;
    Material_Nav: Material | DeferredContent;
}

type MaterialSalesId = {SalesOrg: string,DistributionChannel: string,MaterialNum: string};

interface EditableMaterialSales extends Pick<MaterialSales, "DistributionChannel" | "ItemCategoryGoup" | "MaterialNum" | "SalesOrg"> {
}

interface MaterialUOM {
    BaseFlag: boolean;
    BaseUOM: string;
    BatchIndicator: string;
    ConversionFactor: string;
    Denominator: string;
    MaterialNum: string;
    Numerator: string;
    UOM: string;
    Material: Material | DeferredContent;
}

type MaterialUOMId = {UOM: string,MaterialNum: string};

interface EditableMaterialUOM extends Pick<MaterialUOM, "BaseFlag" | "BaseUOM" | "BatchIndicator" | "ConversionFactor" | "Denominator" | "MaterialNum" | "Numerator" | "UOM"> {
}

interface MaterialValuation {
    Material: string;
    ValuationArea: string;
    ValuationCategory: string;
    ValuationType: string;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    ValuationCategory_Nav: ValuationCategory | null | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
}

type MaterialValuationId = {Material: string,ValuationType: string,ValuationCategory: string};

interface EditableMaterialValuation extends Pick<MaterialValuation, "Material" | "ValuationArea" | "ValuationCategory" | "ValuationType"> {
}

interface MaterialVendorConsignmentStock {
    Batch: string;
    BlockedQty: string;
    MaterialNum: string;
    Plant: string;
    QualityInspectionQty: string;
    RestrictedQty: string;
    SpecialStock: string;
    StorageLocation: string;
    Supplier: string;
    UnrestrictedQty: string;
    Material: Material | DeferredContent;
    MaterialBatch: MaterialBatch | null | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialSLoc: MaterialSLoc | DeferredContent;
}

type MaterialVendorConsignmentStockId = {Batch: string,MaterialNum: string,Plant: string,SpecialStock: string,StorageLocation: string,Supplier: string};

interface EditableMaterialVendorConsignmentStock extends Pick<MaterialVendorConsignmentStock, "Batch" | "BlockedQty" | "MaterialNum" | "Plant" | "QualityInspectionQty" | "RestrictedQty" | "SpecialStock" | "StorageLocation" | "Supplier" | "UnrestrictedQty"> {
}

interface MeasurementDocument {
    CodeCatalog: string;
    CodeGroup: string;
    CodeShortText: string;
    CounterReadingDifference: string;
    CounterReadingValue: string;
    CustomDuprecOccurred: string;
    DifferenceReading: string;
    EquipmentId: string;
    FunctionalLocation: string;
    HasReadingValue: string;
    IsCounterReading: string;
    LAMObjectType: string;
    LAMTableKey: string;
    MeasurementDocNum: string;
    NotificationNumber: string;
    OperationObjNum: string;
    OrderObjNum: string;
    OriginIndicator: string;
    Point: string;
    PointObjectKey: string;
    ReadBy: string;
    ReadingAfterAction: string;
    ReadingDate: string | null;
    ReadingTime: string;
    ReadingTimestamp: string | null;
    ReadingValue: string;
    RecordedUnit: string;
    RecordedValue: string;
    RecordedValueFloat: string | null;
    SecondaryIndex: string;
    ShortText: string;
    SortField: string;
    TotalReadingValue: string;
    UOM: string;
    ValuationCode: string;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<MeasurementDocumentLongText> | DeferredContent;
    MeasuringPoint: MeasuringPoint | DeferredContent;
}

type MeasurementDocumentId = string | {MeasurementDocNum: string};

interface EditableMeasurementDocument extends Pick<MeasurementDocument, "CodeCatalog" | "CodeGroup" | "CodeShortText" | "CounterReadingDifference" | "CounterReadingValue" | "CustomDuprecOccurred" | "DifferenceReading" | "EquipmentId" | "FunctionalLocation" | "HasReadingValue" | "IsCounterReading" | "LAMObjectType" | "LAMTableKey" | "NotificationNumber" | "OperationObjNum" | "OrderObjNum" | "OriginIndicator" | "Point" | "PointObjectKey" | "ReadBy" | "ReadingAfterAction" | "ReadingTime" | "ReadingValue" | "RecordedUnit" | "RecordedValue" | "SecondaryIndex" | "ShortText" | "SortField" | "TotalReadingValue" | "UOM" | "ValuationCode">, Partial<Pick<MeasurementDocument, "ReadingDate" | "ReadingTimestamp" | "RecordedValueFloat">> {
}

interface MeasurementDocumentLongText {
    MeasurementDocNum: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    MeasurementDocument: MeasurementDocument | DeferredContent;
}

type MeasurementDocumentLongTextId = string | {MeasurementDocNum: string};

interface EditableMeasurementDocumentLongText extends Pick<MeasurementDocumentLongText, "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MeasuringPoint {
    AnnualEstimate: string;
    CatalogType: string;
    CharDescription: string;
    CharId: string;
    CharName: string;
    CharType: string;
    CodeGroup: string;
    CounterOverflow: string;
    Decimal: number;
    DecimalPlaces: number;
    DeletionFlag: string;
    DisplayExponent: number;
    EquipId: string;
    Exponent: number;
    FuncLocIdIntern: string;
    IsAnnualEstimate: string;
    IsCodeSufficient: string;
    IsCounter: string;
    IsCounterOverflow: string;
    IsInactive: string;
    IsLowerRange: string;
    IsNegative: string;
    IsPrevReading: string;
    IsRefMeasurementTransfer: string;
    IsReferenceCharacteristic: string;
    IsReferenceCodeGroup: string;
    IsReferenceMeasuringPoint: string;
    IsReferenceShortText: string;
    IsReferenceTarget: string;
    IsReferenceTransfer: string;
    IsReverse: string;
    IsTransfer: string;
    IsUpperRange: string;
    IsValid: string;
    LAMObjectType: string;
    LAMTableKey: string;
    LocalizationAssembly: string;
    LongTextExists: string;
    LowerRange: string;
    Mode: string;
    ModifiedBy: string;
    Point: string;
    PointDesc: string;
    PointObjectKey: string;
    PointType: string;
    Position: string;
    PositionIndicator: string;
    PrevCatalogType: string;
    PrevCodeDescription: string;
    PrevCodeGroup: string;
    PrevCounterReadingDiff: string;
    PrevCounterValue: string;
    PrevHasReadingValue: string;
    PrevMeasurementDoc: string;
    PrevReadBy: string;
    PrevReadingDate: string | null;
    PrevReadingTime: string;
    PrevReadingValue: string;
    PrevTotalReadingValue: string;
    PrevValuationCode: string;
    RangeUOM: string;
    ReferenceMeasuringPoint: string;
    ShortText: string;
    SortField: string;
    Target: string;
    UoM: string;
    UpperRange: string;
    ValuationCode: string;
    Equipment: MyEquipment | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<MeasuringPointText> | DeferredContent;
    MeasurementDocs: Array<MeasurementDocument> | DeferredContent;
    RoutePoints: Array<MyRoutePoint> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MeasuringPointId = string | {Point: string};

interface EditableMeasuringPoint extends Pick<MeasuringPoint, "AnnualEstimate" | "CatalogType" | "CharDescription" | "CharId" | "CharName" | "CharType" | "CodeGroup" | "CounterOverflow" | "Decimal" | "DecimalPlaces" | "DeletionFlag" | "DisplayExponent" | "EquipId" | "Exponent" | "FuncLocIdIntern" | "IsAnnualEstimate" | "IsCodeSufficient" | "IsCounter" | "IsCounterOverflow" | "IsInactive" | "IsLowerRange" | "IsNegative" | "IsPrevReading" | "IsRefMeasurementTransfer" | "IsReferenceCharacteristic" | "IsReferenceCodeGroup" | "IsReferenceMeasuringPoint" | "IsReferenceShortText" | "IsReferenceTarget" | "IsReferenceTransfer" | "IsReverse" | "IsTransfer" | "IsUpperRange" | "IsValid" | "LAMObjectType" | "LAMTableKey" | "LocalizationAssembly" | "LongTextExists" | "LowerRange" | "Mode" | "ModifiedBy" | "PointDesc" | "PointObjectKey" | "PointType" | "Position" | "PositionIndicator" | "PrevCatalogType" | "PrevCodeDescription" | "PrevCodeGroup" | "PrevCounterReadingDiff" | "PrevCounterValue" | "PrevHasReadingValue" | "PrevMeasurementDoc" | "PrevReadBy" | "PrevReadingTime" | "PrevReadingValue" | "PrevTotalReadingValue" | "PrevValuationCode" | "RangeUOM" | "ReferenceMeasuringPoint" | "ShortText" | "SortField" | "Target" | "UoM" | "UpperRange" | "ValuationCode">, Partial<Pick<MeasuringPoint, "PrevReadingDate">> {
}

interface MeasuringPointText {
    ObjectKey: string;
    Point: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    MeasuringPoint: MeasuringPoint | DeferredContent;
}

type MeasuringPointTextId = string | {Point: string};

interface EditableMeasuringPointText extends Pick<MeasuringPointText, "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MeterReaderNote {
    NoteID: string;
    NoteText: string;
    ConnObjectMRNotes_Nav: Array<ConnectionObjectMRNote> | DeferredContent;
    DevLocMRNotes_Nav: Array<DeviceLocationMRNote> | DeferredContent;
}

type MeterReaderNoteId = string | {NoteID: string};

interface EditableMeterReaderNote extends Pick<MeterReaderNote, "NoteText"> {
}

interface MeterReading {
    ActualMeterReadingDate: string | null;
    ActualMeterReadingTime: string;
    DateMaxRead: string | null;
    EquipmentNum: string;
    EstimatedResult: string;
    EstimatedResultFloat: string;
    MeterReaderNote: string;
    MeterReaderNum: string;
    MeterReadingDate: string | null;
    MeterReadingDocID: string;
    MeterReadingReason: string;
    MeterReadingRecorded: string;
    MeterReadingStatus: string;
    MeterReadingTime: string;
    MeterReadingType: string;
    OrderNum: string;
    PreviousReading: string;
    PreviousReadingDate: string | null;
    PreviousReadingFloat: string;
    PreviousReadingStatus: string;
    PreviousReadingTime: string;
    PreviousReadingTimestamp: string | null;
    Register: string;
    RegisterGroup: string;
    SchedMeterReadingDate: string | null;
    TimeMaxReading: string;
    DeviceMeterReading_Nav: Array<DeviceMeterReading> | DeferredContent;
    Device_Nav: Device | null | DeferredContent;
    MeterReadingReason_Nav: MeterReadingReason | DeferredContent;
    ReadLimit_Nav: MeterReadingLimit | null | DeferredContent;
    RegisterGroup_Nav: RegisterGroup | DeferredContent;
}

type MeterReadingId = string | {MeterReadingDocID: string};

interface EditableMeterReading extends Pick<MeterReading, "ActualMeterReadingTime" | "EquipmentNum" | "EstimatedResult" | "EstimatedResultFloat" | "MeterReaderNote" | "MeterReaderNum" | "MeterReadingReason" | "MeterReadingRecorded" | "MeterReadingStatus" | "MeterReadingTime" | "MeterReadingType" | "OrderNum" | "PreviousReading" | "PreviousReadingFloat" | "PreviousReadingStatus" | "PreviousReadingTime" | "Register" | "RegisterGroup" | "TimeMaxReading">, Partial<Pick<MeterReading, "ActualMeterReadingDate" | "DateMaxRead" | "MeterReadingDate" | "PreviousReadingDate" | "PreviousReadingTimestamp" | "SchedMeterReadingDate">> {
}

interface MeterReadingLimit {
    EquipmentNum: string;
    ErrorMaxLimit: string;
    ErrorMaxLimitChar: string;
    ErrorMinLimit: string;
    ErrorMinLimitChar: string;
    MeterReadingDocID: string;
    MeterReadingLimitDate: string | null;
    Register: string;
    WarningMaxLimit: string;
    WarningMaxLimitChar: string;
    WarningMinLimit: string;
    WarningMinLimitChar: string;
    MeterReading_Nav: MeterReading | null | DeferredContent;
    PeriodicMeterReading_Nav: PeriodicMeterReading | null | DeferredContent;
}

type MeterReadingLimitId = {EquipmentNum: string,MeterReadingDocID: string,Register: string};

interface EditableMeterReadingLimit extends Pick<MeterReadingLimit, "EquipmentNum" | "ErrorMaxLimit" | "ErrorMaxLimitChar" | "ErrorMinLimit" | "ErrorMinLimitChar" | "MeterReadingDocID" | "Register" | "WarningMaxLimit" | "WarningMaxLimitChar" | "WarningMinLimit" | "WarningMinLimitChar">, Partial<Pick<MeterReadingLimit, "MeterReadingLimitDate">> {
}

interface MeterReadingNote {
    ControlFollowUpAction: string;
    Description: string;
    NoteID: string;
    ProcessType: string;
}

type MeterReadingNoteId = {NoteID: string,ProcessType: string};

interface EditableMeterReadingNote extends Pick<MeterReadingNote, "ControlFollowUpAction" | "Description" | "NoteID" | "ProcessType"> {
}

interface MeterReadingReason {
    Description: string;
    MeterReadingReason: string;
    TechInstallationFlag: string;
    UploadFlag: string;
    MeterReading_Nav: Array<MeterReading> | DeferredContent;
}

type MeterReadingReasonId = string | {MeterReadingReason: string};

interface EditableMeterReadingReason extends Pick<MeterReadingReason, "Description" | "TechInstallationFlag" | "UploadFlag"> {
}

interface MeterReadingStatus {
    MeterReadingStatus: string;
    Text: string;
    MeterReadings_Nav: Array<MeterReading> | DeferredContent;
}

type MeterReadingStatusId = string | {MeterReadingStatus: string};

interface EditableMeterReadingStatus extends Pick<MeterReadingStatus, "Text"> {
}

interface MeterReadingType {
    Description: string;
    MeterReadingCategory: string;
    MeterReadingType: string;
    NoResetMRT: string;
}

type MeterReadingTypeId = string | {MeterReadingType: string};

interface EditableMeterReadingType extends Pick<MeterReadingType, "Description" | "MeterReadingCategory" | "NoResetMRT"> {
}

interface MeterReadingUnit {
    BusinessPartner: string;
    Description: string;
    MeterReadingUnit: string;
    PersonnelNumber: string;
    PeriodicMeterReading_Nav: Array<PeriodicMeterReading> | DeferredContent;
    StreetRouteConnObj_Nav: Array<StreetRouteConnectionObject> | DeferredContent;
    StreetRoute_Nav: Array<StreetRoute> | DeferredContent;
}

type MeterReadingUnitId = string | {MeterReadingUnit: string};

interface EditableMeterReadingUnit extends Pick<MeterReadingUnit, "BusinessPartner" | "Description" | "PersonnelNumber"> {
}

interface MobileClientSynchronizationSession {
    CreatedBy: string | null;
    SessionBeginTimeStamp: string | null;
    SessionCloseTimeStamp: string | null;
    SessionGUID: string;
    UserGUID: string | null;
}

type MobileClientSynchronizationSessionId = string | {SessionGUID: string};

interface EditableMobileClientSynchronizationSession extends Partial<Pick<MobileClientSynchronizationSession, "CreatedBy" | "SessionBeginTimeStamp" | "SessionCloseTimeStamp" | "UserGUID">> {
}

interface MobileStatusMapping {
    InitialStatusFlag: boolean;
    MobileStatus: string;
    MobileStatusLabel: string;
    ObjectType: string;
    RecordNo: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    StatusProfile: string;
    SystemStatus: string;
    UserStatus: string;
}

type MobileStatusMappingId = string | {RecordNo: string};

interface EditableMobileStatusMapping extends Pick<MobileStatusMapping, "InitialStatusFlag" | "MobileStatus" | "MobileStatusLabel" | "ObjectType" | "StatusAttribute1" | "StatusAttribute2" | "StatusProfile" | "SystemStatus" | "UserStatus"> {
}

interface MovementReason {
    MovementReason: string;
    MovementReasonText: string;
    MovementType: string;
}

type MovementReasonId = {MovementReason: string,MovementType: string};

interface EditableMovementReason extends Pick<MovementReason, "MovementReason" | "MovementReasonText" | "MovementType"> {
}

interface MovementType {
    Consumption: string;
    DebitCredit: string;
    LanguageKey: string;
    MovementInd: string;
    MovementType: string;
    MovementTypeDesc: string;
    ReceiptInd: string;
    RevMvmtTypeInd: string;
    SAMType: string;
    SpecialStockInd: string;
}

type MovementTypeId = {LanguageKey: string,Consumption: string,MovementInd: string,MovementType: string,SpecialStockInd: string,ReceiptInd: string};

interface EditableMovementType extends Pick<MovementType, "Consumption" | "DebitCredit" | "LanguageKey" | "MovementInd" | "MovementType" | "MovementTypeDesc" | "ReceiptInd" | "RevMvmtTypeInd" | "SAMType" | "SpecialStockInd"> {
}

interface MovementTypeSpecialStock {
    Consumption: string;
    Language: string;
    MovementInd: string;
    MovementType: string;
    MovementTypeText: string;
    ReceiptInd: string;
    SpecialStock: string;
}

type MovementTypeSpecialStockId = {Language: string,MovementType: string,SpecialStock: string,MovementInd: string,ReceiptInd: string,Consumption: string};

interface EditableMovementTypeSpecialStock extends Pick<MovementTypeSpecialStock, "Consumption" | "Language" | "MovementInd" | "MovementType" | "MovementTypeText" | "ReceiptInd" | "SpecialStock"> {
}

interface MovementTypeTcode {
    MovementType: string;
    MovementTypeText: string;
    ProposeMovementType: string;
    SpecialStockIndicator: string;
    Tcode: string;
}

type MovementTypeTcodeId = {SpecialStockIndicator: string,MovementType: string,Tcode: string};

interface EditableMovementTypeTcode extends Pick<MovementTypeTcode, "MovementType" | "MovementTypeText" | "ProposeMovementType" | "SpecialStockIndicator" | "Tcode"> {
}

interface MovementTypeText {
    MovementType: string;
    SpecialStock: string;
    Text: string;
}

type MovementTypeTextId = {MovementType: string,SpecialStock: string};

interface EditableMovementTypeText extends Pick<MovementTypeText, "MovementType" | "SpecialStock" | "Text"> {
}

interface MyEquipClass {
    ClassId: string;
    ClassType: string;
    EquipId: string;
    InternClassNum: string;
    InternCounter: string;
    ObjClassFlag: string;
    ObjectKey: string;
    ClassDefinition: ClassDefinition | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipClassId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,InternClassNum: string,ClassType: string};

interface EditableMyEquipClass extends Pick<MyEquipClass, "ClassId" | "ClassType" | "EquipId" | "InternClassNum" | "InternCounter" | "ObjClassFlag" | "ObjectKey"> {
}

interface MyEquipClassCharValue {
    CharId: string;
    CharValCounter: string;
    CharValDesc: string | null;
    CharValFrom: string | null;
    CharValTo: string | null;
    CharValue: string | null;
    ClassType: string;
    EquipId: string;
    InternCounter: string;
    ObjClassFlag: string;
    ObjectKey: string;
    ValueRel: string | null;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    LAMCharacteristicValue_Nav: Array<LAMCharacteristicValue> | DeferredContent;
}

type MyEquipClassCharValueId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,ClassType: string,CharValCounter: string,CharId: string};

interface EditableMyEquipClassCharValue extends Pick<MyEquipClassCharValue, "CharId" | "CharValCounter" | "ClassType" | "EquipId" | "InternCounter" | "ObjClassFlag" | "ObjectKey">, Partial<Pick<MyEquipClassCharValue, "CharValDesc" | "CharValFrom" | "CharValTo" | "CharValue" | "ValueRel">> {
}

interface MyEquipDocument {
    DocumentID: string;
    EquipId: string;
    ObjectKey: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyEquipDocument extends Pick<MyEquipDocument, "DocumentID" | "EquipId" | "ObjectKey" | "RelationshipID"> {
}

interface MyEquipGeometry {
    EquipId: string;
    LogicalSystem: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    SpacialGUId: string;
    SpacialId: string;
    Equip_Nav: MyEquipment | null | DeferredContent;
    Geometry: Geometry | null | DeferredContent;
}

type MyEquipGeometryId = {ObjectKey: string,ObjectGroup1: string,ObjectGroup: string,ObjectType: string,LogicalSystem: string};

interface EditableMyEquipGeometry extends Pick<MyEquipGeometry, "EquipId" | "LogicalSystem" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "SpacialGUId" | "SpacialId"> {
}

interface MyEquipLongText {
    EquipmentNum: string;
    NewTextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    Equipment: MyEquipment | DeferredContent;
}

type MyEquipLongTextId = string | {EquipmentNum: string};

interface EditableMyEquipLongText extends Pick<MyEquipLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyEquipObjectStatus {
    EquipId: string;
    ObjectKey: string;
    Status: string;
    Equipment_Nav: MyEquipment | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyEquipObjectStatusId = string | {EquipId: string};

interface EditableMyEquipObjectStatus extends Pick<MyEquipObjectStatus, "ObjectKey" | "Status"> {
}

interface MyEquipPartner {
    AddressNum: string;
    BPNum: string;
    Counter: string;
    EquipId: string;
    ObjectCategory: string;
    ObjectNum: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string;
    PersonnelNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyEquipPartnerId = {Counter: string,EquipId: string,PartnerFunction: string};

interface EditableMyEquipPartner extends Pick<MyEquipPartner, "AddressNum" | "BPNum" | "Counter" | "EquipId" | "ObjectCategory" | "ObjectNum" | "PartnerFunction" | "PartnerNum" | "PersonNum" | "PersonnelNum"> {
}

interface MyEquipSerialNumber {
    BatchNumber: string;
    CompanyCode: string;
    Customer: string;
    EquipId: string;
    Issued: string;
    LastGoodsMvtDate: string | null;
    LastSerialNumber: string;
    MasterBatchNumber: string;
    MaterialNum: string;
    Plant: string;
    SalesOrder: string;
    SerialNumber: string;
    SpecialStock: string;
    StockType: string;
    StorageLocation: string;
    Vendor: string;
    WBSElement: string;
    Equipment: MyEquipment | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatch_Nav: MaterialBatch | null | DeferredContent;
}

type MyEquipSerialNumberId = string | {EquipId: string};

interface EditableMyEquipSerialNumber extends Pick<MyEquipSerialNumber, "BatchNumber" | "CompanyCode" | "Customer" | "Issued" | "LastSerialNumber" | "MasterBatchNumber" | "MaterialNum" | "Plant" | "SalesOrder" | "SerialNumber" | "SpecialStock" | "StockType" | "StorageLocation" | "Vendor" | "WBSElement">, Partial<Pick<MyEquipSerialNumber, "LastGoodsMvtDate">> {
}

interface MyEquipSystemStatus {
    EquipId: string;
    ObjectNum: string;
    SequencePosition: string;
    SequencePriority: string;
    Status: string;
    StatusInact: string | null;
    Equipment_Nav: MyEquipment | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyEquipSystemStatusId = {Status: string,ObjectNum: string};

interface EditableMyEquipSystemStatus extends Pick<MyEquipSystemStatus, "EquipId" | "ObjectNum" | "SequencePosition" | "SequencePriority" | "Status">, Partial<Pick<MyEquipSystemStatus, "StatusInact">> {
}

interface MyEquipUserStatus {
    EquipId: string;
    ObjectNum: string;
    SequencePosition: string;
    SequencePriority: string;
    Status: string;
    StatusInact: string | null;
    StatusNum: string;
    StatusProfile: string;
    Equipment_Nav: MyEquipment | DeferredContent;
    UserStatus_Nav: UserStatus | DeferredContent;
}

type MyEquipUserStatusId = {Status: string,ObjectNum: string};

interface EditableMyEquipUserStatus extends Pick<MyEquipUserStatus, "EquipId" | "ObjectNum" | "SequencePosition" | "SequencePriority" | "Status" | "StatusNum" | "StatusProfile">, Partial<Pick<MyEquipUserStatus, "StatusInact">> {
}

interface MyEquipWarranty {
    CreateDate: string | null;
    CreateTime: string;
    EquipId: string;
    MasterWarrantyNum: string;
    ObjectNum: string;
    WarrantyDate: string | null;
    WarrantyDesc: string;
    WarrantyEnd: string | null;
    WarrantyType: string;
    WarrantyTypeDesc: string;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipWarrantyId = {WarrantyType: string,EquipId: string};

interface EditableMyEquipWarranty extends Pick<MyEquipWarranty, "CreateTime" | "EquipId" | "MasterWarrantyNum" | "ObjectNum" | "WarrantyDesc" | "WarrantyType" | "WarrantyTypeDesc">, Partial<Pick<MyEquipWarranty, "CreateDate" | "WarrantyDate" | "WarrantyEnd">> {
}

interface MyEquipWarrantyLongText {
    MasterWarrantyNum: string;
    NewTextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
}

type MyEquipWarrantyLongTextId = string | {MasterWarrantyNum: string};

interface EditableMyEquipWarrantyLongText extends Pick<MyEquipWarrantyLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyEquipment {
    AddressNum: string;
    BoMFlag: string;
    BusinessArea: string;
    CRObjectType: string;
    CatalogProfile: string;
    ConfigFlag: string;
    ConstMonth: string;
    ConstYear: string;
    ControllingArea: string;
    CopyClassification: string;
    CopyClassificationValues: string;
    CopyDocuments: string;
    CopyEquipId: string;
    CopyInstallLocation: string;
    CopyMeasuringPoints: string;
    CopyNote: string;
    CopyPartners: string;
    CostCenter: string;
    DismantleDate: string | null;
    DismantleEquip: string | null;
    DismantleFuncLocIdIntern: string | null;
    DismantleTime: string;
    EquipCategory: string;
    EquipDesc: string;
    EquipFlag: string;
    EquipId: string;
    EquipType: string;
    FuncLocId: string | null;
    FuncLocIdIntern: string | null;
    ISUFlag: string;
    InstallDate: string | null;
    InstallPosition: string | null;
    InstallTime: string;
    InventoryNum: string;
    LAMObjectType: string;
    LAMTableKey: string;
    Language: string;
    Location: string;
    LongTextIndicator: string;
    MaintPlant: string;
    MaintWorkCenter: string;
    ManufCountry: string;
    ManufPartNo: string;
    ManufSerialNo: string;
    Manufacturer: string;
    ModelNum: string;
    ObjAuthGroup: string;
    ObjectNum: string;
    PMObjectType: string;
    PRTFlag: string;
    PlannerGroup: string;
    PlanningPlant: string;
    PlantSection: string;
    PrimaryLanguage: string;
    Room: string;
    SerialNoFlag: string;
    Size: string;
    StartDate: string | null;
    SuperiorEquip: string | null;
    UpdateEquip: string;
    ValidDate: string | null;
    VendorNumber: string;
    Weight: string;
    WorkCenter: string;
    Address: Address | DeferredContent;
    AssetCentralIndicators_Nav: Array<AssetCentralEquipmentIndicator> | DeferredContent;
    AssetCentralObjectLink_Nav: Array<AssetCentralObjectLink> | DeferredContent;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    ClassCharValues: Array<MyEquipClassCharValue> | DeferredContent;
    Classes: Array<MyEquipClass> | DeferredContent;
    Device: Device | null | DeferredContent;
    EquiBOMs_Nav: Array<EquipmentBOM> | DeferredContent;
    EquipDocuments: Array<MyEquipDocument> | DeferredContent;
    EquipGeometries: Array<MyEquipGeometry> | DeferredContent;
    EquipObjectType_Nav: EquipObjectType | DeferredContent;
    EquipmentCategory_Nav: EquipmentCategory | DeferredContent;
    EquipmentLongText_Nav: Array<MyEquipLongText> | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Location_Nav: Location | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotificationHeader: Array<MyNotificationHeader> | DeferredContent;
    NotificationItem: Array<MyNotificationItem> | DeferredContent;
    ObjectStatus_Nav: MyEquipObjectStatus | DeferredContent;
    Partners: Array<MyEquipPartner> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    SerialNumber: MyEquipSerialNumber | null | DeferredContent;
    SystemStatuses_Nav: Array<MyEquipSystemStatus> | DeferredContent;
    UserStatuses_Nav: Array<MyEquipUserStatus> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    Warranties: Array<MyEquipWarranty> | DeferredContent;
    WorkCenter_Main_Nav: WorkCenter | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderOperation: Array<MyWorkOrderOperation> | DeferredContent;
    WorkOrderSubOperation: Array<MyWorkOrderSubOperation> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MyEquipmentId = string | {EquipId: string};

interface EditableMyEquipment extends Pick<MyEquipment, "AddressNum" | "BoMFlag" | "BusinessArea" | "CRObjectType" | "CatalogProfile" | "ConfigFlag" | "ConstMonth" | "ConstYear" | "ControllingArea" | "CopyClassification" | "CopyClassificationValues" | "CopyDocuments" | "CopyEquipId" | "CopyInstallLocation" | "CopyMeasuringPoints" | "CopyNote" | "CopyPartners" | "CostCenter" | "DismantleTime" | "EquipCategory" | "EquipDesc" | "EquipFlag" | "EquipType" | "ISUFlag" | "InstallTime" | "InventoryNum" | "LAMObjectType" | "LAMTableKey" | "Language" | "Location" | "LongTextIndicator" | "MaintPlant" | "MaintWorkCenter" | "ManufCountry" | "ManufPartNo" | "ManufSerialNo" | "Manufacturer" | "ModelNum" | "ObjAuthGroup" | "ObjectNum" | "PMObjectType" | "PRTFlag" | "PlannerGroup" | "PlanningPlant" | "PlantSection" | "PrimaryLanguage" | "Room" | "SerialNoFlag" | "Size" | "UpdateEquip" | "VendorNumber" | "Weight" | "WorkCenter">, Partial<Pick<MyEquipment, "DismantleDate" | "DismantleEquip" | "DismantleFuncLocIdIntern" | "FuncLocId" | "FuncLocIdIntern" | "InstallDate" | "InstallPosition" | "StartDate" | "SuperiorEquip" | "ValidDate">> {
}

interface MyFuncLocClass {
    ClassId: string;
    ClassType: string;
    FuncLocIdIntern: string;
    InternClassNum: string;
    InternCount: string;
    ObjClassFlag: string;
    ObjectKey: string;
    ClassDefinition: ClassDefinition | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
}

type MyFuncLocClassId = {ClassType: string,ObjectKey: string,ObjClassFlag: string,InternCount: string,InternClassNum: string};

interface EditableMyFuncLocClass extends Pick<MyFuncLocClass, "ClassId" | "ClassType" | "FuncLocIdIntern" | "InternClassNum" | "InternCount" | "ObjClassFlag" | "ObjectKey"> {
}

interface MyFuncLocClassCharValue {
    CharId: string;
    CharValCounter: string;
    CharValDesc: string | null;
    CharValFrom: string | null;
    CharValTo: string | null;
    CharValue: string | null;
    ClassType: string;
    FuncLocIdIntern: string;
    InternCounter: string;
    ObjClassFlag: string;
    ObjectKey: string;
    ValueRel: string | null;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    LAMCharacteristicValue_Nav: Array<LAMCharacteristicValue> | DeferredContent;
}

type MyFuncLocClassCharValueId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,ClassType: string,CharValCounter: string,CharId: string};

interface EditableMyFuncLocClassCharValue extends Pick<MyFuncLocClassCharValue, "CharId" | "CharValCounter" | "ClassType" | "FuncLocIdIntern" | "InternCounter" | "ObjClassFlag" | "ObjectKey">, Partial<Pick<MyFuncLocClassCharValue, "CharValDesc" | "CharValFrom" | "CharValTo" | "CharValue" | "ValueRel">> {
}

interface MyFuncLocDocument {
    DocumentID: string;
    FuncLocIdIntern: string;
    ObjectKey: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
}

type MyFuncLocDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyFuncLocDocument extends Pick<MyFuncLocDocument, "DocumentID" | "FuncLocIdIntern" | "ObjectKey" | "RelationshipID"> {
}

interface MyFuncLocGeometry {
    FuncLocId: string;
    FuncLocIdIntern: string;
    LogicalSystem: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    SpacialGUId: string;
    SpacialId: string;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Geometry: Geometry | null | DeferredContent;
}

type MyFuncLocGeometryId = {ObjectKey: string,ObjectGroup1: string,ObjectGroup: string,ObjectType: string,LogicalSystem: string};

interface EditableMyFuncLocGeometry extends Pick<MyFuncLocGeometry, "FuncLocId" | "FuncLocIdIntern" | "LogicalSystem" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "SpacialGUId" | "SpacialId"> {
}

interface MyFuncLocLongText {
    FuncLocId: string;
    FuncLocIdIntern: string;
    FuncLocNumber: string;
    NewTextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    FunctionalLocation: MyFunctionalLocation | DeferredContent;
}

type MyFuncLocLongTextId = string | {FuncLocNumber: string};

interface EditableMyFuncLocLongText extends Pick<MyFuncLocLongText, "FuncLocId" | "FuncLocIdIntern" | "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyFuncLocObjectStatus {
    FuncLocIdIntern: string;
    ObjectKey: string;
    Status: string;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyFuncLocObjectStatusId = string | {ObjectKey: string};

interface EditableMyFuncLocObjectStatus extends Pick<MyFuncLocObjectStatus, "FuncLocIdIntern" | "Status"> {
}

interface MyFuncLocPartner {
    AddressNum: string;
    BPNum: string;
    Counter: string;
    FuncLocIdIntern: string;
    ObjectCategory: string;
    ObjectNum: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string;
    PersonnelNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyFuncLocPartnerId = {PartnerFunction: string,Counter: string,FuncLocIdIntern: string};

interface EditableMyFuncLocPartner extends Pick<MyFuncLocPartner, "AddressNum" | "BPNum" | "Counter" | "FuncLocIdIntern" | "ObjectCategory" | "ObjectNum" | "PartnerFunction" | "PartnerNum" | "PersonNum" | "PersonnelNum"> {
}

interface MyFuncLocSystemStatus {
    FuncLocIdIntern: string;
    ObjectNum: string;
    SequencePosition: string;
    SequencePriority: string;
    Status: string;
    StatusInact: string | null;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyFuncLocSystemStatusId = {Status: string,ObjectNum: string};

interface EditableMyFuncLocSystemStatus extends Pick<MyFuncLocSystemStatus, "FuncLocIdIntern" | "ObjectNum" | "SequencePosition" | "SequencePriority" | "Status">, Partial<Pick<MyFuncLocSystemStatus, "StatusInact">> {
}

interface MyFuncLocUserStatus {
    FuncLocIdIntern: string;
    ObjectNum: string;
    SequencePosition: string;
    SequencePriority: string;
    Status: string;
    StatusInact: string | null;
    StatusNum: string;
    StatusProfile: string;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    UserStatus_Nav: UserStatus | DeferredContent;
}

type MyFuncLocUserStatusId = {Status: string,ObjectNum: string};

interface EditableMyFuncLocUserStatus extends Pick<MyFuncLocUserStatus, "FuncLocIdIntern" | "ObjectNum" | "SequencePosition" | "SequencePriority" | "Status" | "StatusNum" | "StatusProfile">, Partial<Pick<MyFuncLocUserStatus, "StatusInact">> {
}

interface MyFunctionalLocation {
    AddressNum: string;
    AuthorizationGroup: string;
    BoMFlag: string;
    BusinessArea: string;
    CRObjectType: string;
    CatalogProfile: string;
    CompanyCode: string;
    ConstMonth: string;
    ConstYear: string;
    ControllingArea: string;
    CopyClassification: string;
    CopyDocuments: string;
    CopyFuncLocIdIntern: string;
    CopyMeasuringPoints: string;
    CopyNote: string;
    CopyPartners: string;
    EquipAllowed: string;
    EquipType: string;
    FuncLocDesc: string;
    FuncLocId: string;
    FuncLocIdIntern: string;
    FuncLocLabel: string;
    FuncLocStructInd: string;
    FuncLocType: string;
    InventoryNumber: string;
    LAMObjectType: string;
    LAMTableKey: string;
    LocAssignment: string;
    Location: string;
    LongTextIndicator: string;
    MaintPlant: string;
    MaintWorkCenter: string;
    Manufacturer: string;
    MasterLanguage: string;
    ModelNumber: string;
    ObjectNum: string;
    PMObjectType: string;
    PartNumber: string;
    PlanningPlant: string;
    RefFuncLocIdIntern: string;
    Room: string;
    Section: string;
    SerialNumber: string;
    SingleInstall: string;
    StartDate: string | null;
    SuperiorFuncLoc: string;
    SuperiorFuncLocInternId: string;
    WorkCenter: string;
    Address: Address | DeferredContent;
    AssetCentralObjectLink_Nav: Array<AssetCentralObjectLink> | DeferredContent;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    ClassCharValues: Array<MyFuncLocClassCharValue> | DeferredContent;
    Classes: Array<MyFuncLocClass> | DeferredContent;
    ConnectionObject: ConnectionObject | null | DeferredContent;
    DeviceLocation: DeviceLocation | null | DeferredContent;
    Equipments: Array<MyEquipment> | DeferredContent;
    FLocBOMs_Nav: Array<FunctionalLocationBOM> | DeferredContent;
    FuncLocCategory_Nav: FuncLocCategory | DeferredContent;
    FuncLocDocuments: Array<MyFuncLocDocument> | DeferredContent;
    FuncLocGeometries: Array<MyFuncLocGeometry> | DeferredContent;
    FuncLocLongText_Nav: Array<MyFuncLocLongText> | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Location_Nav: Location | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotificationHeader: Array<MyNotificationHeader> | DeferredContent;
    NotificationItem: Array<MyNotificationItem> | DeferredContent;
    ObjectStatus_Nav: MyFuncLocObjectStatus | null | DeferredContent;
    Partners: Array<MyFuncLocPartner> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    SystemStatuses_Nav: Array<MyFuncLocSystemStatus> | DeferredContent;
    UserStatuses_Nav: Array<MyFuncLocUserStatus> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WorkCenter_Main_Nav: WorkCenter | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderOperation: Array<MyWorkOrderOperation> | DeferredContent;
    WorkOrderSubOperation: Array<MyWorkOrderSubOperation> | DeferredContent;
}

type MyFunctionalLocationId = string | {FuncLocIdIntern: string};

interface EditableMyFunctionalLocation extends Pick<MyFunctionalLocation, "AddressNum" | "AuthorizationGroup" | "BoMFlag" | "BusinessArea" | "CRObjectType" | "CatalogProfile" | "CompanyCode" | "ConstMonth" | "ConstYear" | "ControllingArea" | "CopyClassification" | "CopyDocuments" | "CopyFuncLocIdIntern" | "CopyMeasuringPoints" | "CopyNote" | "CopyPartners" | "EquipAllowed" | "EquipType" | "FuncLocDesc" | "FuncLocId" | "FuncLocLabel" | "FuncLocStructInd" | "FuncLocType" | "InventoryNumber" | "LAMObjectType" | "LAMTableKey" | "LocAssignment" | "Location" | "LongTextIndicator" | "MaintPlant" | "MaintWorkCenter" | "Manufacturer" | "MasterLanguage" | "ModelNumber" | "ObjectNum" | "PMObjectType" | "PartNumber" | "PlanningPlant" | "RefFuncLocIdIntern" | "Room" | "Section" | "SerialNumber" | "SingleInstall" | "SuperiorFuncLoc" | "SuperiorFuncLocInternId" | "WorkCenter">, Partial<Pick<MyFunctionalLocation, "StartDate">> {
}

interface MyInventoryObject {
    IMObject: string;
    ItemCount: string;
    ObjectDate: string | null;
    ObjectId: string;
    ObjectIdExtn: string;
    ObjectType: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
    PhysicalInventoryDocHeader_Nav: PhysicalInventoryDocHeader | null | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | null | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | null | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | null | DeferredContent;
}

type MyInventoryObjectId = {ObjectId: string,IMObject: string};

interface EditableMyInventoryObject extends Pick<MyInventoryObject, "IMObject" | "ItemCount" | "ObjectId" | "ObjectIdExtn" | "ObjectType">, Partial<Pick<MyInventoryObject, "ObjectDate">> {
}

interface MyNotifActivityLongText {
    ActivitySequenceNumber: string;
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationActivity: MyNotificationActivity | DeferredContent;
}

type MyNotifActivityLongTextId = {NotificationNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotifActivityLongText extends Pick<MyNotifActivityLongText, "ActivitySequenceNumber" | "NewTextString" | "NotificationNumber" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifDocument {
    DocumentID: string;
    NotificationNumber: string;
    ObjectKey: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    NotifHeader: MyNotificationHeader | null | DeferredContent;
}

type MyNotifDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyNotifDocument extends Pick<MyNotifDocument, "DocumentID" | "NotificationNumber" | "ObjectKey" | "RelationshipID"> {
}

interface MyNotifGeometry {
    LogicalSystem: string;
    NotificationNumber: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    SpacialGUId: string;
    SpacialId: string;
    Geometry: Geometry | null | DeferredContent;
    NotifHeader: MyNotificationHeader | null | DeferredContent;
}

type MyNotifGeometryId = {ObjectType: string,ObjectKey: string,ObjectGroup1: string,ObjectGroup: string,LogicalSystem: string};

interface EditableMyNotifGeometry extends Pick<MyNotifGeometry, "LogicalSystem" | "NotificationNumber" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "SpacialGUId" | "SpacialId"> {
}

interface MyNotifHeaderLongText {
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotifHeaderLongTextId = string | {NotificationNumber: string};

interface EditableMyNotifHeaderLongText extends Pick<MyNotifHeaderLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifItemActivityLongText {
    ActivitySequenceNumber: string;
    ItemNumber: string;
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationItemActivity: MyNotificationItemActivity | DeferredContent;
}

type MyNotifItemActivityLongTextId = {NotificationNumber: string,ItemNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotifItemActivityLongText extends Pick<MyNotifItemActivityLongText, "ActivitySequenceNumber" | "ItemNumber" | "NewTextString" | "NotificationNumber" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifItemCauseLongText {
    CauseSequenceNumber: string;
    ItemNumber: string;
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationItemCause: MyNotificationItemCause | DeferredContent;
}

type MyNotifItemCauseLongTextId = {NotificationNumber: string,CauseSequenceNumber: string,ItemNumber: string};

interface EditableMyNotifItemCauseLongText extends Pick<MyNotifItemCauseLongText, "CauseSequenceNumber" | "ItemNumber" | "NewTextString" | "NotificationNumber" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifItemLongText {
    ItemNumber: string;
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationItem: MyNotificationItem | DeferredContent;
}

type MyNotifItemLongTextId = {NotificationNumber: string,ItemNumber: string};

interface EditableMyNotifItemLongText extends Pick<MyNotifItemLongText, "ItemNumber" | "NewTextString" | "NotificationNumber" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifItemTaskLongText {
    ItemNumber: string;
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TaskSequenceNumber: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationItemTask: MyNotificationItemTask | DeferredContent;
}

type MyNotifItemTaskLongTextId = {NotificationNumber: string,ItemNumber: string,TaskSequenceNumber: string};

interface EditableMyNotifItemTaskLongText extends Pick<MyNotifItemTaskLongText, "ItemNumber" | "NewTextString" | "NotificationNumber" | "ObjectKey" | "TaskSequenceNumber" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotifTaskLongText {
    NewTextString: string;
    NotificationNumber: string;
    ObjectKey: string;
    TaskSequenceNumber: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    NotificationTask: MyNotificationTask | DeferredContent;
}

type MyNotifTaskLongTextId = {NotificationNumber: string,TaskSequenceNumber: string};

interface EditableMyNotifTaskLongText extends Pick<MyNotifTaskLongText, "NewTextString" | "NotificationNumber" | "ObjectKey" | "TaskSequenceNumber" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyNotificationActivity {
    ActivityCatalogType: string;
    ActivityCode: string;
    ActivityCodeGroup: string;
    ActivitySequenceNumber: string;
    ActivitySortNumber: string;
    ActivityText: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    Language: string;
    LongTextFlag: string;
    NotificationNumber: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    QuantityFactor: string;
    Version: string;
    ActivityLongText: Array<MyNotifActivityLongText> | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotificationActivityId = {NotificationNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotificationActivity extends Pick<MyNotificationActivity, "ActivityCatalogType" | "ActivityCode" | "ActivityCodeGroup" | "ActivitySequenceNumber" | "ActivitySortNumber" | "ActivityText" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "Language" | "LongTextFlag" | "NotificationNumber" | "PlannedFinishTime" | "PlannedStartTime" | "QuantityFactor" | "Version">, Partial<Pick<MyNotificationActivity, "ChangedDate" | "CreationDate" | "PlannedFinishDate" | "PlannedStartDate">> {
}

interface MyNotificationHeader {
    AddressNum: string;
    Assembly: string;
    BreakdownIndicator: boolean;
    BusinessArea: string;
    ControllingArea: string;
    CreationDate: string | null;
    CreationTime: string;
    DateForCompletion: string | null;
    DetectionCatalog: string;
    DetectionCode: string;
    DetectionCodeGroup: string;
    Effect: string;
    ExternalWorkCenterId: string;
    HeaderEquipment: string | null;
    HeaderFunctionLocation: string | null;
    InspectionLot: string;
    LAMObjectType: string;
    LAMTableKey: string;
    LastChangeTime: string;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenancePlant: string;
    MalfunctionEndDate: string | null;
    MalfunctionEndTime: string | null;
    MalfunctionStartDate: string | null;
    MalfunctionStartTime: string | null;
    NotificationDescription: string;
    NotificationNumber: string;
    NotificationType: string;
    ObjectKey: string;
    ObjectNumber: string;
    OrderCurrency: string;
    OrderId: string;
    Phase: string;
    PlanningGroup: string;
    PlanningPlant: string;
    Priority: string;
    PriorityType: string;
    QMCatalog: string;
    QMCode: string;
    QMCodeGroup: string;
    RefObjectKey: string;
    RefObjectType: string;
    ReportedBy: string;
    RequiredEndDate: string | null;
    RequiredStartDate: string | null;
    SortField: string;
    Subphase: string;
    Activities: Array<MyNotificationActivity> | DeferredContent;
    Address: Address | DeferredContent;
    Assembly_Nav: Material | null | DeferredContent;
    DetectionCode_Nav: DetectionCode | null | DeferredContent;
    DetectionGroup_Nav: DetectionGroup | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    HeaderLongText: Array<MyNotifHeaderLongText> | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    Items: Array<MyNotificationItem> | DeferredContent;
    LAMObjectDatum_Nav: Array<LAMObjectDatum> | DeferredContent;
    NotifDocuments: Array<MyNotifDocument> | DeferredContent;
    NotifGeometries: Array<MyNotifGeometry> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotifMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    NotifPriority: Priority | null | DeferredContent;
    Partners: Array<MyNotificationPartner> | DeferredContent;
    RelatedWO_Nav: Array<WorkOrderHistory> | DeferredContent;
    Sales_Nav: MyNotificationSales | null | DeferredContent;
    Tasks: Array<MyNotificationTask> | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
    WorkRequestConsequence_Nav: Array<WorkRequestConsequence> | DeferredContent;
}

type MyNotificationHeaderId = string | {NotificationNumber: string};

interface EditableMyNotificationHeader extends Pick<MyNotificationHeader, "AddressNum" | "Assembly" | "BreakdownIndicator" | "BusinessArea" | "ControllingArea" | "CreationTime" | "DetectionCatalog" | "DetectionCode" | "DetectionCodeGroup" | "Effect" | "ExternalWorkCenterId" | "InspectionLot" | "LAMObjectType" | "LAMTableKey" | "LastChangeTime" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenancePlant" | "NotificationDescription" | "NotificationType" | "ObjectKey" | "ObjectNumber" | "OrderCurrency" | "OrderId" | "Phase" | "PlanningGroup" | "PlanningPlant" | "Priority" | "PriorityType" | "QMCatalog" | "QMCode" | "QMCodeGroup" | "RefObjectKey" | "RefObjectType" | "ReportedBy" | "SortField" | "Subphase">, Partial<Pick<MyNotificationHeader, "CreationDate" | "DateForCompletion" | "HeaderEquipment" | "HeaderFunctionLocation" | "MalfunctionEndDate" | "MalfunctionEndTime" | "MalfunctionStartDate" | "MalfunctionStartTime" | "RequiredEndDate" | "RequiredStartDate">> {
}

interface MyNotificationItem {
    ActivityType: string;
    Assembly: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CodeGroup: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    DamageCode: string;
    DefectClass: string;
    DefectType: string;
    DefectValuationUnit: string;
    Deleted: string;
    InspectionChar: string;
    InspectionLot: string;
    InspectionNode: string;
    InspectionSample: string;
    ItemEquipment: string;
    ItemFuncLocExtern: string;
    ItemFunctionLocation: string;
    ItemNumber: string;
    ItemSortNumber: string;
    ItemText: string;
    LAMObjectType: string;
    LAMTableKey: string;
    Language: string;
    LongTextFlag: string;
    MainWorkCenter: string;
    MaintenancePlant: string;
    MaterialNumber: string;
    NotificationNumber: string;
    NumDefects: string;
    ObjectPart: string;
    ObjectPartCatalogType: string;
    ObjectPartCodeGroup: string;
    ObjectType: string;
    OperationNo: string;
    OrderId: string;
    ReportType: string;
    Version: string;
    WorkCenterPlant: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    InspectionChar_Nav: InspectionCharacteristic | null | DeferredContent;
    InspectionPoint_Nav: InspectionPoint | null | DeferredContent;
    ItemActivities: Array<MyNotificationItemActivity> | DeferredContent;
    ItemCauses: Array<MyNotificationItemCause> | DeferredContent;
    ItemLongText: Array<MyNotifItemLongText> | DeferredContent;
    ItemTasks: Array<MyNotificationItemTask> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotificationItemId = {ItemNumber: string,NotificationNumber: string};

interface EditableMyNotificationItem extends Pick<MyNotificationItem, "ActivityType" | "Assembly" | "ChangedBy" | "ChangedTime" | "CodeGroup" | "CreatedBy" | "CreationTime" | "DamageCode" | "DefectClass" | "DefectType" | "DefectValuationUnit" | "Deleted" | "InspectionChar" | "InspectionLot" | "InspectionNode" | "InspectionSample" | "ItemEquipment" | "ItemFuncLocExtern" | "ItemFunctionLocation" | "ItemNumber" | "ItemSortNumber" | "ItemText" | "LAMObjectType" | "LAMTableKey" | "Language" | "LongTextFlag" | "MainWorkCenter" | "MaintenancePlant" | "MaterialNumber" | "NotificationNumber" | "NumDefects" | "ObjectPart" | "ObjectPartCatalogType" | "ObjectPartCodeGroup" | "ObjectType" | "OperationNo" | "OrderId" | "ReportType" | "Version" | "WorkCenterPlant">, Partial<Pick<MyNotificationItem, "ChangedDate" | "CreationDate">> {
}

interface MyNotificationItemActivity {
    ActivityCatalogType: string;
    ActivityCode: string;
    ActivityCodeGroup: string;
    ActivitySequenceNumber: string;
    ActivitySortNumber: string;
    ActivityText: string;
    CauseSequenceNumber: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    ItemNumber: string;
    ItemSortNumber: string;
    Language: string;
    LongTextFlag: string;
    NotificationNumber: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    QuantityFactor: string;
    Version: string;
    Item: MyNotificationItem | DeferredContent;
    ItemActivityLongText: Array<MyNotifItemActivityLongText> | DeferredContent;
}

type MyNotificationItemActivityId = {NotificationNumber: string,ItemNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotificationItemActivity extends Pick<MyNotificationItemActivity, "ActivityCatalogType" | "ActivityCode" | "ActivityCodeGroup" | "ActivitySequenceNumber" | "ActivitySortNumber" | "ActivityText" | "CauseSequenceNumber" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "ItemNumber" | "ItemSortNumber" | "Language" | "LongTextFlag" | "NotificationNumber" | "PlannedFinishTime" | "PlannedStartTime" | "QuantityFactor" | "Version">, Partial<Pick<MyNotificationItemActivity, "ChangedDate" | "CreationDate" | "PlannedFinishDate" | "PlannedStartDate">> {
}

interface MyNotificationItemCause {
    CauseCatalogType: string;
    CauseCode: string;
    CauseCodeGroup: string;
    CauseSequenceNumber: string;
    CauseSortNumber: string;
    CauseText: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    ItemNumber: string;
    ItemSortNumber: string;
    Language: string;
    LongTextFlag: string;
    NotificationNumber: string;
    PartyRespCodeGroup: string;
    Quantity: string;
    Item: MyNotificationItem | DeferredContent;
    ItemCauseLongText: Array<MyNotifItemCauseLongText> | DeferredContent;
}

type MyNotificationItemCauseId = {NotificationNumber: string,ItemNumber: string,CauseSequenceNumber: string};

interface EditableMyNotificationItemCause extends Pick<MyNotificationItemCause, "CauseCatalogType" | "CauseCode" | "CauseCodeGroup" | "CauseSequenceNumber" | "CauseSortNumber" | "CauseText" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "ItemNumber" | "ItemSortNumber" | "Language" | "LongTextFlag" | "NotificationNumber" | "PartyRespCodeGroup" | "Quantity">, Partial<Pick<MyNotificationItemCause, "ChangedDate" | "CreationDate">> {
}

interface MyNotificationItemTask {
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    GlobalIdentifier: string;
    ItemNumber: string;
    ItemSortNumber: string;
    KeysForFunction: string;
    Language: string;
    LongTextFlag: string;
    NotificationNumber: string;
    ObjectKey: string;
    ObjectNumber: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    Quantity: string;
    RespPartnerFunction: string;
    ResponsiblePartner: string;
    TaskCatalogType: string;
    TaskCode: string;
    TaskCodeGroup: string;
    TaskSequenceNumber: string;
    TaskSortNumber: string;
    TaskText: string;
    Template: string;
    UnitOfMeasure: string;
    Item: MyNotificationItem | DeferredContent;
    ItemTaskLongText: Array<MyNotifItemTaskLongText> | DeferredContent;
    ItemTaskMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
}

type MyNotificationItemTaskId = {ItemNumber: string,TaskSequenceNumber: string,NotificationNumber: string};

interface EditableMyNotificationItemTask extends Pick<MyNotificationItemTask, "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "GlobalIdentifier" | "ItemNumber" | "ItemSortNumber" | "KeysForFunction" | "Language" | "LongTextFlag" | "NotificationNumber" | "ObjectKey" | "ObjectNumber" | "PlannedFinishTime" | "PlannedStartTime" | "Quantity" | "RespPartnerFunction" | "ResponsiblePartner" | "TaskCatalogType" | "TaskCode" | "TaskCodeGroup" | "TaskSequenceNumber" | "TaskSortNumber" | "TaskText" | "Template" | "UnitOfMeasure">, Partial<Pick<MyNotificationItemTask, "ChangedDate" | "CreationDate" | "PlannedFinishDate" | "PlannedStartDate">> {
}

interface MyNotificationPartner {
    AddressNum: string | null;
    BPNum: string;
    Counter: string;
    NotificationNumber: string;
    ObjectCategory: string;
    ObjectNum: string;
    OldPartner: string;
    OneTimeAddress: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string | null;
    PersonnelNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyNotificationPartnerId = {Counter: string,PartnerFunction: string,NotificationNumber: string};

interface EditableMyNotificationPartner extends Pick<MyNotificationPartner, "BPNum" | "Counter" | "NotificationNumber" | "ObjectCategory" | "ObjectNum" | "OldPartner" | "OneTimeAddress" | "PartnerFunction" | "PartnerNum" | "PersonnelNum">, Partial<Pick<MyNotificationPartner, "AddressNum" | "PersonNum">> {
}

interface MyNotificationSales {
    ContractDateFrom: string | null;
    ContractDateTo: string | null;
    ContractDesc: string;
    ContractItemNum: string;
    Customer: string;
    CustomerReference: string;
    CustomerReferenceDate: string | null;
    DistributionChannel: string;
    Division: string;
    NotificationNumber: string;
    SalesOrg: string;
    ServiceContract: string;
    Customer_Nav: Customer | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | DeferredContent;
}

type MyNotificationSalesId = string | {NotificationNumber: string};

interface EditableMyNotificationSales extends Pick<MyNotificationSales, "ContractDesc" | "ContractItemNum" | "Customer" | "CustomerReference" | "DistributionChannel" | "Division" | "SalesOrg" | "ServiceContract">, Partial<Pick<MyNotificationSales, "ContractDateFrom" | "ContractDateTo" | "CustomerReferenceDate">> {
}

interface MyNotificationTask {
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    GlobalIdentifier: string;
    KeysForFunction: string;
    Language: string;
    LongTextFlag: string;
    NotificationNumber: string;
    ObjectKey: string;
    ObjectNumber: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    Quantity: string;
    RespPartnerFunction: string;
    ResponsiblePartner: string;
    TaskCatalogType: string;
    TaskCode: string;
    TaskCodeGroup: string;
    TaskSequenceNumber: string;
    TaskSortNumber: string;
    TaskText: string;
    Template: string;
    UnitOfMeasure: string;
    Notification: MyNotificationHeader | null | DeferredContent;
    TaskLongText: Array<MyNotifTaskLongText> | DeferredContent;
    TaskMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
}

type MyNotificationTaskId = {TaskSequenceNumber: string,NotificationNumber: string};

interface EditableMyNotificationTask extends Pick<MyNotificationTask, "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "GlobalIdentifier" | "KeysForFunction" | "Language" | "LongTextFlag" | "NotificationNumber" | "ObjectKey" | "ObjectNumber" | "PlannedFinishTime" | "PlannedStartTime" | "Quantity" | "RespPartnerFunction" | "ResponsiblePartner" | "TaskCatalogType" | "TaskCode" | "TaskCodeGroup" | "TaskSequenceNumber" | "TaskSortNumber" | "TaskText" | "Template" | "UnitOfMeasure">, Partial<Pick<MyNotificationTask, "ChangedDate" | "CreationDate" | "PlannedFinishDate" | "PlannedStartDate">> {
}

interface MyRoute {
    Description: string;
    ReferenceID: string;
    ReferenceType: string;
    RouteID: string;
    Status: string;
    Stops: Array<MyRouteStop> | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
}

type MyRouteId = string | {RouteID: string};

interface EditableMyRoute extends Pick<MyRoute, "Description" | "ReferenceID" | "ReferenceType" | "Status"> {
}

interface MyRoutePoint {
    Equipment: string;
    FuncLocID: string;
    Obligated: string;
    PRTPoint: string;
    Point: string;
    RouteID: string;
    SequenceNum: string;
    StopID: string;
    MeasuringPoint: MeasuringPoint | DeferredContent;
    Stops: MyRouteStop | null | DeferredContent;
    TechObject: MyTechObject | null | DeferredContent;
}

type MyRoutePointId = {RouteID: string,Point: string,StopID: string};

interface EditableMyRoutePoint extends Pick<MyRoutePoint, "Equipment" | "FuncLocID" | "Obligated" | "PRTPoint" | "Point" | "RouteID" | "SequenceNum" | "StopID"> {
}

interface MyRouteStop {
    AddressNum: string;
    Description: string;
    RouteID: string;
    Status: string;
    StopID: string;
    StopLocation: string;
    Address: Address | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FuncLoc: MyFunctionalLocation | null | DeferredContent;
    Operation: MyWorkOrderOperation | null | DeferredContent;
    Points: Array<MyRoutePoint> | DeferredContent;
    Route: MyRoute | null | DeferredContent;
    TechObjects: Array<MyTechObject> | DeferredContent;
}

type MyRouteStopId = {StopID: string,RouteID: string};

interface EditableMyRouteStop extends Pick<MyRouteStop, "AddressNum" | "Description" | "RouteID" | "Status" | "StopID" | "StopLocation"> {
}

interface MyTechObject {
    EquipDesc: string;
    Equipment: string;
    FuncLocDesc: string;
    FuncLocID: string;
    RouteID: string;
    StopID: string;
    Equip: MyEquipment | null | DeferredContent;
    FuncLoc: MyFunctionalLocation | null | DeferredContent;
    Operation: MyWorkOrderOperation | null | DeferredContent;
    Points: Array<MyRoutePoint> | DeferredContent;
    Stops: MyRouteStop | null | DeferredContent;
}

type MyTechObjectId = {RouteID: string,StopID: string,FuncLocID: string,Equipment: string};

interface EditableMyTechObject extends Pick<MyTechObject, "EquipDesc" | "Equipment" | "FuncLocDesc" | "FuncLocID" | "RouteID" | "StopID"> {
}

interface MyWorkOrderComponent {
    Batch: string;
    CommittedQuantity: string;
    ComponentDesc: string;
    ItemCategory: string;
    ItemCategoryDesc: string;
    ItemNumber: string;
    MaterialNum: string;
    OperationDesc: string;
    OperationNo: string;
    OrderId: string;
    Plant: string;
    QuantityUnE: string;
    RecordType: string;
    RequirementNumber: string;
    RequirementQuantity: string;
    SerialNoProfile: string;
    StorageLocation: string;
    TextTypeDesc: string;
    UnitOfEntry: string;
    UnitOfMeasure: string;
    WithdrawnQuantity: string;
    WithdrawnQuantityOrig: string;
    ComponentLongText: Array<MyWorkOrderComponentLongText> | DeferredContent;
    ItemCategory_Nav: ItemCategory | null | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatch_Nav: MaterialBatch | null | DeferredContent;
    MaterialDoc: Array<MyWorkOrderComponentMatDoc> | DeferredContent;
    WOHeader: MyWorkOrderHeader | null | DeferredContent;
    WOOperation: MyWorkOrderOperation | null | DeferredContent;
}

type MyWorkOrderComponentId = {ItemNumber: string,OperationNo: string,OrderId: string};

interface EditableMyWorkOrderComponent extends Pick<MyWorkOrderComponent, "Batch" | "CommittedQuantity" | "ComponentDesc" | "ItemCategory" | "ItemCategoryDesc" | "ItemNumber" | "MaterialNum" | "OperationDesc" | "OperationNo" | "OrderId" | "Plant" | "QuantityUnE" | "RecordType" | "RequirementNumber" | "RequirementQuantity" | "SerialNoProfile" | "StorageLocation" | "TextTypeDesc" | "UnitOfEntry" | "UnitOfMeasure" | "WithdrawnQuantity" | "WithdrawnQuantityOrig"> {
}

interface MyWorkOrderComponentLongText {
    ItemNumber: string;
    NewTextString: string;
    ObjectKey: string;
    OperationNo: string;
    OrderId: string;
    RecordType: string;
    RequirementNumber: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    WorkOrderComponent: MyWorkOrderComponent | DeferredContent;
}

type MyWorkOrderComponentLongTextId = {ItemNumber: string,OperationNo: string,OrderId: string,RecordType: string};

interface EditableMyWorkOrderComponentLongText extends Pick<MyWorkOrderComponentLongText, "ItemNumber" | "NewTextString" | "ObjectKey" | "OperationNo" | "OrderId" | "RecordType" | "RequirementNumber" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyWorkOrderComponentMatDoc {
    ItemNumber: string | null;
    MatDocItem: string;
    MaterialDocNumber: string;
    MaterialDocYear: string;
    OperationNo: string | null;
    OrderId: string | null;
    RecordType: string | null;
    MaterialDocItem: MaterialDocItem | DeferredContent;
    WorkOrderComponent: MyWorkOrderComponent | DeferredContent;
}

type MyWorkOrderComponentMatDocId = {MatDocItem: string,MaterialDocYear: string,MaterialDocNumber: string};

interface EditableMyWorkOrderComponentMatDoc extends Pick<MyWorkOrderComponentMatDoc, "MatDocItem" | "MaterialDocNumber" | "MaterialDocYear">, Partial<Pick<MyWorkOrderComponentMatDoc, "ItemNumber" | "OperationNo" | "OrderId" | "RecordType">> {
}

interface MyWorkOrderDocument {
    DocumentID: string;
    ObjectKey: string;
    OperationNo: string;
    OrderId: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    WOHeader: MyWorkOrderHeader | null | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type MyWorkOrderDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyWorkOrderDocument extends Pick<MyWorkOrderDocument, "DocumentID" | "ObjectKey" | "OperationNo" | "OrderId" | "RelationshipID"> {
}

interface MyWorkOrderGeometry {
    LogicalSystem: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    OrderId: string;
    SpacialGUId: string;
    SpacialId: string;
    Geometry: Geometry | null | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type MyWorkOrderGeometryId = {ObjectKey: string,LogicalSystem: string,ObjectType: string,ObjectGroup1: string,ObjectGroup: string};

interface EditableMyWorkOrderGeometry extends Pick<MyWorkOrderGeometry, "LogicalSystem" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "OrderId" | "SpacialGUId" | "SpacialId"> {
}

interface MyWorkOrderHeader {
    AccountingIndicator: string;
    AddressNum: string;
    Assembly: string;
    BusinessArea: string;
    ControllingArea: string;
    CostCenter: string;
    CreationDate: string | null;
    CreationTime: string;
    DueDate: string | null;
    HeaderEquipment: string | null;
    HeaderFunctionLocation: string | null;
    LAMObjectType: string;
    LAMTableKey: string;
    LastChangeTime: string | null;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenanceActivityType: string;
    MaintenancePlant: string;
    NotificationNumber: string;
    ObjectKey: string;
    ObjectNumber: string;
    ObjectType: string;
    OrderCategory: string;
    OrderCurrency: string;
    OrderDescription: string;
    OrderId: string;
    OrderType: string;
    Phase: string;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    PriorityType: string;
    ReferenceOrder: string;
    RequestStartDate: string | null;
    ScheduledEndDate: string | null;
    ScheduledStartDate: string | null;
    Subphase: string;
    WorkCenterInternalId: string;
    Address: Address | DeferredContent;
    Assembly_nav: Material | null | DeferredContent;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    DisconnectActivity_Nav: Array<DisconnectionActivity> | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    HeaderLongText: Array<MyWorkOrderHeaderLongText> | DeferredContent;
    InspectionLot_Nav: Array<InspectionLot> | DeferredContent;
    LAMObjectDatum_Nav: Array<LAMObjectDatum> | DeferredContent;
    MarkedJob: MarkedJob | null | DeferredContent;
    MaterialDocItem: MaterialDocItem | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    Notification: MyNotificationHeader | null | DeferredContent;
    Operations: Array<MyWorkOrderOperation> | DeferredContent;
    OrderISULinks: Array<OrderISULink> | DeferredContent;
    OrderMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    PMMobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    RelatedNotif_Nav: Array<NotificationHistory> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    Route: Array<MyRoute> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WODocuments: Array<MyWorkOrderDocument> | DeferredContent;
    WOGeometries: Array<MyWorkOrderGeometry> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOPartners: Array<MyWorkOrderPartner> | DeferredContent;
    WOPriority: Priority | null | DeferredContent;
    WOSales_Nav: MyWorkOrderSales | null | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyWorkOrderHeaderId = string | {OrderId: string};

interface EditableMyWorkOrderHeader extends Pick<MyWorkOrderHeader, "AccountingIndicator" | "AddressNum" | "Assembly" | "BusinessArea" | "ControllingArea" | "CostCenter" | "CreationTime" | "LAMObjectType" | "LAMTableKey" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenanceActivityType" | "MaintenancePlant" | "NotificationNumber" | "ObjectKey" | "ObjectNumber" | "ObjectType" | "OrderCategory" | "OrderCurrency" | "OrderDescription" | "OrderType" | "Phase" | "PlannerGroup" | "PlanningPlant" | "Priority" | "PriorityType" | "ReferenceOrder" | "Subphase" | "WorkCenterInternalId">, Partial<Pick<MyWorkOrderHeader, "CreationDate" | "DueDate" | "HeaderEquipment" | "HeaderFunctionLocation" | "LastChangeTime" | "RequestStartDate" | "ScheduledEndDate" | "ScheduledStartDate">> {
}

interface MyWorkOrderHeaderLongText {
    NewTextString: string;
    ObjectKey: string;
    OrderId: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderHeaderLongTextId = string | {OrderId: string};

interface EditableMyWorkOrderHeaderLongText extends Pick<MyWorkOrderHeaderLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyWorkOrderObjectList {
    Assembly: string;
    Date: string | null;
    EquipId: string;
    FuncLocIdIntern: string;
    LocAssignment: string;
    MaterialNum: string;
    NotifNum: string;
    ObjectCounter: number;
    ObjectListCounter: string;
    ObjectListNum: string;
    ObjectListUsage: string;
    ObjectNum: string;
    OperationNo: string;
    OrderId: string;
    ProcessingInd: string;
    SerialNum: string;
    SerialNumTable: string;
    SubOperationNo: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | DeferredContent;
}

type MyWorkOrderObjectListId = {ObjectListNum: string,ObjectListCounter: string,SubOperationNo: string,OperationNo: string,OrderId: string};

interface EditableMyWorkOrderObjectList extends Pick<MyWorkOrderObjectList, "Assembly" | "EquipId" | "FuncLocIdIntern" | "LocAssignment" | "MaterialNum" | "NotifNum" | "ObjectCounter" | "ObjectListCounter" | "ObjectListNum" | "ObjectListUsage" | "ObjectNum" | "OperationNo" | "OrderId" | "ProcessingInd" | "SerialNum" | "SerialNumTable" | "SubOperationNo">, Partial<Pick<MyWorkOrderObjectList, "Date">> {
}

interface MyWorkOrderOperation {
    StandardTextKey: string;
    ActivityType: string;
    Assembly: string;
    ChecklistType: string;
    ControlKey: string;
    Duration: string;
    DurationUOM: string;
    LAMObjectType: string;
    LAMTableKey: string;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenancePlant: string;
    NotifNum: string;
    NumberOfCapacities: string;
    ObjectKey: string;
    ObjectNumber: string;
    ObjectType: string;
    OperationCategory: string;
    OperationEquipment: string | null;
    OperationFunctionLocation: string | null;
    OperationNo: string;
    OperationShortText: string;
    OrderId: string;
    PersonNum: string | null;
    Phase: string;
    SchedEarliestEndDate: string | null;
    SchedEarliestStartDate: string | null;
    SchedLatestEndDate: string | null;
    SchedLatestStartDate: string | null;
    Subphase: string;
    Work: string;
    WorkCenterInternalId: string;
    WorkUnit: string;
    Assembly_Nav: Material | null | DeferredContent;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    EquipmentOperation: MyEquipment | null | DeferredContent;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
    FunctionalLocationOperation: MyFunctionalLocation | null | DeferredContent;
    InspectionPoint_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    OperationLongText: Array<MyWorkOrderOperationLongText> | DeferredContent;
    OperationMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    RouteStop: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    SubOperations: Array<MyWorkOrderSubOperation> | DeferredContent;
    Tools: Array<MyWorkOrderTool> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOHeader: MyWorkOrderHeader | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOOperationCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WOOprDocuments_Nav: Array<MyWorkOrderDocument> | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyWorkOrderOperationId = {OperationNo: string,OrderId: string};

interface EditableMyWorkOrderOperation extends Pick<MyWorkOrderOperation, "StandardTextKey" | "ActivityType" | "Assembly" | "ChecklistType" | "ControlKey" | "Duration" | "DurationUOM" | "LAMObjectType" | "LAMTableKey" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenancePlant" | "NotifNum" | "NumberOfCapacities" | "ObjectKey" | "ObjectNumber" | "ObjectType" | "OperationCategory" | "OperationNo" | "OperationShortText" | "OrderId" | "Phase" | "Subphase" | "Work" | "WorkCenterInternalId" | "WorkUnit">, Partial<Pick<MyWorkOrderOperation, "OperationEquipment" | "OperationFunctionLocation" | "PersonNum" | "SchedEarliestEndDate" | "SchedEarliestStartDate" | "SchedLatestEndDate" | "SchedLatestStartDate">> {
}

interface MyWorkOrderOperationLongText {
    NewTextString: string;
    ObjectKey: string;
    OperationNo: string;
    OrderId: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
}

type MyWorkOrderOperationLongTextId = {OperationNo: string,OrderId: string};

interface EditableMyWorkOrderOperationLongText extends Pick<MyWorkOrderOperationLongText, "NewTextString" | "ObjectKey" | "OperationNo" | "OrderId" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyWorkOrderPartner {
    AddressNum: string;
    BPNum: string;
    Counter: string;
    NewPartner: string;
    ObjectCategory: string;
    ObjectNum: string;
    OldPartner: string;
    OneTimeAddress: string;
    OrderId: string;
    Partner: string;
    PartnerFunction: string;
    PersonNum: string;
    PersonnelNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderPartnerId = {Counter: string,PartnerFunction: string,OrderId: string};

interface EditableMyWorkOrderPartner extends Pick<MyWorkOrderPartner, "AddressNum" | "BPNum" | "Counter" | "NewPartner" | "ObjectCategory" | "ObjectNum" | "OldPartner" | "OneTimeAddress" | "OrderId" | "Partner" | "PartnerFunction" | "PersonNum" | "PersonnelNum"> {
}

interface MyWorkOrderSales {
    AccountingIndicator: string;
    ContractDateFrom: string | null;
    ContractDateTo: string | null;
    ContractDesc: string;
    ContractItemNum: string;
    Customer: string;
    CustomerReference: string;
    CustomerReferenceDate: string | null;
    DistributionChannel: string;
    Division: string;
    ObjectNum: string;
    OrderId: string;
    ProductDesc: string;
    Quantity: string;
    QuantityUOM: string;
    SalesGroup: string;
    SalesOrg: string;
    ServiceContract: string;
    ServiceProduct: string;
    Customer_Nav: Customer | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderSalesId = string | {OrderId: string};

interface EditableMyWorkOrderSales extends Pick<MyWorkOrderSales, "AccountingIndicator" | "ContractDesc" | "ContractItemNum" | "Customer" | "CustomerReference" | "DistributionChannel" | "Division" | "ObjectNum" | "ProductDesc" | "Quantity" | "QuantityUOM" | "SalesGroup" | "SalesOrg" | "ServiceContract" | "ServiceProduct">, Partial<Pick<MyWorkOrderSales, "ContractDateFrom" | "ContractDateTo" | "CustomerReferenceDate">> {
}

interface MyWorkOrderSubOpLongText {
    NewTextString: string;
    ObjectKey: string;
    OperationNo: string;
    OrderId: string;
    SubOperationNo: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    WorkOrderSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type MyWorkOrderSubOpLongTextId = {OperationNo: string,OrderId: string,SubOperationNo: string};

interface EditableMyWorkOrderSubOpLongText extends Pick<MyWorkOrderSubOpLongText, "NewTextString" | "ObjectKey" | "OperationNo" | "OrderId" | "SubOperationNo" | "TextId" | "TextObjType" | "TextString"> {
}

interface MyWorkOrderSubOperation {
    StandardTextKey: string;
    ActivityType: string;
    ControlKey: string;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenancePlant: string;
    NotifNum: string;
    ObjectKey: string;
    ObjectType: string;
    OperationEquipment: string | null;
    OperationFunctionLocation: string | null;
    OperationNo: string;
    OperationShortText: string;
    OrderId: string;
    PersonNum: string;
    SubOperationNo: string;
    WorkCenterInternalId: string;
    Confirmations: Array<Confirmation> | DeferredContent;
    EquipmentSubOperation: MyEquipment | null | DeferredContent;
    FunctionalLocationSubOperation: MyFunctionalLocation | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    SubOpMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    SubOperationLongText: Array<MyWorkOrderSubOpLongText> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOSubOperationCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
}

type MyWorkOrderSubOperationId = {SubOperationNo: string,OrderId: string,OperationNo: string};

interface EditableMyWorkOrderSubOperation extends Pick<MyWorkOrderSubOperation, "StandardTextKey" | "ActivityType" | "ControlKey" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenancePlant" | "NotifNum" | "ObjectKey" | "ObjectType" | "OperationNo" | "OperationShortText" | "OrderId" | "PersonNum" | "SubOperationNo" | "WorkCenterInternalId">, Partial<Pick<MyWorkOrderSubOperation, "OperationEquipment" | "OperationFunctionLocation">> {
}

interface MyWorkOrderTool {
    ControlKey: string;
    Description: string;
    DocumentID: string;
    DocumentNumber: string;
    DocumentPart: string;
    DocumentType: string;
    DocumentVersion: string;
    Duration: string;
    Equipment: string;
    ItemCounter: string;
    ItemCounterChar: string;
    ItemNum: string;
    Material: string;
    ObjectId: string;
    ObjectNum: string;
    ObjectType: string;
    OperationNo: string;
    OrderId: string;
    PRTCategory: string;
    PRTNumber: string;
    PRTPlant: string;
    PRTText: string;
    PRTTool: string;
    Point: string;
    Quantity: string;
    QuantityUOM: string;
    UsageUOM: string;
    UsageValue: string;
    PRTDocument: Document | null | DeferredContent;
    PRTEquipment: MyEquipment | null | DeferredContent;
    PRTMaterial: Material | DeferredContent;
    PRTPoint: MeasuringPoint | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | DeferredContent;
    WOToolLongText_Nav: Array<MyWorkOrderToolLongText> | DeferredContent;
}

type MyWorkOrderToolId = {OrderId: string,OperationNo: string,ItemCounter: string};

interface EditableMyWorkOrderTool extends Pick<MyWorkOrderTool, "ControlKey" | "Description" | "DocumentID" | "DocumentNumber" | "DocumentPart" | "DocumentType" | "DocumentVersion" | "Duration" | "Equipment" | "ItemCounter" | "ItemCounterChar" | "ItemNum" | "Material" | "ObjectId" | "ObjectNum" | "ObjectType" | "OperationNo" | "OrderId" | "PRTCategory" | "PRTNumber" | "PRTPlant" | "PRTText" | "PRTTool" | "Point" | "Quantity" | "QuantityUOM" | "UsageUOM" | "UsageValue"> {
}

interface MyWorkOrderToolLongText {
    ItemCounter: string;
    NewTextString: string;
    ObjectKey: string;
    OperationNo: string;
    OrderId: string;
    PRTNo: string;
    TextId: string;
    TextObjectType: string;
    TextString: string;
    WOTool_Nav: MyWorkOrderTool | DeferredContent;
}

type MyWorkOrderToolLongTextId = {ItemCounter: string,OrderId: string,OperationNo: string};

interface EditableMyWorkOrderToolLongText extends Pick<MyWorkOrderToolLongText, "ItemCounter" | "NewTextString" | "ObjectKey" | "OperationNo" | "OrderId" | "PRTNo" | "TextId" | "TextObjectType" | "TextString"> {
}

interface NotifPartnerDetProc {
    IsUnique: string;
    MaintainAppointments: string;
    NoChangePossible: string;
    NotifCategory: string;
    NotifCategoryDesc: string;
    NotifOrigin: string;
    NotifType: string;
    NotifTypeDesc: string;
    OriginTable: string;
    PartnerDetAtEnd: string;
    PartnerDeterminationDescription: string;
    PartnerDeterminationProcedure: string;
    PartnerFunction: string;
    PartnerIsMandatory: string;
    Sequence: number;
    SourceFunction: string;
    NotifType_Nav: NotificationType | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type NotifPartnerDetProcId = {NotifType: string,PartnerFunction: string};

interface EditableNotifPartnerDetProc extends Pick<NotifPartnerDetProc, "IsUnique" | "MaintainAppointments" | "NoChangePossible" | "NotifCategory" | "NotifCategoryDesc" | "NotifOrigin" | "NotifType" | "NotifTypeDesc" | "OriginTable" | "PartnerDetAtEnd" | "PartnerDeterminationDescription" | "PartnerDeterminationProcedure" | "PartnerFunction" | "PartnerIsMandatory" | "Sequence" | "SourceFunction"> {
}

interface NotificationHistory {
    BreakDown: string;
    CompletionDate: string | null;
    CompletionTime: string;
    Description: string;
    EquipId: string;
    FuncLocIdIntern: string;
    MainWorkCenter: string;
    MalfunctionEndDate: string | null;
    MalfunctionEndTime: string;
    MalfunctionStartDate: string | null;
    MalfunctionStartTime: string;
    NotificationNumber: string;
    NotificationType: string;
    OrderId: string;
    PM_OBJTY: string;
    PersonRespName: string;
    PersonRespNum: string;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    PriorityType: string;
    ReferenceType: string;
    RequiredEndDate: string | null;
    RequiredEndTime: string;
    RequiredStartDate: string | null;
    RequiredStartTime: string;
    TechObject: string;
    WorkCenter: string;
    Employee_Nav: Employee | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    HistoryLongText_Nav: NotificationHistoryText | DeferredContent;
    HistoryPriority_Nav: Priority | null | DeferredContent;
    NotificationHeader_Nav: MyNotificationHeader | DeferredContent;
    PlannerGroup_Nav: PlannerGroup | DeferredContent;
    RelatedWO_Nav: MyWorkOrderHeader | null | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
}

type NotificationHistoryId = {TechObject: string,ReferenceType: string,NotificationNumber: string};

interface EditableNotificationHistory extends Pick<NotificationHistory, "BreakDown" | "CompletionTime" | "Description" | "EquipId" | "FuncLocIdIntern" | "MainWorkCenter" | "MalfunctionEndTime" | "MalfunctionStartTime" | "NotificationNumber" | "NotificationType" | "OrderId" | "PM_OBJTY" | "PersonRespName" | "PersonRespNum" | "PlannerGroup" | "PlanningPlant" | "Priority" | "PriorityType" | "ReferenceType" | "RequiredEndTime" | "RequiredStartTime" | "TechObject" | "WorkCenter">, Partial<Pick<NotificationHistory, "CompletionDate" | "MalfunctionEndDate" | "MalfunctionStartDate" | "RequiredEndDate" | "RequiredStartDate">> {
}

interface NotificationHistoryText {
    NotificationNumber: string;
    ObjectKey: string;
    TextId: string;
    TextObjectType: string;
    TextString: string;
    NotifHistory_Nav: NotificationHistory | DeferredContent;
}

type NotificationHistoryTextId = string | {NotificationNumber: string};

interface EditableNotificationHistoryText extends Pick<NotificationHistoryText, "ObjectKey" | "TextId" | "TextObjectType" | "TextString"> {
}

interface NotificationType {
    CatTypeActivities: string;
    CatTypeCauses: string;
    CatTypeCoding: string;
    CatTypeDefects: string;
    CatTypeObjectParts: string;
    CatTypeTasks: string;
    CatalogProfile: string;
    Description: string;
    EAMOverallStatusProfile: string;
    NotifCategory: string;
    NotifType: string;
    OrderType: string;
    PriorityType: string;
    PartnerDetProc_Nav: Array<NotifPartnerDetProc> | DeferredContent;
}

type NotificationTypeId = string | {NotifType: string};

interface EditableNotificationType extends Pick<NotificationType, "CatTypeActivities" | "CatTypeCauses" | "CatTypeCoding" | "CatTypeDefects" | "CatTypeObjectParts" | "CatTypeTasks" | "CatalogProfile" | "Description" | "EAMOverallStatusProfile" | "NotifCategory" | "OrderType" | "PriorityType"> {
}

interface ObjectFormCategory {
    EquipId: string;
    FormCategory: string;
    FormCategoryDesc: string;
    FuncLocIdIntern: string;
    ObjectId: string;
    PublishedAssessCount: string;
    UnPublishedAssessCount: string;
    EquipmentFormCategory_Nav: MyEquipment | null | DeferredContent;
    FormCategoryTemplates_Nav: Array<ObjectFormTemplate> | DeferredContent;
    FuncLocFormCategory_Nav: MyFunctionalLocation | null | DeferredContent;
}

type ObjectFormCategoryId = {FormCategory: string,ObjectId: string};

interface EditableObjectFormCategory extends Pick<ObjectFormCategory, "EquipId" | "FormCategory" | "FormCategoryDesc" | "FuncLocIdIntern" | "ObjectId" | "PublishedAssessCount" | "UnPublishedAssessCount"> {
}

interface ObjectFormTemplate {
    FormCategory: string;
    ObjectId: string;
    TemplateId: string;
    FormCategory_Nav: Array<ObjectFormTemplate> | DeferredContent;
    TemplateHeader_Nav: ObjectFormTemplate | null | DeferredContent;
}

type ObjectFormTemplateId = {FormCategory: string,ObjectId: string,TemplateId: string};

interface EditableObjectFormTemplate extends Pick<ObjectFormTemplate, "FormCategory" | "ObjectId" | "TemplateId"> {
}

interface OnDemandObject {
    Action: string;
    ObjectId: string;
    ObjectType: string;
}

type OnDemandObjectId = {ObjectId: string,ObjectType: string};

interface EditableOnDemandObject extends Pick<OnDemandObject, "Action" | "ObjectId" | "ObjectType"> {
}

interface OrderActivityType {
    ActivityType: string;
    OrderType: string;
}

type OrderActivityTypeId = {OrderType: string,ActivityType: string};

interface EditableOrderActivityType extends Pick<OrderActivityType, "ActivityType" | "OrderType"> {
}

interface OrderISULink {
    ConnectionObject: string;
    DeviceCategory: string;
    DeviceLocation: string;
    DisconnectionNum: string;
    EquipmentNum: string;
    FunctionalLoc: string;
    ISUProcess: string;
    Installation: string;
    OrderNum: string;
    Premise: string;
    SerialNum: string;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    DeviceCategory_Nav: DeviceCategory | DeferredContent;
    DeviceLocation_Nav: DeviceLocation | null | DeferredContent;
    Device_Nav: Device | DeferredContent;
    Installation_Nav: Installation | null | DeferredContent;
    Premise_Nav: Premise | null | DeferredContent;
    Workorder_Nav: MyWorkOrderHeader | DeferredContent;
}

type OrderISULinkId = {EquipmentNum: string,OrderNum: string,DeviceCategory: string,DisconnectionNum: string,Installation: string,Premise: string,SerialNum: string,ConnectionObject: string,DeviceLocation: string,FunctionalLoc: string,ISUProcess: string};

interface EditableOrderISULink extends Pick<OrderISULink, "ConnectionObject" | "DeviceCategory" | "DeviceLocation" | "DisconnectionNum" | "EquipmentNum" | "FunctionalLoc" | "ISUProcess" | "Installation" | "OrderNum" | "Premise" | "SerialNum"> {
}

interface OrderType {
    AutChecklistGen: string;
    AutObjectListGen: string;
    ControlKey: string;
    DocumentType: string;
    EAMNotifType: string;
    EAMOverallStatusProfile: string;
    InspectionType: string;
    MaintActType: string;
    NotifType: string;
    ObjectListAssignment: string;
    OneQNotifPerLotFlag: string;
    OrderType: string;
    OrderTypeDesc: string;
    PlanningPlant: string;
    PlantDescription: string;
    PriorityType: string;
    QMNotifType: string;
    ServiceType: string;
    ShopPaper: string;
    StorageCategory: string;
    UDCodeVersion: string;
    UDSelectedSet: string;
    ValauationArea: string;
    OrderTypePartner_Nav: OrderTypePartner | DeferredContent;
}

type OrderTypeId = {PlanningPlant: string,OrderType: string};

interface EditableOrderType extends Pick<OrderType, "AutChecklistGen" | "AutObjectListGen" | "ControlKey" | "DocumentType" | "EAMNotifType" | "EAMOverallStatusProfile" | "InspectionType" | "MaintActType" | "NotifType" | "ObjectListAssignment" | "OneQNotifPerLotFlag" | "OrderType" | "OrderTypeDesc" | "PlanningPlant" | "PlantDescription" | "PriorityType" | "QMNotifType" | "ServiceType" | "ShopPaper" | "StorageCategory" | "UDCodeVersion" | "UDSelectedSet" | "ValauationArea"> {
}

interface OrderTypePartner {
    OrderType: string;
    OrderType_Nav: Array<OrderType> | DeferredContent;
    PartnerDetProc_Nav: Array<PartnerDetProc> | DeferredContent;
}

type OrderTypePartnerId = string | {OrderType: string};

interface EditableOrderTypePartner {
}

interface OutboundDelivery {
    ActualGoodsMvtDate: string | null;
    DeliveryBlock: string;
    DeliveryDate: string;
    DeliveryNum: string;
    DeliveryPriority: string;
    DeliveryType: string;
    DocumentCategory: string;
    GoodsMvtStatus: string;
    NumPackages: number;
    OverallStatus: string;
    ReceivingPlant: string;
    ShipToParty: string;
    ShippingConditions: string;
    ShippingPoint: string;
    TotalWeight: string;
    UnloadingPoint: string;
    Vendor: string;
    WeightUnit: string;
    BlockingStatus_Nav: BlockingStatus | null | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    DeliveryPriority_Nav: DeliveryPriority | null | DeferredContent;
    Items_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
}

type OutboundDeliveryId = string | {DeliveryNum: string};

interface EditableOutboundDelivery extends Pick<OutboundDelivery, "DeliveryBlock" | "DeliveryDate" | "DeliveryPriority" | "DeliveryType" | "DocumentCategory" | "GoodsMvtStatus" | "NumPackages" | "OverallStatus" | "ReceivingPlant" | "ShipToParty" | "ShippingConditions" | "ShippingPoint" | "TotalWeight" | "UnloadingPoint" | "Vendor" | "WeightUnit">, Partial<Pick<OutboundDelivery, "ActualGoodsMvtDate">> {
}

interface OutboundDeliveryItem {
    Batch: string;
    DeliveryNum: string;
    DenominatorConvertSKU: string;
    GoodsMvmtStatus: string;
    Item: string;
    ItemCategory: string;
    ItemGMRelevant: string;
    ItemType: string;
    Material: string;
    MovementType: string;
    NumeratorConvertSKU: string;
    PickedDiffQuantity: string | null;
    PickedQuantity: string | null;
    Plant: string;
    Quantity: string;
    ReasonForMovement: string;
    SalesUnit: string;
    StorageBin: string;
    StorageLocation: string;
    UOM: string;
    WMStatus: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    OutboundDeliverySerial_Nav: Array<OutboundDeliverySerial> | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | DeferredContent;
}

type OutboundDeliveryItemId = {Item: string,DeliveryNum: string};

interface EditableOutboundDeliveryItem extends Pick<OutboundDeliveryItem, "Batch" | "DeliveryNum" | "DenominatorConvertSKU" | "GoodsMvmtStatus" | "Item" | "ItemCategory" | "ItemGMRelevant" | "ItemType" | "Material" | "MovementType" | "NumeratorConvertSKU" | "Plant" | "Quantity" | "ReasonForMovement" | "SalesUnit" | "StorageBin" | "StorageLocation" | "UOM" | "WMStatus">, Partial<Pick<OutboundDeliveryItem, "PickedDiffQuantity" | "PickedQuantity">> {
}

interface OutboundDeliverySerial {
    DeliveryNum: string;
    Item: string;
    SerialNumber: string;
    OutboundDeliveryItem_Nav: OutboundDeliveryItem | DeferredContent;
}

type OutboundDeliverySerialId = {Item: string,DeliveryNum: string,SerialNumber: string};

interface EditableOutboundDeliverySerial extends Pick<OutboundDeliverySerial, "DeliveryNum" | "Item" | "SerialNumber"> {
}

interface PMAuthorizationGroup {
    AuthGroupText: string;
    AuthorizationGroup: string;
}

type PMAuthorizationGroupId = string | {AuthorizationGroup: string};

interface EditablePMAuthorizationGroup extends Pick<PMAuthorizationGroup, "AuthGroupText"> {
}

interface PMCatalogCode {
    Catalog: string;
    Code: string;
    CodeDescription: string;
    CodeGroup: string;
    CodeGroupDesc: string;
    CodeGroupStatus: string;
    DateChanged: string | null;
    DateCreated: string | null;
    DefectClass: string;
    ValidFromDate: string | null;
    version: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
}

type PMCatalogCodeId = {Catalog: string,CodeGroup: string,Code: string};

interface EditablePMCatalogCode extends Pick<PMCatalogCode, "Catalog" | "Code" | "CodeDescription" | "CodeGroup" | "CodeGroupDesc" | "CodeGroupStatus" | "DefectClass" | "version">, Partial<Pick<PMCatalogCode, "DateChanged" | "DateCreated" | "ValidFromDate">> {
}

interface PMCatalogProfile {
    Catalog: string;
    CatalogClassif: string;
    CatalogProfile: string;
    CatalogProfileDesc: string;
    CodeGroup: string;
    CodeGroupStatus: string;
    Description: string;
    NotifCategory: string;
    Status: string;
}

type PMCatalogProfileId = {CatalogProfile: string,Catalog: string,CodeGroup: string};

interface EditablePMCatalogProfile extends Pick<PMCatalogProfile, "Catalog" | "CatalogClassif" | "CatalogProfile" | "CatalogProfileDesc" | "CodeGroup" | "CodeGroupStatus" | "Description" | "NotifCategory" | "Status"> {
}

interface PMMobileStatus {
    BeginTimeCounter: number | null;
    BusinessObjectType: string;
    CarriedOutBy: string;
    CarriedOutDate: string | null;
    CarriedOutTime: string;
    CreateUserGUID: string | null;
    CreateUserId: string;
    EAMOverallStatus: string | null;
    EAMOverallStatusProfile: string | null;
    EffectiveTimestamp: string | null;
    EndTimeCounter: number | null;
    ItemNum: string;
    MobileStatus: string;
    NotifNum: string;
    NotificationRefDate: string | null;
    NotificationRefTime: string;
    ObjectKey: string;
    ObjectType: string | null;
    OperationNo: string;
    OrderId: string;
    ReasonCode: string;
    RoleType: string;
    S4ItemNum: string;
    S4ObjectID: string;
    S4ObjectTypeH: string;
    S4RejectionCode: string;
    SortField: string;
    Status: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    StatusProfile: string;
    SubOperationNo: string;
    SystemStatus: string;
    SystemStatusCode: string;
    TaskNum: string;
    UpdateUserGUID: string | null;
    UserStatus: string;
    UserStatusCode: string;
    WOHeader: string;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    NotifItemTask_Nav: MyNotificationItemTask | null | DeferredContent;
    NotifTask_Nav: MyNotificationTask | null | DeferredContent;
    OverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
    PMMobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    RejectionReason_Nav: RejectionReason | null | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOHistory_Nav: WorkOrderHistory | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
}

type PMMobileStatusId = string | {ObjectKey: string};

interface EditablePMMobileStatus extends Pick<PMMobileStatus, "BusinessObjectType" | "CarriedOutBy" | "CarriedOutTime" | "CreateUserId" | "ItemNum" | "MobileStatus" | "NotifNum" | "NotificationRefTime" | "OperationNo" | "OrderId" | "ReasonCode" | "RoleType" | "S4ItemNum" | "S4ObjectID" | "S4ObjectTypeH" | "S4RejectionCode" | "SortField" | "Status" | "StatusAttribute1" | "StatusAttribute2" | "StatusProfile" | "SubOperationNo" | "SystemStatus" | "SystemStatusCode" | "TaskNum" | "UserStatus" | "UserStatusCode" | "WOHeader">, Partial<Pick<PMMobileStatus, "BeginTimeCounter" | "CarriedOutDate" | "CreateUserGUID" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "EffectiveTimestamp" | "EndTimeCounter" | "NotificationRefDate" | "ObjectType" | "UpdateUserGUID">> {
}

interface PMMobileStatusHistory {
    BeginTimeCounter: number | null;
    BusinessObjectType: string;
    CarriedOutBy: string;
    CarriedOutDate: string | null;
    CarriedOutTime: string;
    CreateUserGUID: string | null;
    CreateUserId: string;
    EAMOverallStatus: string | null;
    EAMOverallStatusProfile: string | null;
    EffectiveTimestamp: string | null;
    EndTimeCounter: number | null;
    ItemNum: string;
    MobileStatus: string;
    NotifNum: string;
    NotificationRefDate: string | null;
    NotificationRefTime: string;
    ObjectKey: string;
    ObjectType: string | null;
    OperationNo: string;
    OrderId: string;
    ReasonCode: string;
    RecordNumber: string;
    S4ItemNum: string;
    S4ObjectID: string;
    S4ObjectTypeH: string;
    SortField: string;
    Status: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    SubOperationNo: string;
    TaskNum: string;
    UpdateUserGUID: string | null;
    WOHeader: string;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    MyWorkOrderSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
    PMMobileStatus_Nav: PMMobileStatus | DeferredContent;
}

type PMMobileStatusHistoryId = {ObjectKey: string,RecordNumber: string};

interface EditablePMMobileStatusHistory extends Pick<PMMobileStatusHistory, "BusinessObjectType" | "CarriedOutBy" | "CarriedOutTime" | "CreateUserId" | "ItemNum" | "MobileStatus" | "NotifNum" | "NotificationRefTime" | "ObjectKey" | "OperationNo" | "OrderId" | "ReasonCode" | "RecordNumber" | "S4ItemNum" | "S4ObjectID" | "S4ObjectTypeH" | "SortField" | "Status" | "StatusAttribute1" | "StatusAttribute2" | "SubOperationNo" | "TaskNum" | "WOHeader">, Partial<Pick<PMMobileStatusHistory, "BeginTimeCounter" | "CarriedOutDate" | "CreateUserGUID" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "EffectiveTimestamp" | "EndTimeCounter" | "NotificationRefDate" | "ObjectType" | "UpdateUserGUID">> {
}

interface PRTCategory {
    PRTCategory: string;
    PRTCategoryDesc: string;
    MyWorkOrderTools_Nav: Array<MyWorkOrderTool> | DeferredContent;
}

type PRTCategoryId = string | {PRTCategory: string};

interface EditablePRTCategory extends Pick<PRTCategory, "PRTCategoryDesc"> {
}

interface PRTControlKey {
    PRTControlKey: string;
    PRTControlKeyDesc: string;
    MyWorkOrderTools_Nav: Array<MyWorkOrderTool> | DeferredContent;
}

type PRTControlKeyId = string | {PRTControlKey: string};

interface EditablePRTControlKey extends Pick<PRTControlKey, "PRTControlKeyDesc"> {
}

interface PartnerDetProc {
    IsUnique: string | null;
    MaintainAppointments: string | null;
    NoChangePossible: string | null;
    OrderText: string | null;
    OrderType: string;
    OriginTable: string | null;
    PartnerDetAtEnd: string | null;
    PartnerDeterminationDescription: string | null;
    PartnerDeterminationProcedure: string;
    PartnerFunction: string;
    PartnerIsMandatory: string;
    Sequence: number;
    SourceFunction: string | null;
    OrderTypePartner_Nav: OrderTypePartner | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type PartnerDetProcId = {OrderType: string,PartnerFunction: string};

interface EditablePartnerDetProc extends Pick<PartnerDetProc, "OrderType" | "PartnerDeterminationProcedure" | "PartnerFunction" | "PartnerIsMandatory" | "Sequence">, Partial<Pick<PartnerDetProc, "IsUnique" | "MaintainAppointments" | "NoChangePossible" | "OrderText" | "OriginTable" | "PartnerDetAtEnd" | "PartnerDeterminationDescription" | "SourceFunction">> {
}

interface PartnerFunction {
    Description: string;
    PartnerFunction: string;
    PartnerType: string;
    MyEquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    MyFuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    MyNotifPartner_Nav: Array<MyNotificationPartner> | DeferredContent;
    MyWorkOrderPartner_Nav: Array<MyWorkOrderPartner> | DeferredContent;
    NotifPartnerDetProc_Nav: Array<NotifPartnerDetProc> | DeferredContent;
    PartnerDetProc_Nav: Array<PartnerDetProc> | DeferredContent;
}

type PartnerFunctionId = string | {PartnerFunction: string};

interface EditablePartnerFunction extends Pick<PartnerFunction, "Description" | "PartnerType"> {
}

interface PeriodicMeterReading {
    ActualMeterReadingDate: string | null;
    ActualMeterReadingTime: string;
    DateMaxRead: string | null;
    EquipmentNum: string;
    EstimatedResult: string;
    EstimatedResultFloat: string;
    MeterReaderNote: string;
    MeterReaderNum: string;
    MeterReadingDate: string | null;
    MeterReadingDocID: string;
    MeterReadingReason: string;
    MeterReadingRecorded: string;
    MeterReadingStatus: string;
    MeterReadingTime: string;
    MeterReadingType: string;
    MeterReadingUnit: string;
    OrderNum: string;
    PreviousReading: string;
    PreviousReadingDate: string | null;
    PreviousReadingFloat: string;
    PreviousReadingStatus: string;
    PreviousReadingTime: string;
    PreviousReadingTimestamp: string | null;
    Register: string;
    RegisterGroup: string;
    SchedMeterReadingDate: string | null;
    TimeMaxReading: string;
    Device_Nav: Device | null | DeferredContent;
    MeterReadingLimit_Nav: MeterReadingLimit | null | DeferredContent;
    MeterReadingUnit_Nav: MeterReadingUnit | null | DeferredContent;
    RegisterGroup_Nav: RegisterGroup | DeferredContent;
}

type PeriodicMeterReadingId = string | {MeterReadingDocID: string};

interface EditablePeriodicMeterReading extends Pick<PeriodicMeterReading, "ActualMeterReadingTime" | "EquipmentNum" | "EstimatedResult" | "EstimatedResultFloat" | "MeterReaderNote" | "MeterReaderNum" | "MeterReadingReason" | "MeterReadingRecorded" | "MeterReadingStatus" | "MeterReadingTime" | "MeterReadingType" | "MeterReadingUnit" | "OrderNum" | "PreviousReading" | "PreviousReadingFloat" | "PreviousReadingStatus" | "PreviousReadingTime" | "Register" | "RegisterGroup" | "TimeMaxReading">, Partial<Pick<PeriodicMeterReading, "ActualMeterReadingDate" | "DateMaxRead" | "MeterReadingDate" | "PreviousReadingDate" | "PreviousReadingTimestamp" | "SchedMeterReadingDate">> {
}

interface PhaseControl {
    Entity: string;
    OrderType: string;
    PhaseControl: string;
    PhaseControlKey: string;
    ProcessPhase: string;
    ProcessSubPhase: string;
    PhaseControlCode_Nav: PhaseControlCode | null | DeferredContent;
    PhaseControlKey_Nav: PhaseControlKey | null | DeferredContent;
    PhaseControlSystemStatus_Nav: Array<PhaseControlSystemStatus> | DeferredContent;
}

type PhaseControlId = {Entity: string,OrderType: string,PhaseControl: string,PhaseControlKey: string};

interface EditablePhaseControl extends Pick<PhaseControl, "Entity" | "OrderType" | "PhaseControl" | "PhaseControlKey" | "ProcessPhase" | "ProcessSubPhase"> {
}

interface PhaseControlCode {
    AuthorizationKey: string;
    BlockingSubPhase: string;
    Description: string;
    EnteringPhase: string;
    EnteringSubPhase: string;
    Entity: string;
    OrderType: string;
    OvrlStsProfile: string;
    Phase: string;
    PhaseControl: string;
    SetAutomatically: string;
    StatusProfile: string;
    Userstatus: string;
    PhaseControl_Nav: Array<PhaseControl> | DeferredContent;
}

type PhaseControlCodeId = {Entity: string,OrderType: string,PhaseControl: string};

interface EditablePhaseControlCode extends Pick<PhaseControlCode, "AuthorizationKey" | "BlockingSubPhase" | "Description" | "EnteringPhase" | "EnteringSubPhase" | "Entity" | "OrderType" | "OvrlStsProfile" | "Phase" | "PhaseControl" | "SetAutomatically" | "StatusProfile" | "Userstatus"> {
}

interface PhaseControlKey {
    Description: string;
    PhaseControlKey: string;
    PhaseControlSystemStatus_Nav: Array<PhaseControlSystemStatus> | DeferredContent;
    PhaseControl_Nav: Array<PhaseControl> | DeferredContent;
    WOOperationPhaseControl_Nav: Array<WorkOrderOperationPhaseControl> | DeferredContent;
    WorkOrderPhaseControl_Nav: Array<WorkOrderPhaseControl> | DeferredContent;
}

type PhaseControlKeyId = string | {PhaseControlKey: string};

interface EditablePhaseControlKey extends Pick<PhaseControlKey, "Description"> {
}

interface PhaseControlSystemStatus {
    Autocreated: string;
    Entity: string;
    OrderType: string;
    PhaseControl: string;
    PhaseControlKey: string;
    SystemStatus: string;
    PhaseControlKey_Nav: PhaseControlKey | null | DeferredContent;
    PhaseControl_Nav: PhaseControl | null | DeferredContent;
}

type PhaseControlSystemStatusId = {Entity: string,OrderType: string,PhaseControl: string,PhaseControlKey: string,SystemStatus: string};

interface EditablePhaseControlSystemStatus extends Pick<PhaseControlSystemStatus, "Autocreated" | "Entity" | "OrderType" | "PhaseControl" | "PhaseControlKey" | "SystemStatus"> {
}

interface PhysicalInventoryDocHeader {
    AdjustStatus: string;
    CountDate: string | null;
    CountOnCreate: string;
    CountStatus: string;
    Description: string;
    DocumentDate: string | null;
    FiscalYear: string;
    GroupingCriteria: string;
    GroupingType: string;
    PhysInvDoc: string;
    PhysInvNo: string;
    PhysInvType: string;
    Physinventref: string;
    PlanCountdate: string | null;
    Plant: string;
    PostingBlock: string;
    PostingDate: string | null;
    SpecialStock: string;
    StorLocation: string;
    UpdateCountFlag: string;
    UserName: string;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
}

type PhysicalInventoryDocHeaderId = {PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocHeader extends Pick<PhysicalInventoryDocHeader, "AdjustStatus" | "CountOnCreate" | "CountStatus" | "Description" | "FiscalYear" | "GroupingCriteria" | "GroupingType" | "PhysInvDoc" | "PhysInvNo" | "PhysInvType" | "Physinventref" | "Plant" | "PostingBlock" | "SpecialStock" | "StorLocation" | "UpdateCountFlag" | "UserName">, Partial<Pick<PhysicalInventoryDocHeader, "CountDate" | "DocumentDate" | "PlanCountdate" | "PostingDate">> {
}

interface PhysicalInventoryDocItem {
    BaseQuantity: string | null;
    BaseUOM: string;
    Batch: string;
    BookQuantity: string | null;
    CountDate: string | null;
    CountedBy: string;
    Customer: string;
    Deleted: string;
    DifferenceAmt: string | null;
    EntryQuantity: string | null;
    EntryUOM: string;
    FiscalYear: string;
    Item: string;
    ItemCounted: string;
    MatDocItem: string;
    MatDocYear: string;
    Material: string;
    MaterialDoc: string;
    PhysInvDoc: string;
    PhysInvRef: string;
    Plant: string;
    PostingDate: string | null;
    Recount: string;
    RecountDoc: string;
    SOrderSchedule: string;
    SalesOrder: string;
    Salesorditem: string;
    SpecialStock: string;
    StockType: string;
    StorLocation: string;
    Supplier: string;
    ValuationCategory: string;
    ValuationType: string;
    WBSElement: string;
    ZeroCount: string;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    MaterialSLoc_Nav: MaterialSLoc | DeferredContent;
    Material_Nav: Material | DeferredContent;
    PhysicalInventoryDocHeader_Nav: PhysicalInventoryDocHeader | DeferredContent;
    PhysicalInventoryDocItemSerial_Nav: Array<PhysicalInventoryDocItemSerial> | DeferredContent;
    ValuationCategory_Nav: ValuationCategory | null | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
}

type PhysicalInventoryDocItemId = {Item: string,PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocItem extends Pick<PhysicalInventoryDocItem, "BaseUOM" | "Batch" | "CountedBy" | "Customer" | "Deleted" | "EntryUOM" | "FiscalYear" | "Item" | "ItemCounted" | "MatDocItem" | "MatDocYear" | "Material" | "MaterialDoc" | "PhysInvDoc" | "PhysInvRef" | "Plant" | "Recount" | "RecountDoc" | "SOrderSchedule" | "SalesOrder" | "Salesorditem" | "SpecialStock" | "StockType" | "StorLocation" | "Supplier" | "ValuationCategory" | "ValuationType" | "WBSElement" | "ZeroCount">, Partial<Pick<PhysicalInventoryDocItem, "BaseQuantity" | "BookQuantity" | "CountDate" | "DifferenceAmt" | "EntryQuantity" | "PostingDate">> {
}

interface PhysicalInventoryDocItemSerial {
    FiscalYear: string;
    Item: string;
    PhysInvDoc: string;
    SerialNumber: string;
    PhysicalInventoryDocItem_Nav: PhysicalInventoryDocItem | null | DeferredContent;
}

type PhysicalInventoryDocItemSerialId = {Item: string,SerialNumber: string,PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocItemSerial extends Pick<PhysicalInventoryDocItemSerial, "FiscalYear" | "Item" | "PhysInvDoc" | "SerialNumber"> {
}

interface PhysicalInventoryStockType {
    Language: string;
    StockTypeText: string;
    Stocktype: string;
    PhysicalInventoryDocItem_Nav: PhysicalInventoryDocItem | DeferredContent;
}

type PhysicalInventoryStockTypeId = string | {Stocktype: string};

interface EditablePhysicalInventoryStockType extends Pick<PhysicalInventoryStockType, "Language" | "StockTypeText"> {
}

interface PlannerGroup {
    OrderType: string;
    PlannerGroup: string;
    PlannerGroupName: string;
    PlanningPlant: string;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
}

type PlannerGroupId = {PlannerGroup: string,PlanningPlant: string};

interface EditablePlannerGroup extends Pick<PlannerGroup, "OrderType" | "PlannerGroup" | "PlannerGroupName" | "PlanningPlant"> {
}

interface Plant {
    CompanyCode: string;
    DistributionChannel: string;
    Division: string;
    InspPointValCode: string;
    InspPointValCodeGroup: string;
    InspPointValPlant: string;
    InspPointValSelectedSet: string;
    PlanningPlant: string;
    Plant: string;
    PlantDescription: string;
    SalesOrganization: string;
    ValuationArea: string;
    Division_Nav: Division | DeferredContent;
    ReceivingPoint_Nav: Array<ReceivingPoint> | DeferredContent;
    StorageLocations_Nav: Array<StorageLocation> | DeferredContent;
    UserTrunkAssignment_Nav: Array<UserTrunkAssignment> | DeferredContent;
}

type PlantId = string | {Plant: string};

interface EditablePlant extends Pick<Plant, "CompanyCode" | "DistributionChannel" | "Division" | "InspPointValCode" | "InspPointValCodeGroup" | "InspPointValPlant" | "InspPointValSelectedSet" | "PlanningPlant" | "PlantDescription" | "SalesOrganization" | "ValuationArea"> {
}

interface PolRegStructElement {
    Country: string;
    PolRegStructElemText: string;
    PolRegStructElement: string;
    ConnectionObjects_Nav: Array<ConnectionObject> | DeferredContent;
}

type PolRegStructElementId = {Country: string,PolRegStructElement: string};

interface EditablePolRegStructElement extends Pick<PolRegStructElement, "Country" | "PolRegStructElemText" | "PolRegStructElement"> {
}

interface Premise {
    ConnectionObject: string;
    Floor: string;
    HouseNumSupplement: string;
    Premise: string;
    RoomNumber: string;
    StreetSupplement1: string;
    StreetSupplement2: string;
    SupplementalDescription: string;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    DeviceLocations_Nav: Array<DeviceLocation> | DeferredContent;
    Installation_Nav: Array<Installation> | DeferredContent;
    OrderISULink_Nav: Array<OrderISULink> | DeferredContent;
}

type PremiseId = string | {Premise: string};

interface EditablePremise extends Pick<Premise, "ConnectionObject" | "Floor" | "HouseNumSupplement" | "RoomNumber" | "StreetSupplement1" | "StreetSupplement2" | "SupplementalDescription"> {
}

interface PrioritizationProfile {
    Label: string;
    PrioritizationProfileId: string;
    ConsequenceGroup_Nav: Array<ConsequenceGroup> | DeferredContent;
    PrioritizationProfileLink_Nav: Array<PrioritizationProfileLink> | DeferredContent;
}

type PrioritizationProfileId = string | {PrioritizationProfileId: string};

interface EditablePrioritizationProfile extends Pick<PrioritizationProfile, "Label"> {
}

interface PrioritizationProfileLink {
    NotificationType: string;
    Plant: string;
    PrioritizationProfileID: string;
    PrioritizationProfile_Nav: PrioritizationProfile | null | DeferredContent;
}

type PrioritizationProfileLinkId = {Plant: string,NotificationType: string};

interface EditablePrioritizationProfileLink extends Pick<PrioritizationProfileLink, "NotificationType" | "Plant" | "PrioritizationProfileID"> {
}

interface Priority {
    EndDate: string;
    FinalDueDateDuration: string;
    FinalDueDateUoM: string;
    LanguageKey: string;
    Priority: string;
    PriorityDescription: string;
    PriorityType: string;
    StartDate: string;
    NotificationHeaders: Array<MyNotificationHeader> | DeferredContent;
    NotificationHistories_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHeaders: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderHistories: Array<WorkOrderHistory> | DeferredContent;
}

type PriorityId = {Priority: string,PriorityType: string};

interface EditablePriority extends Pick<Priority, "EndDate" | "FinalDueDateDuration" | "FinalDueDateUoM" | "LanguageKey" | "Priority" | "PriorityDescription" | "PriorityType" | "StartDate"> {
}

interface ProcessVariant {
    Description: string;
    ProcessVariant: string;
    DisconnectDocument_Nav: DisconnectionDocument | null | DeferredContent;
}

type ProcessVariantId = string | {ProcessVariant: string};

interface EditableProcessVariant extends Pick<ProcessVariant, "Description"> {
}

interface ProductStatistic {
    PRODUCTIONSYSTEM: string;
    PRODUCTNAME: string;
    STATSCATEGORY: string;
    STATSDATE: string;
    STATSNAME: string;
    SYSTEMINSTANCE: string;
    VALUEDAYTOTAL: string;
}

type ProductStatisticId = {PRODUCTNAME: string,STATSDATE: string};

interface EditableProductStatistic extends Pick<ProductStatistic, "PRODUCTIONSYSTEM" | "PRODUCTNAME" | "STATSCATEGORY" | "STATSDATE" | "STATSNAME" | "SYSTEMINSTANCE" | "VALUEDAYTOTAL"> {
}

interface ProductionOrderComponent {
    BackFlushIndicator: string;
    Batch: string;
    Completed: string;
    Counter: string;
    ItemNum: string;
    MaterialNum: string;
    MovementType: string;
    OperationNumber: string;
    OrderId: string;
    QuantityUnE: string;
    RecordType: string;
    RequirementDate: string;
    RequirementQuantity: string;
    RequirementUOM: string;
    Reservation: string;
    RoutingNumber: string;
    SpecialStock: string;
    StorageBin: string;
    SupplyPlant: string;
    SupplyStorageLocation: string;
    UnitOfEntry: string;
    WithdrawalQuantity: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderComponentId = {OrderId: string,Reservation: string,ItemNum: string,RecordType: string};

interface EditableProductionOrderComponent extends Pick<ProductionOrderComponent, "BackFlushIndicator" | "Batch" | "Completed" | "Counter" | "ItemNum" | "MaterialNum" | "MovementType" | "OperationNumber" | "OrderId" | "QuantityUnE" | "RecordType" | "RequirementDate" | "RequirementQuantity" | "RequirementUOM" | "Reservation" | "RoutingNumber" | "SpecialStock" | "StorageBin" | "SupplyPlant" | "SupplyStorageLocation" | "UnitOfEntry" | "WithdrawalQuantity"> {
}

interface ProductionOrderHeader {
    BasicStartDate: string;
    CompanyCode: string;
    Description: string;
    EnteredBy: string;
    ObjectNumber: string;
    OrderCategory: string;
    OrderId: string;
    OrderType: string;
    ProductionPlant: string;
    Reservation: string;
    RoutingNumber: string;
    ScheduledStartDate: string;
    SystemStatus: string;
    SystemStatusCode: string;
    UserStatus: string;
    UserStatusCode: string;
    ProductionOrderComponent_Nav: Array<ProductionOrderComponent> | DeferredContent;
    ProductionOrderItem_Nav: Array<ProductionOrderItem> | DeferredContent;
    ProductionOrderOperation_Nav: Array<ProductionOrderOperation> | DeferredContent;
    ProductionOrderSequence_Nav: Array<ProductionOrderSequence> | DeferredContent;
    ProductionOrderText_Nav: ProductionOrderText | null | DeferredContent;
}

type ProductionOrderHeaderId = string | {OrderId: string};

interface EditableProductionOrderHeader extends Pick<ProductionOrderHeader, "BasicStartDate" | "CompanyCode" | "Description" | "EnteredBy" | "ObjectNumber" | "OrderCategory" | "OrderType" | "ProductionPlant" | "Reservation" | "RoutingNumber" | "ScheduledStartDate" | "SystemStatus" | "SystemStatusCode" | "UserStatus" | "UserStatusCode"> {
}

interface ProductionOrderItem {
    Batch: string;
    DeliveryCompletedFlag: string;
    ItemNum: string;
    MaterialNum: string;
    OrderId: string;
    OrderQuantity: string;
    OrderUOM: string;
    PlanningPlant: string;
    ProductionPlant: string;
    ReceivedQuantity: string;
    SerialNoProfile: string;
    SpecialStock: string;
    StockType: string;
    ValuationCategory: string;
    ValuationType: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    Material_Nav: Material | DeferredContent;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
    ProductionOrderSerial_Nav: Array<ProductionOrderSerial> | DeferredContent;
}

type ProductionOrderItemId = {OrderId: string,ItemNum: string};

interface EditableProductionOrderItem extends Pick<ProductionOrderItem, "Batch" | "DeliveryCompletedFlag" | "ItemNum" | "MaterialNum" | "OrderId" | "OrderQuantity" | "OrderUOM" | "PlanningPlant" | "ProductionPlant" | "ReceivedQuantity" | "SerialNoProfile" | "SpecialStock" | "StockType" | "ValuationCategory" | "ValuationType"> {
}

interface ProductionOrderOperation {
    Counter: string;
    Description: string;
    OperationNumber: string;
    OrderID: string;
    RoutingNumber: string;
    Sequence: string;
    TaskNode: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderOperationId = {OrderID: string,RoutingNumber: string,Counter: string};

interface EditableProductionOrderOperation extends Pick<ProductionOrderOperation, "Counter" | "Description" | "OperationNumber" | "OrderID" | "RoutingNumber" | "Sequence" | "TaskNode"> {
}

interface ProductionOrderSequence {
    Counter: string;
    OrderID: string;
    RoutingNumber: string;
    Sequence: string;
    SequenceDesc: string;
    TaskListType: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderSequenceId = {OrderID: string,RoutingNumber: string,Counter: string};

interface EditableProductionOrderSequence extends Pick<ProductionOrderSequence, "Counter" | "OrderID" | "RoutingNumber" | "Sequence" | "SequenceDesc" | "TaskListType"> {
}

interface ProductionOrderSerial {
    ItemNo: string;
    OrderID: string;
    SerialNumber: string;
    UII: string;
    ProductionOrderItem_Nav: ProductionOrderItem | DeferredContent;
}

type ProductionOrderSerialId = {OrderID: string,ItemNo: string,SerialNumber: string,UII: string};

interface EditableProductionOrderSerial extends Pick<ProductionOrderSerial, "ItemNo" | "OrderID" | "SerialNumber" | "UII"> {
}

interface ProductionOrderText {
    NewTextString: string;
    ObjectKey: string;
    OrderID: string;
    TextID: string;
    TextObjectType: string;
    TextString: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderTextId = {ObjectKey: string,TextID: string,OrderID: string};

interface EditableProductionOrderText extends Pick<ProductionOrderText, "NewTextString" | "ObjectKey" | "OrderID" | "TextID" | "TextObjectType" | "TextString"> {
}

interface PurchaseGroup {
    PurchasingGroup: string;
    PurchasingGroupDesc: string;
}

type PurchaseGroupId = string | {PurchasingGroup: string};

interface EditablePurchaseGroup extends Pick<PurchaseGroup, "PurchasingGroupDesc"> {
}

interface PurchaseOrderHeader {
    DocumentCategory: string;
    DocumentDate: string | null;
    DocumentStatus: string;
    DocumentType: string;
    PurchaseOrderId: string;
    SupplyingPlant: string;
    Vendor: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    PurchaseOrderHeaderLongText_Nav: Array<PurchaseOrderHeaderLongText> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
}

type PurchaseOrderHeaderId = string | {PurchaseOrderId: string};

interface EditablePurchaseOrderHeader extends Pick<PurchaseOrderHeader, "DocumentCategory" | "DocumentStatus" | "DocumentType" | "SupplyingPlant" | "Vendor">, Partial<Pick<PurchaseOrderHeader, "DocumentDate">> {
}

interface PurchaseOrderHeaderLongText {
    NewTextString: string;
    ObjectKey: string;
    PurchaseOrderNum: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    PurchaseOrder_Nav: PurchaseOrderHeader | DeferredContent;
}

type PurchaseOrderHeaderLongTextId = string | {PurchaseOrderNum: string};

interface EditablePurchaseOrderHeaderLongText extends Pick<PurchaseOrderHeaderLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface PurchaseOrderItem {
    CRofOrigin: string;
    CostCenter: string;
    DeliveryCompletedFlag: string;
    FinalDeliveryFlag: string;
    GLAccount: string;
    ItemNum: string;
    ItemText: string;
    MaterialNum: string;
    Network: string;
    NetworkActivity: string;
    OpenQtyValBlocked: string;
    OpenQuantity: string;
    OpenQuantityBlocked: string;
    Order: string;
    OrderQuantity: string;
    OrderUOM: string;
    OrderWBSElement: string;
    OverDeliveryTol: string;
    Plant: string;
    PurchaseOrderId: string;
    ReceivedQuantity: string;
    RemShelfLife: string;
    StockType: string;
    StorageLoc: string;
    SupplierMaterialNum: string;
    UnderDeliveryTol: string;
    UnlimitedTol: string;
    WBSElement: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    POSerialNumber_Nav: Array<PurchaseOrderSerialNumber> | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | DeferredContent;
    ScheduleLine_Nav: Array<ScheduleLine> | DeferredContent;
}

type PurchaseOrderItemId = {ItemNum: string,PurchaseOrderId: string};

interface EditablePurchaseOrderItem extends Pick<PurchaseOrderItem, "CRofOrigin" | "CostCenter" | "DeliveryCompletedFlag" | "FinalDeliveryFlag" | "GLAccount" | "ItemNum" | "ItemText" | "MaterialNum" | "Network" | "NetworkActivity" | "OpenQtyValBlocked" | "OpenQuantity" | "OpenQuantityBlocked" | "Order" | "OrderQuantity" | "OrderUOM" | "OrderWBSElement" | "OverDeliveryTol" | "Plant" | "PurchaseOrderId" | "ReceivedQuantity" | "RemShelfLife" | "StockType" | "StorageLoc" | "SupplierMaterialNum" | "UnderDeliveryTol" | "UnlimitedTol" | "WBSElement"> {
}

interface PurchaseOrderSerialNumber {
    ItemNumber: string;
    PurchaseOrderId: string;
    SerialNumber: string;
    POItem_Nav: PurchaseOrderItem | DeferredContent;
}

type PurchaseOrderSerialNumberId = {ItemNumber: string,PurchaseOrderId: string,SerialNumber: string};

interface EditablePurchaseOrderSerialNumber extends Pick<PurchaseOrderSerialNumber, "ItemNumber" | "PurchaseOrderId" | "SerialNumber"> {
}

interface PurchaseOrganization {
    CompanyCode: string;
    PurchasingOrg: string;
    PurchasingOrgDesc: string;
}

type PurchaseOrganizationId = {PurchasingOrg: string,CompanyCode: string};

interface EditablePurchaseOrganization extends Pick<PurchaseOrganization, "CompanyCode" | "PurchasingOrg" | "PurchasingOrgDesc"> {
}

interface PurchaseRequisitionAcctAsgn {
    ActivityType: string;
    Asset: string;
    AssetSubnumber: string;
    BusinessArea: string;
    BusinessProcess: string;
    COArea: string;
    CostCenter: string;
    Distribution: string;
    GLAccount: string;
    Item: string;
    NetValue: string | null;
    Network: string;
    Order: string;
    Partner: string;
    PurchaseReqItemNo: string;
    PurchaseReqNo: string;
    Quantity: string | null;
    SDDocument: string;
    ScheduleLine: string;
    Sernoaccass: string;
    WBSElement: string;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionAcctAsgnId = {PurchaseReqItemNo: string,PurchaseReqNo: string,Sernoaccass: string};

interface EditablePurchaseRequisitionAcctAsgn extends Pick<PurchaseRequisitionAcctAsgn, "ActivityType" | "Asset" | "AssetSubnumber" | "BusinessArea" | "BusinessProcess" | "COArea" | "CostCenter" | "Distribution" | "GLAccount" | "Item" | "Network" | "Order" | "Partner" | "PurchaseReqItemNo" | "PurchaseReqNo" | "SDDocument" | "ScheduleLine" | "Sernoaccass" | "WBSElement">, Partial<Pick<PurchaseRequisitionAcctAsgn, "NetValue" | "Quantity">> {
}

interface PurchaseRequisitionAddress {
    AddressNumber: string;
    BuildingCode: string;
    Buildingcode: string;
    COName: string;
    CheckStatus: string;
    City: string;
    CityCode: string;
    CityCode1: string;
    CommMethod: string;
    CompanyPostCd: string;
    Country: string;
    DeliveryDist: string;
    District: string;
    District1: string;
    EmailAddress: string;
    Extension: string;
    Extension1: string;
    Fax: string;
    Floor: string;
    FormOfAddress: string;
    HouseNumber: string;
    ISOCode: string;
    Language: string;
    LanguageCode: string;
    Name: string;
    Name2: string;
    Name3: string;
    Name4: string;
    Notes: string;
    POBox: string;
    POBoxCity: string;
    POBoxPostCde: string;
    PostalCode: string;
    PurchaseReqItemNo: string;
    PurchaseReqNo: string;
    Region: string;
    RoomNumber: string;
    SearchTerm1: string;
    SearchTerm2: string;
    Street: string;
    Street1: string;
    Street2: string;
    Street3: string;
    Street4: string;
    Street5: string;
    StreetAbbrev: string;
    StreetCode: string;
    StructureGroup: string;
    Supplement: string;
    TaxJurisdiction: string;
    Telephone: string;
    TimeZone: string;
    Title: string;
    TransportZone: string;
    Address_Nav: Address | DeferredContent;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionAddressId = {PurchaseReqNo: string,PurchaseReqItemNo: string,AddressNumber: string};

interface EditablePurchaseRequisitionAddress extends Pick<PurchaseRequisitionAddress, "AddressNumber" | "BuildingCode" | "Buildingcode" | "COName" | "CheckStatus" | "City" | "CityCode" | "CityCode1" | "CommMethod" | "CompanyPostCd" | "Country" | "DeliveryDist" | "District" | "District1" | "EmailAddress" | "Extension" | "Extension1" | "Fax" | "Floor" | "FormOfAddress" | "HouseNumber" | "ISOCode" | "Language" | "LanguageCode" | "Name" | "Name2" | "Name3" | "Name4" | "Notes" | "POBox" | "POBoxCity" | "POBoxPostCde" | "PostalCode" | "PurchaseReqItemNo" | "PurchaseReqNo" | "Region" | "RoomNumber" | "SearchTerm1" | "SearchTerm2" | "Street" | "Street1" | "Street2" | "Street3" | "Street4" | "Street5" | "StreetAbbrev" | "StreetCode" | "StructureGroup" | "Supplement" | "TaxJurisdiction" | "Telephone" | "TimeZone" | "Title" | "TransportZone"> {
}

interface PurchaseRequisitionDocType {
    Description: string;
    DocCategory: string;
    DocumentType: string;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionDocTypeId = {DocumentType: string,DocCategory: string};

interface EditablePurchaseRequisitionDocType extends Pick<PurchaseRequisitionDocType, "Description" | "DocCategory" | "DocumentType"> {
}

interface PurchaseRequisitionHeader {
    PurchaseReqNo: string;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionLongText_Nav: Array<PurchaseRequisitionLongText> | DeferredContent;
}

type PurchaseRequisitionHeaderId = string | {PurchaseReqNo: string};

interface EditablePurchaseRequisitionHeader {
}

interface PurchaseRequisitionItem {
    AccAsgnCategory: string;
    BaseUOM: string;
    Batch: string;
    Currency: string;
    DeliveryDate: string | null;
    DesiredVendor: string;
    DocCategory: string;
    DocType: string;
    FixedVendor: string;
    ItemCategory: string;
    ItemQuantity: string | null;
    Material: string;
    MaterialGroup: string;
    PackNo: string;
    Plant: string;
    PurchaseGroup: string;
    PurchaseOrderItemNo: string;
    PurchaseOrderNo: string;
    PurchaseOrg: string;
    PurchaseReqItemNo: string;
    PurchaseReqNo: string;
    RequisitionDate: string | null;
    Requisitioner: string;
    ShortText: string;
    StorageLocation: string;
    ValuationPrice: string;
    ValuationPriceUnit: string;
    ValuationType: string;
    PurchaseRequisitionAcctAsgn_Nav: Array<PurchaseRequisitionAcctAsgn> | DeferredContent;
    PurchaseRequisitionAddress_Nav: PurchaseRequisitionAddress | null | DeferredContent;
    PurchaseRequisitionDocType_Nav: Array<PurchaseRequisitionDocType> | DeferredContent;
    PurchaseRequisitionHeader_Nav: PurchaseRequisitionHeader | null | DeferredContent;
    PurchaseRequisitionLongText_Nav: Array<PurchaseRequisitionLongText> | DeferredContent;
    PurchaseRequisitionServMgmntHdr_Nav: PurchaseRequisitionServMgmntHdr | null | DeferredContent;
    PurchaseRequisitionSrvLimitHdr_Nav: PurchaseRequisitionSrvLimitHdr | null | DeferredContent;
}

type PurchaseRequisitionItemId = {PurchaseReqItemNo: string,PurchaseReqNo: string};

interface EditablePurchaseRequisitionItem extends Pick<PurchaseRequisitionItem, "AccAsgnCategory" | "BaseUOM" | "Batch" | "Currency" | "DesiredVendor" | "DocCategory" | "DocType" | "FixedVendor" | "ItemCategory" | "Material" | "MaterialGroup" | "PackNo" | "Plant" | "PurchaseGroup" | "PurchaseOrderItemNo" | "PurchaseOrderNo" | "PurchaseOrg" | "PurchaseReqItemNo" | "PurchaseReqNo" | "Requisitioner" | "ShortText" | "StorageLocation" | "ValuationPrice" | "ValuationPriceUnit" | "ValuationType">, Partial<Pick<PurchaseRequisitionItem, "DeliveryDate" | "ItemQuantity" | "RequisitionDate">> {
}

interface PurchaseRequisitionLongText {
    NewTextString: string;
    ObjectKey: string;
    PurchaseReqItemNo: string;
    PurchaseReqNo: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    PurchaseRequisitionHeader_Nav: PurchaseRequisitionHeader | null | DeferredContent;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionLongTextId = {ObjectKey: string,TextId: string,PurchaseReqNo: string,PurchaseReqItemNo: string};

interface EditablePurchaseRequisitionLongText extends Pick<PurchaseRequisitionLongText, "NewTextString" | "ObjectKey" | "PurchaseReqItemNo" | "PurchaseReqNo" | "TextId" | "TextObjType" | "TextString"> {
}

interface PurchaseRequisitionServMgmntHdr {
    ConditionDocNo: string;
    Currency: string;
    DocCategory: string;
    DocumentCat: string;
    HighestPackageNo: string;
    InternalObjectNo: string;
    InternalServiceUse: string;
    InternalWork: string | null;
    NetValue: string | null;
    PackageNo: string;
    ParentPackageNo: string;
    PurchasingDoc: string;
    PurchasingDocItem: string;
    SDDocument: string;
    SDDocumentItem: string;
    UnitForWork: string;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionServMgmntItem_Nav: Array<PurchaseRequisitionServMgmntItem> | DeferredContent;
    PurchaseRequisitionSrvAccctAsgn_Nav: Array<PurchaseRequisitionSrvAccctAsgn> | DeferredContent;
}

type PurchaseRequisitionServMgmntHdrId = string | {PackageNo: string};

interface EditablePurchaseRequisitionServMgmntHdr extends Pick<PurchaseRequisitionServMgmntHdr, "ConditionDocNo" | "Currency" | "DocCategory" | "DocumentCat" | "HighestPackageNo" | "InternalObjectNo" | "InternalServiceUse" | "ParentPackageNo" | "PurchasingDoc" | "PurchasingDocItem" | "SDDocument" | "SDDocumentItem" | "UnitForWork">, Partial<Pick<PurchaseRequisitionServMgmntHdr, "InternalWork" | "NetValue">> {
}

interface PurchaseRequisitionServMgmntItem {
    Activitynumber: string;
    ExtServNo: string;
    ExternalLineNumber: string;
    InternalLineNo: string;
    NetValue: string | null;
    PackageNo: string;
    Quantity: string | null;
    ServiceAssgt: string;
    ServiceType: string;
    SubPackageNo: string;
    PurchaseRequisitionServMgmntHdr_Nav: PurchaseRequisitionServMgmntHdr | null | DeferredContent;
}

type PurchaseRequisitionServMgmntItemId = {PackageNo: string,InternalLineNo: string};

interface EditablePurchaseRequisitionServMgmntItem extends Pick<PurchaseRequisitionServMgmntItem, "Activitynumber" | "ExtServNo" | "ExternalLineNumber" | "InternalLineNo" | "PackageNo" | "ServiceAssgt" | "ServiceType" | "SubPackageNo">, Partial<Pick<PurchaseRequisitionServMgmntItem, "NetValue" | "Quantity">> {
}

interface PurchaseRequisitionSrvAccctAsgn {
    ActualQuantity: string;
    Enteredvalue: string;
    FinalAccAsgn: string;
    FinalAccAsgnQuantity: string | null;
    FinalAccAsgnReason: string;
    HighestPackageNo: string;
    InvoiceQuantity: string | null;
    Line: string;
    NetValue: string | null;
    PackageNo: string;
    Quantity: string | null;
    SeqNoAA: string;
    SeqNoAccAss: string;
}

type PurchaseRequisitionSrvAccctAsgnId = {PackageNo: string,SeqNoAA: string,Line: string};

interface EditablePurchaseRequisitionSrvAccctAsgn extends Pick<PurchaseRequisitionSrvAccctAsgn, "ActualQuantity" | "Enteredvalue" | "FinalAccAsgn" | "FinalAccAsgnReason" | "HighestPackageNo" | "Line" | "PackageNo" | "SeqNoAA" | "SeqNoAccAss">, Partial<Pick<PurchaseRequisitionSrvAccctAsgn, "FinalAccAsgnQuantity" | "InvoiceQuantity" | "NetValue" | "Quantity">> {
}

interface PurchaseRequisitionSrvLimitHdr {
    ActualValue: string | null;
    Currency: string;
    ExpectedValue: string | null;
    Limit: string | null;
    NoLimit: string;
    OverallLimit: string | null;
    PackageNo: string;
    ServiceType: string;
    SourcePackageNo: string;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionSrvLimitItem_Nav: Array<PurchaseRequisitionSrvLimitItem> | DeferredContent;
}

type PurchaseRequisitionSrvLimitHdrId = string | {PackageNo: string};

interface EditablePurchaseRequisitionSrvLimitHdr extends Pick<PurchaseRequisitionSrvLimitHdr, "Currency" | "NoLimit" | "ServiceType" | "SourcePackageNo">, Partial<Pick<PurchaseRequisitionSrvLimitHdr, "ActualValue" | "ExpectedValue" | "Limit" | "OverallLimit">> {
}

interface PurchaseRequisitionSrvLimitItem {
    ActualValue: string | null;
    InternalLineNo: string;
    OverallLimit: string | null;
    PackageNo: string;
    PurchasingDoc: string;
    PurchasingDocItem: string;
    ShortText: string;
    SubPackageNo: string;
}

type PurchaseRequisitionSrvLimitItemId = {PackageNo: string,InternalLineNo: string};

interface EditablePurchaseRequisitionSrvLimitItem extends Pick<PurchaseRequisitionSrvLimitItem, "InternalLineNo" | "PackageNo" | "PurchasingDoc" | "PurchasingDocItem" | "ShortText" | "SubPackageNo">, Partial<Pick<PurchaseRequisitionSrvLimitItem, "ActualValue" | "OverallLimit">> {
}

interface ReceivingPoint {
    Plant: string;
    ReceivingPoint: string;
    SequenceNum: string;
    StorageLoc: string;
    Plant_Nav: Plant | DeferredContent;
    ShippingPoint_Nav: ShippingPoint | DeferredContent;
}

type ReceivingPointId = {ReceivingPoint: string,StorageLoc: string,Plant: string};

interface EditableReceivingPoint extends Pick<ReceivingPoint, "Plant" | "ReceivingPoint" | "SequenceNum" | "StorageLoc"> {
}

interface Region {
    Country: string;
    Description: string;
    Region: string;
    Addresses_Nav: Array<Address> | DeferredContent;
    Country_Nav: Country | DeferredContent;
}

type RegionId = {Country: string,Region: string};

interface EditableRegion extends Pick<Region, "Country" | "Description" | "Region"> {
}

interface Register {
    DecimalAfter: string;
    DecimalBefore: string;
    DoNotReadRegister: string;
    NonMeteringRegister: string;
    RegisterCode: string;
    RegisterGroup: string;
    RegisterInfoFld: string;
    RegisterNum: string;
    RegisterType: string;
    UnitOfMeasureMR: string;
    RegisterGroup_Nav: RegisterGroup | DeferredContent;
}

type RegisterId = {RegisterGroup: string,RegisterNum: string};

interface EditableRegister extends Pick<Register, "DecimalAfter" | "DecimalBefore" | "DoNotReadRegister" | "NonMeteringRegister" | "RegisterCode" | "RegisterGroup" | "RegisterInfoFld" | "RegisterNum" | "RegisterType" | "UnitOfMeasureMR"> {
}

interface RegisterGroup {
    AuthorizationGroup: string;
    Division: string;
    RegisterGroup: string;
    RegisterInfo: string;
    Devices_Nav: Device | DeferredContent;
    Division_Nav: Division | DeferredContent;
    MeterReadings_Nav: Array<MeterReading> | DeferredContent;
    PeriodicMeterReadings_Nav: Array<PeriodicMeterReading> | DeferredContent;
    Registers_Nav: Array<Register> | DeferredContent;
}

type RegisterGroupId = string | {RegisterGroup: string};

interface EditableRegisterGroup extends Pick<RegisterGroup, "AuthorizationGroup" | "Division" | "RegisterInfo"> {
}

interface RejectionReason {
    ReasonCode: string;
    ReasonDescription: string;
    PMMobileStatus_Nav: Array<PMMobileStatus> | DeferredContent;
}

type RejectionReasonId = string | {ReasonCode: string};

interface EditableRejectionReason extends Pick<RejectionReason, "ReasonDescription"> {
}

interface ReportTemplate {
    DocumentID: string;
    ObjectKey: string;
    RelationshipID: string;
    Document_Nav: Document | null | DeferredContent;
}

type ReportTemplateId = string | {DocumentID: string};

interface EditableReportTemplate extends Pick<ReportTemplate, "ObjectKey" | "RelationshipID"> {
}

interface ReservationHeader {
    ControllingArea: string;
    CostCenter: string;
    DocumentStatus: string;
    Network: string | null;
    ObjType: string;
    OrderId: string;
    PurchaseOrderId: string;
    ReceivingPlant: string;
    ReceivingStorageLocation: string;
    ReservationDate: string | null;
    ReservationNum: string;
    SalesOrder: string | null;
    SalesOrderItem: string | null;
    SalesOrderSchedule: string | null;
    WBSElement: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    ReservationItem_Nav: Array<ReservationItem> | DeferredContent;
    ScheduleLine_Nav: Array<ScheduleLine> | DeferredContent;
}

type ReservationHeaderId = string | {ReservationNum: string};

interface EditableReservationHeader extends Pick<ReservationHeader, "ControllingArea" | "CostCenter" | "DocumentStatus" | "ObjType" | "OrderId" | "PurchaseOrderId" | "ReceivingPlant" | "ReceivingStorageLocation" | "WBSElement">, Partial<Pick<ReservationHeader, "Network" | "ReservationDate" | "SalesOrder" | "SalesOrderItem" | "SalesOrderSchedule">> {
}

interface ReservationItem {
    AccountAssignmentCategory: string;
    Batch: string;
    BusinessArea: string;
    Completed: string;
    GLAccount: string | null;
    ItemNum: string;
    MaterialNum: string;
    MovementAllowed: string;
    MovementType: string;
    OrderId: string | null;
    OrderOperationNo: string | null;
    RecordType: string;
    RequirementDate: string | null;
    RequirementQuantity: string | null;
    RequirementUOM: string;
    ReservationNum: string;
    SalesOrder: string | null;
    SalesOrderItem: string | null;
    SalesOrderSchedule: string | null;
    StorageBin: string;
    SupplyPlant: string;
    SupplyStorageLocation: string;
    WBSElement: string | null;
    WithdrawalQuantity: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | DeferredContent;
}

type ReservationItemId = {RecordType: string,ItemNum: string,ReservationNum: string};

interface EditableReservationItem extends Pick<ReservationItem, "AccountAssignmentCategory" | "Batch" | "BusinessArea" | "Completed" | "ItemNum" | "MaterialNum" | "MovementAllowed" | "MovementType" | "RecordType" | "RequirementUOM" | "ReservationNum" | "StorageBin" | "SupplyPlant" | "SupplyStorageLocation" | "WithdrawalQuantity">, Partial<Pick<ReservationItem, "GLAccount" | "OrderId" | "OrderOperationNo" | "RequirementDate" | "RequirementQuantity" | "SalesOrder" | "SalesOrderItem" | "SalesOrderSchedule" | "WBSElement">> {
}

interface S4BPOrg {
    BusinessPartner: string;
    OrgId: string;
    OrgType: string;
    TransactionType: string;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
}

type S4BPOrgId = {BusinessPartner: string,TransactionType: string,OrgId: string,OrgType: string};

interface EditableS4BPOrg extends Pick<S4BPOrg, "BusinessPartner" | "OrgId" | "OrgType" | "TransactionType"> {
}

interface S4BPRelationship {
    BusinessPartnerFrom: string;
    BusinessPartnerTo: string;
    RelType: string;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
}

type S4BPRelationshipId = {BusinessPartnerFrom: string,BusinessPartnerTo: string,RelType: string};

interface EditableS4BPRelationship extends Pick<S4BPRelationship, "BusinessPartnerFrom" | "BusinessPartnerTo" | "RelType"> {
}

interface S4BPSalesArea {
    BusinessPartner: string;
    DistributionChannel: string;
    Division: string;
    ProcessType: string;
    SalesGroup: string;
    SalesGroupShort: string;
    SalesOffice: string;
    SalesOfficeShort: string;
    SalesOrg: string;
    SalesOrgShort: string;
    SalesRespOrg: string;
    SalesRespOrgShort: string;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Division | null | DeferredContent;
    SalesGroup_Nav: SalesGroup | null | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
}

type S4BPSalesAreaId = {SalesOffice: string,SalesGroup: string,SalesRespOrg: string,Division: string,DistributionChannel: string,SalesOrg: string,BusinessPartner: string,ProcessType: string};

interface EditableS4BPSalesArea extends Pick<S4BPSalesArea, "BusinessPartner" | "DistributionChannel" | "Division" | "ProcessType" | "SalesGroup" | "SalesGroupShort" | "SalesOffice" | "SalesOfficeShort" | "SalesOrg" | "SalesOrgShort" | "SalesRespOrg" | "SalesRespOrgShort"> {
}

interface S4BusinessPartner {
    AddressNum: string;
    BPNum: string;
    BPType: string;
    CostCenter: string;
    Customer: string;
    FirstName: string;
    FullName: string;
    LastName: string;
    OrgName1: string;
    OrgName2: string;
    PersonNum: string;
    UserName: string;
    Vendor: string;
    Address_Nav: Address | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    S4ConfirmationPartner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    S4Confirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4OrderEmpResp_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderPartner_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    S4Order_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4Request_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type S4BusinessPartnerId = string | {BPNum: string};

interface EditableS4BusinessPartner extends Pick<S4BusinessPartner, "AddressNum" | "BPType" | "CostCenter" | "Customer" | "FirstName" | "FullName" | "LastName" | "OrgName1" | "OrgName2" | "PersonNum" | "UserName" | "Vendor"> {
}

interface S4PartnerFunction {
    Description: string;
    FunctionCategory: string;
    HidePartnerFunc: string;
    PartnerFunction: string;
    RelationshpType: string;
    RelatshpCat: string;
    ShortDescription: string;
    Usage: string;
    S4ConfirmationPartner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    S4OrderPartner_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
}

type S4PartnerFunctionId = string | {PartnerFunction: string};

interface EditableS4PartnerFunction extends Pick<S4PartnerFunction, "Description" | "FunctionCategory" | "HidePartnerFunc" | "RelationshpType" | "RelatshpCat" | "ShortDescription" | "Usage"> {
}

interface S4ServiceConfirmation {
    ActivityCategory: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContractAccount: string;
    CreatedBy: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    EmployeeResp: string;
    FinalConfirmation: string;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    ObjectID: string;
    ObjectType: string;
    Priority: string;
    ProcessType: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SoldToParty: string;
    Status: string;
    StatusDesc: string;
    SubjectProfile: string;
    Urgency: string;
    WarrantyDesc: string;
    WarrantyID: string;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Division | null | DeferredContent;
    Document: Array<S4ServiceConfirmationDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceConfirmationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderTransHistory_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    Partners_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    RefObjects_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceConfirmationItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    ServiceOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
}

type S4ServiceConfirmationId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmation extends Pick<S4ServiceConfirmation, "ActivityCategory" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContractAccount" | "CreatedBy" | "Description" | "DistributionChannel" | "Division" | "EmployeeResp" | "FinalConfirmation" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "ObjectID" | "ObjectType" | "Priority" | "ProcessType" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceRespOrg" | "ServiceTeam" | "SoldToParty" | "Status" | "StatusDesc" | "SubjectProfile" | "Urgency" | "WarrantyDesc" | "WarrantyID">, Partial<Pick<S4ServiceConfirmation, "Category1" | "Category2" | "Category3" | "Category4" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID">> {
}

interface S4ServiceConfirmationDocument {
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceConfirmationDocument extends Pick<S4ServiceConfirmationDocument, "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectKey" | "ObjectType" | "RelationshipID"> {
}

interface S4ServiceConfirmationItem {
    AccountingInd: string;
    Amount: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContractAccount: string;
    ContractEnd: string | null;
    ContractID: string;
    ContractItem: string;
    ContractStart: string | null;
    Currency: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemNo: string;
    ItemObjectType: string;
    NetValue: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    ServiceType: string;
    StartOfWork: string | null;
    SubjectProfile: string;
    ValuationType: string;
    WarrantyID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Array<Division> | DeferredContent;
    Document: Array<S4ServiceConfirmationDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceConfirmationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    Product_Nav: Material | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceItemCategorySchema_Nav: ServiceItemCategorySchema | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    ValuationType_Nav: ServiceValuationType | null | DeferredContent;
}

type S4ServiceConfirmationItemId = {ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmationItem extends Pick<S4ServiceConfirmationItem, "AccountingInd" | "Amount" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContractAccount" | "ContractID" | "ContractItem" | "Currency" | "DistributionChannel" | "Division" | "Duration" | "DurationUOM" | "ItemCategory" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemNo" | "ItemObjectType" | "NetValue" | "ObjectID" | "ObjectType" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "ServiceType" | "SubjectProfile" | "ValuationType" | "WarrantyID">, Partial<Pick<S4ServiceConfirmationItem, "Category1" | "Category2" | "Category3" | "Category4" | "ContractEnd" | "ContractStart" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID" | "StartOfWork">> {
}

interface S4ServiceConfirmationLongText {
    HeaderID: string;
    ItemNo: string;
    NewTextString: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    TextID: string;
    TextObjType: string;
    TextString: string;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationLongTextId = {ItemNo: string,ObjectID: string,ObjectType: string,TextID: string};

interface EditableS4ServiceConfirmationLongText extends Pick<S4ServiceConfirmationLongText, "HeaderID" | "ItemNo" | "NewTextString" | "ObjectID" | "ObjectKey" | "ObjectType" | "TextID" | "TextObjType" | "TextString"> {
}

interface S4ServiceConfirmationPartner {
    AddressNum: string;
    BusinessPartnerID: string;
    DisplayType: string;
    HeaderID: string;
    ItemNo: string;
    MainPartner: string;
    ObjectID: string;
    ObjectType: string;
    PartnerFunction: string;
    PartnerNo: string;
    PartnerNoType: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4PartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationPartnerId = {ItemNo: string,ObjectID: string,PartnerFunction: string,PartnerNo: string,PartnerNoType: string,ObjectType: string};

interface EditableS4ServiceConfirmationPartner extends Pick<S4ServiceConfirmationPartner, "AddressNum" | "BusinessPartnerID" | "DisplayType" | "HeaderID" | "ItemNo" | "MainPartner" | "ObjectID" | "ObjectType" | "PartnerFunction" | "PartnerNo" | "PartnerNoType" | "PrevPartnerFunction" | "PrevPartnerNo"> {
}

interface S4ServiceConfirmationRefObj {
    Counter: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    ItemNo: string;
    MainObject: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string | null;
    ReferenceType: string;
    SerialNum: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmationRefObj extends Pick<S4ServiceConfirmationRefObj, "Counter" | "HeaderID" | "ItemNo" | "MainObject" | "ObjectID" | "ObjectType" | "ReferenceType" | "SerialNum">, Partial<Pick<S4ServiceConfirmationRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceConfirmationTranHistory {
    HeaderID: string;
    HeaderObjectType: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedHeaderObjType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceConfirmationTranHistoryId = {ItemNo: string,ObjectID: string,ObjectType: string,RelatedItemNo: string,RelatedObjectID: string,RelatedObjectType: string};

interface EditableS4ServiceConfirmationTranHistory extends Pick<S4ServiceConfirmationTranHistory, "HeaderID" | "HeaderObjectType" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedHeaderObjType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType"> {
}

interface S4ServiceContract {
    ContactPers: string;
    ContractEndDate: string | null;
    ContractStartDate: string | null;
    CreatedOn: string | null;
    Description: string;
    EmployeeResp: string;
    LifeCycleStatus: string;
    ObjectID: string;
    ObjectType: string;
    SalesOrg: string;
    ServiceOrg: string;
    SoldToParty: string;
    StatusDesc: string;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    ContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceContractDocument> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    LongText_Nav: Array<S4ServiceContractLongText> | DeferredContent;
    RefObj_Nav: Array<S4ServiceContractRefObj> | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    S4ServiceContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    TranHistory_Nav: Array<S4ServiceContractTranHistory> | DeferredContent;
}

type S4ServiceContractId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceContract extends Pick<S4ServiceContract, "ContactPers" | "Description" | "EmployeeResp" | "LifeCycleStatus" | "ObjectID" | "ObjectType" | "SalesOrg" | "ServiceOrg" | "SoldToParty" | "StatusDesc">, Partial<Pick<S4ServiceContract, "ContractEndDate" | "ContractStartDate" | "CreatedOn">> {
}

interface S4ServiceContractDocument {
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceContractDocument extends Pick<S4ServiceContractDocument, "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectKey" | "ObjectType" | "RelationshipID"> {
}

interface S4ServiceContractItem {
    AccountingInd: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContractAccount: string;
    ContractEnd: string | null;
    ContractID: string;
    ContractItem: string;
    ContractStart: string | null;
    Currency: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemNo: string;
    ItemObjectType: string;
    NetValue: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    ServiceType: string;
    SubjectProfile: string;
    ValuationType: string;
    WarrantyDesc: string;
    WarrantyID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Contract_Nav: S4ServiceContract | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    Document: Array<S4ServiceContractDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceContractLongText> | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    RefObj_Nav: Array<S4ServiceContractRefObj> | DeferredContent;
    RespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TranHistory_Nav: Array<S4ServiceContractTranHistory> | DeferredContent;
}

type S4ServiceContractItemId = {ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceContractItem extends Pick<S4ServiceContractItem, "AccountingInd" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContractAccount" | "ContractID" | "ContractItem" | "Currency" | "Duration" | "DurationUOM" | "ItemCategory" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemNo" | "ItemObjectType" | "NetValue" | "ObjectID" | "ObjectType" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "ServiceType" | "SubjectProfile" | "ValuationType" | "WarrantyDesc" | "WarrantyID">, Partial<Pick<S4ServiceContractItem, "Category1" | "Category2" | "Category3" | "Category4" | "ContractEnd" | "ContractStart" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID">> {
}

interface S4ServiceContractLongText {
    HeaderID: string;
    ItemNo: string;
    NewTextString: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    TextID: string;
    TextObjType: string;
    TextString: string;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractLongTextId = {ItemNo: string,ObjectID: string,ObjectType: string,TextID: string};

interface EditableS4ServiceContractLongText extends Pick<S4ServiceContractLongText, "HeaderID" | "ItemNo" | "NewTextString" | "ObjectID" | "ObjectKey" | "ObjectType" | "TextID" | "TextObjType" | "TextString"> {
}

interface S4ServiceContractRefObj {
    Counter: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    ItemNo: string;
    MainObject: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string | null;
    ReferenceType: string;
    SerialNum: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceContractRefObj extends Pick<S4ServiceContractRefObj, "Counter" | "HeaderID" | "ItemNo" | "MainObject" | "ObjectID" | "ObjectType" | "ReferenceType" | "SerialNum">, Partial<Pick<S4ServiceContractRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceContractTranHistory {
    HeaderID: string;
    HeaderObjectType: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedHeaderObjType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItems_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrders_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceContractTranHistoryId = {ItemNo: string,ObjectID: string,ObjectType: string,RelatedItemNo: string,RelatedObjectID: string,RelatedObjectType: string};

interface EditableS4ServiceContractTranHistory extends Pick<S4ServiceContractTranHistory, "HeaderID" | "HeaderObjectType" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedHeaderObjType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType"> {
}

interface S4ServiceItem {
    AccountingInd: string;
    Amount: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContractAccount: string;
    ContractEnd: string | null;
    ContractID: string;
    ContractItem: string;
    ContractStart: string | null;
    Currency: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemNo: string;
    ItemObjectType: string;
    NetValue: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    ServiceType: string;
    SubjectProfile: string;
    ValuationType: string;
    WarrantyDesc: string;
    WarrantyID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    Document: Array<S4ServiceOrderDocument> | DeferredContent;
    ItemCategory_Nav: ServiceItemCategory | null | DeferredContent;
    LongText_Nav: Array<S4ServiceOrderLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    Product_Nav: Material | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    ResponseSchema_Nav: ServiceResponseSchema | null | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceItemCategorySchema_Nav: ServiceItemCategorySchema | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceProfile_Nav: ServiceAvailabilityProfile | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    ValuationType_Nav: ServiceValuationType | null | DeferredContent;
}

type S4ServiceItemId = {ObjectID: string,ItemNo: string,ObjectType: string};

interface EditableS4ServiceItem extends Pick<S4ServiceItem, "AccountingInd" | "Amount" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContractAccount" | "ContractID" | "ContractItem" | "Currency" | "Duration" | "DurationUOM" | "ItemCategory" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemNo" | "ItemObjectType" | "NetValue" | "ObjectID" | "ObjectType" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "ServiceType" | "SubjectProfile" | "ValuationType" | "WarrantyDesc" | "WarrantyID">, Partial<Pick<S4ServiceItem, "Category1" | "Category2" | "Category3" | "Category4" | "ContractEnd" | "ContractStart" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID">> {
}

interface S4ServiceOrder {
    ActivityCategory: string;
    BillToParty: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContactPerson: string;
    ContractAccount: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    EmployeeResp: string;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    ObjectID: string;
    ObjectType: string;
    Priority: string;
    ProcessType: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SoldToParty: string;
    StatusDesc: string;
    SubjectProfile: string;
    Urgency: string;
    WarrantyDesc: string;
    WarrantyID: string;
    BillToParty_Nav: S4BusinessPartner | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceOrderDocument> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    LongText_Nav: Array<S4ServiceOrderLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    Priority_Nav: ServicePriority | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceImpact_Nav: ServiceImpact | null | DeferredContent;
    ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceUrgency_Nav: ServiceUrgency | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
}

type S4ServiceOrderId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceOrder extends Pick<S4ServiceOrder, "ActivityCategory" | "BillToParty" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContactPerson" | "ContractAccount" | "Description" | "DistributionChannel" | "Division" | "EmployeeResp" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "ObjectID" | "ObjectType" | "Priority" | "ProcessType" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceRespOrg" | "ServiceTeam" | "SoldToParty" | "StatusDesc" | "SubjectProfile" | "Urgency" | "WarrantyDesc" | "WarrantyID">, Partial<Pick<S4ServiceOrder, "Category1" | "Category2" | "Category3" | "Category4" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID">> {
}

interface S4ServiceOrderDocument {
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceOrderDocument extends Pick<S4ServiceOrderDocument, "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectKey" | "ObjectType" | "RelationshipID"> {
}

interface S4ServiceOrderLongText {
    HeaderID: string;
    ItemNo: string;
    NewTextString: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    TextID: string;
    TextObjType: string;
    TextString: string;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderLongTextId = {ObjectType: string,TextID: string,ObjectID: string,ItemNo: string};

interface EditableS4ServiceOrderLongText extends Pick<S4ServiceOrderLongText, "HeaderID" | "ItemNo" | "NewTextString" | "ObjectID" | "ObjectKey" | "ObjectType" | "TextID" | "TextObjType" | "TextString"> {
}

interface S4ServiceOrderPartner {
    AddressNum: string;
    BusinessPartnerID: string;
    DisplayType: string;
    HeaderID: string;
    ItemNo: string;
    MainPartner: string;
    ObjectID: string;
    ObjectType: string;
    PartnerFunction: string;
    PartnerGUID: string;
    PartnerNoType: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4PartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderPartnerId = {ItemNo: string,ObjectID: string,PartnerFunction: string,PartnerGUID: string,PartnerNoType: string,ObjectType: string};

interface EditableS4ServiceOrderPartner extends Pick<S4ServiceOrderPartner, "AddressNum" | "BusinessPartnerID" | "DisplayType" | "HeaderID" | "ItemNo" | "MainPartner" | "ObjectID" | "ObjectType" | "PartnerFunction" | "PartnerGUID" | "PartnerNoType" | "PrevPartnerFunction" | "PrevPartnerNo"> {
}

interface S4ServiceOrderRefObj {
    Counter: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    ItemNo: string;
    MainObject: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string | null;
    ReferenceType: string;
    SerialNum: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderRefObjId = {ObjectID: string,ItemNo: string,Counter: string,ObjectType: string};

interface EditableS4ServiceOrderRefObj extends Pick<S4ServiceOrderRefObj, "Counter" | "HeaderID" | "ItemNo" | "MainObject" | "ObjectID" | "ObjectType" | "ReferenceType" | "SerialNum">, Partial<Pick<S4ServiceOrderRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceOrderTranHistory {
    HeaderID: string;
    HeaderObjectType: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedHeaderObjType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    S4ServiceConfirmItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirms_Nav: S4ServiceConfirmation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | null | DeferredContent;
}

type S4ServiceOrderTranHistoryId = {ObjectID: string,ItemNo: string,RelatedObjectType: string,RelatedObjectID: string,ObjectType: string,RelatedItemNo: string};

interface EditableS4ServiceOrderTranHistory extends Pick<S4ServiceOrderTranHistory, "HeaderID" | "HeaderObjectType" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedHeaderObjType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType"> {
}

interface S4ServiceRequest {
    ActivityCategory: string;
    CatalogType1: string;
    CatalogType2: string;
    CategoryID1: string;
    CategoryID2: string;
    Code1: string;
    Code2: string;
    CodeGroup1: string;
    CodeGroup2: string;
    ContactPers: string;
    ContractAccount: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    EmployeeResp: string;
    FirstResponseBy: string | null;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    ObjectID: string;
    ObjectType: string;
    Priority: string;
    ProcessType: string;
    ReasonCategory1: string | null;
    ReasonCategory2: string | null;
    ReasonCategory3: string | null;
    ReasonCategory4: string | null;
    RecommendedPriority: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID1: string | null;
    SchemaGUID2: string | null;
    SchemaID1: string;
    SchemaID2: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SoldToParty: string;
    StatusDesc: string;
    SubjCategory1: string | null;
    SubjCategory2: string | null;
    SubjCategory3: string | null;
    SubjCategory4: string | null;
    SubjectProfile1: string;
    SubjectProfile2: string;
    Urgency: string;
    Category1_1_Nav: CategorizationSchema | null | DeferredContent;
    Category1_2_Nav: CategorizationSchema | null | DeferredContent;
    Category2_1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_1_Nav: CategorizationSchema | null | DeferredContent;
    Category3_2_Nav: CategorizationSchema | null | DeferredContent;
    Category4_1_Nav: CategorizationSchema | null | DeferredContent;
    Category4_2_Nav: CategorizationSchema | null | DeferredContent;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceRequestDocument> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    Impact_Nav: ServiceImpact | null | DeferredContent;
    LongText_Nav: Array<S4ServiceRequestLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderTransHistory_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    Partners_Nav: Array<S4ServiceRequestPartner> | DeferredContent;
    Priority_Nav: ServicePriority | null | DeferredContent;
    RefObj_Nav: Array<S4ServiceRequestRefObj> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    TranHistory_Nav: Array<S4ServiceRequestTranHistory> | DeferredContent;
    Urgency_Nav: ServiceUrgency | null | DeferredContent;
}

type S4ServiceRequestId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceRequest extends Pick<S4ServiceRequest, "ActivityCategory" | "CatalogType1" | "CatalogType2" | "CategoryID1" | "CategoryID2" | "Code1" | "Code2" | "CodeGroup1" | "CodeGroup2" | "ContactPers" | "ContractAccount" | "Description" | "DistributionChannel" | "Division" | "EmployeeResp" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "ObjectID" | "ObjectType" | "Priority" | "ProcessType" | "RecommendedPriority" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID1" | "SchemaID2" | "ServiceEmployee" | "ServiceOrg" | "ServiceRespOrg" | "ServiceTeam" | "SoldToParty" | "StatusDesc" | "SubjectProfile1" | "SubjectProfile2" | "Urgency">, Partial<Pick<S4ServiceRequest, "DueBy" | "FirstResponseBy" | "ReasonCategory1" | "ReasonCategory2" | "ReasonCategory3" | "ReasonCategory4" | "RequestedEnd" | "RequestedStart" | "SchemaGUID1" | "SchemaGUID2" | "SubjCategory1" | "SubjCategory2" | "SubjCategory3" | "SubjCategory4">> {
}

interface S4ServiceRequestDocument {
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    RelationshipID: string;
    Document: Document | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceRequestDocument extends Pick<S4ServiceRequestDocument, "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectKey" | "ObjectType" | "RelationshipID"> {
}

interface S4ServiceRequestLongText {
    HeaderID: string;
    ItemNo: string;
    NewTextString: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    TextID: string;
    TextObjType: string;
    TextString: string;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestLongTextId = {ItemNo: string,ObjectID: string,TextID: string,ObjectType: string};

interface EditableS4ServiceRequestLongText extends Pick<S4ServiceRequestLongText, "HeaderID" | "ItemNo" | "NewTextString" | "ObjectID" | "ObjectKey" | "ObjectType" | "TextID" | "TextObjType" | "TextString"> {
}

interface S4ServiceRequestPartner {
    AddressNum: string;
    BusinessPartnerID: string;
    DisplayType: string;
    HeaderID: string;
    ItemNo: string;
    MainPartner: string;
    ObjectID: string;
    ObjectType: string;
    PartnerFunction: string;
    PartnerNoType: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4PartnerFunction_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestPartnerId = {ItemNo: string,ObjectID: string,PartnerFunction: string,PartnerNoType: string,ObjectType: string};

interface EditableS4ServiceRequestPartner extends Pick<S4ServiceRequestPartner, "AddressNum" | "BusinessPartnerID" | "DisplayType" | "HeaderID" | "ItemNo" | "MainPartner" | "ObjectID" | "ObjectType" | "PartnerFunction" | "PartnerNoType" | "PrevPartnerFunction" | "PrevPartnerNo"> {
}

interface S4ServiceRequestRefObj {
    Counter: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    ItemNo: string;
    MainObject: string;
    ObjectID: string;
    ObjectType: string;
    ProductID: string | null;
    ReferenceType: string;
    SerialNum: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceRequestRefObj extends Pick<S4ServiceRequestRefObj, "Counter" | "HeaderID" | "ItemNo" | "MainObject" | "ObjectID" | "ObjectType" | "ReferenceType" | "SerialNum">, Partial<Pick<S4ServiceRequestRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceRequestTranHistory {
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestTranHistoryId = {ItemNo: string,ObjectID: string,RelatedItemNo: string,RelatedObjectID: string,RelatedObjectType: string,ObjectType: string};

interface EditableS4ServiceRequestTranHistory extends Pick<S4ServiceRequestTranHistory, "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType"> {
}

interface SAPUser {
    AddressNum: string;
    PersonNum: string;
    UserId: string;
    UserName: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
}

type SAPUserId = string | {UserId: string};

interface EditableSAPUser extends Pick<SAPUser, "AddressNum" | "PersonNum" | "UserName"> {
}

interface STOScheduleLine {
    Batch: string;
    DeliveredQuantity: string;
    DeliveryDate: string;
    IssuedQuantity: string;
    ItemNum: string;
    ReservationNum: string;
    ScheduleLine: string;
    StockTransportOrderId: string;
    StockTransportOrderItem_Nav: StockTransportOrderItem | DeferredContent;
}

type STOScheduleLineId = {StockTransportOrderId: string,ScheduleLine: string,ItemNum: string};

interface EditableSTOScheduleLine extends Pick<STOScheduleLine, "Batch" | "DeliveredQuantity" | "DeliveryDate" | "IssuedQuantity" | "ItemNum" | "ReservationNum" | "ScheduleLine" | "StockTransportOrderId"> {
}

interface SalesGroup {
    Description: string;
    SalesGroup: string;
    ShortDescription: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
}

type SalesGroupId = string | {SalesGroup: string};

interface EditableSalesGroup extends Pick<SalesGroup, "Description" | "ShortDescription"> {
}

interface SalesOffice {
    Description: string;
    SalesOffice: string;
    ShortDescription: string;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceItem_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrder_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesOfficeId = string | {SalesOffice: string};

interface EditableSalesOffice extends Pick<SalesOffice, "Description" | "ShortDescription"> {
}

interface SalesOrg {
    Description: string;
    SalesOrg: string;
    ShortDescription: string;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesOrgId = string | {SalesOrg: string};

interface EditableSalesOrg extends Pick<SalesOrg, "Description" | "ShortDescription"> {
}

interface SalesRespOrg {
    Description: string;
    SalesRespOrg: string;
    ShortDescription: string;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesRespOrgId = string | {SalesRespOrg: string};

interface EditableSalesRespOrg extends Pick<SalesRespOrg, "Description" | "ShortDescription"> {
}

interface ScheduleLine {
    Batch: string;
    DeliveredQuantity: string;
    DeliveryDate: string;
    IssuedQuantity: string;
    ItemNum: string;
    PurchaseOrderId: string;
    ReservationNum: string;
    ScheduleLine: string;
    PurchaseOrderItem_Nav: PurchaseOrderItem | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | DeferredContent;
}

type ScheduleLineId = {PurchaseOrderId: string,ItemNum: string,ScheduleLine: string};

interface EditableScheduleLine extends Pick<ScheduleLine, "Batch" | "DeliveredQuantity" | "DeliveryDate" | "IssuedQuantity" | "ItemNum" | "PurchaseOrderId" | "ReservationNum" | "ScheduleLine"> {
}

interface SearchCondition {
    Active: string;
    High: string;
    Low: string;
    Name: string;
    Option: string;
    RecordNum: string;
    Sign: string;
    UserGuid: string;
    SearchType_Nav: SearchType | null | DeferredContent;
}

type SearchConditionId = {UserGuid: string,RecordNum: string};

interface EditableSearchCondition extends Pick<SearchCondition, "Active" | "High" | "Low" | "Name" | "Option" | "RecordNum" | "Sign" | "UserGuid"> {
}

interface SearchType {
    Name: string;
    SearchCondition_Nav: SearchCondition | null | DeferredContent;
}

type SearchTypeId = string | {Name: string};

interface EditableSearchType {
}

interface ServiceAvailabilityProfile {
    Description: string;
    RuleID: string;
    ServiceProfile: string;
    SeviceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceAvailabilityProfileId = string | {ServiceProfile: string};

interface EditableServiceAvailabilityProfile extends Pick<ServiceAvailabilityProfile, "Description" | "RuleID"> {
}

interface ServiceImpact {
    Description: string;
    Impact: string;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceImpactId = string | {Impact: string};

interface EditableServiceImpact extends Pick<ServiceImpact, "Description"> {
}

interface ServiceItemCategory {
    APProcedure: string;
    ATPProf: string;
    ActionProfile: string;
    AssignCO: string;
    CondGroup: string;
    ConfProc: string;
    Confirmation: string;
    CounRuleName: string;
    DateProfile: string;
    DefaultConfig: string;
    DeliveryGroup: string;
    Description: string;
    DescriptionLong: string;
    EnhancementProf: string;
    FilterID: string;
    FixedDateQty: string;
    Inactive: string;
    IncompleteGroup: string;
    IndObject: string;
    InspectnRelvnt: string;
    ItemCategory: string;
    Language: string;
    MandatPredecRef: string;
    ObjRefMand: string;
    ObjectType: string;
    OrgDataProf: string;
    PartnerDetProc: string;
    Profile: string;
    QuantityValueItem: string;
    Relevwgtvol: string;
    ReltoCosting: string;
    ResrcePlanning: string;
    SCRelev: string;
    ServiceType: string;
    ShortDescription: string;
    ShortDescriptionLong: string;
    StatusObjectType: string;
    StatusProfile: string;
    Structurescope: string;
    SubjectProfile: string;
    TerritoryCheck: string;
    TextDetProc: string;
    TimeRuleName: string;
    ValuationType: string;
    Varmatchact: string;
    Varmatching: string;
    WoutProduct: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceItemCategoryId = string | {ItemCategory: string};

interface EditableServiceItemCategory extends Pick<ServiceItemCategory, "APProcedure" | "ATPProf" | "ActionProfile" | "AssignCO" | "CondGroup" | "ConfProc" | "Confirmation" | "CounRuleName" | "DateProfile" | "DefaultConfig" | "DeliveryGroup" | "Description" | "DescriptionLong" | "EnhancementProf" | "FilterID" | "FixedDateQty" | "Inactive" | "IncompleteGroup" | "IndObject" | "InspectnRelvnt" | "Language" | "MandatPredecRef" | "ObjRefMand" | "ObjectType" | "OrgDataProf" | "PartnerDetProc" | "Profile" | "QuantityValueItem" | "Relevwgtvol" | "ReltoCosting" | "ResrcePlanning" | "SCRelev" | "ServiceType" | "ShortDescription" | "ShortDescriptionLong" | "StatusObjectType" | "StatusProfile" | "Structurescope" | "SubjectProfile" | "TerritoryCheck" | "TextDetProc" | "TimeRuleName" | "ValuationType" | "Varmatchact" | "Varmatching" | "WoutProduct"> {
}

interface ServiceItemCategorySchema {
    CatalogTypeCAspectGUID: string;
    CatalogTypeDAspectGUID: string;
    ItemCategory: string;
    ParentObjectType: string;
    SubjectProfileAspectGUID: string;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceItem_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceItemCategorySchemaId = {ItemCategory: string,ParentObjectType: string};

interface EditableServiceItemCategorySchema extends Pick<ServiceItemCategorySchema, "CatalogTypeCAspectGUID" | "CatalogTypeDAspectGUID" | "ItemCategory" | "ParentObjectType" | "SubjectProfileAspectGUID"> {
}

interface ServiceOrg {
    Description: string;
    ServiceOrg: string;
    ShortDescription: string;
    S4ServiceContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceContract_Nav: Array<S4ServiceContract> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceOrgId = string | {ServiceOrg: string};

interface EditableServiceOrg extends Pick<ServiceOrg, "Description" | "ShortDescription"> {
}

interface ServicePriority {
    Description: string;
    Priority: string;
}

type ServicePriorityId = string | {Priority: string};

interface EditableServicePriority extends Pick<ServicePriority, "Description"> {
}

interface ServiceProcessType {
    CatalogTypeCAspectGUID: string;
    CatalogTypeDAspectGUID: string;
    Completerefer: string;
    Copyitemno: string;
    Description: string;
    ShortDescription: string;
    StatusProfile: string;
    SubjectProfile: string;
    SubjectProfileAspectGUID: string;
    TransCategory: string;
    TransactionType: string;
    TransactionType1: string;
}

type ServiceProcessTypeId = {TransactionType: string,SubjectProfile: string,TransCategory: string};

interface EditableServiceProcessType extends Pick<ServiceProcessType, "CatalogTypeCAspectGUID" | "CatalogTypeDAspectGUID" | "Completerefer" | "Copyitemno" | "Description" | "ShortDescription" | "StatusProfile" | "SubjectProfile" | "SubjectProfileAspectGUID" | "TransCategory" | "TransactionType" | "TransactionType1"> {
}

interface ServiceRespOrg {
    Description: string;
    ServiceRespOrg: string;
    ShortDescription: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
}

type ServiceRespOrgId = string | {ServiceRespOrg: string};

interface EditableServiceRespOrg extends Pick<ServiceRespOrg, "Description" | "ShortDescription"> {
}

interface ServiceResponseSchema {
    Description: string;
    ResponseProf: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceResponseSchemaId = string | {ResponseProf: string};

interface EditableServiceResponseSchema extends Pick<ServiceResponseSchema, "Description"> {
}

interface ServiceType {
    Description: string;
    ServiceType: string;
    ShortDescription: string;
    S4ConfirmItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ContractItems_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceTypeId = string | {ServiceType: string};

interface EditableServiceType extends Pick<ServiceType, "Description" | "ShortDescription"> {
}

interface ServiceUrgency {
    Description: string;
    Urgency: string;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceUrgencyId = string | {Urgency: string};

interface EditableServiceUrgency extends Pick<ServiceUrgency, "Description"> {
}

interface ServiceValuationType {
    Description: string;
    ValuationType: string;
    S4ConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceValuationTypeId = string | {ValuationType: string};

interface EditableServiceValuationType extends Pick<ServiceValuationType, "Description"> {
}

interface ShippingPoint {
    Description: string;
    ShippingPoint: string;
    ReceivingPoint_Nav: Array<ReceivingPoint> | DeferredContent;
}

type ShippingPointId = string | {ShippingPoint: string};

interface EditableShippingPoint extends Pick<ShippingPoint, "Description"> {
}

interface SpecialStockText {
    Description: string;
    SpecialStock: string;
}

type SpecialStockTextId = string | {SpecialStock: string};

interface EditableSpecialStockText extends Pick<SpecialStockText, "Description"> {
}

interface StagingArea {
    DoorNum: string;
    StagingArea: string;
    StagingAreaText: string;
    WarehouseNum: string;
}

type StagingAreaId = {WarehouseNum: string,StagingArea: string};

interface EditableStagingArea extends Pick<StagingArea, "DoorNum" | "StagingArea" | "StagingAreaText" | "WarehouseNum"> {
}

interface StandardTextKey {
    TextKey: string;
    Language: string;
    Description: string;
    LongText: string;
}

type StandardTextKeyId = string | {TextKey: string};

interface EditableStandardTextKey extends Pick<StandardTextKey, "Language" | "Description" | "LongText"> {
}

interface StockTransportOrderHeader {
    DocumentCategory: string;
    DocumentDate: string | null;
    DocumentStatus: string;
    DocumentType: string;
    StockTransportOrderId: string;
    SupplyingPlant: string;
    Vendor: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    StockTransportOrderHeaderLongText_Nav: Array<StockTransportOrderHeaderLongText> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
}

type StockTransportOrderHeaderId = string | {StockTransportOrderId: string};

interface EditableStockTransportOrderHeader extends Pick<StockTransportOrderHeader, "DocumentCategory" | "DocumentStatus" | "DocumentType" | "SupplyingPlant" | "Vendor">, Partial<Pick<StockTransportOrderHeader, "DocumentDate">> {
}

interface StockTransportOrderHeaderLongText {
    NewTextString: string;
    ObjectKey: string;
    StockTransportOrderId: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
}

type StockTransportOrderHeaderLongTextId = string | {StockTransportOrderId: string};

interface EditableStockTransportOrderHeaderLongText extends Pick<StockTransportOrderHeaderLongText, "NewTextString" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface StockTransportOrderItem {
    DeliveryCompletedFlag: string;
    FinalDeliveryFlag: string;
    IssuedQuantity: string;
    ItemNum: string;
    ItemText: string;
    MaterialNum: string;
    OpenQuantity: string;
    OrderQuantity: string;
    OrderUOM: string;
    Plant: string;
    ReceivedQuantity: string;
    StockTransportOrderId: string;
    StockType: string;
    StorageLoc: string;
    SupplierMaterialNum: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    STOScheduleLine_Nav: Array<STOScheduleLine> | DeferredContent;
    STOSerialNumber_Nav: Array<StockTransportOrderSerialNumber> | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
}

type StockTransportOrderItemId = {StockTransportOrderId: string,ItemNum: string};

interface EditableStockTransportOrderItem extends Pick<StockTransportOrderItem, "DeliveryCompletedFlag" | "FinalDeliveryFlag" | "IssuedQuantity" | "ItemNum" | "ItemText" | "MaterialNum" | "OpenQuantity" | "OrderQuantity" | "OrderUOM" | "Plant" | "ReceivedQuantity" | "StockTransportOrderId" | "StockType" | "StorageLoc" | "SupplierMaterialNum"> {
}

interface StockTransportOrderSerialNumber {
    ItemNumber: string;
    SerialNumber: string;
    StockTransportOrderId: string;
    STOItem_Nav: StockTransportOrderItem | DeferredContent;
}

type StockTransportOrderSerialNumberId = {ItemNumber: string,StockTransportOrderId: string};

interface EditableStockTransportOrderSerialNumber extends Pick<StockTransportOrderSerialNumber, "ItemNumber" | "SerialNumber" | "StockTransportOrderId"> {
}

interface StorageLocation {
    Plant: string;
    StorageLocation: string;
    StorageLocationDesc: string;
    Plant_Nav: Plant | DeferredContent;
    UserTrunkAssignment_Nav: Array<UserTrunkAssignment> | DeferredContent;
}

type StorageLocationId = {StorageLocation: string,Plant: string};

interface EditableStorageLocation extends Pick<StorageLocation, "Plant" | "StorageLocation" | "StorageLocationDesc"> {
}

interface StreetRoute {
    BusinessPartner: string;
    ConnectionObject: string;
    DeviceSet: number;
    EquipmentNum: string;
    MeterReader: string;
    MeterReadingUnit: string;
    NextEquipmentNum: string;
    PersonnelNumber: string;
    PreviousEquipmentNum: string;
    RouteIndex: number;
    ConnectionObject_Nav: ConnectionObject | null | DeferredContent;
    Device_Nav: Device | null | DeferredContent;
    MeterReadingUnit_Nav: MeterReadingUnit | null | DeferredContent;
    StreetRouteConnectionObject_Nav: StreetRouteConnectionObject | DeferredContent;
}

type StreetRouteId = {EquipmentNum: string,NextEquipmentNum: string,PreviousEquipmentNum: string,RouteIndex: number};

interface EditableStreetRoute extends Pick<StreetRoute, "BusinessPartner" | "ConnectionObject" | "DeviceSet" | "EquipmentNum" | "MeterReader" | "MeterReadingUnit" | "NextEquipmentNum" | "PersonnelNumber" | "PreviousEquipmentNum" | "RouteIndex"> {
}

interface StreetRouteConnectionObject {
    ConnectionObject: string;
    DeviceSet: number;
    MeterReadingUnit: string;
    ConnectionObject_Nav: ConnectionObject | DeferredContent;
    MeterReadingUnit_Nav: MeterReadingUnit | null | DeferredContent;
    StreetRoute_Nav: Array<StreetRoute> | DeferredContent;
}

type StreetRouteConnectionObjectId = {DeviceSet: number,ConnectionObject: string,MeterReadingUnit: string};

interface EditableStreetRouteConnectionObject extends Pick<StreetRouteConnectionObject, "ConnectionObject" | "DeviceSet" | "MeterReadingUnit"> {
}

interface SystemStatus {
    Language: string;
    Status: string;
    StatusText: string;
    SystemStatus: string;
    MyEquipObjectStatuses_Nav: Array<MyEquipObjectStatus> | DeferredContent;
    MyEquipSystemStatuses_Nav: Array<MyEquipSystemStatus> | DeferredContent;
    MyFuncLocObjectStatuses_Nav: Array<MyFuncLocObjectStatus> | DeferredContent;
    MyFuncLocSystemStatuses_Nav: Array<MyFuncLocSystemStatus> | DeferredContent;
}

type SystemStatusId = string | {SystemStatus: string};

interface EditableSystemStatus extends Pick<SystemStatus, "Language" | "Status" | "StatusText"> {
}

interface UsageUoM {
    Denominator: number;
    Description: string;
    Dimension: string;
    ExternalUoM: string;
    Numerator: number;
    UoM: string;
}

type UsageUoMId = string | {UoM: string};

interface EditableUsageUoM extends Pick<UsageUoM, "Denominator" | "Description" | "Dimension" | "ExternalUoM" | "Numerator"> {
}

interface UserFeature {
    UserFeature: string;
    UserPersona: string;
}

type UserFeatureId = {UserPersona: string,UserFeature: string};

interface EditableUserFeature extends Pick<UserFeature, "UserFeature" | "UserPersona"> {
}

interface UserGeneralInfo {
    CPMSRegistrationID: string;
    CPMSUserName: string;
    MobileApp: string;
    SAPUserName: string;
    UserGuid: string;
}

type UserGeneralInfoId = string | {UserGuid: string};

interface EditableUserGeneralInfo extends Pick<UserGeneralInfo, "CPMSRegistrationID" | "CPMSUserName" | "MobileApp" | "SAPUserName"> {
}

interface UserLocation {
    CurrentTimeStamp: string | null;
    GeometryValFormat: string | null;
    GeometryValue: string | null;
    MobileObjectStatus: string | null;
    ObjectGroup: string | null;
    ObjectGroup1: string | null;
    ObjectKey: string | null;
    ObjectType: string | null;
    StatusAttribute1: string | null;
    StatusAttribute2: string | null;
    UserGUID: string;
}

type UserLocationId = string | {UserGUID: string};

interface EditableUserLocation extends Partial<Pick<UserLocation, "CurrentTimeStamp" | "GeometryValFormat" | "GeometryValue" | "MobileObjectStatus" | "ObjectGroup" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "StatusAttribute1" | "StatusAttribute2">> {
}

interface UserObjectType {
    Object: string;
    Persona: string;
    Type: string;
}

type UserObjectTypeId = {Type: string,Persona: string,Object: string};

interface EditableUserObjectType extends Pick<UserObjectType, "Object" | "Persona" | "Type"> {
}

interface UserPersona {
    FlagDefault: string;
    UserGUID: string;
    UserPersona: string;
}

type UserPersonaId = {UserGUID: string,UserPersona: string};

interface EditableUserPersona extends Pick<UserPersona, "FlagDefault" | "UserGUID" | "UserPersona"> {
}

interface UserPreference {
    PreferenceGroup: string;
    PreferenceName: string;
    PreferenceValue: string;
    RecordId: string;
    UserGuid: string;
}

type UserPreferenceId = {UserGuid: string,RecordId: string};

interface EditableUserPreference extends Pick<UserPreference, "PreferenceGroup" | "PreferenceName" | "PreferenceValue" | "RecordId" | "UserGuid"> {
}

interface UserRole {
    ExternalWorkCenterId: string;
    ObjectType: string;
    OrgId: string;
    OrgName: string;
    OrgNameShort: string;
    PersonnelNo: string;
    Plant: string;
    PositionName: string;
    PositionNameShort: string;
    PositionOrgId: string;
    Role: string;
    SAPUserId: string;
    UserGuid: string;
    UserNameLong: string;
    UserNameShort: string;
    WorkCenterId: string;
}

type UserRoleId = {PersonnelNo: string,WorkCenterId: string,Plant: string,SAPUserId: string,PositionOrgId: string,OrgId: string};

interface EditableUserRole extends Pick<UserRole, "ExternalWorkCenterId" | "ObjectType" | "OrgId" | "OrgName" | "OrgNameShort" | "PersonnelNo" | "Plant" | "PositionName" | "PositionNameShort" | "PositionOrgId" | "Role" | "SAPUserId" | "UserGuid" | "UserNameLong" | "UserNameShort" | "WorkCenterId"> {
}

interface UserStatus {
    Language: string;
    Status: string;
    StatusProfile: string;
    StatusText: string;
    UserStatus: string;
    MyEquipUserStatuses_Nav: Array<MyEquipUserStatus> | DeferredContent;
    MyFuncLocUserStatuses_Nav: Array<MyFuncLocUserStatus> | DeferredContent;
}

type UserStatusId = {UserStatus: string,StatusProfile: string};

interface EditableUserStatus extends Pick<UserStatus, "Language" | "Status" | "StatusProfile" | "StatusText" | "UserStatus"> {
}

interface UserSystemInfo {
    RecordId: string;
    SystemSettingGroup: string;
    SystemSettingName: string;
    SystemSettingValue: string;
    UserGuid: string;
}

type UserSystemInfoId = {RecordId: string,UserGuid: string};

interface EditableUserSystemInfo extends Pick<UserSystemInfo, "RecordId" | "SystemSettingGroup" | "SystemSettingName" | "SystemSettingValue" | "UserGuid"> {
}

interface UserTimeEntry {
    OperationNo: string;
    OrderId: string;
    PreferenceGroup: string;
    PreferenceName: string;
    PreferenceValue: string;
    RecordId: string;
    SubOperationNo: string;
    UserGUID: string;
    UserId: string;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | DeferredContent;
}

type UserTimeEntryId = {RecordId: string,UserGUID: string};

interface EditableUserTimeEntry extends Pick<UserTimeEntry, "OperationNo" | "OrderId" | "PreferenceGroup" | "PreferenceName" | "PreferenceValue" | "RecordId" | "SubOperationNo" | "UserGUID" | "UserId"> {
}

interface UserTrunkAssignment {
    Active: string;
    AttributeName: string;
    Plant: string;
    RecordNo: string;
    StorageLocation: string;
    UserGuid: string;
    UserName: string;
    Plant_Nav: Plant | null | DeferredContent;
    StorageLocation_Nav: StorageLocation | null | DeferredContent;
}

type UserTrunkAssignmentId = {RecordNo: string,UserGuid: string};

interface EditableUserTrunkAssignment extends Pick<UserTrunkAssignment, "Active" | "AttributeName" | "Plant" | "RecordNo" | "StorageLocation" | "UserGuid" | "UserName"> {
}

interface ValuationCategory {
    Description: string;
    ValuationCategory: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: Array<MaterialPlant> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
}

type ValuationCategoryId = string | {ValuationCategory: string};

interface EditableValuationCategory extends Pick<ValuationCategory, "Description"> {
}

interface ValuationType {
    Description: string;
    ValuationArea: string;
    ValuationCategory: string;
    ValuationType: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    PhysInvDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
}

type ValuationTypeId = {ValuationArea: string,ValuationCategory: string,ValuationType: string};

interface EditableValuationType extends Pick<ValuationType, "Description" | "ValuationArea" | "ValuationCategory" | "ValuationType"> {
}

interface VarianceReason {
    Plant: string;
    ReasonText: string;
    VarianceReason: string;
    Confirmations: Array<Confirmation> | DeferredContent;
}

type VarianceReasonId = {Plant: string,VarianceReason: string};

interface EditableVarianceReason extends Pick<VarianceReason, "Plant" | "ReasonText" | "VarianceReason"> {
}

interface Vendor {
    AddressNum: string;
    Name1: string;
    PartnerNum: string;
    PostingBlock: string;
    PurchaseBlock: string;
    Vendor: string;
    Address_Nav: Address | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
    VendorCompanyData_Nav: Array<VendorCompanyData> | DeferredContent;
    VendorPurchaseOrgData_Nav: Array<VendorPurchaseOrgData> | DeferredContent;
}

type VendorId = string | {Vendor: string};

interface EditableVendor extends Pick<Vendor, "AddressNum" | "Name1" | "PartnerNum" | "PostingBlock" | "PurchaseBlock"> {
}

interface VendorCompanyData {
    CompanyBlock: string;
    CompanyCode: string;
    Vendor: string;
    Vendor_Nav: Vendor | DeferredContent;
}

type VendorCompanyDataId = {Vendor: string,CompanyCode: string};

interface EditableVendorCompanyData extends Pick<VendorCompanyData, "CompanyBlock" | "CompanyCode" | "Vendor"> {
}

interface VendorPurchaseOrgData {
    PurchaseOrgBlock: string;
    PurchasingOrg: string;
    Vendor: string;
    Vendor_Nav: Vendor | DeferredContent;
}

type VendorPurchaseOrgDataId = {PurchasingOrg: string,Vendor: string};

interface EditableVendorPurchaseOrgData extends Pick<VendorPurchaseOrgData, "PurchaseOrgBlock" | "PurchasingOrg" | "Vendor"> {
}

interface WCMApplication {
    ActualSystemStatus: string;
    EquipId: string;
    Extension: number;
    FuncLocIdIntern: string;
    ObjectNumber: string;
    ObjectType: string;
    OrderId: string | null;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    TrafficLight: number;
    Usage: string;
    ValidFrom: string | null;
    ValidFromTime: string;
    ValidTo: string | null;
    ValidToTime: string;
    WCMApplication: string;
    WCMApproval: string | null;
    WTIssuer: string;
    WorkCenterID: string;
    WorkCenterObjectType: string;
    WorkPermitDescr: string;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    WCMApplicationAttachments: Array<WCMApplicationAttachment> | DeferredContent;
    WCMApplicationDocuments: Array<WCMApplicationDocument> | DeferredContent;
    WCMApplicationLongtext_Nav: Array<WCMApplicationLongtext> | DeferredContent;
    WCMApplicationOrders: Array<WCMApplicationOrder> | DeferredContent;
    WCMApplicationPartners: Array<WCMApplicationPartner> | DeferredContent;
    WCMApplicationUsages: WCMApplicationUsage | DeferredContent;
    WCMApprovalApplications: Array<WCMApprovalApplication> | DeferredContent;
    WCMApprovalProcesses: Array<WCMApprovalProcess> | DeferredContent;
    WCMCatalogs: Array<WCMCatalog> | DeferredContent;
    WCMRequirements: WCMRequirement | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMApplicationId = string | {WCMApplication: string};

interface EditableWCMApplication extends Pick<WCMApplication, "ActualSystemStatus" | "EquipId" | "Extension" | "FuncLocIdIntern" | "ObjectNumber" | "ObjectType" | "PlannerGroup" | "PlanningPlant" | "Priority" | "TrafficLight" | "Usage" | "ValidFromTime" | "ValidToTime" | "WTIssuer" | "WorkCenterID" | "WorkCenterObjectType" | "WorkPermitDescr">, Partial<Pick<WCMApplication, "OrderId" | "ValidFrom" | "ValidTo" | "WCMApproval">> {
}

interface WCMApplicationAttachment {
    DocumentID: string;
    Objectkey: string;
    RelationshipID: string;
    WCMApplication: string;
    Document: Document | null | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMApplicationAttachmentId = {RelationshipID: string,Objectkey: string};

interface EditableWCMApplicationAttachment extends Pick<WCMApplicationAttachment, "DocumentID" | "Objectkey" | "RelationshipID" | "WCMApplication"> {
}

interface WCMApplicationDocument {
    WCMApplication: string;
    WCMDocument: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMApplicationDocumentId = {WCMApplication: string,WCMDocument: string};

interface EditableWCMApplicationDocument extends Pick<WCMApplicationDocument, "WCMApplication" | "WCMDocument"> {
}

interface WCMApplicationLongtext {
    Application: string;
    ObjectNumber: string;
    TextName: string;
    TextString: string;
    TextType: string;
    Textobject: string;
}

type WCMApplicationLongtextId = {TextName: string,ObjectNumber: string};

interface EditableWCMApplicationLongtext extends Pick<WCMApplicationLongtext, "Application" | "ObjectNumber" | "TextName" | "TextString" | "TextType" | "Textobject"> {
}

interface WCMApplicationOrder {
    Order: string;
    WCMApplication: string;
    MyWorkOrderHeaders: MyWorkOrderHeader | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMApplicationOrderId = {Order: string,WCMApplication: string};

interface EditableWCMApplicationOrder extends Pick<WCMApplicationOrder, "Order" | "WCMApplication"> {
}

interface WCMApplicationPartner {
    AddressExists: string;
    AddressNumber: string;
    BPNum: string;
    Counter: string;
    ObjectCategory: string;
    ObjectNumber: string;
    OldPartner: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string;
    PersonnelNum: string;
    WCMApplication: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    WCMPartnerFunction_Nav: WCMPartnerFunction | DeferredContent;
}

type WCMApplicationPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMApplicationPartner extends Pick<WCMApplicationPartner, "AddressExists" | "AddressNumber" | "BPNum" | "Counter" | "ObjectCategory" | "ObjectNumber" | "OldPartner" | "PartnerFunction" | "PartnerNum" | "PersonNum" | "PersonnelNum" | "WCMApplication"> {
}

interface WCMApplicationUsage {
    DescriptUsage: string;
    ExtNoRange: string;
    Extension: number;
    IntNoRange: string;
    MaxExtension: number;
    Offset: number;
    PlanningPlant: string;
    Usage: string;
    UsageAutGen: string;
    UsageType: string;
    Validity: number;
    ViewProfile: string;
    WCMApplications: Array<WCMApplication> | DeferredContent;
}

type WCMApplicationUsageId = {PlanningPlant: string,Usage: string};

interface EditableWCMApplicationUsage extends Pick<WCMApplicationUsage, "DescriptUsage" | "ExtNoRange" | "Extension" | "IntNoRange" | "MaxExtension" | "Offset" | "PlanningPlant" | "Usage" | "UsageAutGen" | "UsageType" | "Validity" | "ViewProfile"> {
}

interface WCMApproval {
    ActualSystemStatus: string;
    AuthorizGroup: string;
    CatalogExists: string;
    CatalogTwoExists: string;
    Delete: string;
    Equipment: string;
    FuncLoc: string;
    LongText: string;
    ObjListExists: string;
    ObjectNumber: string;
    OverallCondtn: string;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    RQTextExists: string;
    RecallTime: string;
    ShortText: string;
    Train: string;
    Unit: string;
    Usage: string;
    ValidFrmTime: string;
    ValidFrom: string;
    ValidTo: string;
    ValidToTime: string;
    WCMApplication: string;
    WCMApproval: string;
    WorkCenterID: string;
    WorkCenterObjectType: string;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    WCMApprovalApplications: Array<WCMApprovalApplication> | DeferredContent;
    WCMApprovalAttachments: Array<WCMApprovalAttachment> | DeferredContent;
    WCMApprovalLongtexts: Array<WCMApprovalLongtext> | DeferredContent;
    WCMApprovalOrders: Array<WCMApprovalOrder> | DeferredContent;
    WCMApprovalPartners: Array<WCMApprovalPartner> | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMApprovalId = string | {WCMApproval: string};

interface EditableWCMApproval extends Pick<WCMApproval, "ActualSystemStatus" | "AuthorizGroup" | "CatalogExists" | "CatalogTwoExists" | "Delete" | "Equipment" | "FuncLoc" | "LongText" | "ObjListExists" | "ObjectNumber" | "OverallCondtn" | "PlannerGroup" | "PlanningPlant" | "Priority" | "RQTextExists" | "RecallTime" | "ShortText" | "Train" | "Unit" | "Usage" | "ValidFrmTime" | "ValidFrom" | "ValidTo" | "ValidToTime" | "WCMApplication" | "WorkCenterID" | "WorkCenterObjectType"> {
}

interface WCMApprovalApplication {
    WCMApplication: string;
    WCMApproval: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalApplicationId = {WCMApproval: string,WCMApplication: string};

interface EditableWCMApprovalApplication extends Pick<WCMApprovalApplication, "WCMApplication" | "WCMApproval"> {
}

interface WCMApprovalAttachment {
    DocumentID: string;
    Objectkey: string;
    RelationshipID: string;
    WCMApproval: string;
    Document: Document | null | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalAttachmentId = {RelationshipID: string,Objectkey: string};

interface EditableWCMApprovalAttachment extends Pick<WCMApprovalAttachment, "DocumentID" | "Objectkey" | "RelationshipID" | "WCMApproval"> {
}

interface WCMApprovalLongtext {
    ObjectNumber: string;
    TextObject: string;
    TextString: string;
    TextType: string;
    WCMApproval: string;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalLongtextId = {TextType: string,WCMApproval: string};

interface EditableWCMApprovalLongtext extends Pick<WCMApprovalLongtext, "ObjectNumber" | "TextObject" | "TextString" | "TextType" | "WCMApproval"> {
}

interface WCMApprovalOrder {
    Order: string;
    WCMApproval: string;
    MyWorkOrderHeaders: MyWorkOrderHeader | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalOrderId = {Order: string,WCMApproval: string};

interface EditableWCMApprovalOrder extends Pick<WCMApprovalOrder, "Order" | "WCMApproval"> {
}

interface WCMApprovalPartner {
    AddressExists: string;
    AddressNumber: string;
    BPNum: string;
    Counter: string;
    ObjectCategory: string;
    ObjectNumber: string;
    OldPartner: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string;
    PersonnelNum: string;
    WCMWorkApproval: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunctions: PartnerFunction | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMApprovalPartner extends Pick<WCMApprovalPartner, "AddressExists" | "AddressNumber" | "BPNum" | "Counter" | "ObjectCategory" | "ObjectNumber" | "OldPartner" | "PartnerFunction" | "PartnerNum" | "PersonNum" | "PersonnelNum" | "WCMWorkApproval"> {
}

interface WCMApprovalProcess {
    ChangedBy: string;
    ChangedOn: string | null;
    Counter: string;
    CreatedBy: string;
    CreatedOn: string | null;
    IsAuthorized: string;
    Longtext: string;
    ObjectNumber: string;
    Permit: string;
    PermitCategory: string;
    WCMApplication: string;
    WCMDocument: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovalProcessLongtexts: WCMApprovalProcessLongtext | DeferredContent;
    WCMApprovalProcessSegments: Array<WCMApprovalProcessSegment> | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMApprovalProcessId = {ObjectNumber: string,Counter: string};

interface EditableWCMApprovalProcess extends Pick<WCMApprovalProcess, "ChangedBy" | "Counter" | "CreatedBy" | "IsAuthorized" | "Longtext" | "ObjectNumber" | "Permit" | "PermitCategory" | "WCMApplication" | "WCMDocument">, Partial<Pick<WCMApprovalProcess, "ChangedOn" | "CreatedOn">> {
}

interface WCMApprovalProcessLongtext {
    Counter: string;
    ObjectNumber: string;
    TextObject: string;
    TextString: string;
    TextType: string;
    WCMApprovalProcess: WCMApprovalProcess | DeferredContent;
}

type WCMApprovalProcessLongtextId = {ObjectNumber: string,Counter: string};

interface EditableWCMApprovalProcessLongtext extends Pick<WCMApprovalProcessLongtext, "Counter" | "ObjectNumber" | "TextObject" | "TextString" | "TextType"> {
}

interface WCMApprovalProcessSegment {
    AppFromDate: string | null;
    AppFromTime: string | null;
    AppToDate: string | null;
    AppToTime: string | null;
    ApprovedBy: string;
    Counter: string;
    CreatedOn: string | null;
    DeactivatedAt: string | null;
    DeactivatedBy: string;
    DeactivatedOn: string | null;
    EnteredAt: string | null;
    EnteredBy: string;
    ObjectNumber: string;
    SegmentCounter: string;
    SegmentInactive: string;
    WCMApprovalProceses: WCMApprovalProcess | DeferredContent;
}

type WCMApprovalProcessSegmentId = {ObjectNumber: string,Counter: string,SegmentCounter: string};

interface EditableWCMApprovalProcessSegment extends Pick<WCMApprovalProcessSegment, "ApprovedBy" | "Counter" | "DeactivatedBy" | "EnteredBy" | "ObjectNumber" | "SegmentCounter" | "SegmentInactive">, Partial<Pick<WCMApprovalProcessSegment, "AppFromDate" | "AppFromTime" | "AppToDate" | "AppToTime" | "CreatedOn" | "DeactivatedAt" | "DeactivatedOn" | "EnteredAt">> {
}

interface WCMCatalog {
    Catalog: string;
    ChangedBy: string;
    Changedon: string | null;
    Checkbox: string;
    Code: string;
    CodeGroup: string;
    Counter: string;
    Counter1: string;
    Createdat: string;
    Createdby: string;
    Createdon: string | null;
    DatabaseAction: string;
    LastChangedat: string;
    LongText: string;
    ObjectNumber: string;
    ShortText: string;
    Signature: string;
    Sortfield: string;
    Valuation: string;
    WCMApplication: string;
    WCMDocumentHeader: string;
    PMCatalogCode: PMCatalogCode | null | DeferredContent;
    WCMApplication_Nav: WCMApplication | null | DeferredContent;
    WCMDocumentHeader_Nav: WCMDocumentHeader | null | DeferredContent;
}

type WCMCatalogId = {ObjectNumber: string,Counter: string,Counter1: string};

interface EditableWCMCatalog extends Pick<WCMCatalog, "Catalog" | "ChangedBy" | "Checkbox" | "Code" | "CodeGroup" | "Counter" | "Counter1" | "Createdat" | "Createdby" | "DatabaseAction" | "LastChangedat" | "LongText" | "ObjectNumber" | "ShortText" | "Signature" | "Sortfield" | "Valuation" | "WCMApplication" | "WCMDocumentHeader">, Partial<Pick<WCMCatalog, "Changedon" | "Createdon">> {
}

interface WCMDocumentHeader {
    Activity: string | null;
    ActualFinishDate: string | null;
    ActualFinishTime: string | null;
    ActualStartDate: string | null;
    ActualStartTime: string | null;
    ActualSystemStatus: string;
    Application: string | null;
    Approvaltime: string | null;
    Approvedon: string | null;
    AuthorizGroup: string | null;
    BasicFinDate: string | null;
    BasicFinTime: string | null;
    Basstartdate: string | null;
    CatalogFirstExists: string | null;
    CatalogSecondExists: string | null;
    ChangedBy: string | null;
    ChangedOn: string | null;
    CreatedAt: string | null;
    CreatedBy: string | null;
    CreatedOn: string | null;
    DateEF: string | null;
    DateES: string | null;
    DateLF: string | null;
    DateLS: string | null;
    DatePF: string | null;
    DatePS: string | null;
    Delete: string | null;
    Description: string | null;
    DocumentLink: string | null;
    EndTime: string | null;
    EquipId: string | null;
    FinishTime: string | null;
    FuncLocIdIntern: string | null;
    IsSelVar: string;
    LastChangedat: string | null;
    LongText: string | null;
    OTEndon: string | null;
    OTGuardian: string | null;
    OTOperator: string | null;
    OTStarton: string | null;
    ObjListExists: string | null;
    ObjectNumber: string | null;
    ObjectType: string | null;
    OnDutyResponsible: string | null;
    OpCardNo: string | null;
    OverallCondtn: string | null;
    PlannerGroup: string | null;
    PlanningPlant: string | null;
    Priority: string | null;
    RecallTime: string | null;
    RemarksMt: string | null;
    RemarksOp: string | null;
    RevisionPhase: string | null;
    SchedFinish: string | null;
    SchedStart: string | null;
    SchedStartTime: string | null;
    ShiftChief: string | null;
    ShortText: string | null;
    StartTime: string | null;
    StatusProfile: string | null;
    StatusProfileItem: string | null;
    SubnetworkOf: string | null;
    TGTextExists: string | null;
    Template: string | null;
    TimeEF: string | null;
    TimeES: string | null;
    TimeLF: string | null;
    TimeLS: string | null;
    TimePF: string | null;
    TimePS: string | null;
    Timest: string | null;
    TrafficLight: number;
    Train: string | null;
    UGTextExists: string | null;
    Unit: string | null;
    Usage: string | null;
    ValidFromDate: string | null;
    ValidFromTime: string | null;
    ValidToDate: string | null;
    ValidToTime: string | null;
    WBSElement: string | null;
    WCMDocument: string;
    WorkCenterID: string | null;
    WorkCenterObjectType: string | null;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    PMMobileStatus: PMMobileStatus | DeferredContent;
    WCMApplicationDocuments: Array<WCMApplicationDocument> | DeferredContent;
    WCMApprovalProcesses: Array<WCMApprovalProcess> | DeferredContent;
    WCMCatalogs: Array<WCMCatalog> | DeferredContent;
    WCMDocumentHeaderAttachments: Array<WCMDocumentHeaderAttachment> | DeferredContent;
    WCMDocumentHeaderLongtexts: Array<WCMDocumentHeaderLongtext> | DeferredContent;
    WCMDocumentItems: Array<WCMDocumentItem> | DeferredContent;
    WCMDocumentPartners: Array<WCMDocumentPartner> | DeferredContent;
    WCMDocumentUsages: WCMDocumentUsage | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMDocumentHeaderId = string | {WCMDocument: string};

interface EditableWCMDocumentHeader extends Pick<WCMDocumentHeader, "ActualSystemStatus" | "IsSelVar" | "TrafficLight">, Partial<Pick<WCMDocumentHeader, "Activity" | "ActualFinishDate" | "ActualFinishTime" | "ActualStartDate" | "ActualStartTime" | "Application" | "Approvaltime" | "Approvedon" | "AuthorizGroup" | "BasicFinDate" | "BasicFinTime" | "Basstartdate" | "CatalogFirstExists" | "CatalogSecondExists" | "ChangedBy" | "ChangedOn" | "CreatedAt" | "CreatedBy" | "CreatedOn" | "DateEF" | "DateES" | "DateLF" | "DateLS" | "DatePF" | "DatePS" | "Delete" | "Description" | "DocumentLink" | "EndTime" | "EquipId" | "FinishTime" | "FuncLocIdIntern" | "LastChangedat" | "LongText" | "OTEndon" | "OTGuardian" | "OTOperator" | "OTStarton" | "ObjListExists" | "ObjectNumber" | "ObjectType" | "OnDutyResponsible" | "OpCardNo" | "OverallCondtn" | "PlannerGroup" | "PlanningPlant" | "Priority" | "RecallTime" | "RemarksMt" | "RemarksOp" | "RevisionPhase" | "SchedFinish" | "SchedStart" | "SchedStartTime" | "ShiftChief" | "ShortText" | "StartTime" | "StatusProfile" | "StatusProfileItem" | "SubnetworkOf" | "TGTextExists" | "Template" | "TimeEF" | "TimeES" | "TimeLF" | "TimeLS" | "TimePF" | "TimePS" | "Timest" | "Train" | "UGTextExists" | "Unit" | "Usage" | "ValidFromDate" | "ValidFromTime" | "ValidToDate" | "ValidToTime" | "WBSElement" | "WorkCenterID" | "WorkCenterObjectType">> {
}

interface WCMDocumentHeaderAttachment {
    DocumentID: string;
    Objectkey: string;
    RelationshipID: string;
    WCMDocument: string;
    Document: Document | null | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentHeaderAttachmentId = {RelationshipID: string,Objectkey: string};

interface EditableWCMDocumentHeaderAttachment extends Pick<WCMDocumentHeaderAttachment, "DocumentID" | "Objectkey" | "RelationshipID" | "WCMDocument"> {
}

interface WCMDocumentHeaderLongtext {
    ObjectNumber: string;
    TextObject: string;
    TextString: string;
    TextType: string;
    WCMDocument: string;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentHeaderLongtextId = {TextType: string,WCMDocument: string};

interface EditableWCMDocumentHeaderLongtext extends Pick<WCMDocumentHeaderLongtext, "ObjectNumber" | "TextObject" | "TextString" | "TextType" | "WCMDocument"> {
}

interface WCMDocumentItem {
    BlockingType: string | null;
    Client: string | null;
    DocumentLink: string | null;
    Equipment: string;
    FCODE: string;
    FuncLoc: string;
    IsSelVar: string;
    ItemCategory: string | null;
    ItemCategoryCC: string | null;
    Location: string | null;
    LockNumber: string | null;
    LongText: string | null;
    Name: string | null;
    ObjectNumber: string | null;
    OpGroup: string | null;
    PhysBlocking: string | null;
    Predecessor: string | null;
    PrintFormatTag: string | null;
    PrintFormatUntag: string | null;
    Sequence: string | null;
    ShortText: string | null;
    Successor: string | null;
    SwitchingLoc: string | null;
    Tag: string | null;
    TagRequired: string | null;
    TagSequence: string | null;
    TaggingComment: string | null;
    TaggingCond: string | null;
    TaggingStep: string | null;
    TaggingType: string | null;
    TechObject: string | null;
    Template: string | null;
    TestTag: string | null;
    UntSequence: string | null;
    UntagComment: string | null;
    UntagCond: string | null;
    UntaggingStep: string | null;
    UntaggingType: string | null;
    WCMDocument: string;
    WCMDocumentItem: string;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    PMMobileStatus: PMMobileStatus | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
    WCMDocumentItemAttachments: Array<WCMDocumentItemAttachment> | DeferredContent;
    WCMDocumentItemLongtexts: Array<WCMDocumentItemLongtext> | DeferredContent;
    WCMDocumentTechnicalObjects: WCMDocumentTechnicalObject | null | DeferredContent;
    WCMOpGroup_Nav: WCMOpGroup | null | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
}

type WCMDocumentItemId = {WCMDocument: string,WCMDocumentItem: string};

interface EditableWCMDocumentItem extends Pick<WCMDocumentItem, "Equipment" | "FCODE" | "FuncLoc" | "IsSelVar" | "WCMDocument" | "WCMDocumentItem">, Partial<Pick<WCMDocumentItem, "BlockingType" | "Client" | "DocumentLink" | "ItemCategory" | "ItemCategoryCC" | "Location" | "LockNumber" | "LongText" | "Name" | "ObjectNumber" | "OpGroup" | "PhysBlocking" | "Predecessor" | "PrintFormatTag" | "PrintFormatUntag" | "Sequence" | "ShortText" | "Successor" | "SwitchingLoc" | "Tag" | "TagRequired" | "TagSequence" | "TaggingComment" | "TaggingCond" | "TaggingStep" | "TaggingType" | "TechObject" | "Template" | "TestTag" | "UntSequence" | "UntagComment" | "UntagCond" | "UntaggingStep" | "UntaggingType">> {
}

interface WCMDocumentItemAttachment {
    DocumentID: string;
    Objectkey: string;
    RelationshipID: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    WCMDocumentItemObjNr: string;
    Document: Document | null | DeferredContent;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMDocumentItemAttachmentId = {RelationshipID: string,Objectkey: string};

interface EditableWCMDocumentItemAttachment extends Pick<WCMDocumentItemAttachment, "DocumentID" | "Objectkey" | "RelationshipID" | "WCMDocument" | "WCMDocumentItem" | "WCMDocumentItemObjNr"> {
}

interface WCMDocumentItemLongtext {
    ObjectNumber: string;
    TextObject: string;
    TextString: string;
    TextType: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMDocumentItemLongtextId = {TextType: string,WCMDocument: string,WCMDocumentItem: string};

interface EditableWCMDocumentItemLongtext extends Pick<WCMDocumentItemLongtext, "ObjectNumber" | "TextObject" | "TextString" | "TextType" | "WCMDocument" | "WCMDocumentItem"> {
}

interface WCMDocumentPartner {
    AddressExists: string;
    AddressNumber: string;
    BPNum: string;
    Counter: string;
    ObjectCategory: string;
    ObjectNumber: string;
    OldPartner: string;
    PartnerFunction: string;
    PartnerNum: string;
    PersonNum: string;
    PersonnelNum: string;
    WCMDocument: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunctions: PartnerFunction | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMDocumentPartner extends Pick<WCMDocumentPartner, "AddressExists" | "AddressNumber" | "BPNum" | "Counter" | "ObjectCategory" | "ObjectNumber" | "OldPartner" | "PartnerFunction" | "PartnerNum" | "PersonNum" | "PersonnelNum" | "WCMDocument"> {
}

interface WCMDocumentTechnicalObject {
    ItemCategory: string;
    ShortText: string;
    TechObject: string;
    TechObjectExternal: string;
    TechObjectInternal: string;
    WCMDocumentItems: Array<WCMDocumentItem> | DeferredContent;
}

type WCMDocumentTechnicalObjectId = string | {TechObject: string};

interface EditableWCMDocumentTechnicalObject extends Pick<WCMDocumentTechnicalObject, "ItemCategory" | "ShortText" | "TechObjectExternal" | "TechObjectInternal"> {
}

interface WCMDocumentUsage {
    BlAppUntag: string;
    BlApprTU: string;
    BlApprTag: string;
    BlockApproval: string;
    ExtNoRange: string;
    IntNoRange: string;
    MDTagging: string;
    MobProcessing: string;
    MultipleTag: string;
    OptnProtection: string;
    PlanningPlant: string;
    PrintTag: string;
    PrintTestTag: string;
    Specification: string;
    Step: string;
    Tag: string;
    Untag: string;
    UntagTemp: string;
    Usage: string;
    UsageAutGen: string;
    UsageDescription: string;
    UsageType: string;
    ViewProfile: string;
    WCMDocumentHeaders: Array<WCMDocumentHeader> | DeferredContent;
}

type WCMDocumentUsageId = {PlanningPlant: string,Usage: string};

interface EditableWCMDocumentUsage extends Pick<WCMDocumentUsage, "BlAppUntag" | "BlApprTU" | "BlApprTag" | "BlockApproval" | "ExtNoRange" | "IntNoRange" | "MDTagging" | "MobProcessing" | "MultipleTag" | "OptnProtection" | "PlanningPlant" | "PrintTag" | "PrintTestTag" | "Specification" | "Step" | "Tag" | "Untag" | "UntagTemp" | "Usage" | "UsageAutGen" | "UsageDescription" | "UsageType" | "ViewProfile"> {
}

interface WCMItemCategory {
    ItemCategoryCC: string;
    ItemCategoryText: string;
}

type WCMItemCategoryId = string | {ItemCategoryCC: string};

interface EditableWCMItemCategory extends Pick<WCMItemCategory, "ItemCategoryText"> {
}

interface WCMOpCondition {
    OpCondition: string;
    OpConditionText: string;
}

type WCMOpConditionId = string | {OpCondition: string};

interface EditableWCMOpCondition extends Pick<WCMOpCondition, "OpConditionText"> {
}

interface WCMOpGroup {
    OpGroup: string;
    TextOpGroup: string;
    WCMDocumentItem_Nav: Array<WCMDocumentItem> | DeferredContent;
}

type WCMOpGroupId = string | {OpGroup: string};

interface EditableWCMOpGroup extends Pick<WCMOpGroup, "TextOpGroup"> {
}

interface WCMPartnerFunction {
    Description: string;
    PartnerFunction: string;
    PartnerType: string;
    WCMApplicationPartner_Nav: WCMApplicationPartner | null | DeferredContent;
}

type WCMPartnerFunctionId = string | {PartnerFunction: string};

interface EditableWCMPartnerFunction extends Pick<WCMPartnerFunction, "Description" | "PartnerType"> {
}

interface WCMPhysicalBlockingType {
    BlockingType: string;
    BlockingTypeText: string;
    PlanningPlant: string;
}

type WCMPhysicalBlockingTypeId = {PlanningPlant: string,BlockingType: string};

interface EditableWCMPhysicalBlockingType extends Pick<WCMPhysicalBlockingType, "BlockingType" | "BlockingTypeText" | "PlanningPlant"> {
}

interface WCMPrintFormatTag {
    PlanningPlant: string;
    PrintCategory: string;
    PrintFormat: string;
    ShortText: string;
}

type WCMPrintFormatTagId = {PrintFormat: string,PrintCategory: string,PlanningPlant: string};

interface EditableWCMPrintFormatTag extends Pick<WCMPrintFormatTag, "PlanningPlant" | "PrintCategory" | "PrintFormat" | "ShortText"> {
}

interface WCMRequirement {
    BarriersSigns: string;
    BlockCover: string;
    Checking: string;
    CleaningWork: string;
    ClngHCFreeing: string;
    CmHnSystems: string;
    DemolitionWork: string;
    Depress: string;
    DrngEmptg: string;
    Entry: string;
    Equipment: string;
    Explosives: string;
    ExternalBodies: string;
    ExtingMedia: string;
    Fire: string;
    FireWatch: string;
    GasMeas: string;
    GuardRadio: string;
    HSEDatasheet: string;
    HazardousSubs: string;
    HotWorkA: string;
    HotWorkB: string;
    InitialList: string;
    Instruction: string;
    Isolation: string;
    JSA: string;
    LiftingOps: string;
    LocateEarth: string;
    LockoutTagout: string;
    Manholes: string;
    More: string;
    Nightwork: string;
    ObjectNumber: string;
    OilandGas: string;
    OpenSea: string;
    OtherActiv: string;
    OtherWork: string;
    OverheadWork: string;
    PA: string;
    PaintingWork: string;
    PressTesting: string;
    Radiation: string;
    RadioactMatl: string;
    RegularInsp: string;
    Replacement: string;
    ReqmtsHeight: string;
    ReqmtsSea: string;
    RestructWork: string;
    SafetyStaff: string;
    SecureInstall: string;
    SimultanWorks: string;
    VentgExtraVent: string;
    Ventilation: string;
    WaterSupply: string;
    Wells: string;
    Work: string;
    WorkatHeight: string;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMRequirementId = string | {ObjectNumber: string};

interface EditableWCMRequirement extends Pick<WCMRequirement, "BarriersSigns" | "BlockCover" | "Checking" | "CleaningWork" | "ClngHCFreeing" | "CmHnSystems" | "DemolitionWork" | "Depress" | "DrngEmptg" | "Entry" | "Equipment" | "Explosives" | "ExternalBodies" | "ExtingMedia" | "Fire" | "FireWatch" | "GasMeas" | "GuardRadio" | "HSEDatasheet" | "HazardousSubs" | "HotWorkA" | "HotWorkB" | "InitialList" | "Instruction" | "Isolation" | "JSA" | "LiftingOps" | "LocateEarth" | "LockoutTagout" | "Manholes" | "More" | "Nightwork" | "OilandGas" | "OpenSea" | "OtherActiv" | "OtherWork" | "OverheadWork" | "PA" | "PaintingWork" | "PressTesting" | "Radiation" | "RadioactMatl" | "RegularInsp" | "Replacement" | "ReqmtsHeight" | "ReqmtsSea" | "RestructWork" | "SafetyStaff" | "SecureInstall" | "SimultanWorks" | "VentgExtraVent" | "Ventilation" | "WaterSupply" | "Wells" | "Work" | "WorkatHeight"> {
}

interface WCMSwitchingData {
    OpGroup: string;
    PhysBlocking: string;
    PlanningPlant: string;
    TagRequired: string;
    TaggingCond: string;
    TaggingType: string;
    UntagCond: string;
    UntaggingType: string;
    Useas: string;
}

type WCMSwitchingDataId = {PlanningPlant: string,OpGroup: string,TaggingCond: string};

interface EditableWCMSwitchingData extends Pick<WCMSwitchingData, "OpGroup" | "PhysBlocking" | "PlanningPlant" | "TagRequired" | "TaggingCond" | "TaggingType" | "UntagCond" | "UntaggingType" | "Useas"> {
}

interface WCMSystemStatus {
    ChangeDate: string | null;
    ChangeNumber: string;
    ChangeTime: string | null;
    ObjectNumber: string;
    ObjectType: string;
    Position: string;
    Priority: string;
    Status: string;
    StatusInact: string;
    StatusNumber: string;
    StatusProfile: string;
    WCMApplication: string;
    WCMApproval: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    SystemStatuses: SystemStatus | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMSystemStatusId = {ObjectNumber: string,Status: string,ChangeNumber: string};

interface EditableWCMSystemStatus extends Pick<WCMSystemStatus, "ChangeNumber" | "ObjectNumber" | "ObjectType" | "Position" | "Priority" | "Status" | "StatusInact" | "StatusNumber" | "StatusProfile" | "WCMApplication" | "WCMApproval" | "WCMDocument" | "WCMDocumentItem">, Partial<Pick<WCMSystemStatus, "ChangeDate" | "ChangeTime">> {
}

interface WCMUserStatus {
    ChangeDate: string;
    ChangeNumber: string;
    ChangeTime: string;
    ObjectNumber: string;
    ObjectType: string;
    Position: string;
    Priority: string;
    Status: string;
    StatusInact: string;
    StatusNumber: string;
    StatusProfile: string;
    WCMApplication: string;
    WCMApproval: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    UserStatus: UserStatus | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMUserStatusId = {ObjectNumber: string,StatusProfile: string,Status: string,ChangeNumber: string};

interface EditableWCMUserStatus extends Pick<WCMUserStatus, "ChangeDate" | "ChangeNumber" | "ChangeTime" | "ObjectNumber" | "ObjectType" | "Position" | "Priority" | "Status" | "StatusInact" | "StatusNumber" | "StatusProfile" | "WCMApplication" | "WCMApproval" | "WCMDocument" | "WCMDocumentItem"> {
}

interface WCMWorkReqText {
    GroupId: string;
    GroupTitle: string;
    PlanningPlant: string;
    PropertyLabel: string;
    PropertyName: string;
    PropertyVisible: string;
    UsageType: string;
}

type WCMWorkReqTextId = string | {PropertyName: string};

interface EditableWCMWorkReqText extends Pick<WCMWorkReqText, "GroupId" | "GroupTitle" | "PlanningPlant" | "PropertyLabel" | "PropertyVisible" | "UsageType"> {
}

interface WarehouseNum {
    WarehouseNo: string;
    Description: string;
}

type WarehouseNumId = string | {WarehouseNo: string};

interface EditableWarehouseNum extends Pick<WarehouseNum, "Description"> {
}

interface WarehouseOrder {
    WOCreationRule: string;
    Queue: string;
    WOProcessType: string;
    WarehouseNo: string;
    WarehouseOrder: string;
    WOStatus: string;
    ActivityArea: string;
    StorageType: string;
    StorageBin: string;
    CreationTime: string;
    CreatedBy: string;
}

type WarehouseOrderId = {WarehouseNo: string,WarehouseOrder: string};

interface EditableWarehouseOrder extends Pick<WarehouseOrder, "WOCreationRule" | "Queue" | "WOProcessType" | "WarehouseNo" | "WarehouseOrder" | "WOStatus" | "ActivityArea" | "StorageType" | "StorageBin" | "CreationTime" | "CreatedBy"> {
}

interface WarehouseOrderQueue {
    WarehouseNo: string;
    Queue: string;
    QueueText: string;
}

type WarehouseOrderQueueId = {WarehouseNo: string,Queue: string};

interface EditableWarehouseOrderQueue extends Pick<WarehouseOrderQueue, "WarehouseNo" | "Queue" | "QueueText"> {
}

interface WarehouseTask {
    WarehouseNo: string;
    WarehouseTask: string;
    WhseProcType: string;
    ProcCategory: string;
    StorageProcess: string;
    CreatedBy: string;
    CreationTime: string;
    Product: string;
    SourceHU: string;
    DestStorTy: string;
    DestinationBin: string;
    DocumentID: string;
    ActivityArea: string;
    Queue: string;
    WarehouseOrder: string;
    DestinationHU: string;
    Delivery: string;
    WTStatus: string;
    SourceBin: string;
    BaseQuantity: string;
    BaseUoM: string;
    Batch: string;
    Quantity: string;
    UoM: string;
    LoadingWeight: string;
    WeightUnit: string;
    LoadingVolume: string;
    VolumeUnit: string;
    SrceStorType: string;
    SrcStorSectn: string;
    DestSection: string;
    Resource: string;
    MovementReason: string;
    ExceptionCode: string;
    WarehouseTaskSerialNumber_Nav: Array<WarehouseTaskSerialNumber> | DeferredContent;
}

type WarehouseTaskId = {WarehouseNo: string,WarehouseTask: string};

interface EditableWarehouseTask extends Pick<WarehouseTask, "WarehouseNo" | "WarehouseTask" | "WhseProcType" | "ProcCategory" | "StorageProcess" | "CreatedBy" | "CreationTime" | "Product" | "SourceHU" | "DestStorTy" | "DestinationBin" | "DocumentID" | "ActivityArea" | "Queue" | "WarehouseOrder" | "DestinationHU" | "Delivery" | "WTStatus" | "SourceBin" | "BaseQuantity" | "BaseUoM" | "Batch" | "Quantity" | "UoM" | "LoadingWeight" | "WeightUnit" | "LoadingVolume" | "VolumeUnit" | "SrceStorType" | "SrcStorSectn" | "DestSection" | "Resource" | "MovementReason" | "ExceptionCode"> {
}

interface WarehouseTaskSerialNumber {
    WarehouseNo: string;
    WarehouseTask: string;
    SerialNumber: string;
    Product: string;
    UII: string;
}

type WarehouseTaskSerialNumberId = {WarehouseNo: string,WarehouseTask: string,SerialNumber: string};

interface EditableWarehouseTaskSerialNumber extends Pick<WarehouseTaskSerialNumber, "WarehouseNo" | "WarehouseTask" | "SerialNumber" | "Product" | "UII"> {
}

interface WarehouseProcessType {
    WarehouseProcessTypeDescription: string;
    WarehouseNo: string;
    WarehouseProcessType: string;
}

type WarehouseProcessTypeId = {WarehouseNo: string,WarehouseProcessType: string};

interface EditableWarehouseProcessType extends Pick<WarehouseProcessType, "WarehouseProcessTypeDescription" | "WarehouseNo" | "WarehouseProcessType"> {
}

interface WarehouseMovementReason {
    WarehouseNo: string;
    MovementReason: string;
    Description: string;
}

type WarehouseMovementReasonId = {WarehouseNo: string,MovementReason: string};

interface EditableWarehouseMovementReason extends Pick<WarehouseMovementReason, "WarehouseNo" | "MovementReason" | "Description"> {
}

interface WarehouseResource {
    WarehouseNo: string;
    Resource: string;
    ResourceType: string;
    User: string;
    Queue: string;
    StandardBin: string;
    ResourceGroup: string;
}

type WarehouseResourceId = {WarehouseNo: string,Resource: string};

interface EditableWarehouseResource extends Pick<WarehouseResource, "WarehouseNo" | "Resource" | "ResourceType" | "User" | "Queue" | "StandardBin" | "ResourceGroup"> {
}

interface WorkCenter {
    CatalogProfile: string;
    ControllingArea: string;
    CostCenter: string;
    DefaultActivityType: string;
    ExternalWorkCenterId: string;
    ObjectType: string;
    PMEquipFlag: string;
    PMFuncLocFlag: string;
    PlantId: string;
    QNotifTypeFlag: string;
    ReportType: string;
    ReportTypeDesc: string;
    WorkCenterDescr: string;
    WorkCenterId: string;
    WorkCenterName: string;
    MyEquipments_Main_Nav: Array<MyEquipment> | DeferredContent;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
    MyFunctionalLocations_Main_Nav: Array<MyFunctionalLocation> | DeferredContent;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
}

type WorkCenterId = {WorkCenterId: string,ObjectType: string};

interface EditableWorkCenter extends Pick<WorkCenter, "CatalogProfile" | "ControllingArea" | "CostCenter" | "DefaultActivityType" | "ExternalWorkCenterId" | "ObjectType" | "PMEquipFlag" | "PMFuncLocFlag" | "PlantId" | "QNotifTypeFlag" | "ReportType" | "ReportTypeDesc" | "WorkCenterDescr" | "WorkCenterId" | "WorkCenterName"> {
}

interface WorkOrderHistory {
    EndDate: string | null;
    Equipment: string;
    FunctionalLocation: string;
    LongTextExists: string;
    MainWorkCenter: string;
    NotifNum: string;
    ObjectNumber: string;
    OrderDescription: string;
    OrderId: string;
    OrderType: string;
    PM_OBJTY: string;
    PersonalNumber: string;
    PersonsName: string;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    PriorityType: string;
    ReferenceType: string;
    ReferenceWorkOrder: string;
    StartDate: string | null;
    TechObject: string;
    WorkCenter: string;
    Employee_Nav: Employee | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    HistoryLongText: WorkOrderHistoryText | DeferredContent;
    HistoryPriority: Priority | null | DeferredContent;
    PMMobileStatus_Nav: PMMobileStatus | DeferredContent;
    PlannerGroup_Nav: PlannerGroup | DeferredContent;
    RelatedNotif_Nav: MyNotificationHeader | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type WorkOrderHistoryId = {OrderId: string,ReferenceType: string,TechObject: string};

interface EditableWorkOrderHistory extends Pick<WorkOrderHistory, "Equipment" | "FunctionalLocation" | "LongTextExists" | "MainWorkCenter" | "NotifNum" | "ObjectNumber" | "OrderDescription" | "OrderId" | "OrderType" | "PM_OBJTY" | "PersonalNumber" | "PersonsName" | "PlannerGroup" | "PlanningPlant" | "Priority" | "PriorityType" | "ReferenceType" | "ReferenceWorkOrder" | "TechObject" | "WorkCenter">, Partial<Pick<WorkOrderHistory, "EndDate" | "StartDate">> {
}

interface WorkOrderHistoryText {
    ObjectKey: string;
    OrderId: string;
    TextId: string;
    TextObjectType: string;
    TextString: string;
    WOHistory: WorkOrderHistory | DeferredContent;
}

type WorkOrderHistoryTextId = string | {OrderId: string};

interface EditableWorkOrderHistoryText extends Pick<WorkOrderHistoryText, "ObjectKey" | "TextId" | "TextObjectType" | "TextString"> {
}

interface WorkOrderOperationPhaseControl {
    AuthorizationKey: string;
    Description: string;
    EntityType: string;
    IsActive: string;
    ObjectNumber: string;
    OperationNo: string;
    OrderId: string;
    OrderType: string;
    OvrlStsProfile: string;
    PhaseControl: string;
    PhaseControlKey: string;
    PlanningPlant: string;
    ProcessPhase: string;
    ProcessSubphase: string;
    SetAutomatically: string;
    StatusProfile: string;
    SubOperationNo: string;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    PhaseControlKey_Nav: PhaseControlKey | null | DeferredContent;
}

type WorkOrderOperationPhaseControlId = {OperationNo: string,OrderId: string,PhaseControl: string,SubOperationNo: string};

interface EditableWorkOrderOperationPhaseControl extends Pick<WorkOrderOperationPhaseControl, "AuthorizationKey" | "Description" | "EntityType" | "IsActive" | "ObjectNumber" | "OperationNo" | "OrderId" | "OrderType" | "OvrlStsProfile" | "PhaseControl" | "PhaseControlKey" | "PlanningPlant" | "ProcessPhase" | "ProcessSubphase" | "SetAutomatically" | "StatusProfile" | "SubOperationNo"> {
}

interface WorkOrderPhaseControl {
    AuthorizationKey: string;
    Description: string;
    EntityType: string;
    IsActive: string;
    ObjectNumber: string;
    OrderId: string;
    OrderType: string;
    OvrlStsProfile: string;
    PhaseControl: string;
    PhaseControlKey: string;
    PhaseControlName: string;
    PlanningPlant: string;
    ProcessPhase: string;
    ProcessSubphase: string;
    SetAutomatically: string;
    StatusProfile: string;
    Userstatus: string;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    PhaseControlKey_Nav: PhaseControlKey | null | DeferredContent;
}

type WorkOrderPhaseControlId = {OrderId: string,PhaseControl: string};

interface EditableWorkOrderPhaseControl extends Pick<WorkOrderPhaseControl, "AuthorizationKey" | "Description" | "EntityType" | "IsActive" | "ObjectNumber" | "OrderId" | "OrderType" | "OvrlStsProfile" | "PhaseControl" | "PhaseControlKey" | "PhaseControlName" | "PlanningPlant" | "ProcessPhase" | "ProcessSubphase" | "SetAutomatically" | "StatusProfile" | "Userstatus"> {
}

interface WorkOrderTransfer {
    EffectiveTimestamp: string | null;
    EmployeeFrom: string;
    EmployeeTo: string;
    HeaderNotes: string;
    IsSupervisor: string;
    OperationNo: string;
    OrderId: string;
    PlannerGroupFrom: string;
    PlannerGroupTo: string;
    SubOperationNo: string;
    TransferReason: string;
    UserFrom: string;
    UserTo: string;
    WorkCenterFrom: string;
    WorkCenterTo: string;
    WOHeader: MyWorkOrderHeader | DeferredContent;
    WOOperation: MyWorkOrderOperation | DeferredContent;
    WOSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type WorkOrderTransferId = {OrderId: string,OperationNo: string,SubOperationNo: string};

interface EditableWorkOrderTransfer extends Pick<WorkOrderTransfer, "EmployeeFrom" | "EmployeeTo" | "HeaderNotes" | "IsSupervisor" | "OperationNo" | "OrderId" | "PlannerGroupFrom" | "PlannerGroupTo" | "SubOperationNo" | "TransferReason" | "UserFrom" | "UserTo" | "WorkCenterFrom" | "WorkCenterTo">, Partial<Pick<WorkOrderTransfer, "EffectiveTimestamp">> {
}

interface WorkRequestConsequence {
    CategoryId: string;
    ConsequenceId: string;
    GroupId: string;
    LeadingConsequence: string;
    LikelihoodId: string;
    Notification: string;
    PrioritizationProfileId: string;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
}

type WorkRequestConsequenceId = {CategoryId: string,Notification: string};

interface EditableWorkRequestConsequence extends Pick<WorkRequestConsequence, "CategoryId" | "ConsequenceId" | "GroupId" | "LeadingConsequence" | "LikelihoodId" | "Notification" | "PrioritizationProfileId"> {
}

interface WarehouseActivityArea {
    WarehouseNo: string;
    ActivityArea: string;
    Description: string;
}

type WarehouseActivityAreaId = {WarehouseNo: string,ActivityArea: string};

interface EditableWarehouseActivityArea extends Pick<WarehouseActivityArea, "WarehouseNo" | "ActivityArea" | "Description"> {
}

interface WarehouseStorageBin {
    WarehouseNo: string;
    StorageBin: string;
    StorageType: string;
    StorageSection: string;
    StorBinType: string;
}

type WarehouseStorageBinId = {WarehouseNo: string,StorageBin: string};

interface EditableWarehouseStorageBin extends Pick<WarehouseStorageBin, "WarehouseNo" | "StorageBin" | "StorageType" | "StorageSection" | "StorBinType"> {
}

interface CloseSyncSessionParams {
    SAPProductTechName?: string | null;
}

interface OpenSyncSessionParams {
    SAPProductTechName?: string | null;
}

type DeferredContent = undefined;
