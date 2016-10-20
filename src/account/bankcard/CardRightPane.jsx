import React from 'react';
import RightPaneTabs from './RightPaneTabs';
import RightPaneInfo from './RightPaneInfo';

export const CardRightPane = React.createClass({
    render() {
        return (
            <div>
                <RightPaneTabs cardType={this.props.cardType} bankInfos={this.props.bankInfos}/>
                <RightPaneInfo />
            </div>
        );
    }
});