import { EmployeeService } from "../../services/EmployeeService";

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  employees: EmployeeService.getAllEmployees()
};

let employeeSlice = createSlice(
  {
    name: 'Employee',
    initialState : initialState,
    reducers: {
      updateSelected : function (state, actions) {
        state.employees = state.employees.map(employee =>{
          if(actions.payload === employee.id)
          {
            return{
              ...employee,
              isSelected : !employee.isSelected
            }
          }
          else return employee;
        });
      }
    }
  }
);

export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;
