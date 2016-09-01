angular.module('loginScreen').component('loginScreen', {
    templateUrl: 'login-screen/login-screen.template.html',
    controller: ['Login', '$location', function (Login, $location) {

        var vm = this;
        vm.submit = function(){
            console.log(vm.username, vm.password);
            console.log(Login.login);
            var l= new Login();

            l.login().then(function(response){
                if (response.status == 200) {
                    $location.path('/home');
                }
                else if (response.status == 401) {
                    console.log('wrong auth');
                }
                else if (response.status == 500) {
                    console.log('server error');
                    $location.path('/error');
                }

            });
        };

    }]
});