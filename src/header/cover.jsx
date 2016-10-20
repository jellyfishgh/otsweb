import React from 'react';
import GroupProductLineTypes from 'GroupProductLineTypes';

export const Cover = React.createClass({
    render() {
        const lineViews = this.props.lines.map((line) => {
            return (
                <GroupProductLineTypes name={line.name} types={line.types} />
            );
        });
        return (
            <div>{lineViews}</div>
        );
    }
});