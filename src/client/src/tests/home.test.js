import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './../containers/home';
import React from 'react';
Enzyme.configure({ adapter: new Adapter() });

describe('home',()=>{
    it('should render correctly',()=>{
        const html=shallow(<Home/>).html();
        const expectedHTML='<div class="col-lg-12 ml-auto p-5 hide"><div class="row top-title-block align-items-center mb-4"><div class="col-md-6 col-xl-8 top-title"><h1>Dashboard</h1></div><div class="col-md-6 col-xl-4"><div class="form-group"><label>Date Range</label><div id="reportrange" class="pull-right form-control"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i> <span></span> <b class="caret"></b></div></div></div></div><div class="row"><div class="col-lg-6 ml-auto "><h2>Line chart</h2><canvas height="150" width="300"></canvas></div><div class="col-lg-6 ml-auto "><h2>Bar chart</h2><canvas height="150" width="300"></canvas></div></div></div>';
        expect(html).toEqual(expectedHTML);
    });
});
