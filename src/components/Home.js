import React from 'react';

import "../styling/Home.css";

const Home = () => 
    <div className="component-container">
        <h3 className="page-title">Scheduled Meetings</h3>
        <div className="div-table">
            <div className="div-table-row-header">
                <div className="div-table-col">Call Id</div>
                <div className="div-table-col">Owner</div>
                <div className="div-table-col">Name</div>
                <div className="div-table-col">Date</div>
                <div className="div-table-col">Start</div>
            </div>
            <div className="div-table-row">
                <div className="div-table-col">20202</div>
                <div className="div-table-col">Greg</div>
                <div className="div-table-col">Greg Rutherford</div>
                <div className="div-table-col">03/05/2019</div>
                <div className="div-table-col">15:30</div>
            </div>
        </div>
    </div>

export default Home 