import React  from "react";

import { useState } from "react";


const Counter = () => {

  const [state, setState] = useState({count: 0});

  const incCount = () => {
      setState({count: state.count + 1});
  };

  const decCount = () => {
    setState({count: state.count - 1});
  };

  const incCountBy = () => {
    setState({count: state.count + 5});
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h2 display-2"> {state.count}</p>
                <button onClick={incCount} className="btn btn-success m-1">Increment</button>
                <button onClick={decCount} className="btn btn-warning m-1">Decrement</button>
                <button onClick={incCountBy}className="btn btn-danger m-1">Increment by 5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default Counter;
