import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className=" navbar-brand">ExerciseTracker</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'>Exercises</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/create'>Create Exercise Log</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/user'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;