import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyCoffee } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
        <h1>Item - {props.item}</h1>
        <button onClick={props.dispatch}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
                    state.cake.numOfCake :
                    state.coffee.numOfCoffee
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchState = ownProps.cake ?
                            () => dispatch(buyCake()) :
                            () => dispatch(buyCoffee());
    return {
        dispatch: dispatchState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);