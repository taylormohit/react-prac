import React from 'react';
import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    Modal,
    Button
} from 'reactstrap';
import _ from 'lodash';

const ToggleUserModal_component=(props)=>{
    return(
        <Modal isOpen={props.openEnableModal} toggle={props.toggleEnableUser}
               className={props.className}>
            <ModalHeader>
                <i className="fa fa-user"/> User Profile
            </ModalHeader>
            <ModalBody>
                <div className="row">
                    <div className="col-md-12">
                        <p className="mb-2">Are you sure you want
                            to {props.enableIndex && _.find(props.users, {'id': Number(props.enableIndex)}).enabled ? 'disable' : 'enable'}?</p>
                        <h3 className="m-0 description">{props.enableIndex && _.find(props.users, {'id': Number(props.enableIndex)}).firstName
                        + ' ' + _.find(props.users, {'id': Number(props.enableIndex)}).lastName}</h3>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.toggleEnableBtnHandler}
                        className={props.enableIndex && _.find(props.users, {'id': Number(props.enableIndex)}).enabled ? 'btn btn-danger' : 'btn btn-success'}>
                    {props.enableIndex && _.find(props.users, {'id': Number(props.enableIndex)}).enabled ? 'Disable' : 'Enable'}
                </Button>
                <Button onClick={props.toggleEnableUser} color="default">cancel</Button>
            </ModalFooter>
        </Modal>
    )
};
export default ToggleUserModal_component;