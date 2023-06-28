import React from 'react';
import Pr from 'prop-types';
import { EDU_TO_TEXT, INTEREST_TO_TEXT } from '../constants';
import { Button } from '../../../components/Button/button';
import { ACTION_TYPES } from '../reducer';

export const MembersList = ({ records, dispatch }) => {

    return (
        <div id="viewMembers">
            <table>
                <thead>
                    <tr>
                        <td>Sr No</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>City</td>
                        <td>Education</td>
                        <td>Interests</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {
                    records.map( ({ id, name, phone, city, education, interests }, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{city}</td>
                                <td>{EDU_TO_TEXT[education]}</td>
                                <td>
                                    {
                                        interests.map((interestId) => <div className="interestItem" key={interestId}>{INTEREST_TO_TEXT[interestId]}</div> )
                                    }
                                </td>
                                <td>
                                    <Button variant="danger" onClick={(e) => {
                                        dispatch({
                                            type: ACTION_TYPES.DELETE_RECORD,
                                            payload: id
                                        });
                                    }}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                
            </table>
        </div>
        
    );

   
}

MembersList.propTypes = {} // add entry for records here