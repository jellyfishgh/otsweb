import React from 'react';

export const GroupProductLineType = React.createClass({
    render() {
        const typeLis = this.props.types.map((type) => {
            return (
                <li>
                    <a href={type.url} target='_blank' title={type.name}>{type.name}</a>
                </li>
            );
        });
        if(this.props.name) {
            return (
                <dl>
                    <dt>{this.props.name}</dt>
                    <dd>
                        <ul>
                            {typeLis}
                        </ul>
                    </dd>
                </dl>
            );
        }else {
            return (
                <dl>
                    <dd>
                        <ul>
                            {typeLis}
                        </ul>
                    </dd>
                </dl>
            );
        }
    }
});