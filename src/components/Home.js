import React from 'react';
import "../styling/Home.css";

class Home extends React.Component {


    render() {
        
    return(
        this.props.meetings !== undefined && this.props.users !== undefined &&
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
            {
                this.props.meetings.map((meeting, index) => {
                    let startDate = meeting.start_time.slice(0, 10);
                    let startTime = meeting.start_time.slice(11, 19);
                    let theOwner = this.props.users.find(user => user.id === meeting.owner)
                return(
            <div className="div-table-row" key={index}>
                <div className="div-table-col">{meeting.callid}</div>
                <div className="div-table-col">{theOwner.first_name + " " + theOwner.last_name}</div>
                <div className="div-table-col">{meeting.name}</div>
                <div className="div-table-col">{startDate}</div>
                <div className="div-table-col">{startTime}</div>
            </div>
                )})
        }
        
    </div>
        
    </div>
    )
    }
}

export default Home 