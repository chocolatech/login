angular.module('core').service('UserInfoService', ['$http', function ($http) {
    var vm = this;

    vm.getUserInfo = function () {
        return $http.get('/userInfo');
    };
}
]);