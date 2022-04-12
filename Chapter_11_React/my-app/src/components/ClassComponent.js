// Viet component dang class
import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        console.log('ClassComponent-PropsData:', this.props);
        const customeName = this.props.name;
        const customeAge = this.props.age;
        return (
            <div>
                <h1>Welcome ! This is class component</h1>
                <h2>Name: {customeName}</h2>
                <h2>Age: {customeAge}</h2>
            </div>
        )
    }
}

export default ClassComponent;