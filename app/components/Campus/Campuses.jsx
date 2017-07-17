import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store from '../../store';
import {getCampuses} from '../../reducers'
import axios from 'axios';

export default class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsusbscribe = store.subscribe(() => {
      this.setState(store.getState())
    })

    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      const getCampusesAction = getCampuses(campuses)
      store.dispatch(getCampusesAction);
    })
  }

  componentWillUnmount() {
    this.unsusbscribe();
  }

  render() {
    const campuses = this.state.campuses;
    // ---> can also be expressed as const {students} = this.state

    return (
      <div>
        <Link to="/Campuses/AddCampus">
          <button className="addCampus">ADD A CAMPUS</button>
        </Link>
        <ul className="img-container">
          {campuses.map(campus => {
            let path = `/Campuses/${campus.name}`
            return (
              <Link to={`${path}`}>
                <span className="campusName">{campus.name}</span>
                <li><img className="campus-img" src={`/images/${campus.image}`} alt={`${campus.name}`}/></li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}
