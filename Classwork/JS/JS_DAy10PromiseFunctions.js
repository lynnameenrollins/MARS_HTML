function getUsers(){
    let users = [];
    setTimeout(() =>{
        users = [
            {username: 'John', email: 'john@gmail.com'},
             {username: 'Mark', email: 'mark@gmail.com'}

        ];
    }, 1000)
    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('Mark'));

//Need to type in code for callback and Promise to see those examples!