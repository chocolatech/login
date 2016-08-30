angular.module('app').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
        //$locationProvider.hashPrefix('!');

        $routeProvider.
            when('/login', {
                template: '<login-screen></login-screen>'
            }).
            when('/home', {
                template: '<logged-in></logged-in>'
            }).
            otherwise('/login');
    }]);