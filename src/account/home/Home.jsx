import React from 'react';
import fetch from './../ajax';
import MyAsset from './MyAsset';
import Peanut from './Peanut';
import MyInvestment from './MyInvestment';
import MyLife from './MyLife';

export const Home = React.createClass({
    getInitialState: function () {
        return {
            asset: {
                username: '',
                headIcon: '',
                num: '0.00'
            },
            peanut: {
                num: '0.00',
                yesterdayIn: '0.00',
                allIn: '0.00',
                rate: '0.00%',
                yesterday: '',
            },
            investment: {
                fund: '0.00',
                specialAccount: '0.00',
                transitingFund: '0.00',
                partener: '0.00'
            }
        };
    },
    componentDidMount: function () {
        fetch(this.props.api, '', 'GET', 2000, (info) => {
            this.setState(info);
        }, (err) => {
            alert(err.toString());
        });
    },
    render() {
        return (
            <div>
                <MyAsset asset={this.state.asset} />
                <Peanut peanut={this.state.peanut} />
                <MyInvestment investment={this.state.investment} />
                <MyLife />
            </div>
        );
    }
});