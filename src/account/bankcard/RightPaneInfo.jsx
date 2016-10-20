import React from 'react';
import RightPaneInfoTop from 'RightPaneInfoTop';
import RightPaneInfoDown from 'RightPaneInfoDown';

export const RightPaneInfo = React.createClass({
    getInitialState() {
        return {
            balance: this.props.balance,
            limitValue: this.props.limitValue,
            current: 1,
            all: 1
        };
    },
    render() {
        return (
            <div>
                <RightPaneInfoTop balance={this.state.balance} limitValue={this.props.limitValue}/>
                <RightPaneInfoDown current={this.state.current} all={this.state.all}/>
            </div>
        );
    }
});