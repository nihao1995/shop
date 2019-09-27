<template>
    <div>
        <Header msg_title="订单中心" msg_right="" type="1" @func="getMsgFormSon"></Header>
        <van-tabs v-model="active" animated swipeable>
            <van-tab title="全部">
                <div class="box" v-for="item in order_list">
                    <van-card style="background: #fff"
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            :title= item.title
                            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </div>
                        <div v-if="item.type==1" slot="footer">
                            <van-button size="mini">修改地址</van-button>
                            <van-button size="mini">取消订单</van-button>
                            <van-button size="mini">付款</van-button>
                        </div>
                        <div v-if="item.type==2" slot="footer">
                            <van-button size="mini">申请开票</van-button>
                            <van-button size="mini">挑选服务</van-button>
                        </div>
                        <div v-if="item.type==3" slot="footer">
                            <van-button size="mini">查看物流</van-button>
                            <van-button size="mini">挑选服务</van-button>
                            <van-button style="border-color: #FF5000;color: #FF5000" size="mini">确认收货</van-button>
                        </div>
                        <div v-if="item.type==4" slot="footer">
                            <van-button size="mini">查看物流</van-button>
                            <van-button size="mini">卖了换钱</van-button>
                            <van-button size="mini">评价</van-button>
                        </div>
                    </van-card>
                </div>
            </van-tab>
            <van-tab title="待付款">
                <template v-for="item in order_list">
                    <template v-if="item.type==1">
                        <div class="box">
                            <van-card style="background: #fff"
                              num="2"
                              price="2.00"
                              desc="描述信息"
                              :title= item.title
                              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </div>
                        <div slot="footer">
                            <van-button size="mini">修改地址</van-button>
                            <van-button size="mini">取消订单</van-button>
                            <van-button size="mini">付款</van-button>
                        </div>
                    </van-card>
                        </div>
                    </template>
                </template>
            </van-tab>
            <van-tab title="待发货">
                <template v-for="item in order_list">
                    <template v-if="item.type==2">
                        <div class="box">
                            <van-card style="background: #fff"
                              num="2"
                              price="2.00"
                              desc="描述信息"
                              :title= item.title
                              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </div>
                        <div slot="footer">
                            <van-button size="mini">申请开票</van-button>
                            <van-button size="mini">挑选服务</van-button>
                        </div>
                    </van-card>
                        </div>
                    </template>
                </template>
            </van-tab>
            <van-tab title="待收货">
                <template v-for="item in order_list">
                    <template v-if="item.type==3">
                        <div class="box">
                            <van-card style="background: #fff"
                              num="2"
                              price="2.00"
                              desc="描述信息"
                              :title= item.title
                              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </div>
                        <div slot="footer">
                            <van-button size="mini">查看物流</van-button>
                            <van-button size="mini">挑选服务</van-button>
                            <van-button style="border-color: #FF5000;color: #FF5000" size="mini">确认收货</van-button>
                        </div>
                    </van-card>
                        </div>
                    </template>
                </template>
            </van-tab>
            <van-tab title="待评价">
                <template  v-for="item in order_list">
                    <template v-if="item.type==4">
                        <div class="box">
                            <van-card style="background: #fff"
                                  num="2"
                                  price="2.00"
                                  desc="描述信息"
                                  :title= item.title
                                  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                        >
                            <div slot="tags">
                                <van-tag plain type="danger">标签</van-tag>
                                <van-tag plain type="danger">标签</van-tag>
                            </div>
                            <div slot="footer">
                                <van-button size="mini">查看物流</van-button>
                                <van-button size="mini">卖了换钱</van-button>
                                <van-button size="mini">评价</van-button>
                            </div>
                        </van-card>
                        </div>
                    </template>
                </template>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Header from '../public/Header'
    export default {
        components: {
            Header,
        },
        data() {
            return {
                msgFormSon:'',
                active: 0,
                order_list:[
                    {type:1,title:"待付款标题1"},
                    {type:2,title:"待发货标题1"},
                    {type:3,title:"待收货标题1"},
                    {type:4,title:"待评价标题1"},
                    {type:1,title:"待付款标题2"},
                    {type:2,title:"待发货标题2"},
                    {type:3,title:"待收货标题2"},
                    {type:4,title:"待评价标题2"},
                ]
            };
        },
        methods: {
            getMsgFormSon(data){//获取子组件搜索框输入的值
                this.msgFormSon = data;
                console.log(this.msgFormSon)
            },
        },
    };
</script>

<style lang="less">
.van-tabs--line .van-tabs__wrap{
    width: 100%;
    position: fixed;
    top: 46px;
    z-index: 999;
}
.van-button--mini {
    padding: 0 5px;
    border-radius: 11px;
}
    .box{
        width: 95%;
        height: auto;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 5px 0;
        margin: 10px;
    }
</style>