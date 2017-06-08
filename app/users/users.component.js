angular
    .module('users')
    .component('users', {
        bindings: {
            users: '<'
        },
        templateUrl: 'users/users.html',
        controller: ('UsersCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) => {

            let username = '';
            clickedUser = '';
            $scope.propertyName = '';

            // Link to user profile 
            // 1. Getting username
            $scope.getUsername = (person) => {
                username = person;
                clickedUser = $(event.currentTarget);
            }
            // 2.Using username in order to move to the user profile 
            $scope.showPersonProfile = () => {
                removeModal();
                $location.path(`/person/${username}`);
            }
            // 3. Function for removing modal window before moving to the user profile
            let removeModal = () => {
                $('.modal-backdrop').remove();
                $('body').removeClass('modal-open');
            };

            // Remove user via the modal window
            $scope.removeUser = () => {
                removeModal();
                clickedUser.remove();
            }

            // Sort users by click on th element
            $scope.sortBy = (prop) => {
                $scope.propertyName == '' ? $scope.propertyName = prop : $scope.propertyName = '';
            }

            // Custom search by name and surname 
            $scope.search = (item) => {
                if ($scope.searchUser == undefined) {
                    return true;
                } else {
                    // if input string matches to user name/surname - show him
                    if (item.name.first.toLowerCase().indexOf($scope.searchUser.toLowerCase()) != -1 ||
                        item.name.last.toLowerCase().indexOf($scope.searchUser.toLowerCase()) != -1) {
                        return true;
                    }
                }
                return false;
            }
        }])
    });
