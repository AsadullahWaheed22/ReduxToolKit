import counterReducer from './features/counter.feature';
import employeeReducer from './features/employee.feature';
import userListReducer from './features/user-list.feature';

const rootReducer =  {

  counter: counterReducer,
  employee: employeeReducer,
  userList : userListReducer

}

export default rootReducer;
















