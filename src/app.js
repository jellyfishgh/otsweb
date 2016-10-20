import React from 'react';
import {render} from 'react-dom';

const CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">Hello World!</div>
        );
    }
});
render(<CommentBox/>, document.getElementById('container'));