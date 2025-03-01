import libCom from '../../Common/Library/CommonLibrary';
import { DynamicPageGenerator } from '../../FDC/DynamicPageGenerator';

export default function MeasuringPointsDataEntryNav(context) {
    //Remove old readings from memory
    libCom.setStateVariable(context, 'TransactionType', 'CREATE');
    libCom.setStateVariable(context, 'ReadingType', 'MULTIPLE');
    libCom.removeStateVariable(context, 'TempPointDefaults'); //Reset the local defaults

    const sectionData = [{
        '_Type': 'Section.Type.FormCell',
        '_Name': 'FormCellSection',
        'Target': {
            'EntitySet': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointFDCEntitySet.js',
            'Service': '/SAPAssetManager/Services/AssetManager.service',
            'QueryOptions': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointFDCQueryOptions.js',
        },
        'Controls': [{
            'Caption': '$(L,skip)',
            'IsEditable': true,
            'Value': false,
            'OnValueChange': '/SAPAssetManager/Rules/Measurements/Points/SkipReadingEnableDisable.js',
            '_Name': 'SkipValue',
            '_Type': 'Control.Type.FormCell.Switch',
            'IsVisible': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointSkipVisible.js',
        },
        {
            'Caption': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointCaption.js',
            '_Name': 'PointSim',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointDisplayValue.js',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
        },
        {
            'Caption': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointOperationCaption.js',
            '_Name': 'OperationSimPicker',
            'IsPickerDismissedOnSelection': true,
            'AllowEmptySelection': false,
            'AllowDefaultValueIfOneItem': true,
            'PickerItems': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointOperationDisplayValue.js',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointOperationDefaultValue.js',
            'OnValueChange': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointOperationOnValueChange.js',
            'IsVisible': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointOperationVisible.js',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'Caption': '$(L,lower_limit)',
            '_Name': 'LowerRangeSim',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointLowerRangeDisplayValue.js',
            'IsVisible': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointLowerRangeVisible.js',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
        },
        {
            'Caption': '$(L,upper_limit)',
            '_Name': 'UpperRangeSim',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointUpperRangeDisplayValue.js',
            'IsVisible': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointUpperRangeVisible.js',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
        },
        {

           'Caption': '$(L,previous_reading)',
            '_Name': 'PreviousReading',
            'Value': '',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
            'IsVisible': false,
        },
        {
            'Caption': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointDescription.js',
            '_Name': 'ReadingSim',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointReading.js',
            'OnValueChange': '/SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput.js',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': '/SAPAssetManager/Rules/Measurements/MeasuringPointReadingIsEditable.js',
            'KeyboardType': '/SAPAssetManager/Rules/Common/SetDateTimeKeyboardTypeIphone.js',
            'PlaceHolder': '$(L,value)',
        },
        {
            'Caption': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointDescription.js',
            'Value': ' ',
            'IsVisible': false,
            'IsEditable': false,
            '_Name': 'ValDescriptionSim',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
        },
        {
            'Caption': '$(L,uom)',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointUOM.js',
            '_Name': 'UOMSim',
            'IsEditable': false,
            'KeyboardType': 'Default',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
        },
        {
            'IsEditbale': false,
            'IsVisible': false,
            'Caption': '$(L,previous_reading)',
            'PickerItems': {
                'DisplayValue': '/SAPAssetManager/Rules/Measurements/DisplayValueValuationCode.js',
                'ReturnValue': '{@odata.readLink}',
                'Target': {
                    'EntitySet': 'PMCatalogCodes',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': '/SAPAssetManager/Rules/Measurements/Points/PMCatalogQueryOptions.js',
                },
            },
            '_Name': 'PreviousValuationCodeLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'IsVisible': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointValcodeIsVisible.js',
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'Caption': '$(L,valuation_code)',
            'OnValueChange': '/SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput.js',
            'PickerItems': {
                'DisplayValue': '/SAPAssetManager/Rules/Measurements/DisplayValueValuationCode.js',
                'ReturnValue': '{@odata.readLink}',
                'Target': {
                    'EntitySet': 'PMCatalogCodes',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': '/SAPAssetManager/Rules/Measurements/Points/PMCatalogQueryOptions.js',
                },
            },
            '_Name': 'ValuationCodeLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'Caption': '$(L, note)',
            'PlaceHolder': '$(L,note)',
            'Value': '/SAPAssetManager/Rules/Measurements/Points/MeasuringPointShortText.js',
            'OnValueChange': '/SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput.js',
            'IsAutoResizing': true,
            '_Name': 'ShortTextNote',
            '_Type': 'Control.Type.FormCell.Note',
        },
        {
            'IsEditable': false,
            'Caption': '$(L,lin_ref_pattern)',
            'Value': '/SAPAssetManager/Rules/LAM/LAMLinearReferencePatternValue.js',
            '_Name': 'LRPLstPkr',
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
        },
        {
            'Value': '/SAPAssetManager/Rules/LAM/LAMCharacteristicValueStringToNumber.js',
            '_Name': 'StartPoint',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,start_point)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCaptureStartEndPoint.js',
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'KeyboardType': 'Number',
        },
        {
            'Value': '/SAPAssetManager/Rules/LAM/LAMCharacteristicValueStringToNumber.js',
            '_Name': 'EndPoint',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,end_point)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCaptureStartEndPoint.js',
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'KeyboardType': 'Number',
        },
        {
            '_Type': 'Control.Type.FormCell.Button',
            '_Name': 'CalculateLengthButton',
            'Title': '$(L,calculate_length)',
            'OnPress': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateCalculateLengthStartEndPoint.js',
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'ButtonType': 'Text',
        },
        {
            'Value': '/SAPAssetManager/Rules/LAM/LAMCharacteristicValueStringToNumber.js',
            '_Name': 'Length',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,length)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': true,
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCaptureLength.js',
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'KeyboardType': 'Number',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,uom)',
            'Value': '',
            'PickerItems': {
                'DisplayValue': '{{#Property:UoM}} - {{#Property:Description}}',
                'ReturnValue': '{UoM}',
                'Target': {
                    'EntitySet': 'UsageUoMs',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': "$filter=Dimension eq 'LENGTH'",
                },
            },
            '_Name': 'UOMLstPkr',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCaptureUOM.js',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,start_marker)',
            'Value': '',
            'PickerItems': {
                'DisplayValue': '{{#Property:Marker}}',
                'ReturnValue': '{Marker}',
                'Target': {
                    'EntitySet': 'LinearReferencePatternItems',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': '/SAPAssetManager/Rules/LAM/LAMMarkerQueryOptions.js',
                },
            },
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCapture.js',
            '_Name': 'StartMarkerLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            '_Name': 'DistanceFromStart',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,distance_from_start)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'KeyboardType': 'Number',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,end_marker)',
            'Value': '',
            'PickerItems': {
                'DisplayValue': '{{#Property:Marker}}',
                'ReturnValue': '{Marker}',
                'Target': {
                    'EntitySet': 'LinearReferencePatternItems',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': '',
                },
            },
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCapture.js',
            '_Name': 'EndMarkerLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            '_Name': 'DistanceFromEnd',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,distance_from_end)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': false,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'KeyboardType': 'Number',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,uom)',
            'Value': '',
            'PickerItems':
            {
                'DisplayValue': '{{#Property:UoM}} - {{#Property:Description}}',
                'ReturnValue': '{UoM}',
                'Target': {
                    'EntitySet': 'UsageUoMs',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': "$filter=Dimension eq 'LENGTH'",
                },
            },
            '_Name': 'MarkerUOMLstPkr',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMCreateUpdateValuesChangedDataCaptureUOM.js',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,offset1_type)',
            'Value': '',
            'PickerItems': {
                'DisplayValue': '{{#Property:OffsetTypeCode}} - {{#Property:Description}}',
                'ReturnValue': '{OffsetTypeCode}',
                'Target': {
                    'EntitySet': 'LAMOffsetTypes',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                },
            },
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMDataCaptureOffset1Validation.js',
            '_Name': 'Offset1TypeLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'Value': '',
            '_Name': 'Offset1',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,offset1)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMDataCaptureOffset1Validation.js',
            'KeyboardType': 'Number',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,offset1_uom)',
            'Value': '',
            'PickerItems': {
                'DisplayValue': '{{#Property:UoM}} - {{#Property:Description}}',
                'ReturnValue': '{UoM}',
                'Target': {
                    'EntitySet': 'UsageUoMs',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': "$filter=Dimension eq 'LENGTH'",
                },
            },
            '_Name': 'Offset1UOMLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,offset2_type)',
            'Value': '',
            'PickerItems':
            {
                'DisplayValue': '{{#Property:OffsetTypeCode}} - {{#Property:Description}}',
                'ReturnValue': '{OffsetTypeCode}',
                'Target': {
                    'EntitySet': 'LAMOffsetTypes',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                },
            },
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMDataCaptureOffset1Validation.js',
            '_Name': 'Offset2TypeLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        },
        {
            'Value': '',
            '_Name': 'Offset2',
            'PlaceHolder': '$(N,0.00)',
            'Caption': '$(L,offset2)',
            '_Type': 'Control.Type.FormCell.SimpleProperty',
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'OnValueChange': '/SAPAssetManager/Rules/LAM/CreateUpdate/LAMDataCaptureOffset1Validation.js',
            'KeyboardType': 'Number',
        },
        {
            'AllowMultipleSelection': false,
            'IsPickerDismissedOnSelection': true,
            'IsSearchCancelledAfterSelection': true,
            'Search': {
                'Enabled': true,
                'Delay': 500,
                'MinimumCharacterThreshold': 3,
                'Placeholder': '$(L,search)',
                'BarcodeScanner': true,
            },
            'IsEditable': true,
            'IsVisible': '/SAPAssetManager/Rules/LAM/LAMIsEnabledMeasuringPoint.js',
            'Caption': '$(L,offset2_uom)',
            'Value': '',
            'PickerItems':
            {
                'DisplayValue': '{{#Property:UoM}} - {{#Property:Description}}',
                'ReturnValue': '{UoM}',
                'Target':
                {
                    'EntitySet': 'UsageUoMs',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': "$filter=Dimension eq 'LENGTH'",
                },
            },
            '_Name': 'Offset2UOMLstPkr',
            '_Type': 'Control.Type.FormCell.ListPicker',
        }],
    }];

    const pageOverrides = {
        'Caption': '$(L,take_readings)',
        'OnLoaded': '/SAPAssetManager/Rules/Measurements/MeasuringPointsDataEntryOnLoaded.js',
        'OnUnloaded': '/SAPAssetManager/Rules/Measurements/Document/MeasurementDocumentCreateUpdateOnPageUnLoad.js',
        'OnReturning': '/SAPAssetManager/Rules/Measurements/Document/MeasurementDocumentCreateUpdateOnReturn.js',
        'OnActivityBackPressed': '/SAPAssetManager/Rules/WorkOrders/CreateUpdate/CancelCheckOnBackNavAndroid.js',
        'ActionBar': {
            '_Name': 'TakeReadings',
            'Items': [{
                'Position': 'left',
                '_Name': 'Cancel',
                'Caption': '$(L, cancel)',
                'SystemItem': 'Cancel',
                'OnPress': '/SAPAssetManager/Rules/Common/CheckForChangesBeforeCancel.js',
            },
            {
                'Position': 'right',
                '_Name': 'Filter',
                'SystemItem': '/SAPAssetManager/Rules/Filter/FilterSystemItem.js',
                'Caption': '$(L, filter)',
                'OnPress': '/SAPAssetManager/Rules/Measurements/MeasuringPointFilterNav.js',
            },
            {
                'Position': 'right',
                '_Name': 'Done',
                'SystemItem': '$(PLT,\'Done\',\'\',\'\',\'Done\')',
                'Text': '/SAPAssetManager/Rules/Common/Platform/DoneText.js',
                'OnPress': '/SAPAssetManager/Rules/Measurements/Points/MeasurementDocumentsCreateChangeSet.js',
            }],
        },
    };
    let generator = new DynamicPageGenerator(context, null, sectionData, pageOverrides, { 'ModalPageFullscreen': true }, ['PickerItems']);

    return generator.navToPage();
}
