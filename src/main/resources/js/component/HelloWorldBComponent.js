import React, { Component } from 'react';

class HelloWorldBComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: ''
        }
    }

    componentDidMount() {
    }

    render() {
        return (<>
            <h1>Hello World B Component</h1>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={this.gotoStringComponent}>Go Back</button>
            </div>
        </>
        )
    }

    gotoStringComponent = () => {
        this.props.history.push('/hello-world-a')
    }
}

export default HelloWorldBComponent
