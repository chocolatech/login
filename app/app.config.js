// angular.module('app').
//     config(['$locationProvider', '$routeProvider',
//         function config($locationProvider, $routeProvider) {

//             $routeProvider.
//                 when('/signin', {
//                     template: '<login-screen></login-screen>'
//                 }).
//                 when('/home', {
//                     template: '<dashboard></dashboard>'
//                 }).
//                 when('/error', {
//                     template: '<error500></error500>'
//                 }).
//                 otherwise('/signin');
//         }]);





angular.module('app').
    config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('error500', {
                    url: '/error',
                    views: {
                        '@': {
                            component: 'error500'
                        },

                    },
                }).state('signin', {
                    url: '/signin',
                    views: {
                        '@': {
                            component: 'loginScreen'
                        },

                    },
                }).state('inside', {
                    url: '/home',
                    views: {
                        '@': {
                            component: 'inside',
                        },
                        'header@inside': {
                            component: 'topNav'
                        },
                        'menu@inside': {
                            component: 'navbar'
                        },
                        'dashboard@inside': {
                            component: 'dashboard'
                        }
                    },
                }).state('inside.view1', {
                url: '/view1',
                views: {
                    'dashboard@inside': {
                        component: 'view1'
                    }
                }
            });

            $urlRouterProvider.otherwise('/signin');
        }
    ]);