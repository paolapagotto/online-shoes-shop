import React, { Component } from 'react';



let TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="blue-grey-text  text-lighten-2">Code</th>
                <th></th>
                <th className="blue-grey-text  text-lighten-2">Brand</th>
                <th className="blue-grey-text  text-lighten-2">Description</th>
                <th className="blue-grey-text  text-lighten-2">Price</th>
                <th className="blue-grey-text  text-lighten-2" colspan="2"></th>
                {/* <th className="blue-grey-text  text-lighten-2"></th> */}
            </tr>
        </thead>
    );
}

let TableBody = props => {
    let rows = props.shoes.map((row, index) => {
        return (

            <tr key={index}>
                <td>{row.code}</td>
                <td> <img src={row.image} alt="shoes" width="200"></img></td>
                <td>{row.brand}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <td><button onClick={ () => {props.onIncrement(index)} } className="waves-effect teal lighten-3 btn-small">Add</button></td>
                {/* <td><button onClick={() => { props.handleDelete(index) }} className="waves-effect teal lighten-3 btn-small">Remove</button></td>
                <td><span className={props.getBadgeClasses()}>{props.formatCount()}</span></td> */}
                
                

            </tr>

        );
    });
    return (
        <tbody>
            { rows }
        </tbody>
    )
}



class Table extends Component {


    render() {

        let { shoes, onReset, onDelete, onIncrement, removeShoes } = this.props;

        return (

            <main className="container col s12 m12 l12">
                <div className="row">
                    <button onClick={ onReset } className="waves-effect teal lighten-5 red-text text-lighten-2 btn-small col s2 offset-s10">Reset Shop Cart</button>
                </div>
                <table className="centered responsive-table highlight">
                <TableHead />
                <TableBody 
                    shoes = { shoes } 
                    onIncrement={ onIncrement }
                    onDelete = { onDelete }
                    removeShoes = { removeShoes } 
                    selected = { true }
                />
                </table>
            </main>
            
        )
    }
};

export default Table;