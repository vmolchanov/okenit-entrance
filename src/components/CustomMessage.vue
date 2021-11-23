<template>
    <article class="message">
        <h2 class="message__title visually-hidden">Сообщение от пользователя {{author}}</h2>
        <header class="message__header">
            <time class="message__time">{{formattedDate}}</time>
            <b class="message__author">{{author}}</b>
            <a href="" class="message__author-url">{{authorUrl}}</a>
        </header>
        <p class="message__body" v-html="tonedBody"></p>
    </article>
</template>

<script>
export default {
    name: "CustomMessage",
    props: {
        date: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        authorUrl: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        tones: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        getRgbFromTone(tone, min = -1, max = 1) {
            const colorsCount = 255;
            const red = (max - tone) / (max - min) * colorsCount;
            const green = (tone - min) / (max - min) * colorsCount;
            const blue = 0;
            return {red, green, blue};
        }
    },
    computed: {
        tonedBody() {
            if (this.tones.length === 0) {
                return this.body;
            }

            const splitted = this.body.split('');
            const newBody = [];
            let i = 0;
            this.tones.forEach(({position, tone, length}) => {
                const {red, green, blue} = this.getRgbFromTone(tone)
                while (i !== position) {
                    newBody.push(splitted[i++]);
                }
                newBody.push(`<span style="background-color: rgb(${red}, ${green}, ${blue});">`);
                for (let j = position; j < position + length; j++, i++) {
                    newBody.push(splitted[j]);
                }
                newBody.push('</span>');
            });
            for (let j = i; j < splitted.length; j++) {
                newBody.push(splitted[j]);
            }
            return newBody.join('');
        },
        formattedDate() {
            const date = new Date(this.date);
            const localeDate = date.toLocaleDateString('ru', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                formatMatcher: 'basic'
            });
            const [hours, minutes,] = date.toLocaleTimeString('ru', {
                hour: '2-digit',
                minute: '2-digit'
            }).split(':');
            return `${hours}:${minutes}, ${localeDate}`;
        }
    }
}
</script>

<style lang="scss" scoped>
    .message {
        font-size: 16px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .message__header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .message__time {
        &::after {
            content: '/';
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    .message__author {
        color: brown;

        &::after {
            content: '/';
            margin-left: 5px;
            margin-right: 5px;
        }
    }
</style>
