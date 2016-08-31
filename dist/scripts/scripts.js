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

angular.module('app',['ngRoute','loginScreen', 'loggedIn']);
angular.module('loggedIn').component('loggedIn', {
    templateUrl: 'logged-in/logged-in.template.html',
    controller:['$http', function($http){
        var vm = this;
        $http.get('/data').then(function(response){
            vm.cred = response.data;
        });
    }]
});
angular.module('loggedIn', []);
angular.module('loginScreen').component('loginScreen', {
    templateUrl:'login-screen/login-screen.template.html',
    controller: ['$location', function($location){
        var vm = this;
        this.login = function(){
            //console.log('logged in');

            $location.path('/home');
        };
    }]
});
angular.module('loginScreen', []);