angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$http', 'LoginService', function ($http, LoginService) {
        var vm = this;
        $http.get('/userInfo').then(function (response) {
            vm.userInfo = response.data;
        });
        $http.get('/menu').then(function (response) {
            vm.menu = response.data;
        });

        vm.isActive = false;
        vm.showedMenu = true;

        vm.toggleMenu = function () {
            vm.showedMenu = !vm.showedMenu;
        };
    }]
});