angular.module('usersApp').service('UsersService', function ($http) {
    const service = {
        getAllUsers: () => {
            return $http.get('users/users-list.json').then(function (response) {
                return response.data;
            });
        },
        getUser: (username) => {
            function personMatchesParam(person) {
                return person.login.username === username;
            }

            return service.getAllUsers().then((users) => {
                return users.find(personMatchesParam)
            });
        },
    }
    return service;

})
