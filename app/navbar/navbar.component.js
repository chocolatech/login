angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: [function () {
        var vm = this;

        vm.isActive = false;

    }]
});