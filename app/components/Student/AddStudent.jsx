import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import {addStudent} from '../../reducers'
import axios from 'axios';

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsusbscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    //  console.log('inputName: ', event.target.querySelector('#inputName').value)
    //  console.log('inputEmail: ', event.target.querySelector('#inputEmail').value)
    //  console.log('inputCampus: ', event.target.querySelector('#inputCampus').value)
     const name = event.target.querySelector('#inputName').value;
     const email =  event.target.querySelector('#inputEmail').value;
     const assignedCampus = event.target.querySelector('#inputCampus').value;

    axios.post('/api/students/addstudent', {name, email, assignedCampus})
    .then(res => res.data)
    .then(student => {
      const addStudentAction = addStudent(student)
      store.dispatch(addStudentAction);
    })
    .catch(err => {
      console.log(err)
    })

    event.target.querySelector('#inputName').value = '';
    event.target.querySelector('#inputEmail').value = '';
    event.target.querySelector('#inputCampus').value = '';
  }

  componentWillUnmount() {
    this.unsusbscribe();
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Student Name</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputName" placeholder="Student Name" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Assigned Campus</label>
          <select name="" id="inputCampus">
            <option value="Titan">Titan</option>
            <option value="Luna">Luna</option>
            <option value="Mars">Mars</option>
            <option value="Terra">Terra</option>
            <option value="Venus">Venus</option>
          </select>
        </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Add Student</button>
            </div>
          </div>
      </form>
    )
  }
}
