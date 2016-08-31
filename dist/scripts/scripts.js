angular.module('app',['ngRoute','loginScreen', 'loggedIn', 'core']);
angular.module('core', []);
angular.module('loggedIn', []);
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
                template: '<logged-in></logged-in>'
            }).
            otherwise('/signin');
    }]);

angular.module('core').
    service('Login', ['$http', '$location', function ($http, $location) {
        return function(){

            this.login=function(username, password){

                return $http.post('/signin', {username: username, password: password});
            };
        };
        
        // return $http.get('/data');
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
    controller: ['Login', '$location', function (Login, $location) {

        var vm = this;
        vm.submit = function(){
            console.log(vm.username, vm.password);
            console.log(Login.login);
            var l= new Login();

            l.login().then(function(response){
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

    }]
});