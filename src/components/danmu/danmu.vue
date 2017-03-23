<template>
    <div>
        <h4></h4>
        {{text}}

        <div class="background">
            <!--/此处为公共背景部分-->


            <div id="danmu" v-html="current">
                {{current}}


            </div>


            <div class="input">
                <input type="text" v-on:keyup.enter="add" v-model="text" value="输入">
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
                obj: [{text: '学习java'}],
                current: ''

            }

        }, created: function () {
            console.log('game start!')
        },
        methods: {
            add: function () {
                this.obj.push({'text': this.text})
            }
        }, watch: {
            obj: function (current) {
                //这是当前的弹幕即为最后一条
                var currentDanmu = current[current.length - 1].text;
                console.log(currentDanmu);
                //get this 因为不是一个对象
                var _this = this;
                self.setInterval(function () {
             
                    _this.current = '<h1>' + currentDanmu + '</h1>';
                    console.log(_this.current)
                }, 1000);


            }
        }
    }

</script>

<style scoped>
    .input {
        bottom: -370px;
        position: relative;
    }

    /*设置展示框样式*/
    input[type="text"],
    input[type="password"] {

        border: 1px solid #ccc;
        padding: 2px;
        font-size: 1.2rem;
        color: #444;
        width: 200px;
    }

    /*设置主背景颜色&style*/
    .background {
        background-color: #b3b3b3;
        font-family: "Courier New", Courier, monospace;
        width: 400px;
        height: 400px;
    }


</style>