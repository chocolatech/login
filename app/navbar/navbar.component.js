angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$http', 'LoginService', function ($http, LoginService) {
        var vm = this;
        $http.get('/userInfo').then(function (response) {
            vm.userInfo = response.data;
        });

        $('li').click(function (e) {
            e.preventDefault();
            $('li').removeClass('active');
            $(this).addClass('active');
        });

        // vm.isActive = false;
        // vm.activeButton = function () {
        //     vm.isActive = !vm.isActive;
        // }

    }]
});