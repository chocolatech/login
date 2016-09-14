angular.module('topNav').component('topNav', {
    templateUrl: 'top-nav/top-nav.template.html',
    controller: ['$http', function ($http) {
        var vm = this;
        $http.get('/userInfo').then(function (response) {
            vm.userInfo = response.data;
        });
    }]
});