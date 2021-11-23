import {fetchMessages} from '../../../api/messages';

export const actions = {
    async loadMessages(context) {
        const page = context.getters.page;
        try {
            const response = await fetchMessages(page + 1);
            const messages = await response.json();
            context.commit('setMessages', messages);
            context.commit('setPage', page + 1);
            if (messages.length === 0) {
                context.commit('setEndOfMessages', true);
            }
        } catch (err) {
            context.commit('setFetchError', true);
        }
    }
};
