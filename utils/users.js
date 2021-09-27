const users = []; 

//Join user to a chat 
function userJoin(id, username, room) {
    const user = { id, username, room};

    users.push(user);

    return user;
};

//Get current user 
function getCurrrentUser(id) {
    return users.find(user => user.id === id);
};

module.exports = {
    userJoin,
    getCurrrentUser
};