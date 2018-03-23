import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import {addOrg,updateOrg,deleteOrg,clearTempOrg} from './actionMethods';
import OrgForm from './orgForm';
import ShowMsg from "../../../components/modal/showMsg";
import ManageOrg_component from './../../../components/manageOrg';


export class ManageOrg extends React.Component{
   constructor(props){
       super(props);
       this.state={
           updateOrgId:false,
           editOrgMode:false,
           formOpen:false,
           org:{
               orgID:'',
               orgName:''
           },
           orgList:props.tempOrg
       }
}
componentWillReceiveProps(nextProps){
    this.setState({orgList:nextProps.tempOrg,msg:nextProps.msg});
}

toggleEditOrgMode=()=>{
    this.setState({editOrgMode:true});
};

EditOrgMode=(e,x)=>{
    this.toggleEditOrgMode();
    this.setState({org:{orgID:x.orgID,orgName:x.orgName},updateOrgId:e.target.id},()=>{
        this.toggleForm()
    });
};

toggleForm=()=>{
    this.setState({
        formOpen:!this.state.formOpen
    });
};
   cancelButtonHandler=()=>{
       this.props.openManageOrg();
       this.props.clearTempOrg();
   };

   addOrgBtnHandler=()=>{
       this.setState({org:{orgID:'',orgName:''},editOrgMode:false},()=>{
           this.toggleForm();
       })};

    render(){
        return(
            this.state.formOpen ? <OrgForm values={this.state.org} toggleForm={this.toggleForm}
                                           addOrg={this.props.addOrg}
                                           updateOrg={this.props.updateOrg}
                                           updateOrgId={this.state.updateOrgId}
                                           editOrgMode={this.state.editOrgMode}/> : <div>
                <ManageOrg_component
                    openManageOrg={this.props.openManageOrg}
                    orgList={this.state.orgList}
                    EditOrgMode={this.EditOrgMode}
                    deleteOrg={this.props.deleteOrg}
                    readOnly={this.state.readOnly}
                    addOrgBtnHandler={this.addOrgBtnHandler}
                />{this.state.msg && <ShowMsg/>}</div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        msg: state.userManagement.msg,
        tempOrg:state.userManagement.tempOrg
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({addOrg,updateOrg,deleteOrg,clearTempOrg}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageOrg));
