import NavbarPublic from './../containers/navbarPublic';
import Enzyme, {shallow, mount, render} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()});

describe('navbar public should render correctly',()=>{
    it('should render correctly',()=>{
        const html=shallow(<MemoryRouter><NavbarPublic/></MemoryRouter>).html();
        const expectedHtml='<nav class="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">' +
            '<a class="navbar-brand hd-logo col-lg-2 m-0" href="/">' +
            '<img src="logo.png" alt="" width="150"/>' +
            '</a>' +
            '</nav>';
       expect(html).toEqual(expectedHtml);
    });
});