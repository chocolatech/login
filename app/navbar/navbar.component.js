angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: [function () {
        var vm = this;
        console.log('navbar controller')

        vm.isActive = false;
        vm.Active = function(){
            return vm.isActive;
        };

        vm.toggleMenu= function(){
            vm.isActive=!vm.isActive;
        };
        
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });

    }]
});