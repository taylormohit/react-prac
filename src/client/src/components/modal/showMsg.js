import React from 'react';
import './modal.css';
import { ModalFooter, ModalBody, Modal,  Button} from 'reactstrap';
import {clearMsg} from './actionMethods';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

 export class ShowMsg extends React.Component {
    constructor() {
        super();
        this.state = {
            Open: true
        }
    }

    closeIt = () => {
        this.setState({
            Open:false
        });
        this.props.clearMsg();
    };

    render() {
        return (
            this.props.msg && <Modal className="description" isOpen={this.state.Open} toggle={this.closeit}>
                <div className="modaldiv">
                <ModalBody className="description"><h3 className="description">{this.props.msg}</h3></ModalBody>
                <ModalFooter><Button className="closeBtn" id="closeBtn" onClick={this.closeIt}>
                    ok
                </Button></ModalFooter>
                </div>
            </Modal>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        msg: state.userManagement.msg,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({clearMsg}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowMsg));
