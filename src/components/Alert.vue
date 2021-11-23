<template>
    <div :class="htmlClasses">
        <p class="alert__content">{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        data() {
            return {
                htmlClasses: ['alert']
            };
        },
        props: {
            content: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'success',
                validator: (value) => ['success', 'error'].indexOf(value) !== -1
            }
        },
        mounted() {
            this.htmlClasses.push(this.type);
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes back-in-right {
        0% {
            transform: translateX(100%);
        }
        50% {
            transform: translateX(-10%);
        }
        75% {
            transform: translateX(5%);
        }
        100% {
            transform: translateX(0);
        }
    }

    .alert {
        display: block;
        position: fixed;
        top: 20px;
        right: 5px;
        width: 250px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 1rem;
        border-radius: .25rem;
        animation-name: back-in-right;
        animation-duration: .5s;
        animation-timing-function: ease-in-out;

        &.success {
            background-color: #d4edda;
            color: #155724;
            box-shadow: 0 0 3px #c3e6cb;
        }

        &.error {
            background-color: #f8d7da;
            color: #721c24;
            box-shadow: 0 0 3px #f5c6cb;
        }
    }

    .alert__content {
        font-size: 16px;
        text-align: center;
    }
</style>
