angular.module('dashboard').component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: [function () {
        var vm = this;
        console.log('isndie controller');

        vm.isActive = false;
        vm.Active = function () {
            return vm.isActive;
        };
    }]
});