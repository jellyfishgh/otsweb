import React from 'react';
import BankCover from './BankCover';

export const RightPaneTabs = React.createClass({
    getInitialState() {
        return {
            type: this.props.cardType,
            bankInfos: this.props.bankInfos
        };
    },
    render() {
        const bankCovers = this.state.bankInfos.map((bank) => {
            return (
                <BankCover logo={bank.logo} name={bank.name} type={bank.type} cardId={bank.cardId} level={bank.level} isDefault={bank.isDefault}/>
            );
        });
        const btnValue = this.state.type ? '+ 添加储蓄卡' : '+ 添加信用卡';
        return (
            <div>
                {bankCovers}
                <div><button>{btnValue}</button></div>
            </div>
        );
    }
});