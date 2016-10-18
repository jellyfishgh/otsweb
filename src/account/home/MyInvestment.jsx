import React from 'react';

const InvestItem = React.createClass({
    render() {
        return (
            <div>
                <img src={this.props.icon} />
                <span>{this.props.name}</span>
                <span>{this.props.num}</span>
                <button>{this.props.btnValue}</button>
            </div>
        );
    }
});

export const MyInvestment = React.createClass({
    getInitialState() {
        return {
            items: [
                {
                    icon: '/img/',
                    name: '基金：',
                    num: this.props.investment.fund,
                    btnValue: '[ 立即购买 ]'
                },
                {
                    icon: '/img/',
                    name: '专户：',
                    num: this.props.investment.fund,
                    btnValue: '[ 立即购买 ]'
                },
                {
                    icon: '/img/',
                    name: '在途资金：',
                    num: this.props.investment.fund,
                    btnValue: '[ 查看 ]'
                },
                {
                    icon: '/img/',
                    name: '合作伙伴：',
                    num: this.props.investment.fund,
                    btnValue: '[ 查看 ]'
                }
            ]
        };
    },
    render() {
        const investItems = this.state.items.map((item) => {
            return (
                <InvestItem icon={item.icon} name={item.name} btnValue={item.btnValue} />
            );
        });
        return (
            <div>
                {investItems}
            </div>
        );
    }
});