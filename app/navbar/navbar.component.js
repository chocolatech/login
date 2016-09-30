angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: [function () {
        var vm = this;

        vm.isActive = false;

        vm.toggleMenu= function(){
            vm.isActive=!vm.isActive;
        };
        
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
            // $('.collapse').toggleClass('hidden-xs').toggleClass('visible-xs');
            // $('.apa').toggleClass('active');
        });

    }]
});