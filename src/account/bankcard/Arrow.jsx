import React from 'react';

export const Arrow = React.createClass({
    getInitialState() {
        return {
            current: 1,
            all: 1
        };
    },
    render() {
        return (
            <div>
                <img src=''/>
                <span>{this.props.current}/{this.props.all}</span>
                <img src=''/>
            </div>
        );
    }
});