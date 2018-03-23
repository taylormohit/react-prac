import React from 'react';
import {ModalFooter, ModalBody, Modal, Button} from 'reactstrap';
import './modal.css'

export default class AlertModal extends React.Component {

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
                <div className="inside-div">
                <div className="modal-header bg-light">
                    <h4 className="modal-title" id="exampleModalLabel">
                        <i className="fa fa-trash mr-2"/>&nbsp;Delete User
                    </h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={this.props.toggle}>
                        <span aria-hidden="true">�</span>
                    </button>
                </div>

                <ModalBody>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="mb-2">Are you want to sure to delete?</p>
                            <h3 className="m-0">{this.props.deleteUser}</h3>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button id="deleteBtn" onClick={() => {
                        this.props.DeleteUser(this.props.deleteIndex);
                        this.props.enableLoading();
                        this.props.toggle();
                    }} className="btn btn-danger">Delete</Button>
                    <Button id="cancelBtn" onClick={this.props.toggle} className="btn btn-light">cancel</Button>
                </ModalFooter>
                </div>
            </Modal>
        )
    }
}
