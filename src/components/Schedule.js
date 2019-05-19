import React from 'react';

import "../styling/Schedule.css";

class Schedule extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                name: '',
                description: '',
                duration: '',
                guests: []
            }
        
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleGuestChange(e){

        let newGuest = parseInt(e.target.value);
    
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

    handleChange(e){
        this.setState( {[e.target.name] : e.target.value})
        console.log(this.state);
        
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
                    <input type="text" name="name" className="form-control" id="meeting-title" placeholder="Enter a Title" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" id="meeting-description" placeholder="Enter a Description" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <select name="duration" className="form=control" id="meeting-duration" onChange={this.handleChange}>
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
                    <select className="form-control" id="user-selector" onChange={this.handleGuestChange}>
                        {this.props.users.map((user, index) => {
                            let userName = user.first_name + " " + user.last_name;
                            return(
                                <option key={index} value={user.id}>{userName}</option>
                            )
                        })}
                    </select>
                </div>
                {
                    this.state.guests.map((user, index) => {
                    let guest = this.props.users.find(guest => guest.id === user);
                    let guestName = guest.first_name + " " + guest.last_name;
                    return(
                        <li key={index}>{guestName}</li>
                    )
                } )}
            </form>
        </div>
    </div>
        )
    }

}

export default Schedule