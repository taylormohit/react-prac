import React from 'react';
import Chart from 'chart.js';
import {Line,Bar} from 'react-chartjs-2';
const Home_component = (props)=>{
    return(
        <div className={"col-lg-12 ml-auto p-5 hide"}>
            <div className="row top-title-block align-items-center mb-4">
                <div className="col-md-6 col-xl-8 top-title">
                    <h1>Dashboard</h1>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="form-group">
                        <label>Date Range</label>
                        <div id="reportrange" className="pull-right form-control">
                            <i className="glyphicon glyphicon-calendar fa fa-calendar"/>&nbsp;
                            <span/> <b className="caret"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 ml-auto ">
                    <h2>Line chart</h2>
                    <Line data={props.LineData}

                    />
                </div>
                <div className="col-lg-6 ml-auto ">
                    <h2>Bar chart</h2>
                    <Bar data={props.LineData}
                    />
                </div>
            </div>
        </div>
    )
};
export default Home_component;