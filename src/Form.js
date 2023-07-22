import React, { Component } from 'react';
class Form extends Component{
    initialState = {
        player : "",
        sport : ""
    }
    state = this.initialState
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : [value]})
    }
    submitForm = () => {
        let characters = this.state
        this.props.handleSubmit(characters)
        this.setState(this.initialState)
    }
    render(){
        return(
            <form>
                <label htmlFor='player'>Name of the Player : </label>
                <input type='text' name='player' id='player' onChange={this.handleChange} value={this.state.player}></input><br></br>
                <label htmlFor='sport'>Name of the Sport : </label>
                <input type='text' name='sport' id='sport' onChange={this.handleChange} value={this.state.sport}></input><br></br>
                <input type='button' value='Submit Data' onClick={this.submitForm}></input>
            </form>
        )
    }
}
export default Form;