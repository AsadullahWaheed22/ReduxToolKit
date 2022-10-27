import React  from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,incrementCountBy } from "../redux/features/counter.feature";

const ConterRedux = () => {

  let counterState = useSelector((state) => {
    return state['counter'];
  });

  let {count} = counterState;

  let dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h2 display-2"> {count}</p>
                <button onClick={() => {dispatch(increment())}} className="btn btn-success m-1">Increment</button>
                <button onClick={() => {dispatch(decrement())}} className="btn btn-warning m-1">Decrement</button>
                <button onClick={() => {dispatch(incrementCountBy(5))}} className="btn btn-danger m-1">Increment by 5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default ConterRedux;
