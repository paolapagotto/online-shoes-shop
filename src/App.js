import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import Table from './Table';
import Form from './Form';


class App extends Component {

  state = {
    shoes: [
      {
        code: 'SHS1001',
        image: '/images/img1.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '',
      },
      {
        code: 'SHS2034',
        image: '/images/img2.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '',
      },
      {
        code: 'SHS3431',
        image: '/images/img3.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '',
      },
      {
        code: 'SHS1001',
        image: '/images/img1.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '',
      },

    ]
  }


  removeShoes = index => {

    let { shoes } = this.state;

    this.setState(
      {
        shoes:  shoes.filter((shoes, newIndex) => {
          return newIndex !== index;
        }),
      }
    )
  }; 

  submitListener = newShoes => {
    this.setState({
      shoes: [...this.state.shoes, newShoes]
    });
  }

  render() {
    return(
      <Fragment>
        <Header />

        <Table shoes={ this.state.shoes } removeShoes = { this.removeShoes }/>
        <Form submitListener = { this.submitListener } />
      </Fragment>
    )
  }
}

export default App;
