import React from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Navbar from './Navbar'



const mapStateToProps = function(state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = null;

function listStudents(props){
  return (
    <div>
      <Navbar />
      <ul>
        { props.students.map(student => <li key={student.id}>{student.name}</li>) }
      </ul>
      <h2>Add Student:</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="E-Mail" />
          <select name="cars">
            <option value="#">Campus 1</option>
            <option value="#">Campus 2</option>
            <option value="#">Campus 3</option>
            <option value="#">Campus 4</option>
          </select>
      </form>
    </div>
  )
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(listStudents)

export default StudentListContainer