angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['$location', function ($location) {
        var vm = this;
        this.login = login();
    }]
});