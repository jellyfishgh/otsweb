import React from 'react';

const BankBalance = React.createClass({
    render() {
        return (
            <div>
                <div>本卡关联资产余额：</div>
                <div><span>{this.props.balance}</span><span>元</span><button>[ 明细 ]</button></div>
            </div>
        );
    }
});

const DetailItem = React.createClass({
    render() {
        if(this.props.extra) {
            const opeView = this.props.isActive ? <button>[ 新增 ]</button> : <span>[ 敬请期待 ]</span>;
            return (
                <div>
                    <img src={this.props.icon}/>
                    <span>{this.props.desc}</span>
                    {opeView}
                </div>
            );
        }else {
            return (
                <div>
                    <img src={this.props.icon}/>
                    <span>{this.props.desc}</span>
                </div>
            );
        }
    }
});

const CardDetails = React.createClass({
    getInitialState() {
        return {
            items: [
                {
                    icon: '',
                    desc: `充值限额：${this.props.limitValue}`,
                    extra: false
                },
                {
                    icon: '',
                    desc: '工资理财计划：将银行卡资金定期自动归集进花生宝',
                    extra: true,
                    isActive: true,
                },
                {
                    icon: '',
                    desc: '自动取现计划：单笔或每月定期自动取现到银行卡',
                    extra: true,
                    isActive: true,
                },
                {
                    icon: '',
                    desc: '余额支付功能',
                    extra: true,
                    isActive: false,
                },
                {
                    icon: '',
                    desc: '跨卡取现',
                    extra: true,
                    isActive: false,
                }
            ]
        };
    },
    render() {
        const details = this.state.items.map((item) => {
            return (
                <DetailItem icon={item.icon} desc={item.desc} extra={item.extra}/>
            );
        });
        return (
            <div>{details}</div>
        );
    }
});

const OpeArea = React.createClass({
    render() {
        return (
            <div>
                <button>换卡</button>
                <button>删除该卡</button>
                <button>重新绑卡</button>
            </div>
        );
    }
});

export const RightPaneInfoTop = React.createClass({
    render() {
        return (
            <div>
                <BankBalance balance={this.props.balance}/>
                <CardDetails limitValue={this.props.limitValue}/>
                <OpeArea />
            </div>
        );
    }
});