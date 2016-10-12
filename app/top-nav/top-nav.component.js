angular.module('topNav').component('topNav', {
    templateUrl: 'top-nav/top-nav.template.html',
    controller: ['UserInfoService', function (UserInfoService) {
        var vm = this;
        UserInfoService.getUserInfo().then(function (response) {
            vm.userInfo = response.data;
        });
    }]
});