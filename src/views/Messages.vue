<template>
    <div class="messages">
        <Alert
            v-if="fetchError"
            :isShow="fetchError"
            :content="alertText"
            :type="alertType"
        />
        <div class="messages__wrapper" v-if="haveMessage">
            <CustomMessage
                v-for="({date, authorName, authorUrl, content, contentPostTones}, index) in messages"
                :date="date"
                :author="authorName"
                :authorUrl="authorUrl"
                :body="content"
                :tones="contentPostTones"
                :key="index"
            ></CustomMessage>
        </div>
        <p class="no-message" v-else>Нет сообщений</p>
        <div class="messages__load-button-wrapper">
            <button
                v-if="!endOfMessages"
                class="messages__load-button"
                type="button"
                @click.prevent="onLoadMoreButtonClick"
            >
                Загрузить еще
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CustomMessage from '../components/CustomMessage.vue';
import Alert from '../components/Alert';

export default {
    name: "Messages",
    components: {
        CustomMessage,
        Alert
    },
    data() {
        return {
            alertText: 'Ошибка загрузки данных',
            alertType: 'error'
        };
    },
    computed: {
        ...mapGetters(['messages', 'page', 'fetchError', 'endOfMessages']),
        haveMessage() {
            return this.messages.length > 0;
        }
    },
    methods: {
        ...mapActions(['loadMessages']),
        onLoadMoreButtonClick() {
            this.loadMessages();
        }
    },
    mounted() {
        this.loadMessages();
    }
}
</script>

<style lang="scss" scoped>
    .messages {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .messages__wrapper > *:not(:last-child) {
        border-bottom: 1px solid black;
    }

    .no-message {
        text-align: center;
    }

    .messages__load-button-wrapper {
        text-align: center;
    }

    .messages__load-button {
        padding: 5px 10px;
        font-size: 14px;
        background-color: transparent;
        border: 2px solid brown;

        &:hover {
            cursor: pointer;
            background-color: brown;
            color: white;
        }

        &:active {
            color: darken(white, 20%);
            background-color: darken(brown, 20%);
        }
    }
</style>
