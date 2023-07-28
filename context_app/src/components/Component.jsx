import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {EditUser} from './EditUser';
import User from './User';
// import './style.css';
import { TABS, TAB_IDS } from './Reducer';
import { AddUser } from './AddUser';
// import UserForm from './UserForm';
// import NotFound from '../../components/NotFound';
// import {Login} from "./login"


export const Community = () => {
    return (

        <div id="CommunityContainer">
            <div className="tabItems">
                {TABS.map(({ id, text },index) => <Link key={index} to={`/${id}`}>{text}</Link>)}
            </div>
            <div className="tabComponent">
                <Routes>
                    <Route path={`/${TAB_IDS.ADD_USER}`} element={<AddUser />} />
                    <Route path={`/${TAB_IDS.EDIT_USER}`} element={<EditUser />} />
                    <Route path={`/${TAB_IDS.VIEW_USER}`} element={<User />} />
                </Routes>
            </div>
        </div> 

    )

}