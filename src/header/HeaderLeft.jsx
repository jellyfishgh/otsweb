import React from 'react';
import Navigator from 'Navigator';

export const HeaderLeft = React.createClass({
    render() {
        return (
            <ul>
                <Navigator url='http://www.pingan.com/' name='平安首页' />
                <Navigator url='' />
            </ul>
        );
    }
});