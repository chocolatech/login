angular.module('navbar').component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: [function () {
        var vm = this;

        vm.isActive = false;
        
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
            $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
            $('.apa').toggleClass('active');
        });

    }]
});