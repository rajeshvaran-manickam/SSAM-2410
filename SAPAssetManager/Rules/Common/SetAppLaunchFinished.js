import ApplicationSettings from './Library/ApplicationSettings';
import AnalyticsManager from '../AnalyticsManager/AnalyticsManagerLibrary';
import Logger from '../../Rules/Log/Logger';
import libPersona from '../Persona/PersonaLibrary';

export default function SetAppLaunchFinished(context) {
    // eslint-disable-next-line no-unused-vars
    if (!AnalyticsManager.setAnalyticParameters(context, async (_, isSuccess, errorMessage) => {
        if (isSuccess) {
            triggerLaunchEvents(context);
        } else {
            Logger.error('AnalyticsManager', `init error: ${errorMessage}`);
        }
    })) { // AnalyticsManager has been already initialized
        triggerLaunchEvents(context);
    }

    return ApplicationSettings.setBoolean(context, 'onAppLaunch', false);
}

function triggerLaunchEvents(context) {
    AnalyticsManager.systemLaunch(context);
    AnalyticsManager.appLaunch();

    let personaObject = {
        MT: AnalyticsManager.maintenanceTechnicaionAppLaunch,
        MTSTD: AnalyticsManager.maintenanceTechnicaionSTDAppLaunch,
        FSTPR: AnalyticsManager.fieldServiceTechnicaionProAppLaunch,
        FST: AnalyticsManager.fieldServiceTechnicaionAppLaunch,
        IC: AnalyticsManager.inventoryManagerAppLaunch,
        ST: AnalyticsManager.safetyTechnicaionAppLaunch,
    };

    let personaCode = libPersona.getActivePersonaCode(context);

    for (const persona in personaObject) {
        if (persona === personaCode) {
            personaObject[persona]();
        }
    }
}
