angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['LoginService', '$location', function (LoginService, $location) {

        var vm = this;
        vm.isError401=false;

        vm.submit = function () {

            LoginService.login(vm.username, vm.password).then(function (response) {
                $location.path('/home');

            },
                function (response) {
                    route(response.status);
                });

            function route(status) {
                if (status == 401) {
                    console.log('wrong auth');
                    vm.isError401=true;
                }
                else if (status == 500) {
                    console.log('server error');
                    $location.path('/error');
                }
            }
        };

    }]
});