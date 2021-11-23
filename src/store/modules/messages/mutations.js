export const mutations = {
    setMessages(state, messages) {
        state.messages = state.messages.concat(messages);
    },
    setPage(state, page) {
        state.page = page;
    },
    setFetchError(state, isError) {
        state.fetchError = isError;
    },
    setEndOfMessages(state, endOfMessages) {
        state.endOfMessages = endOfMessages;
    }
};
