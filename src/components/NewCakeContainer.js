import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';


const NewCakeContainer = (props) => {
    const [number, setNumber]  = useState(1);

  return (
    <div>
        <h1>NewCakeContainer - {props.numOfcake}</h1>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        numOfcake: state.cake.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);