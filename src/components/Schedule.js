import React from 'react';

import "../styling/Schedule.css";

class Schedule extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                title: '',
                description: '',
                duration: '',
                guests: []
            }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){

        let newGuest = e.target.value;
    
        this.setState(state => {
            const guests = state.guests.concat(newGuest);
                return {
                    guests
                }
        })
    }

    handleClick(){
        console.log("Clicked!");
    }
        
    

    render() {
        return(

    this.props.users !== undefined &&
    <div className="component-container">
        <h3 className="page-title">Schedule a Meeting</h3>
        <div id="meeting-form">
            <form className="single-form">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="meeting-title" placeholder="Enter a Title" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" id="meeting-description" placeholder="Enter a Description" />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <select className="form=control" id="meeting-duration">
                        <option>1h</option>
                        <option>2h</option>
                        <option>3h</option>
                    </select>
                </div>
                <div id="submit-btn" onClick={this.handleClick}>Schedule Meeting</div>
            </form>
            <form className="single-form">
                <div className="form-group">
                    <label>Add Guests</label>
                    <select className="form-control" id="user-selector" onChange={this.handleChange}>
                        {this.props.users.map((user, index) => {
                            let userName = user.first_name + " " + user.last_name;
                            return(
                                <option key={index} value={userName}>{userName}</option>
                            )
                        })}
                    </select>
                </div>
                {
                    this.state.guests.map((user, index) => {
                    return(
                        <li key={index}>{user}</li>
                    )
                } )}
            </form>
        </div>
    </div>
        )
    }

}

export default Schedule