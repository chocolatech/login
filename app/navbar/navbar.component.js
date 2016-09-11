angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$http', 'LoginService', function ($http, LoginService) {
        var vm = this;
            $http.get('/userInfo').then(function (response) {
                vm.userInfo = response.data;
            });
    }]
});