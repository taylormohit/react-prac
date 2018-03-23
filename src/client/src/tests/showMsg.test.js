import {ShowMsg} from './../components/modal/showMsg';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

describe('showMsg component',()=>{
    const props={
        isOpen:true,
        toggle:jest.fn(),
        className:"",
        msg:"mock msg",
        clearMsg:jest.fn()
    };
    const initialState={
        userManagement:{
            msg:'mock msg'
        }
    };

    const mockStore = configureStore([thunk]);

    let wrapper,inst;
    beforeEach(()=>{
        wrapper=shallow(<ShowMsg store={ mockStore(initialState)} {...props}/>);
        inst=wrapper.instance();
    });

    it('ok button click',()=>{
       const btn=wrapper.find('#closeBtn');
       expect(btn.length).toBe(1);
       btn.simulate('click');
       expect(props.clearMsg).toHaveBeenCalled();
       expect(inst.state.Open).toBe(false);
    });

});