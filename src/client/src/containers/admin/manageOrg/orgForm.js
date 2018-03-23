import React from 'react';
import OrgForm_component from './../../../components/manageOrg/orgForm';


class OrgForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            newOrgValues:props.values
        }
    }

    changeInput=(e)=>{
        let {newOrgValues} = this.state;
        newOrgValues[e.target.name] = e.target.value;
        this.setState({newOrgValues});
    };

    validate=()=>{
        if(this.state.newOrgValues.orgID.length>0 && this.state.newOrgValues.orgName.length>0){
            this.setState({showError:false});
            this.props.editOrgMode ? this.props.updateOrg(this.state.newOrgValues,this.props.updateOrgId): this.props.addOrg(this.state.newOrgValues);
            this.props.toggleForm();
        }
        else
            this.setState({showError:true});
    };

    render() {
        return(
        <OrgForm_component
            toggleForm={this.props.toggleForm}
            newOrgValues={this.state.newOrgValues}
            changeInput={this.changeInput}
            validate={this.validate}
            editOrgMode={this.props.editOrgMode}
            showError={this.state.showError}
        />
        )}
}

export default OrgForm;