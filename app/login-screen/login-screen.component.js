angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['LoginService', '$location', function (LoginService, $location) {

        var vm = this;
        vm.submit = function(){
        console.log('valaues:', vm.username, vm.password);

            var l= new LoginService();

            l.login(vm.username, vm.password);
        };

    }]
});