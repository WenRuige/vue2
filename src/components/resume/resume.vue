<template>
    <div class="main">
        <div class="side">
            {{text}}




        </div>
        <div class="left">

        </div>
        <div class="right">
            <div class="name">您的姓名</div>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',

            }
        }

    }
</script>

<style scoped>
    .main {
        margin: 0px;
    }

    .side {
        float: left;
        width: 100px;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    }

    .left {
        float: left;
        margin-left: 50px;
        width: 300px;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    }
    .right {
        float: left;
        margin-left: 100px;
        width: 500px;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    }
</style>