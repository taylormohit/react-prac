import React from 'react';
import Chart from 'chart.js';
import Home_component from './../components/Home';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            LineData: {
                labels: ["January", "February", "March", "April", "May", "June", "July","august","september"],
                datasets: [{
                    label: "some data",
                    borderColor: '#68b8f2',
                    data: [1,10,5,2,20,30,45,30,50,55]
                }]
            }
        }
    }

    render() {
        return (
           <Home_component
               {...this.state}
           />
        );
    }
}

/*
const mapStateToProps = (state) => {
    return {
       sidebarShow:state.classesChange.sidebarShow
    }
};
/!*const mapDispatchToProps = dispatch => bindActionCreators({addOrg,updateOrg,deleteOrg,clearTempOrg}, dispatch);*!/


export default withRouter(connect(mapStateToProps, null)(Home));*/
