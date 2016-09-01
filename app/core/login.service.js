angular.module('core').
    service('Login', ['$http', '$location', function ($http, $location) {
        return function () {

            this.login = function (username, password) {

                //return $http.post('/login', {"username": username, "password": password}, {headers: {'Content-Type': 'application/json'}});
                return $http({
                    method: 'POST',
                    url: '/login',
                    // set the headers so angular is passing info as form data (not request payload)
                    headers : { 'Content-Type': 'application/json' },
                    data: {
                        username: 'username',
                        password: 'password'
                    }

                });


            };
        };

        // return $http.get('/data');
    }
    ]);