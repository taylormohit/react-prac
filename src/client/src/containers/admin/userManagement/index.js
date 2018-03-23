import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import AlertModal from '../../../components/modal/alertModal';
import Showmsg from '../../../components/modal/showMsg';
import '../../../styles/custom.css';
import './usermanagement.css';
import AddEditForm from './addEditForm';
import './../../../components/modal/modal.css';
import moment from 'moment';
import Storage from './../../../helpers/storage';
import jwt from 'jwt-decode';
import ToggleUserModal_component from './../../../components/modal/toggleUserModal';
import {bindActionCreators} from 'redux';
import {
    AddUser,
    GetUser,
    editUserred,
    DeleteUser,
    getOrg
} from './actionMethods';
import SpinnerLoader from "../../../components/spinnerLoader";
import UserManagement_component from '../../../components/userManagement';

export class UserManagement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loggedInUser: Storage.getItem('auth.user') ? jwt(Storage.getItem('auth.user').access_token) : {sub: ""},
            users: this.props.Allusers, searchVal: ``,
            params: {
                search: "",
                page: 1,
                order: true,
            },
            editUser: false,
            addUser: false,
            readOnly: false,
            showAlert: false,
            order_by: false,
            orderTarget: 'lastName',
            openDeleteModal: false,
            openEnableModal: false,
            page: 1,
            endPoint: 10,
            addUserValues: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                role: 'User1',
                repID: '',
                organization: '',
                effectiveDate: '',
                enabled: true,
                permissions: []
            }
        };
    }

    componentWillMount() {
        this.enableLoading();
        this.props.GetUser(this.state.params);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                users: nextProps.Allusers,
                totalPages: Math.ceil((nextProps.Allusers.length) / 10),
                msg: nextProps.msg,
                loading: false
            }, () => {
                if (_.differenceWith(nextProps.Allusers, this.state.addUserValues, _.isEqual).length !== 0) {
                    this.sortUsers();
                    this.searchUser(this.state.searchVal);
                }
            });
        }

    }

    enableLoading = () => {
        this.setState({
            loading: true
        })
    };

    changePage = (event) => {
        this.setState({
            params: {
                page: Number(event.target.innerText)
            },
            page: Number(event.target.innerText),
            endPoint: Number(event.target.innerText) * 10
        });
    };

    previousPage = () => {
        if (this.state.page !== 1)
            this.setState({
                page: this.state.page - 1,
                endPoint: Number(((this.state.page) - 1) * 10)
            });
    };

    nextPage = () => {
        if (this.state.page !== this.state.totalPages)
            this.setState({
                page: this.state.page + 1,
                endPoint: Number(((this.state.page) + 1) * 10)
            });
    };

    EditUser = (e) => {
        if (e.target.id === 'readOnly') {
            this.setState({editUser: true, readOnly: true, editIndex: Number(e.target.parentElement.id)});
            this.props.getOrg(Number(e.target.parentElement.id));
        } else {
            this.setState({editUser: true, readOnly: false, editIndex: Number(e.currentTarget.id)});
            this.props.getOrg(Number(e.currentTarget.id));
        }

        const currUser = _.find(this.state.users, {'id': Number(e.target.parentElement.id)});
        this.setState({addUserValues: _.cloneDeep(currUser)}, () => {
            this.toggleAddUser()
        });
    };

    searchUser = (keyword) => {
        if (this.props.Allusers) {
            keyword = keyword.toLowerCase().trim();
            let searchUser = _.filter(this.props.Allusers, (s) => {
                if (s.firstName.toLowerCase().includes(keyword) || s.lastName.toLowerCase().includes(keyword)
                    || s.role.toLowerCase().includes(keyword)
                    || s.organization.toLowerCase().includes(keyword)
                    || s.repID.toLowerCase().includes(keyword)
                )
                    return s;
            });
            this.setState({users: searchUser}, () => {
                this.setState({totalPages: Math.ceil((this.state.users.length) / 10)}, () => {
                    this.changePage({target: {innerText: "1"}});
                })
            });
        }

    };

    searchChange = (e) => {
        this.setState({
            searchVal: e.target.value,
            page: 1,
            params: {search: e.target.value}
        }, () => this.searchUser(this.state.searchVal));
    };

    addUserHandler = (e, addUserValues, tempOrg) => {
        e.persist();

        if (_.compact(Object.values(addUserValues)).length >= 6) {
            if (!this.state.users.length)
                addUserValues["id"] = 1;
            else
                addUserValues["id"] = Number(_.maxBy(this.state.users, 'id').id) + 1;
            addUserValues["effectiveDate"] = moment(addUserValues.effectiveDate).format();
            addUserValues["orgList"] = tempOrg;
            addUserValues["enabled"] = true;
            this.setState({showAlert: false, addUserValues});
            this.props.AddUser(addUserValues);
            this.enableLoading();
            this.toggleAddUser();
        } else
            this.setState({showAlert: true});
    };

    editUserHandler = (e, addUserValues, tempOrg) => {
        e.persist();
        //e.preventDefault();
        //e.stopPropagation();

        if (_.compact(Object.values(addUserValues)).length >= 7) {
            addUserValues["id"] = this.state.editIndex;
            addUserValues["effectiveDate"] = moment(String(addUserValues.effectiveDate)).format();
            addUserValues["orgList"] = tempOrg;
            this.setState({showAlert: false, addUserValues});
            this.props.editUserred(addUserValues);
            this.enableLoading();
            this.toggleAddUser();
        } else {
            this.setState({showAlert: true});
        }
    };

    activeBtnHandler = (e) => {
        const currUser = _.find(this.state.users, {'id': Number(e.currentTarget.id)});
        this.setState({openEnableModal: true, enableIndex: e.currentTarget.id, addUserValues: _.cloneDeep(currUser)})

    };

    toggleOrderby = (event) => {
        this.setState({
            order_by: !this.state.order_by,
            orderTarget: event.target.id
        }, () => {
            this.sortUsers();
        });
    };

    sortUsers = () => {
        if (this.state.users) {
            this.setState({
                users: _.orderBy(this.state.users, [this.state.orderTarget, (o) => o[this.state.orderTarget].length], [this.state.order_by ? 'asc' : 'desc', 'asc'])
            });
        }
    };

    addUserBtnHandler = () => {
        this.setState({editUser: false, addUserValues: {role: "User1"}}, () => {
            this.toggleAddUser();
        });
    };

    toggleAddUser = () => {
        this.setState({addUser: !this.state.addUser})
    };

    toggleDeleteUser = () => {
        this.setState({openDeleteModal: !this.state.openDeleteModal, deleteIndex: false});
    };

    toggleEnableUser = () => {
        this.setState({openEnableModal: !this.state.openEnableModal, enableIndex: false});
    };

    toggleEnableBtnHandler = () => {
        let {addUserValues} = this.state;
        addUserValues.enabled = !addUserValues.enabled;
        this.setState({addUserValues}, () => {
            this.props.editUserred(this.state.addUserValues);
        });
        this.toggleEnableUser();
    };

    trashBtnHandler=(e) => {
        this.toggleDeleteUser();
        this.setState({deleteIndex: e.currentTarget.id});
    };

    render() {
        const totalPages = [];
        const {editUser, addUser, addUserValues} = this.state;
        totalPages[this.state.totalPages - 1] = 0;
        totalPages.fill(0, 0, totalPages.length - 1);
        /* if(this.state.users.length > 0 ) {
             return (
                 <div>loading</div>
             );
         }*/
        return (
            addUser ?

                <AddEditForm
                    readOnly={this.state.readOnly}
                    toggle={this.toggleAddUser}
                    editUser={editUser}
                    addUserValues={addUserValues}
                    editUserHandler={this.editUserHandler}
                    addUserHandler={this.addUserHandler}
                    showAlert={this.state.showAlert}/>

                :
                this.state.loading ?
                    <SpinnerLoader/>

                    : <div>
                        <UserManagement_component
                            {...this.state}
                            {...this.props}
                            searchChange={this.searchChange}
                            addUserBtnHandler={this.addUserBtnHandler}
                            toggleOrderby={this.toggleOrderby}
                            EditUser={this.EditUser}
                            trashBtnHandler={this.trashBtnHandler}
                            totalPages={totalPages}
                            previousPage={this.previousPage}
                            changePage={this.changePage}
                            nextPage={this.nextPage}
                            activeBtnHandler={this.activeBtnHandler}
                        />
                        {<AlertModal
                            isOpen={this.state.openDeleteModal}
                            enableLoading={this.enableLoading}
                            toggle={this.toggleDeleteUser}
                            deleteIndex={this.state.deleteIndex}
                            deleteUser={this.state.deleteIndex && _.find(this.state.users, {'id': Number(this.state.deleteIndex)}).firstName
                            + ' ' + _.find(this.state.users, {'id': Number(this.state.deleteIndex)}).lastName
                            }
                            DeleteUser={this.props.DeleteUser}
                        />}
                        <Showmsg/>
                    <ToggleUserModal_component
                        {...this.state}
                        toggleEnableUser={this.toggleEnableUser}
                        className={this.props.className}
                        toggleEnableBtnHandler={this.toggleEnableBtnHandler}
                    />
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Allusers: state.userManagement && state.userManagement.users,
        msg: state.userManagement && state.userManagement.msg,
        sidebarShow: state.classesChange && state.classesChange.sidebarShow
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    AddUser,
    GetUser,
    editUserred,
    DeleteUser,
    getOrg
}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserManagement));

