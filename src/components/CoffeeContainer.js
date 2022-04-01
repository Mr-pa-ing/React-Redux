import React from 'react'
import { connect } from 'react-redux';
import { buyCoffee } from '../redux';

const CoffeeContainer = (props) => {
  return (
    <div>
        <h1>CoffeeContainer - {props.coffee}</h1>
        <button onClick={props.buyCoffee}>Buy Coffee</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        coffee: state.coffee.numOfCoffee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);