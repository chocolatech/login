angular.module('app',['ngRoute','loginScreen', 'loggedIn', 'core']);
angular.module('core', []);
angular.module('loggedIn', []);
angular.module('loginScreen', []);
angular.module('app').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
        //$locationProvider.hashPrefix('!');

        $routeProvider.
            when('/signin', {
                template: '<login-screen></login-screen>'
            }).
            when('/home', {
                template: '<logged-in></logged-in>'
            }).
            otherwise('/signin');
    }]);

angular.module('core').
    service('Login', ['$http', '$location', function ($http, $location) {
        var vm = this;
        return function () {
            $http.get('/data').then(function (response) {
                console.log(response);
                // vm.cred = response.data;
                // if (response.status == 200) {
                //     // $location.path('/home');
                // }
                // else if (response.status == 401) {
                //     console.log('wrong auth');
                // }
                // else if (response.status == 500) {
                //     console.log('server error');
                //     $location.path('/error');
                // }

                return response;

            });
        }

    }
    ]);
angular.module('loggedIn').component('loggedIn', {
    templateUrl: 'logged-in/logged-in.template.html',
    controller:['$http', function($http){
        var vm = this;
        
    }]
});
angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['Login', function (Login) {
        var vm = this;
        vm.login = Login();
        if (login.status == 200) {
            $location.path('/home');
        }
        else if (login.status == 401) {
            console.log('wrong auth');
        }
        else if (login.status == 500) {
            console.log('server error');
            $location.path('/error');
        }

    }]
});