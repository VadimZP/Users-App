angular
    .module('person')
    .component('person', {
        bindings: {
            person: '<'
        },
        templateUrl: 'person/person.html'
    })