import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../redux/students'



class StudentForm extends Component {
  constructor(){
    super()
    this.state = {
      campusid: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    this.setState( {
      campusid: event.target.value
    })
  }

  onSubmit (event) {
    console.log('tast')
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    const campusid = this.state.campusid
    this.props.onCampusCreate(name, email, campusid)
  }

  render () {
  return (
    <div>
      <div className="create-container">
        <div className="col-2 col-form-label">
          <label>StudentName</label>
          <form onSubmit={this.onSubmit}>
            <div className="col-10">
              <input
                name="name"
                type="name"
                className='form-control'
                required />
              <div className="col-2 col-form-label">
                <label>StudentEmail</label>
                <div className="col-10">
                  <input
                    name="email"
                    type="email"
                    className='form-control'
                    required />
                </div>
                <div className="col-2 col-form-label">
                  <label>StudentCampus</label>
                    <li>
                      <select name="campus_id" defaultValue="" required onChange={this.onChange}>
                      <option value='' >(select a campus)</option>
                       {
                        this.props.campuses.map(campus => (
                          <option key={campus.id} value={campus.id}>{campus.name}</option>
                        ))
                        }
                      </select>
                    </li>

                  <button type="submit" className="btn btn-block btn-primary">submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history,
    campuses: state.campuses,
   });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
        onCampusCreate: function (name, email, campusid) {
          console.log(name, email, campusid)
            dispatch(addStudent({name, email}, campusid, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
