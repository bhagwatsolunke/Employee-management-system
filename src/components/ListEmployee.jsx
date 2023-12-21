import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployee() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleDelete = (employeeId) => {
    // Use the deleteEmployee function from EmployeeService
    EmployeeService.deleteEmployee(employeeId)
      .then(() => {
        // Refresh the employee list after deletion
        EmployeeService.getEmployees()
          .then((res) => {
            setEmployees(res.data);
          })
          .catch((error) => {
            console.error('Error fetching employees:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  


  return (
    <div>
      <h2 className='text-center'>Employee List</h2>
      <button
        className="btn btn-primary mx-1"
        onClick={() => navigate('/add-employee')}
      >
        Add Employee
      </button>
      <div className="row">
        <div className="col-md-12">
          <table className='table bg-secondary text-white table-bordered'>
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/update-employee/${employee.id}`)}
                      className='btn btn-info'
                      style={{ backgroundColor: '#007BFF' }} // Set a specific color for the button
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: '10px', backgroundColor: '#DC3545' }} // Set a specific color for the button
                      onClick={() => handleDelete(employee.id)}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEmployee;
