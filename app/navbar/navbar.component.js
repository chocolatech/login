angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: [function () {
        var vm = this;
        // $http.get('/menu').then(function (response) {
        //     vm.menu = response.data;
        // });

        vm.isActive = false;
        vm.showedMenu = true;
        vm.iconClass= 'col-md-2';

        vm.toggleMenu = function () {
            vm.showedMenu = !vm.showedMenu;
        };
    }]
});