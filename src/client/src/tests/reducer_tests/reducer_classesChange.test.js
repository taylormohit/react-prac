import classesChange from '../../modules/reducer/classesChange';
import * as actions from '../../modules/actions/classes';
import {initialState} from "../../modules/reducer/eventLog";

const initial={
    sidebarShow:false
};

describe('classes change reducer',()=>{
    it('initialize properly',()=>{
        expect(classesChange({...initialState},{})).toEqual({...initialState});
    });

    it('TOGGLE_SIDEBAR',()=>{
        const action={
            type:actions.TOGGLE_SIDEBAR
        };
        const expectedState={
            ...initial,
            sidebarShow:true
        };
        expect(classesChange({...initial},action)).toEqual(expectedState);
    });

    it('OPEN_SIDEBAR',()=>{
        const action={
            type:actions.OPEN_SIDEBAR
        };
        const expectedState={
            ...initial,
            sidebarShow:true
        };
        expect(classesChange({...initial,sidebarShow:false},action)).toEqual(expectedState);
    });

    it('CLOSE_SIDEBAR',()=>{
        const action={
            type:actions.CLOSE_SIDEBAR
        };
        const expectedState={
            ...initial,
            sidebarShow:false
        };
        expect(classesChange({...initial,sidebarShow:true},action)).toEqual(expectedState);
    })
});