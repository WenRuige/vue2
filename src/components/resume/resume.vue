<template>
    <div class="main">
        <div class="side">
            {{text}} {{content}}

         <!--<img class="logo" src="../img/cool.png">-->

            <!--extract-text-webpack-plugin-->
                        <button @click="run">运行哈哈啊啊实打实大</button>


        </div>
        <div class="left">
            <p>
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
       /*section 位置*/
       .section {
           float: left;
           width: 200px;
           height: 300px;
           border-right:1px solid;

       }
               </p>
        </div>
        <div class="right">
            <div class="section">
                <!--<div v-bind:clss="">您的姓名:11</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '123',
                content: 'qq',
            }
        }, create: function () {
            console.log(123);
        }, methods: {
            //点击run开始加载css 文件
            run: function () {
                console.log(123);
            }
        },
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

    /*section 位置*/
    .section {
        float: left;
        width: 200px;
        height: 300px;
        border-right: 1px solid;
    }

    .active {
        float: right;
        height: 200px;
        color: red;
    }
</style>