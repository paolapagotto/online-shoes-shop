import React, { Component } from 'react';



let TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="blue-grey-text  text-lighten-2">Code</th>
                <th></th>
                <th className="blue-grey-text  text-lighten-2">Brand</th>
                <th className="blue-grey-text  text-lighten-2">Description</th>
                <th className="blue-grey-text  text-lighten-2">Colors</th>
                <th className="blue-grey-text  text-lighten-2">Sizes</th>
                <th className="blue-grey-text  text-lighten-2">Price</th>
                <th className="blue-grey-text  text-lighten-2" colspan="2">Actions</th>
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
                <td>

                    <select id="shoescolors">
                        <option value="" selected disabled>Color</option>
                        <option value={row.colors[0]}>{row.colors[0]}</option>
                        <option value={row.colors[1]}>{row.colors[1]}</option>
                    </select>


                </td>
                <td>
                    <select id="shoessizes">
                        <option value="" selected disabled>Size</option>
                        <option value={row.sizes[0]}>{row.sizes[0]}</option>
                        <option value={row.sizes[1]}>{row.sizes[1]}</option>
                        <option value={row.sizes[2]}>{row.sizes[2]}</option>
                        <option value={row.sizes[3]}>{row.sizes[3]}</option>
                        <option value={row.sizes[4]}>{row.sizes[4]}</option>
                    </select>
                </td>
                <td>{row.price}</td>
                <td><button className="waves-effect teal lighten-3 btn-small" >Add</button></td>
                <td><button className="waves-effect teal lighten-3 btn-small" onClick={() => { props.removeShoes(index) }}>Remove</button></td>

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

        let { shoes, removeShoes } = this.props;

        return (

            <table className="centered responsive-table highlight">
                <TableHead />
                <TableBody shoes={shoes} removeShoes={removeShoes} />
            </table>
        )
    }
};

export default Table;