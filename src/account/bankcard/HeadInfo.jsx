import React from 'react';

export const HeadInfo = React.createClass({
    getInitinalState() {
        return {
            username: this.props.username
        };
    },
    render() {
        const headStyle = {
            backgroundImage: `url(${this.props.headIcon})`
        };
        return (
            <div>
                <div style={headStyle}></div>
                <div>您好，{this.state.username}</div>
                <div>欢迎来到花生理财</div>
            </div>
        );
    }
});