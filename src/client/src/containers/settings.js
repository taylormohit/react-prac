import React from 'react';
import Settings_component from './../components/settings';


 export default class Settings extends React.Component {

    render() {

        return (
            <Settings_component/>
        );
    }
}

/*const mapStateToProps = (state) => {
    return {
        sidebarShow:state.classesChange.sidebarShow
    }
};*/
/*
const mapDispatchToProps = dispatch => bindActionCreators({addOrg,updateOrg,deleteOrg,clearTempOrg}, dispatch);
*/


/*
export default withRouter(connect(mapStateToProps, null)(Settings));*/
