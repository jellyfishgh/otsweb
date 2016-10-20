import React from 'react';
import Cover from 'Cover';

export const Navigator = React.createClass({
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.name}</a>
            </li>
        );
    }
});