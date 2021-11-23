export const fetchMessages = (page, limit = 10) => {
    return fetch(`http://localhost:3000/messages?_page=${page}&_limit=${limit}`);
};
