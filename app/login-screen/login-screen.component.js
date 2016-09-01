angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['LoginService', '$location', function (LoginService, $location) {

        var vm = this;
        vm.submit = function(){
        console.log('values:', vm.username, vm.password);

            LoginService.login(vm.username, vm.password);
        };

    }]
});