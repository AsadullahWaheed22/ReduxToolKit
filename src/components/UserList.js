import React, { useEffect, useState }  from "react";
import axios from "axios";

const UserList = () => {

const [state,setState] = useState(
  {
    loading : false,
    users : [],
    errorMessage : ''
  }
);

useEffect( () => {
  const fetchData = async () => {
    setState({...state, loading: true});
  let dataUrl = `https://jsonplaceholder.typicode.com/users`;
  let response = await axios.get(dataUrl);
  setState({
    ...state,
    users : response.data,
    loading : false
  });
  };
try {
  fetchData();
}
catch(error) {
  setState({
    ...state,
    errorMessage : error,
    loading : false
  });
}
},[]);

let { loading, errorMessage, users } = state;

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h2 text-primary">User List</p>
            <p>Messages is an SMS, RCS, and instant messaging application developed by Google for its Android mobile operating system. A web interface is also available. Launched in 2014, it has supported RCS messaging since 2018, marketed as "chat features".</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              loading && <h2 className="fw-bold"> ...Loading</h2>
            }
            {
              !loading && errorMessage.length > 0 && <h3 className="text-danger">{errorMessage}</h3>
            }
            {
              !loading && users.length > 0 &&
              <table className="table table-hover text-center table-striped">
                <thead className="bg-warning text-white">
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Loction</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map(user => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                          <td>{user.company.name}</td>
                          <td>{user.address.city}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            }

          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default UserList;
