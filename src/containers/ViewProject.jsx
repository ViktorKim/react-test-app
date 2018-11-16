import React from 'react';

import Button from '../components/Button';

const ViewProject = () => {
    return (
        <div className='view-project'>
            <div className="view-project__actions">
                <Button name={'Back'} action={() => console.log('back')}/>
                <Button name={'Edit'} action={() => console.log('edit')}/>
                <Button name={'Delete'} action={() => console.log('delete')}/>
            </div>
            <div className="view-project__body">
                <ul className='project__info'>
                    <li>Project: Project xx</li>
                    <li>Managed by: User 3</li>
                    <li>Scope:</li>
                </ul>
                <div className='project__scope'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit nullam
                    maecenas porta sociis suspendisse eu enim, bibendum ridiculus
                </div>
            </div>
            <div className="view-project__actions">
                <Button name={'Back'} action={() => console.log('back')}/>
                <Button name={'Edit'} action={() => console.log('edit')}/>
                <Button name={'Delete'} action={() => console.log('delete')}/>
            </div>
        </div>
    )
};

export default ViewProject;