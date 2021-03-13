import React, { Component } from 'react';

class HelloWorldAComponent extends Component {
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
            <h1>Hello World A Component</h1>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={this.gotoBeanComponent}>Go</button>
            </div>
        </>
        )
    }

    gotoBeanComponent = () => {
        this.props.history.push('/hello-world-b')
    }
}

export default HelloWorldAComponent
