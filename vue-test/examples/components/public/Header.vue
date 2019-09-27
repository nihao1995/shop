/*头部导航栏 type:1带搜索框*/
<template>
    <div>
        <van-nav-bar v-if="type == 1"
            :title=msg_title
            left-text="返回"
            left-arrow
            fixed
            @click-left="onClickLeft"
            @click-right="onClickRight">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-nav-bar v-else
                :title=msg_title
                left-text="返回"
                :right-text=msg_right
                left-arrow
                fixed
                @click-left="onClickLeft"
                @click-right="onClickBtn"
        />
        <div style="height: 46px;"></div>
        <form v-if="type==1" style="z-index:2;position: fixed;top: 0;left:25%;width: 60%" action="/">
            <van-search style="padding: 5px 0;" placeholder="请输入搜索关键词" v-model="value" />
        </form>
    </div>
</template>

<script>
    import {
        NavBar,
        Toast,
        Icon,
        Search,
    } from 'vant';
    export default {
        props: ["msg_title","type","msg_right"],
        components: {
            [NavBar.name]: NavBar,
            [Toast.name]: Toast,
            [Icon.name]: Icon,
            [Search.name ]: Search ,
        },
        data() {
            return {
                value:''
            };
        },
        methods: {
            onClickLeft() {//返回按钮
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            },
            onClickRight() {
                this.$emit('func',this.value);//向父组件传输入框的值
                console.log(this.value)
            },
            onClickBtn(){
                Toast('暂无后续逻辑~');
            },
        },
        mounted() {
        }
    };
</script>

<style lang="less">
    .van-field__left-icon{
        display: none;
    }
</style>