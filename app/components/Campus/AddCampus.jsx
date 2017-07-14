import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import {addCampus} from '../../reducers'
import axios from 'axios';

export default class AddCampus extends Component {
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
    // console.log('inputCampusName: ', event.target.querySelector('#inputCampusName').value)
    // console.log('inputCampusImage: ', event.target.querySelector('#inputCampusImage').value)

    const name = event.target.querySelector('#inputCampusName').value;
    const image = event.target.querySelector('#inputCampusImage').value;

    axios.post('/api/campuses/addcampus', {name, image})
    .then(res => res.data)
    .then(campus => {
      const addCampusAction = addCampus(campus)
      store.dispatch(addCampusAction);
    })
    .catch(err => {
      console.log(err)
    })

    event.target.querySelector('#inputCampusName').value = '';
    event.target.querySelector('#inputCampusImage').value = '';
  }

  componentWillUnmount() {
    this.unsusbscribe();
  }

  render() {
    // const campuses = this.state.campuses;
    // ---> can also be expressed as const {campuses} = this.state

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Campus Name</label>
          <div className="col-sm-10">
            <input className="form-control" placeholder="Campus Name" id="inputCampusName" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Image</label>
          <div className="col-sm-10">
            <input className="form-control" placeholder="Image" id="inputCampusImage" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Add Campus</button>
          </div>
        </div>
      </form>
    )
  }
}
