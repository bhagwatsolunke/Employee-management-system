import React, { useState, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


export default function UpdateEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
       id: id,
      firstName: '',
      lastName: '',
      emailId: ''
    });
  
    const changeFirstNameHandler = (event) => {
      setEmployee({ ...employee, firstName: event.target.value });
    };
  
    const changeLastNameHandler = (event) => {
      setEmployee({ ...employee, lastName: event.target.value });
    };
  
    const changeEmailHandler = (event) => {
      setEmployee({ ...employee, emailId: event.target.value });
    };
  
    const updateEmployee = (e) => {
      e.preventDefault();
      console.log('employee => ', JSON.stringify(employee));
      EmployeeService.updateEmployee(employee,id).then(res=>{
        navigate('/employee');
      })
    };
  
    useEffect(() => {       
        console.log(id);
        EmployeeService.getEmployeeById(id)
          .then((res) => {
            console.log('Response data:', res.data);
            setEmployee(res.data);
          })
          .catch((error) => {
            console.error('Error fetching employee by id:', error);
          });
      }, []); 


    const cancel = () => {
      navigate('/employee')  };
  
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>update Employee</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name:</label>
                    <input
                      placeholder='First Name'
                      name='firstName'
                      className='form-control'
                      value={employee.firstName}
                      onChange={changeFirstNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name:</label>
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={employee.lastName}
                      onChange={changeLastNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email Id:</label>
                    <input
                      placeholder='Email Address'
                      name='email'
                      className='form-control'
                      value={employee.emailId}
                      onChange={changeEmailHandler}
                    />
                  </div>
                  <button className='btn btn-success' onClick={updateEmployee}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

