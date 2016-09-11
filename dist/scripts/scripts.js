angular.module('app',['ngRoute','loginScreen', 'navbar', 'core', 'error500', 'dashboard']);
angular.module('core', []);
angular.module('error500', []);
angular.module('dashboard',['navbar']);
angular.module('navbar', ['core']);
angular.module('loginScreen', ['core']);
angular.module('app').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
        //$locationProvider.hashPrefix('!');

        $routeProvider.
            when('/signin', {
                template: '<login-screen></login-screen>'
            }).
            when('/home', {
                template: '<dashboard></dashboard>'
            }).
            when('/error', {
                template: '<error500></error500>'
            }).
            otherwise('/signin');
    }]);

angular.module('core').
    service('LoginService', ['$http', '$location', function ($http, $location) {

        var vm = this;
        vm.login = function (username, password) {

            return $http.post('/login', { "username": username, "password": password });



        };



    }
    ]);
angular.module('error500').component('error500', {
    templateUrl: 'error500/error500.template.html'
});
angular.module('dashboard').component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html'
});
angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$http', 'LoginService', function ($http, LoginService) {
        var vm = this;
            $http.get('/userInfo').then(function (response) {
                vm.userInfo = response.data;
            });
    }]
});
angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['LoginService', '$location', function (LoginService, $location) {

        var vm = this;
        vm.isError401=false;

        vm.submit = function () {
            console.log('values:', vm.username, vm.password);

            LoginService.login(vm.username, vm.password).then(function (response) {
                $location.path('/home');

            },
                function (response) {
                    route(response.status);
                });

            function route(status) {
                if (status == 401) {
                    console.log('wrong auth');
                    vm.isError401=true;
                }
                else if (status == 500) {
                    console.log('server error');
                    $location.path('/error');
                }
            }
        };

    }]
});