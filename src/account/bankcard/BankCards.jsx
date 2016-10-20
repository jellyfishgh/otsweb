import React from 'react';
import fetch from './../ajax';
import CardLeftPane from './CardLeftPane';
import CardRightPane from './CardRightPane';

export const BankCards = React.createClass({
    getInitialState() {
        return {
            headIcon: this.props.headIcon,
            username: this.props.username,
            depositCardNum: 0,
            creditCardNum: 0
        };
    },
    componentDidMount() {
        fetch(this.props.api, '', 'GET', 2000, (data) => {
            this.setState(data);
        }, (err) => {
            console.log(err.toString());
        });
    },
    render() {
        return (
            <div>
                <CardLeftPane headIcon = {this.state.headIcon} username = {this.state.username} depositCardNum = {this.state.depositCardNum} creditCardNum = {this.state.creditCardNum}/>
                <CardRightPane />
            </div>
        );
    }
});