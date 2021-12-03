class User{
    name;
    userId;
    constructor(username, userId) {
        this.username = username;
        this.userId = userId;
    }
    getUser() {
        return User;
    }
    getUserName() {
        return this.username;
    }
    getUserId() {
        return this.userId;
    }


}

module.exports = User