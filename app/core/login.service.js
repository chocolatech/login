angular.module('core').
    service('LoginService', ['$http', '$location', function ($http, $location) {

        return function () {

            this.login = function (username, password) {

               $http.post('/login', {"username": username, "password": password})

                .then(function(response){
                if (response.status == 200) {
                    $location.path('/home');
                }
                else if (response.status == 401) {
                    console.log('wrong auth');
                }
                else if (response.status == 500) {
                    console.log('server error');
                    $location.path('/error');
                }

            });


            };
        }
    }
    ]);