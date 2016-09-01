angular.module('loggedIn').component('loggedIn', {
    templateUrl: 'logged-in/logged-in.template.html',
    controller: ['$http', 'LoginService', function ($http, LoginService) {
        var vm = this;
            $http.get('/userInfo').then(function (response) {
                vm.userInfo = response.data;
            })

    }]
});