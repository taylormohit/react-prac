import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {getEvent} from "./actionMethods";
import EventLog_component from '../../components/eventLog/eventLog';

export class EventLog extends React.Component {
    constructor() {
        super();
        this.state = {
            searchVal: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allEvents:nextProps.events
        });
    }

    componentWillMount() {
        this.props.getEvent();
    }

    ackHandler=(e)=>{

    };

    searchUser = (keyword) => {
        if (this.props.events) {
            keyword = keyword.toLowerCase().trim();
            let searchEvent = _.filter(this.props.events, (s) => {
                if (s.event.toLowerCase().includes(keyword) || s.eventLocation.toLowerCase().includes(keyword)
                )
                    return s;
            });
            this.setState({allEvents: searchEvent});
        }

    };

    searchChange = (e) => {
        this.setState({
            searchVal: e.target.value
        }, () => this.searchUser(this.state.searchVal));
    };

    render() {
        return (
           <EventLog_component
               {...this.state}
               searchChange={this.searchChange}
               ackHandler={this.ackHandler}
           />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.eventLog.events
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({getEvent}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventLog));