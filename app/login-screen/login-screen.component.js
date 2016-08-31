angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['Login', function (Login) {
        var vm = this;
        vm.login = Login();
        if (login.status == 200) {
            $location.path('/home');
        }
        else if (login.status == 401) {
            console.log('wrong auth');
        }
        else if (login.status == 500) {
            console.log('server error');
            $location.path('/error');
        }

    }]
});