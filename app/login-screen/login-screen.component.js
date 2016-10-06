angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['LoginService', '$location', function (LoginService, $location) {

        var vm = this;
        vm.isError401 = false;

        document.getElementById("password")
            .addEventListener("keydown", function (event) {
                if (event.keyCode == 13) {
                    document.getElementById("submit-button").click();
                }
            });

        vm.submit = function () {

            LoginService.login(vm.username, vm.password).then(function (response) {
                $location.path('/home');

            },
                function (response) {
                    route(response.status);
                });

            function route(status) {
                if (status == 401) {
                    vm.isError401 = true;
                }
                else if (status == 500) {
                    $location.path('/error');
                }
            }
        };

    }]
});