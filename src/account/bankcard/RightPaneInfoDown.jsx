import React from 'react';
import Arrow from './Arrow';

export const RightPaneInfoDown = React.createClass({
    render() {
        return (
            <div>
                <Arrow current={this.props.current} all={this.props.all} />
            </div>
        );
    }
});