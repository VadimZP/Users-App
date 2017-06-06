angular.module('usersApp').service('UsersService', function ($http) {
    const service = {
        getAllUsers: function () {
            return $http.get('users/users-list.json').then(function (response) {
                return response.data;
            });
        },
        getUser: function (username) {
            function personMatchesParam(person) {
                return person.login.username === username;
            }

            return service.getAllUsers().then(function (users) {
                return users.find(personMatchesParam)
            });
        },
    }
    return service;

})