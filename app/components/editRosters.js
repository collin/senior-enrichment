import React, {Component} from 'react'
import { connect } from 'react-redux';
import StudentItem from './studentItem'
import {addStudent} from '../reducers/students'

class EditRosters extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render () {
    console.log('rendering editrosters')
    return (
      <div>

        <ul>
          <li>
            <h1>students_____________________ campie</h1>
          </li>
          {/*form for adding new entries  */}
          <form onSubmit={this.onSubmit} className="list-group-item story-item">
            <ul className="list-inline">
              <li>
                <input
                  name="title"
                  type="text"
                  className="form-like large-font"
                  placeholder="Student Name"
                />
              </li>
              <li>
                <span>by</span>
              </li>
              <li>
                <select name="campus_id" defaultValue="" required>
                  <option value="" disabled>(select a campus)</option>
                  {
                    this.props.campuses.map(campus => (
                      <option key={campus.id} value={campus.id}>{campus.name}</option>
                    ))
                  }
                </select>
              </li>
            </ul>
            <button
              type="submit"
              className="btn btn-warning btn-xs pull-right">
              <span className="glyphicon glyphicon-plus" />
            </button>
          </form>
          {/*form section  */}
        {this.props.students.map((student) => <StudentItem student={student} key={student.id} />)
        }
        </ul>
      </div>
    )
  }

    onSubmit(event) {
    event.preventDefault();
    console.log('submitt etar', event.target.title.value)
    const student = {
      campus_id: event.target.campus_id.value,
      name: event.target.title.value
    };
    this.props.addStudent(student);
    event.target.campus_id.value = '';
    event.target.title.value = '';
  }
}
const mapState = ({ campuses, students }) => ({ campuses, students });

const mapDispatch = function(dispatch){
  return {
    addStudent: function(id) {
      return dispatch(addStudent(id))
    }
  }
};

export default connect(mapState, mapDispatch)(EditRosters);
