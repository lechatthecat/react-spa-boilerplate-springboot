import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuComponent from '@js/component/MenuComponent'
import HelloWorldBComponent from '@js/component/HelloWorldBComponent';
import HelloWorldAComponent from '@js/component/HelloWorldAComponent';

class HelloWorldApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <div className="container">
                            <Switch>
                                <Route path="/" exact component={HelloWorldAComponent} />
                                <Route path="/hello-world-a" component={HelloWorldAComponent} />
                                <Route path="/hello-world-b" component={HelloWorldBComponent} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </>
        )
    }
}

export default HelloWorldApp;
