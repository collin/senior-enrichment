import React from 'react';
import getStudentsThunk from '../reducers/index.jsx'

export class Students extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('in student render')
    return (
      <div>
        <ul>
          { this.props.students.map(student => <li key={student.id}>{student.name}</li>) }
        </ul>
      </div>
    )
  }
}

const mapPropsToState = ({ students }) => ({ students });

export default Students;