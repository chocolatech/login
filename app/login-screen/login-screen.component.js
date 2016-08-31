angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['Login', function (Login) {
        var vm = this;
        vm.login = Login();
    }]
});