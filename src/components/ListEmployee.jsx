import React, { Component } from 'react';

export default class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <div className="row">
          <div className="col-md-12"> {/* Use a Bootstrap grid system to make the table take up the full width */}
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
                {this.state.employee.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.LastName}</td>
                    <td>{employee.emailId}</td>
                    {/* Add action buttons here */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
