angular.module('app').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                template: '<login-screen></login-screen>'
            }).
            otherwise('/');
    }]);