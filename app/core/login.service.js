angular.module('core').
    service('LoginService', ['$http', '$location', function ($http, $location) {

        var vm = this;
        vm.login = function (username, password) {

            return $http.post('/login', { "username": username, "password": password });

        };
    }
    ]);