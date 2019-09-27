<template>
    <div>
        <Header msg_title="订单中心" msg_right="" type="1" @func="getMsgFormSon"></Header>
        <van-tabs v-model="active" animated swipeable>
            <van-tab title="全部">
                <div style="padding-top: 50px;">
                    <div>内容1</div>
<!--                    <van-list-->
<!--                            v-model="loading"-->
<!--                            :finished="finished"-->
<!--                            finished-text="暂无更多数据"-->
<!--                            @load="load_more_items"-->
<!--                    >-->
<!--                        <van-cell-->
<!--                                v-for="item in items"-->
<!--                                :key="item"-->
<!--                                :title="item.name"-->
<!--                                :value="item.created_at"-->
<!--                        />-->
<!--                    </van-list>-->
                </div>
            </van-tab>
            <van-tab title="待付款">
                <div style="padding-top: 50px;">
                    <div>内容2</div>
                </div>
            </van-tab>
            <van-tab title="待发货">
                <div style="padding-top: 50px;">
                    <div>内容3</div>
                </div>
            </van-tab>
            <van-tab title="待收货">
                <div style="padding-top: 50px;">
                    <div>内容4</div>
                </div>
            </van-tab>
            <van-tab title="待评价">
                <div style="padding-top: 50px;">
                    <div>内容5</div>
                </div>
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
                items: [],
                finished: false,
                loading: false,
                offset: 0,
                page: 0,
                limit: 10,
            };
        },
        methods: {
            getMsgFormSon(data){//获取子组件搜索框输入的值
                this.msgFormSon = data;
                console.log(this.msgFormSon)
            },
            load_more_items: function() {
                this.page += 1;
                this.offset = this.limit * this.page;
                this.fetch_items();
            },

            fetch_items: function() {
                var data = ['1','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2']
                if (data.length) {
                    this.items.push(...data);
                } else {
                    this.finished = true;
                }
            }
        },
        mounted: function() {
            this.fetch_items();
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
</style>