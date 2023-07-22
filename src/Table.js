import { Component } from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name of the Player</th>
                <th>Name of the Sport</th>
                <th>Action to Perform</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const {deleteRow,players} = props
    const rows = players.map((p,ind)=>{
        return(
            <tr key={ind}>
                <td>{p.player}</td>
                <td>{p.sport}</td>
                <td><button onClick={()=> deleteRow(ind)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}
class Table extends Component{
    render(){
        const {deleteRow, players} = this.props
        return(
            <table>
                <TableHeader/>
                <TableBody deleteRow={deleteRow} players = {players}/>  
            
            </table>
        )
    }
}

export default Table;