import React from 'react';
import tachyons from 'tachyons'; // Is like bootstrap.

class Hello extends React.Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World!</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;