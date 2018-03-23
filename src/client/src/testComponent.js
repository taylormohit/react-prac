import React from 'react';

export default class TestComponent extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div id="main">
                <input type="text"/>
                <button>button1</button>
            </div>

                )
    }
}