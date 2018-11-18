import React, {Fragment} from 'react';
import Button from './Button';

const Modal = ({header, footer, bodyText, agreeAction, declineAction, triggerModalAction} ) => {
    if (triggerModalAction()){
        return (
            <div className='modal'>
                <div className="modal__header">{header}</div>
                <div className="modal__body">
                    {bodyText}
                    <Button action={agreeAction} name={'Agree'} />
                    <Button action={declineAction} name={'Decline'} />
                </div>
                <div className="modal__footer">{footer}</div>
            </div>
        )
    } else {
        return (
            <Fragment/>
        );
    }
};

export default Modal;