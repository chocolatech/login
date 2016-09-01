angular.module('core').
    service('LoginService', ['$http', '$location', function ($http, $location) {

        var vm = this;
        vm.login = function (username, password) {

            $http.post('/login', { "username": username, "password": password })

                .then(function (response) {
                    $location.path('/home');

                },
                function (response) {
                    vm.route(response.status);
                });

        };

        vm.route = function (status) {
            if (status == 401) {
                console.log('wrong auth');
            }
            else if (status == 500) {
                console.log('server error');
                $location.path('/error');
            }
        }

    }
    ]);