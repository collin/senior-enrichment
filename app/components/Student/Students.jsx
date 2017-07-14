import React, { Component } from 'react';
import store from '../../store';
import {Link} from 'react-router-dom';
import {getStudents} from '../../reducers'
import axios from 'axios';

export default class Students extends Component {
  constructor(props) {
      super(props);
      this.state = store.getState();
      // this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    this.unsusbscribe = store.subscribe(() => {
      this.setState(store.getState())
    })

    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      const getStudentsAction = getStudents(students)
      store.dispatch(getStudentsAction);
    })
  }

  componentWillUnmount() {
    this.unsusbscribe();
  }

  render() {
    const students = this.state.students;
    console.log(students)
    // ---> can also be expressed as const {students} = this.state
    return (
      <div>
        <Link to="/Students/AddStudent">
          <button className="addStudent">ADD A STUDENT</button>
        </Link>
        <h3>#   NAME              CAMPUS</h3>
        <ol className="student-container">
          {students.map(student => {
            let path = `/students/${student.name}`
            return (
              <li key={`${student.name}`}>
                <Link to={`${path}`}>
                  <span className="studentName">{student.name}</span>
                </Link>
                  <span className="studentCampus" >{student.campusId}</span>
                <Link to={`/students`}>  
                  <button className="deleteStudent"><span className="glyphicon glyphicon-remove" ></span> </button>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
