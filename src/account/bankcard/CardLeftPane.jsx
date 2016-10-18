import React from 'react';
import HeadInfo from './HeadInfo';

const CardInfo = React.createClass({
    getInitialState() {
        return {
            depositCardNum: this.props.depositCardNum,
            creditCardNum: this.props.creditCardNum
        };
    },
    render() {
        return (
            <div>
                <div>储蓄卡(this.state.depositCardNum)</div>
                <div>信用卡(this.state.creditCardNum)</div>
            </div>
        );
    }
});

export const CardLeftPane = React.createClass({
    render() {
        return (
            <div>
                <HeadInfo headIcon = {this.props.headIcon} username = {this.props.username}/>
                <CardInfo depositCardNum = {this.props.depositCardNum} creditCardNum = {this.props.creditCardNum}/>
            </div>
        );
    }
});