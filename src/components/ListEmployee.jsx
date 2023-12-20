import React, { Component, useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployee() {
  const navigate = useNavigate(); // Access navigate function for navigation

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees when the component mounts
    EmployeeService.getEmployees()
      .then((res) => {
        console.log('Response data:', res.data);
        setEmployees(res.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <div>
      <h2 className='text-center'>Employee List</h2>
      <button
        className="btn btn-primary mx-1"
        onClick={() => navigate('/add-employee')} // Use navigate for navigation
      >
        Add Employee
      </button>
      <div className="row">
        <div className="col-md-12">
          <table className='table table-striped'>
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
                  <button onClick={() => navigate(`/update-employee/${employee.id}`)} className='btn btn-info'>
               Update
               </button>    
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
