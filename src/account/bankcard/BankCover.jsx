import React from 'react';

const BankLevel = React.createClass({
    render() {
        const stars = this.props.level.map(() => {
            return (
                <img src=""></img>
            );
        });
        return (
            <div>
                <span></span>
                {stars}
            </div>
        );
    }
});

export const BankCover = React.createClass({
    getInitialState() {
        return {
            logo: this.props.logo,
            name: this.props.name,
            type: this.props.type ? '(储蓄卡)' : '(信用卡)',
            cardId: this.props.cardId,
            level: this.props.level,
            isDefault: this.props.isDefault
        };
    },
    render() {
        return (
            <div>
                <div>
                    <img src={this.state.logo}/>
                    <span>{this.state.name}</span>
                    <span>{this.state.type}</span>
                </div>
                <div>
                    <span>卡号：</span>
                    <span>${this.state.cardId}</span>
                </div>
                <BankLevel level={this.state.level}/>
                <span></span>
            </div>
        );
    }
});