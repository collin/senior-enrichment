import React from 'react';
import { Link } from 'react-router-dom'

export const Home = () => (
    <div className='home'>
        <div className='banner text-center'>
            <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
            <h1><small>The premier institute of learning in the Galaxy!</small></h1>
        </div>
        <div className='container text-center large-font'>
            <div className='row'>
                <div className='col-l-6'>
                    <Link to={`/campuses`}>
                    <h2>Campuses</h2>
                    </Link>
                </div>
                <div className='col-l-6'>
                    <Link to={`/students`}>
                    <h2>Students</h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
