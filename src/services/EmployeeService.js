import axios from "axios";

const BASE_URL ="http://localhost:8090/api/v1/employees"
class EmployeeService{
  
    getEmployees(){
        return axios.get(BASE_URL);
    }
    createEmployee(employee){
        return axios.post(BASE_URL,employee);
    }
    getEmployeeById(employeeId){
        const url = `http://localhost:8090/api/v1/employee/${employeeId}`;
      return axios.get(url);
    }

    updateEmployee(employee,employeeId){
        const url="http://localhost:8090/api/v1/employee"
        return axios.put(url + '/' + employeeId,employee)
    }
}  

export default new EmployeeService()