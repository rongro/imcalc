const getChatList = function() {
    const {chatList} = localStorage;        
    return chatList ? JSON.parse(chatList) : [];
}

const setChatList = function(list) {
    localStorage.chatList = JSON.stringify(list);        
}

const updateStore = function(newMessage) {
    const chatList = getChatList();
    chatList.push(newMessage);
    setChatList(chatList);
}

const getDefaultUser = function() {
    return {
        avatar: 'https://i.pinimg.com/736x/51/4a/c6/514ac6f794dc4a9151b424278a2fa8ba--square-face-hairstyles--short-hairstyles.jpg',
        name: 'system'
    };
}

const getLoggedUser = function() {
    return {
        avatar: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-1/p160x160/19105627_10154723859918861_5055465968726281221_n.jpg?oh=58f1e3034a390950f7dba9d8a908a63e&oe=5AB8A690',
        name: 'Ron'
    };
}

const generateId = function() {
    return Date.now();
}

export {getChatList, updateStore, getDefaultUser, getLoggedUser, generateId};
