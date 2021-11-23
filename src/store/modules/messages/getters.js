export const getters = {
    messages(state) {
        return state.messages;
    },
    page(state) {
        return state.page;
    },
    fetchError(state) {
        return state.fetchError;
    },
    endOfMessages(state) {
        return state.endOfMessages;
    }
};
