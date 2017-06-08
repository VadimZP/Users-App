const mainAppModule = angular.module('usersApp', ['ui.router', 'users', 'person']);

mainAppModule.config(($stateProvider, $urlRouterProvider) => {

    const usersState = {
        name: 'users',
        url: '',
        component: 'users',
        resolve: {
            users: (UsersService) => {
                return UsersService.getAllUsers();
            }
        }
    }

    const personState = {
        name: 'person',
        url: '/person/{personUsername}',
        component: 'person',
        resolve: {
            person: (UsersService, $transition$) => {
                return UsersService.getUser($transition$.params().personUsername);
            }
        }
    }

    $stateProvider.state(usersState);
    $stateProvider.state(personState);
});
