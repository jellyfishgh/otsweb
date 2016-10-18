import React from 'react';

const PeanutBaby = React.createClass({
    render() {
        return (
            <div>
                <div>花生宝</div>
                <div>{this.props.num}</div>
                <div>
                    <button>充值</button>
                    <button>取现</button>
                    <button>交易查询</button>
                </div>
            </div>
        );
    }
});

const YesterdayIn = React.createClass({
    render() {
        return (
            <div>
                <div>昨日收益</div>
                <div>{this.props.yesterdayIn}</div>
                <div>
                    <span>累计收益：</span>
                    <span>{this.props.alIn}</span>
                    <button>[ 交易查询 ]</button>
                </div>
                <div>
                    <span>七日年化收益</span>
                    <span>{this.props.rate}</span>
                    <span>{this.props.yesterday}</span>
                </div>
            </div>
        );
    }
});

export const Peanut = React.createClass({
    render() {
        return (
            <div>
                <PeanutBaby num={this.props.peanut.num} />
                <YesterdayIn in={this.props.peanut.yesterdayIn} allIn={this.props.peanut.allIn} rate={this.props.peanut.rate} yesterday={this.props.peanut.yesterday}/>
            </div>
        );
    }
});