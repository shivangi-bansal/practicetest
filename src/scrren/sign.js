import React, { Component } from 'react';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData : {
            firstName: "Dog",
            lastName: "",
            gender: "",
            vehicle: ""
        },
         showResult: false
    }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e)
    {
        let formData = Object.assign({}, this.state.formData);
           formData[e.target.name] = e.target.value;
           this.setState({formData});
    }
    handleSubmit(e) {
       this.setState({showResult:true});
       e.preventDefault();
    }
    render() {
        if(this.state.showResult)
        return (
           
                <div>
               <span> FirstName: {this.state.formData.firstName}</span><br/>
                <span>LAstName: {this.state.formData.lastName}</span><br />
                <span>Gender: {this.state.formData.gender}</span><br />
                <span>vehicle: {this.state.formData.vehicle}</span><br />

                </div>
         );
                return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <table border="2">
                <tr>
                    <td>First Name</td>
                    <td><input name="firstName" value={this.state.firstName} onChange={this.handleClick}/></td>
                
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input name="lastName" value={this.state.lastName} onChange={this.handleClick}/></td>
                    
                
                </tr>
                <tr>
                    <td>Gender</td>
                    <td><input type="radio" name="gender" value="Male" onChange={this.handleClick}/>Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleClick}/>Female
                    </td>
                
                </tr>
                <tr>
                    <td>Vehicle</td>
                    <td><input type="checkbox" name="vehicle" value="car" onChange={this.handleClick}/>Car
                    <input type="checkbox" name="vehicle" value="bike" onChange={this.handleClick}/>Bike
                    </td>
                
                </tr>
                <tr>
                    <td></td>
                    <td colspan="2"><input type="submit" value="submit"/></td>
                </tr>
                
                </table>
            </form>
            </div>
        )
    }
}
export default Sign;