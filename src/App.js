import { Component } from 'react';
import Table from './Table';
import Form from './Form';
export default class App extends Component {
    state = {
        players : [] //Empty Array
    }
    deleteRow = (ind) => {
        const {players} = this.state
        let filtered = players.filter((p,i)=>{
            return i !== ind
        })
        this.setState({players : filtered})
    }
    handleSubmit = (player) => {
        this.setState({players : [...this.state.players, player]})
    }
    render() {
        const {players} = this.state
        return (
            <div>
                <h1>Form</h1>
                <Form handleSubmit={this.handleSubmit}/>
                <h1>Table</h1>
                <Table deleteRow={this.deleteRow} players = {players}/>
            </div>
        );
    }
}


