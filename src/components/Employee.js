import React  from "react";
import { useState } from "react";
import { EmployeeService } from "../services/EmployeeService";

const Employee = () => {

  const [state, setState] = useState(
    {
      employees: EmployeeService.getAllEmployees()
    }
  );

  let updateSelected = (empId) => {
    let selectedEmployees = employees.map(employee =>{
      if(empId === employee.id)
      {
        return{
          ...employee,
          isSelected : !employee.isSelected
        }
      }
      else return employee;
    });

    setState({
      ...state,
      employees: selectedEmployees
    }
    );

  };

  const {employees} = state;

  return (

    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">Employee</p>
            <p>Messages is an SMS, RCS, and instant messaging application developed by Google for its Android mobile operating system. A web interface is also available. Launched in 2014, it has supported RCS messaging since 2018, marketed as "chat features".</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <ul className="list-group">
                {
                  employees.length > 0  &&
                  employees.map (employee => {
                      return (
                        <li key={employee.id} className='list-group-item'>
                          <input onChange={() => updateSelected(employee.id)} type="checkbox" className="form-check-input me-2"/>
                            {employee.name}
                        </li>
                      )
                  })
                }
              </ul>
          </div>
          <div className="col-md-6">

            {
                employees.length > 0 &&
                employees.map (employee => {
                  return (
                      <div key={employee.id}>
                        {
                          employee.isSelected &&
                          <div className="card my-2">
                            <div className="card-body">
                                <ul className="list-group">
                                  <li className="list-group-item">
                                    Name : <span className="fw-bold">{employee.name}</span>
                                  </li>
                                  <li className="list-group-item">
                                    Email : <span className="fw-bold">{employee.email}</span>
                                  </li>
                                </ul>
                            </div>
                          </div>
                        }
                      </div>
                  );
                })
              }


          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default Employee;
