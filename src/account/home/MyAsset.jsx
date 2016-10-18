import React from 'react';

const MyAssetNum = React.createClass({
    render() {
        return (
            <div>
                <div>我的资产</div>
                <div>{this.props.num}</div>
            </div>
        );
    }
});

const MyHead = React.createClass({
    render() {
        return (
            <div>
                <img src={this.props.headIcon} />
                <div>你好，{this.props.username}</div>
            </div>
        );
    }
});

const Card = React.createClass({
    render() {
        return (
            <a href={this.props.url} title={this.props.name}>
                <img src={this.props.iconUrl} />
            </a>
        );
    }
});
const MyCards = React.createClass({
    getInitialState() {
        return {data: [
            {
                name: '银行卡',
                url: '/servlet/account/bank/BankCardAction',
                iconUrl: '/img/Coupons_icon_ka.png'
            },
            {
                name: '红包',
                url: '/servlet/account/activities/RedAction',
                iconUrl: 'Coupons_icon_hb.png'
            },
            {
                name: '卡券',
                url: '/servlet/account/activities/CouponAction',
                iconUrl: '/img/Coupons_icon_quan.png'
            }
        ]};
    },
    render() {
        const cards = this.state.data((item) => {
            return (
                <Card url={item.url} name={item.name} iconUrl={item.iconUrl} />
            );
        });
        return (
            <div>{cards}</div>
        );
    }
});

export const MyAsset = React.createClass({
    render() {
        return (
            <div>
                <MyAssetNum num={this.props.asset.num} />
                <MyHead headIcon={this.props.asset.headIcon} username={this.props.asset.username} />
                <MyCards />
            </div>
        );
    }
});