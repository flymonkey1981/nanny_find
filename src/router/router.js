import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';

const routerApp = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
);

export default routerApp;