import React, { Component } from 'react'


class Form extends Component {

    constructor(props){
        super(props);

        this.stateInitial = {
            code: '',
            image: '',
            brand: '',
            description: '',
            colors: [],
            sizes: [],
            price: '',
        }
        this.state = this.stateInitial;
    }


    inputListener = event => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.submitListener(this.state);
        this.setState(this.stateInitial);
    }

    render(){

        let { code, image, brand, description, colors, sizes, price } = this.state;

        return(
            <form>

            <div className="row">   
            <div className="input-field col s1">
            <label htmlFor="code">Code</label>
            <input
                id="code"
                type="text"
                name="code"
                value={code}
                onChange = { this.inputListener }
                />
            </div>
        
            <div className="input-field col s2">
            <label htmlFor="image">Image</label>
            <input
                id="image"
                type="text"
                name="image"
                value={image}
                onChange = { this.inputListener }
                />
            </div>
        
        
            <div className="input-field col s2">
            <label htmlFor="brand">Brand</label>
            <input
                id="brand"
                type="text"
                name="brand"
                value={brand}
                onChange = { this.inputListener }
                />
            </div>

            <div className="input-field col s2">
            <label htmlFor="description">Description</label>
            <input
                id="description"
                type="text"
                name="description"
                value={description}
                onChange = { this.inputListener }
                />
            </div>

            <div className="input-field col s2">    
            <label htmlFor="colors">Colors</label>
            <input
                id="colors"
                type="text"
                name="colors"
                value={colors}
                onChange = { this.inputListener }
                />
            </div>

            <div className="input-field col s1">    
            <label htmlFor="sizes">Sizes</label>
            <input
                id="sizes"
                type="text"
                name="sizes"
                value={sizes}
                onChange = { this.inputListener }
                />
            </div>

            <div className="input-field col s1">    
            <label htmlFor="price">Price</label>
            <input
                id="price"
                type="text"
                name="price"
                value={price}
                onChange = { this.inputListener }
                />
            </div>
            
            <div className="input-field col s1">
            <button className="waves-effect teal lighten-3 btn" onClick = {this.submitForm} type="button">Save
            </button>
            </div>
            </div>
        </form> 
        )
    }

}

export default Form;