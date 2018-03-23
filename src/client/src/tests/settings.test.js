import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Settings from './../containers/settings';
import React from 'react';
Enzyme.configure({ adapter: new Adapter() });

describe('settings component:',()=>{
    it('should render correctly',()=>{
        const html=shallow(<Settings/>).html();
        const expectedHTML='<div class=\"col-lg-10 ml-auto p-5\">' +
            '<div class=\"row top-title-block align-items-center mb-4\">' +
            '<div class=\"col-md-6 col-xl-6 top-title\">' +
            '<h1>Settings</h1>' +
            '</div>' +
            '</div>' +
            '</div>';
        expect(html).toEqual(expectedHTML);
    })
});