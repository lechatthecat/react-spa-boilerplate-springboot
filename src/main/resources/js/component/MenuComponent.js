import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MenuComponent extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/hello-world-a">Hello World A</Link></li>
                        <li><Link className="nav-link" to="/hello-world-b">Hello World B</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }

}

export default MenuComponent
