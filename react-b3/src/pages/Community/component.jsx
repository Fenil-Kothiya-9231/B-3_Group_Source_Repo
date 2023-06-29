import React from 'react';
import { reducerFn, getInitialAppState, ACTION_TYPES } from './reducer';
import { TABS, TAB_IDS } from './constants';
import './style.css';
import { MemberForm, MembersList, EducationReport, GeoGraphyReport, VolunteerReport } from './TabComponents';

const TAB_ID_WISE_COMPONENTS = {
    [TAB_IDS.ADD_MEMBER]: MemberForm,
    [TAB_IDS.EDUCATION_REPORT]: EducationReport,
    [TAB_IDS.GEO_GRAPHY_REPORT]: GeoGraphyReport,
    [TAB_IDS.VOLUNTEER_REPORT]: VolunteerReport,
    [TAB_IDS.VIEW_MEMBERS]: MembersList,
};

export const COMMUNITY = () => {
    const [myState, dispatch] = React.useReducer(reducerFn, getInitialAppState());
    const { records, tabId } = myState;

    const changeTab = (e) => {
        const tabId = e.target.dataset.tabid;
        dispatch({
            type: ACTION_TYPES.CHANGE_CURRENT_TAB,
            payload: tabId,
        });
    }
    
    const ComponentToRender = TAB_ID_WISE_COMPONENTS[tabId];
    const propsToPass = tabId === TAB_IDS.ADD_MEMBER ? { dispatch } : { records, dispatch };

    return (
        <div id="COMMUNITYContainer">
            <div className="tabItems">
                {TABS.map(({ id, text }) => {
                    return (
                        <div
                            onClick={changeTab}
                            data-tabid={id}
                            key={id}
                            className={`tabItem ${tabId === id ? 'activeItab' : ''}`}
                        >
                            {text}
                        </div>);
                })}
            </div>
            <div className="tabComponent">
                <ComponentToRender {...propsToPass} />
                {
                    /* { tabId === TAB_IDS.ADD_MEMBER ? <MemberForm dispatch={dispatch} /> : null } */
                    /* { tabId === TAB_IDS.EDUCATION_REPORT ? <EducationReport records={records} /> : null } */
                    /* { tabId === TAB_IDS.GEO_GRAPHY_REPORT ? <GeoGraphyReport records={records} /> : null } */
                    /* { tabId === TAB_IDS.VOLUNTEER_REPORT ? <VolunteerReport records={records} /> : null } */
                    /* { tabId === TAB_IDS.VIEW_MEMBERS ? <MembersList records={records} /> : null } */
                }
            </div>
        </div>
    )

}

COMMUNITY.propTypes = {};