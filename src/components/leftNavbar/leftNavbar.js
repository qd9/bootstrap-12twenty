(function(angular) {
    'use strict';
    angular.module('myApp').component("leftNavbar", {
        templateUrl: 'components/leftNavbar/leftNavbar.html',
        controller: LeftNavbarController,
        bindToCotroller: true,
        controllerAs: 'vm'
    });
     function LeftNavbarController() {
    	var vm = this;
    	vm.onInit = onInit;
    	function onInit() {
    		vm.leftNavBarObj = [
    			{
    				titles: ['Home']
    			},
    			{
    				titles: ['Students','Employers','Contacts']
    			},
    			{
    				titles: ['Tasks','Activity Stream']
    			},
    			{
    				titles: ['Reporting Dashboards', 'Custom Reports','12Twenty Reports','Standard Reports']
    			},
    			{
    				titles: ['Research Tools']
    			},
    			{
    				titles: ['OCI and Job Listings', 'Appointments', 'Events', 'Candidate Search', 'Resume Books']
    			}
    		]
    	}
    }


})(window.angular);