import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className=" navbar-brand">ExerciseTracker</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/create'>Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/user'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;