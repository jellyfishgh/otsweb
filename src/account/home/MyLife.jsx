import React from 'react';

const LifeItem = React.createClass({
    render() {
        const quan = this.props.hasQuan ? <img src='' /> : '';
        return (
            <a href={this.props.url}>
                <img src={this.props.icon}/>
                <div>{this.props.name}</div>
                <span>{quan}</span>
            </a>
        );
    }
});

export const MyLife = React.createClass({
    getInitialState() {
        return {items: [
            {
                url: '/servlet/life/IndexAction',
                name: '信用卡还款',
                hasQuan: true,
                icon: '/img/Coupons_icon_xin.png'
            },
            {
                url: '/servlet/sdm/IndexAction',
                name: '水电煤缴费',
                hasQuan: true,
                icon: '/img/Coupons_icon_sdm.png'
            },
            {
                url: '/servlet/servlet/hsb/AutoRecharge',
                name: '工资理财',
                hasQuan: false,
                icon: '/img/Coupons_icon_chong.png'
            },
            {
                url: '/servlet/hsb/AppCashAction',
                name: '预约还贷',
                hasQuan: false,
                icon: '/img/Coupons_icon_qu.png'
            }
        ]};
    },
    render() {
        const lifeItems = this.state.items.map((item) => {
            return (
                <LifeItem url={item.url} name={item.name} icon={item.icon} hasQuan={item.hasQuan} />
            );
        });
        return (
            <div>
                {lifeItems}
            </div>
        );
    }
});