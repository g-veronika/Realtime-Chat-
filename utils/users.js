const users = []; 

//Join user to a chat 
function userJoin(id, username, room) {
    const user = { id, username, room};

    users.pus(user);

    return user;
} 