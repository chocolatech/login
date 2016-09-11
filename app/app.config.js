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