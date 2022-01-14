import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <h1>increment decrement counter</h1>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())}>
            <span>-</span></a>
            <input name="quantity" type="text" class="quantity__input" value={myState} />
            <a className="quantity__plus" title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
