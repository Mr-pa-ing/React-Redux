import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    const numOfCake = useSelector(state => state.cake.numOfCake);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>HooksCakeContainer - {numOfCake}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer