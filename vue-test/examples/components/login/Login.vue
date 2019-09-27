<template>
    <div>
        <div class="h5"></div>
        <div class="login-sign">
            <h3>惠及信购</h3>
        </div>
        <form class="login-form">
            <div class="input">
                <i class="iconfont icon-gerenzhongxinxuanzhong"></i>
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="input">
                <i class="iconfont icon-mima"></i>
                <input type="text" placeholder="请输入验证码">
                <button>发送验证码</button>
            </div>
            <LoginForm></LoginForm>
            <button>登录</button>
            <a href="#">忘记密码</a>
        </form>

        <div class="login-bottom-img">
            <img src="./images/login_img.jpg">
        </div>
    </div>
</template>

<script>
    import LoginForm from "./login-form";
    export default {
        name: "login",
        components: {
            LoginForm,
        },
    }
</script>

<style scoped>
    @import "css/style.css";
    @import "css/swiper.min.css";
    @import "css/z-style.css";
</style>
