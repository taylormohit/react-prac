import AlertModal from './../components/modal/alertModal';
import Enzyme, { mount,shallow,ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';


Enzyme.configure({adapter: new Adapter()});

describe('alertModal component',()=>{

    const props={
        isOpen:true,
        toggle:jest.fn(),
        className:"mockclass",
        DeleteUser:jest.fn(),
        enableLoading:jest.fn(),
        deleteIndex:5
    };
    let wrapper,inst;
    beforeEach(()=>{
        wrapper=shallow(<AlertModal {...props}/>);
        inst=wrapper.instance();

    });

    it('delete button click',()=>{

        const btn = wrapper.find("#deleteBtn");
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.props.DeleteUser).toHaveBeenCalledWith(props.deleteIndex);
        expect(inst.props.enableLoading).toHaveBeenCalled();
        expect(inst.props.toggle).toHaveBeenCalled();
    });

    it('cancel buytton click',()=>{
        const btn=wrapper.find('#cancelBtn');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.props.toggle).toHaveBeenCalled();

    });

    it('close button click',()=>{
       const btn=wrapper.find('button .close');
       expect(btn.length).toBe(1);
       btn.simulate('click');
       expect(inst.props.toggle).toHaveBeenCalled();
    });

});
