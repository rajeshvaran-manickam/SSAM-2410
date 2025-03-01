import PersonalizationPreferences from '../../UserPreferences/PersonalizationPreferences';
import MeasuringPointsDataEntryNav from './MeasuringPointsDataEntryNav';
import MeasuringPointsEDTNav from './EDT/MeasuringPointsEDTNav';

export default function MeasuringPointsDataEntryNavWrapper(context) {
    if (PersonalizationPreferences.isMeasuringPointListView(context)) {
        return MeasuringPointsDataEntryNav(context);
    }
    return MeasuringPointsEDTNav(context);
}
